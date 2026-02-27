export interface StripeCustomer {
  id: string;
  email: string;
  name?: string;
  metadata?: Record<string, string>;
}

export interface CheckoutSessionRequest {
  priceId: string;
  customerId?: string;
  successUrl?: string;
  cancelUrl?: string;
  metadata?: Record<string, string>;
}

export interface LandingCheckoutRequest {
  package: 'free' | 'buyers_agent' | 'full_saas' | 'annual';
}

export interface LandingCheckoutResponse {
  sessionId: string;
  url: string;
  package: string;
  priceId: string;
  customerEmail: string;
  description?: string;
  success: boolean;
  message?: string;
}

export interface LandingCheckoutApiResponse {
  success: boolean;
  message?: string;
  data: {
    sessionId: string;
    url: string;
    package: string;
    priceId: string;
    customerEmail: string;
    description?: string;
  };
  error?: string;
}

export interface CheckoutSession {
  id: string;
  url: string;
  customerId: string;
  priceId: string;
  status: string;
  metadata?: Record<string, string>;
}

export interface Subscription {
  id: string;
  customerId: string;
  priceId: string;
  status: 'active' | 'canceled' | 'past_due' | 'unpaid' | 'trialing';
  currentPeriodStart: string;
  currentPeriodEnd: string;
  cancelAtPeriodEnd: boolean;
  metadata?: Record<string, string>;
}

export interface UserSubscriptions {
  subscriptions: Subscription[];
  hasActiveSubscription: boolean;
}

export interface WebhookEvent {
  type: string;
  data: {
    object: any;
  };
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}
