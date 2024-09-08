import * as Sentry from '@sentry/react-native';
import { ClientOptions } from '@sentry/types';
import { continueTraceFromGlobal } from './continueTrace';

export function init(options?: Partial<ClientOptions>) {
  Sentry.init({
    ...options,
    debug: true,
    dsn: 'https://1df17bd4e543fdb31351dee1768bb679@o447951.ingest.us.sentry.io/5428561',
    autoSessionTracking: false,
    tracePropagationTargets: [/.*?/],
    integrations: [
      Sentry.httpClientIntegration({
        failedRequestTargets: [/.*?/],
        failedRequestStatusCodes: [[400, 499], [500, 599]],
      }),
      {
        name: 'DebugSymbolicator',
      }
    ],
    spotlight: !!__DEV__,
    tracesSampleRate: 1.0,
  });
  continueTraceFromGlobal();
}
