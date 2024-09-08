import * as Sentry from '@sentry/node';
import { ClientOptions } from '@sentry/types';

export function init(options?: Partial<ClientOptions>) {
  // Ensure to call this before importing any other modules!
  Sentry.init({
    ...options,
    debug: false,
    dsn: 'https://1df17bd4e543fdb31351dee1768bb679@o447951.ingest.us.sentry.io/5428561',

    // Add Tracing by setting tracesSampleRate
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
    //spotlight: true,
  });
}
