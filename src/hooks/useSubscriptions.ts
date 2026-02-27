import { useState, useEffect } from 'react';
import { stripeService } from '../services/stripe';
import type { UserSubscriptions, Subscription } from '../services/stripe/types';

export function useSubscriptions() {
  const [subscriptions, setSubscriptions] = useState<UserSubscriptions | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchSubscriptions = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await stripeService.getUserSubscriptions();
      
      if (response.success && response.data) {
        setSubscriptions(response.data);
      } else {
        setError(response.error || 'Failed to fetch subscriptions');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const createCustomer = async (customerData: {
    email: string;
    name?: string;
    metadata?: Record<string, string>;
  }) => {
    try {
      setError(null);
      const response = await stripeService.createCustomer(customerData);
      
      if (!response.success) {
        setError(response.error || 'Failed to create customer');
        return null;
      }
      
      return response.data;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to create customer';
      setError(errorMessage);
      return null;
    }
  };

  const startCheckout = async (sessionData: {
    priceId: string;
    customerId?: string;
    successUrl?: string;
    cancelUrl?: string;
    metadata?: Record<string, string>;
  }) => {
    try {
      setError(null);
      await stripeService.redirectToCheckout(sessionData);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to start checkout';
      setError(errorMessage);
      throw err;
    }
  };

  const hasActiveSubscription = subscriptions?.hasActiveSubscription || false;
  const activeSubscription = subscriptions?.subscriptions.find(sub => sub.status === 'active');

  useEffect(() => {
    fetchSubscriptions();
  }, []);

  return {
    subscriptions,
    loading,
    error,
    hasActiveSubscription,
    activeSubscription,
    fetchSubscriptions,
    createCustomer,
    startCheckout,
    clearError: () => setError(null)
  };
}
