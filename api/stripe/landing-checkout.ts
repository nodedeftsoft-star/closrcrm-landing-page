import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2026-01-28.clover',
});

// Package configuration with descriptions
const PACKAGE_CONFIG = {
  free: {
    productId: process.env.STRIPE_FREE_PRICE_ID || 'prod_TzmWfjHGp7S2Zn',
    name: 'Free Trial',
    description: 'Free trial package ($1 then $50/month)',
    price: 1,
    recurringPrice: 50
  },
  buyers_agent: {
    productId: process.env.STRIPE_BUYERS_AGENT_PRICE_ID || 'prod_TzmYe4LN7A8YS6',
    name: 'Buyer\'s Agent',
    description: 'Buyer\'s Agent package ($30/month)',
    price: 30,
    recurringPrice: 30
  },
  full_saas: {
    productId: process.env.STRIPE_FULL_SAAS_PRICE_ID || 'prod_TzmYpED7jFnrJg',
    name: 'Full SaaS',
    description: 'Full SaaS package ($50/month)',
    price: 50,
    recurringPrice: 50
  },
  annual: {
    productId: process.env.STRIPE_ANNUAL_PRICE_ID || 'prod_TzmZTPi5QilUna',
    name: 'Annual Plan',
    description: 'Annual package ($550/year)',
    price: 550,
    recurringPrice: 550
  }
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log('🔍 Request body:', req.body);
  console.log('🔍 Request method:', req.method);
  
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      success: false,
      error: 'Method not allowed' 
    });
  }

  try {
    const { package: packageName } = req.body;

    console.log('📦 Extracted package:', packageName);

    // Validate required fields
    if (!packageName) {
      console.log('❌ Missing package name');
      return res.status(400).json({
        success: false,
        message: 'Package is required',
        data: {},
        error: null
      });
    }

    // Validate package exists
    const packageConfig = PACKAGE_CONFIG[packageName as keyof typeof PACKAGE_CONFIG];
    if (!packageConfig) {
      console.log('❌ Invalid package:', packageName);
      return res.status(400).json({
        success: false,
        message: `Invalid package: ${packageName}. Available packages: ${Object.keys(PACKAGE_CONFIG).join(', ')}`,
        data: {},
        error: null
      });
    }

    console.log('✅ Package validated:', packageConfig);

    // Create or retrieve customer with default values
    let customerId: string;
    const defaultEmail = 'user@example.com';
    const defaultName = 'User';
    
    try {
      const existingCustomers = await stripe.customers.list({
        email: defaultEmail,
        limit: 1,
      });

      if (existingCustomers.data.length > 0) {
        customerId = existingCustomers.data[0].id;
      } else {
        const customer = await stripe.customers.create({
          email: defaultEmail,
          name: defaultName,
          metadata: {
            package: packageName,
            source: 'landing_page',
          },
        });
        customerId = customer.id;
      }
    } catch (error) {
      console.error('Error creating/retrieving customer:', error);
      return res.status(500).json({ 
        success: false,
        error: 'Failed to create customer' 
      });
    }

    // Get prices for the product
    const prices = await stripe.prices.list({
      product: packageConfig.productId,
      active: true,
      limit: 1,
    });

    if (prices.data.length === 0) {
      return res.status(400).json({
        success: false,
        error: `No active prices found for product: ${packageConfig.productId}`,
      });
    }

    const price = prices.data[0];

    // Create checkout session
    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      payment_method_types: ['card'],
      line_items: [
        {
          price: price.id,
          quantity: 1,
        },
      ],
      mode: price.recurring ? 'subscription' : 'payment',
      success_url: `${req.headers.origin || 'http://localhost:3000'}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin || 'http://localhost:3000'}/pricing?cancelled=true`,
      metadata: {
        package: packageName,
        customer_email: defaultEmail,
        product_id: packageConfig.productId,
        description: packageConfig.description,
      },
      customer_email: defaultEmail,
      billing_address_collection: 'auto',
      allow_promotion_codes: true,
    });

    res.status(200).json({
      success: true,
      sessionId: session.id,
      url: session.url,
      package: packageName,
      priceId: price.id,
      customerEmail: defaultEmail,
      description: packageConfig.description,
      message: `Checkout session created for ${packageConfig.name}`
    });
  } catch (error) {
    console.error('Stripe checkout session creation error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to create checkout session',
      details: error instanceof Error ? error.message : 'Unknown error',
    });
  }
}
