import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { motion } from 'motion/react';
import { stripeService } from '../services/stripe';

export function Pricing() {
  const [loadingPlan, setLoadingPlan] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const plans = [
    {
      name: 'Free',
      price: '1',
      subtitle: 'then $50/month',
      description: 'Get started and try the platform',
      package: 'free' as const,
      features: [
        '$1 to sign up',
        '$50 autofilled after trial',
        'Full platform access',
        'Daily NYC data pulls',
        'Client management',
        'Property matching',
        'Mobile apps',
        'Email support'
      ],
      cta: 'Start for $1',
      popular: false
    },
    {
      name: 'Buyer\'s Agent',
      price: '30',
      subtitle: '/month',
      description: 'Perfect for buyer-focused agents',
      package: 'buyers_agent' as const,
      features: [
        'Buyer lifecycle tools',
        'Property matching',
        'Daily data updates',
        'Client portal',
        'Mobile apps',
        'Priority support',
        'Advanced filters',
        'Market insights'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Full SaaS',
      price: '50',
      subtitle: '/month',
      description: 'Complete real estate CRM platform',
      package: 'full_saas' as const,
      features: [
        'Everything in Buyer\'s Agent',
        'Seller management',
        'Renter & landlord tools',
        'Complete lifecycle CRM',
        'Advanced analytics',
        'Custom workflows',
        'API access',
        'Dedicated support'
      ],
      cta: 'Get Started',
      popular: true
    },
    {
      name: 'Annual',
      price: '550',
      subtitle: '/year',
      description: 'Save with yearly commitment',
      package: 'annual' as const,
      features: [
        'All Full SaaS features',
        '11 months paid, 1 free',
        'Save $50 per year',
        'Priority onboarding',
        'Dedicated account manager',
        'Custom integrations',
        'Training sessions',
        'SLA guarantee'
      ],
      cta: 'Get Started',
      popular: false,
      badge: 'Best Value'
    }
  ];

  const handleSubscribe = async (plan: typeof plans[0]) => {
    try {
      setError(null);
      setLoadingPlan(plan.name);

      console.log(`🚀 Starting checkout for ${plan.name}...`);

      console.log('📧 Processing package:', plan.package);

      // Try automatic redirect first
      try {
        await stripeService.redirectToLandingCheckout({
          package: plan.package
        });
      } catch (redirectError) {
        console.error('❌ Auto redirect failed, trying manual redirect...');
        
        // Fallback: get URL and redirect manually
        try {
          const url = await stripeService.getCheckoutUrl({
            package: plan.package
          });
          
          console.log('🔗 Got URL manually, redirecting...');
          window.location.href = url;
          
        } catch (urlError) {
          console.error('❌ Manual redirect also failed:', urlError);
          setError('Failed to create checkout session. Please try again.');
        }
      }
    } catch (err) {
      console.error('❌ Checkout error:', err);
      setError(err instanceof Error ? err.message : 'Failed to start checkout process');
    } finally {
      setLoadingPlan(null);
    }
  };

  return (
    <div id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-4">
            <span className="text-sm text-blue-700">Pricing</span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-4 tracking-tight">
            Simple pricing for real estate pros
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your business. Start for just $1 and scale as you grow.
          </p>
        </motion.div>

        {error && (
          <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg text-center">
            <p className="text-red-600">{error}</p>
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-3xl p-8 ${
                plan.popular
                  ? 'bg-gradient-to-br from-purple-600 via-[#3C8DFF] to-indigo-600 text-white shadow-2xl scale-105'
                  : 'bg-gray-50 border border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-yellow-400 text-yellow-900 rounded-full text-sm">
                  Most Popular
                </div>
              )}
              {plan.badge && !plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-green-400 text-green-900 rounded-full text-sm">
                  {plan.badge}
                </div>
              )}

              <div className="mb-8">
                <h3 className={`text-2xl mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-4 ${plan.popular ? 'text-blue-100' : 'text-gray-600'}`}>
                  {plan.description}
                </p>
                <div className="flex items-baseline gap-2">
                  <span className={`text-5xl ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                    ${plan.price}
                  </span>
                  <span className={plan.popular ? 'text-blue-100' : 'text-gray-600'}>
                    {plan.subtitle}
                  </span>
                </div>
              </div>

              <button
                onClick={() => handleSubscribe(plan)}
                disabled={loadingPlan === plan.name}
                className={`w-full py-3.5 rounded-full mb-8 transition-all duration-200 flex items-center justify-center ${
                  plan.popular
                    ? 'bg-white text-[#3C8DFF] hover:shadow-lg hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed'
                    : 'bg-gradient-to-r from-orange-500 to-amber-500 text-white hover:shadow-lg hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed'
                }`}
              >
                {loadingPlan === plan.name ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Processing...
                  </span>
                ) : (
                  plan.cta
                )}
              </button>

              <ul className="space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        plan.popular ? 'text-white' : 'text-[#3C8DFF]'
                      }`}
                    />
                    <span className={plan.popular ? 'text-blue-50' : 'text-gray-700'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}