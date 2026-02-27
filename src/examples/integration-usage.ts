// Example usage of the integrated localhost:9177 API
import { stripeService } from '../services/stripe';

// Example 1: Test your exact request
export async function testBuyersAgentCheckout() {
  const response = await stripeService.createLandingCheckout({
    package: 'buyers_agent',
    email: 'user@example.com',
    name: 'John Doe'
  });

  if (response.success && response.data?.url) {
    console.log('✅ Buyers Agent checkout created:', response.data);
    // Redirect to Stripe Checkout
    window.location.href = response.data.url;
    return response.data;
  } else {
    console.error('❌ Checkout failed:', response.error);
    throw new Error(response.error || 'Failed to create checkout session');
  }
}

// Example 2: Test all packages
export async function testAllPackages() {
  const packages = [
    { package: 'free' as const, email: 'test@example.com', name: 'Test User' },
    { package: 'buyers_agent' as const, email: 'buyer@example.com', name: 'Buyer Agent' },
    { package: 'full_saas' as const, email: 'full@example.com', name: 'Full SaaS User' },
    { package: 'annual' as const, email: 'annual@example.com', name: 'Annual User' }
  ];

  const results = [];
  
  for (const pkg of packages) {
    try {
      const response = await stripeService.createLandingCheckout(pkg);
      results.push({
        package: pkg.package,
        success: response.success,
        data: response.data,
        error: response.error
      });
      
      console.log(`${pkg.package}: ${response.success ? '✅' : '❌'}`);
      if (response.data) {
        console.log(`  Description: ${response.data.description}`);
        console.log(`  Session ID: ${response.data.sessionId}`);
      }
    } catch (error) {
      results.push({
        package: pkg.package,
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      });
      console.error(`${pkg.package}: ❌ ${error}`);
    }
  }
  
  return results;
}

// Example 3: Direct redirect for specific package
export async function redirectToPackageCheckout(packageName: string, email: string, name: string) {
  try {
    await stripeService.redirectToLandingCheckout({
      package: packageName as any,
      email,
      name
    });
  } catch (error) {
    console.error(`Failed to redirect to ${packageName} checkout:`, error);
    throw error;
  }
}

// Example 4: React component usage
/*
import React, { useState } from 'react';

export function PackageCheckoutButtons() {
  const [loading, setLoading] = useState<string | null>(null);

  const packages = [
    { key: 'free', label: 'Free Trial ($1 then $50/month)', description: 'Free trial package' },
    { key: 'buyers_agent', label: 'Buyer\'s Agent ($30/month)', description: 'Buyer\'s Agent package' },
    { key: 'full_saas', label: 'Full SaaS ($50/month)', description: 'Full SaaS package' },
    { key: 'annual', label: 'Annual ($550/year)', description: 'Annual package' }
  ];

  const handleCheckout = async (packageKey: string) => {
    setLoading(packageKey);
    try {
      await stripeService.redirectToLandingCheckout({
        package: packageKey as any,
        email: 'user@example.com',
        name: 'Test User'
      });
    } catch (error) {
      console.error('Checkout failed:', error);
      alert('Payment failed. Please try again.');
    } finally {
      setLoading(null);
    }
  };

  return (
    <div className="package-checkout">
      <h2>Choose Your Package</h2>
      {packages.map((pkg) => (
        <div key={pkg.key} className="package-option">
          <h3>{pkg.label}</h3>
          <p>{pkg.description}</p>
          <button
            onClick={() => handleCheckout(pkg.key)}
            disabled={loading === pkg.key}
          >
            {loading === pkg.key ? 'Processing...' : 'Get Started'}
          </button>
        </div>
      ))}
    </div>
  );
}
*/

// Example 5: Manual API call (without service)
export async function manualAPICall(packageName: string, email: string, name: string) {
  try {
    const response = await fetch('http://localhost:9177/api/stripe/landing-checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        package: packageName,
        email,
        name
      }),
    });

    const result = await response.json();

    if (response.ok && result.success) {
      console.log('✅ API call successful:', result);
      return result;
    } else {
      console.error('❌ API call failed:', result);
      throw new Error(result.error || 'API call failed');
    }
  } catch (error) {
    console.error('❌ Network error:', error);
    throw error;
  }
}

// Example usage in browser console:
/*
// Test your exact example
testBuyersAgentCheckout();

// Test all packages
testAllPackages();

// Direct redirect
redirectToPackageCheckout('full_saas', 'user@example.com', 'John Doe');

// Manual API call
manualAPICall('buyers_agent', 'user@example.com', 'John Doe');
*/
