import fs from 'fs';
import * as Sentry from '@sentry/node';

const PRODUCT_PATH = `${__dirname}/../../../assets/db/product.json`;

export async function GET(request: Request) {
    try {
    const raw = await fs.promises.readFile(PRODUCT_PATH, 'utf8');
    const data = JSON.parse(raw);

    return Response.json(data);
  } catch (error) {
    Sentry.captureException(error);

    if ((error instanceof Error) && (error as { code?: string }).code === 'ENOENT') {
      return new Response('Product not found', {
        status: 404,
        headers: {
          'Content-Type': 'text/plain',
        },
      });
    }
    return new Response('Unexpected server error', {
      status: 500,
      headers: {
        'Content-Type': 'text/plain',
      },
    });
  }
}
