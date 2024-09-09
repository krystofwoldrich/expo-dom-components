import * as Sentry from '@sentry/node';
import { verifyPayment } from '@/lib/payment-provider/api';

export async function POST(request: Request) {
  try {
    verifyPayment(request.body);
    return Response.json({ success: true });
  } catch (error) {
    Sentry.captureException(error);

    return new Response('Unexpected server error', {
      status: 500,
      headers: {
        'Content-Type': 'text/plain',
      },
    });
  }
}
