import fs from 'fs';
import * as Sentry from '@sentry/node';

const PRODUCT_LIST_PATH = `${__dirname}/../../../assets/db/product-list.json`;

export async function GET(request: Request) {
  try {
    const raw = await fs.promises.readFile(PRODUCT_LIST_PATH, 'utf8');
    const data = JSON.parse(raw);

    return Response.json(data);
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
