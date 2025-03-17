// PayPal configuration
// Replace this value with your PayPal Client ID
// Visit https://developer.paypal.com/ to get your client ID

// Export the PayPal Client ID
export const PAYPAL_CLIENT_ID = process.env.REACT_APP_PAYPAL_CLIENT_ID || 'YOUR_PAYPAL_CLIENT_ID';

// PayPal currency configuration
export const PAYPAL_CURRENCY = 'USD';

// Payment plans configuration
export const PAYMENT_PLANS = {
  basic: {
    name: 'Basic',
    price: 9.99,
    credits: 50,
    features: [
      '50 AI-generated photos per month',
      '10 AI-generated videos per month',
      'Standard resolution output',
      'Email support'
    ]
  },
  pro: {
    name: 'Pro',
    price: 19.99,
    credits: 150,
    features: [
      '150 AI-generated photos per month',
      '30 AI-generated videos per month',
      'High resolution output',
      'Priority email support',
      'Commercial usage rights'
    ]
  },
  premium: {
    name: 'Premium',
    price: 49.99,
    credits: 500,
    features: [
      'Unlimited AI-generated photos',
      '100 AI-generated videos per month',
      'Ultra-high resolution output',
      'Priority phone and email support',
      'Commercial usage rights',
      'API access'
    ]
  }
};

// Additional credits pricing
export const ADDITIONAL_CREDITS = [
  { amount: 50, price: 4.99 },
  { amount: 100, price: 8.99 },
  { amount: 500, price: 39.99 }
]; 