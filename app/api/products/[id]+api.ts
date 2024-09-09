import * as Sentry from '@sentry/node';

export function GET(request: Request) {
  Sentry.captureException(new Error('Product not found.'));
  return new Response('Product not found.', {
    status: 404,
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
