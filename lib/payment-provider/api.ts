
export function verifyPayment(payment: any) {
  // Payment verification logic
  if (typeof process.env.__EXAMPLE_PROVIDER_API_KEY !== 'string') {
    throw new Error('Payment provider API key is not set');
  }

  console.log('Payment provider API key present, verifying payment...');
}
