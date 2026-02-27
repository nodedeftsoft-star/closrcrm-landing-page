import type {
  StripeCustomer,
  CheckoutSessionRequest,
  LandingCheckoutRequest,
  LandingCheckoutApiResponse,
  CheckoutSession,
  UserSubscriptions,
  WebhookEvent,
  ApiResponse
} from './types';

class StripeService {
  private baseUrl: string;

  constructor(baseUrl: string = '/api/stripe') {
    this.baseUrl = baseUrl;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
        ...options,
      });

      const data = await response.json();

      if (!response.ok) {
        return {
          success: false,
          error: data.error || `HTTP error! status: ${response.status}`,
        };
      }

      return {
        success: true,
        data,
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred',
      };
    }
  }

  async createCustomer(customerData: {
    email: string;
    name?: string;
    metadata?: Record<string, string>;
  }): Promise<ApiResponse<StripeCustomer>> {
    return this.request<StripeCustomer>('/customer', {
      method: 'POST',
      body: JSON.stringify(customerData),
    });
  }

  async createCheckoutSession(
    sessionData: CheckoutSessionRequest
  ): Promise<ApiResponse<CheckoutSession>> {
    return this.request<CheckoutSession>('/checkout-session', {
      method: 'POST',
      body: JSON.stringify(sessionData),
    });
  }

  async getUserSubscriptions(): Promise<ApiResponse<UserSubscriptions>> {
    return this.request<UserSubscriptions>('/user/subscriptions', {
      method: 'GET',
    });
  }

  async handleWebhook(webhookData: WebhookEvent): Promise<ApiResponse<void>> {
    return this.request<void>('/webhook', {
      method: 'POST',
      body: JSON.stringify(webhookData),
    });
  }

  async createLandingCheckout(
    checkoutData: LandingCheckoutRequest
  ): Promise<ApiResponse<LandingCheckoutApiResponse>> {
    return this.request<LandingCheckoutApiResponse>('/landing-checkout', {
      method: 'POST',
      body: JSON.stringify(checkoutData),
    });
  }

  async redirectToCheckout(sessionData: CheckoutSessionRequest): Promise<void> {
    const response = await this.createCheckoutSession(sessionData);
    
    if (!response.success || !response.data?.url) {
      throw new Error(response.error || 'Failed to create checkout session');
    }

    window.location.href = response.data.url;
  }

  async redirectToLandingCheckout(checkoutData: LandingCheckoutRequest): Promise<void> {
    try {
      console.log('🚀 Creating landing checkout...');
      const response = await this.createLandingCheckout(checkoutData);
      
      console.log('📋 Response:', response);
      
      if (!response.success) {
        console.error('❌ Checkout failed:', response.error);
        throw new Error(response.error || 'Failed to create landing checkout session');
      }

      // Fix: Extract URL from response - handle both possible structures
      let checkoutUrl: string | undefined;
      
      // Try response.data.url first (your actual structure)
      if ((response.data as any)?.url) {
        checkoutUrl = (response.data as any).url;
      }
      // Fallback to nested structure if needed
      else if ((response.data as any)?.data?.url) {
        checkoutUrl = (response.data as any).data.url;
      }
      
      if (!checkoutUrl) {
        console.error('❌ No URL in response');
        console.log('🔍 Response structure:', response);
        throw new Error('No checkout URL received');
      }

      console.log('🔗 Redirecting to:', checkoutUrl);
      
      // Multiple redirect methods to ensure it works
      setTimeout(() => {
        window.location.href = checkoutUrl;
      }, 100);
      
      // Fallback methods
      setTimeout(() => {
        window.location.replace(checkoutUrl);
      }, 200);
      
      // Last resort - open in new tab
      setTimeout(() => {
        window.open(checkoutUrl, '_self');
      }, 300);
      
    } catch (error) {
      console.error('❌ Redirect error:', error);
      throw error;
    }
  }

  // Alternative method that returns the URL for manual handling
  async getCheckoutUrl(checkoutData: LandingCheckoutRequest): Promise<string> {
    const response = await this.createLandingCheckout(checkoutData);
    
    if (!response.success) {
      throw new Error(response.error || 'Failed to create checkout session');
    }
    
    // Fix: Extract URL from response - handle both possible structures
    let checkoutUrl: string | undefined;
    
    // Try response.data.url first (your actual structure)
    if ((response.data as any)?.url) {
      checkoutUrl = (response.data as any).url;
    }
    // Fallback to nested structure if needed
    else if ((response.data as any)?.data?.url) {
      checkoutUrl = (response.data as any).data.url;
    }
    
    if (!checkoutUrl) {
      throw new Error('No checkout URL received');
    }
    
    return checkoutUrl;
  }
}

export const stripeService = new StripeService();
export default stripeService;
