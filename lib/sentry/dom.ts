import * as Sentry from '@sentry/react-native';
import { continueTraceFromGlobal } from './continueTrace';

Sentry.init({
  debug: true,
  dsn: 'https://2ae4f090e0101442ef289469e48a9aef@o4507921852137472.ingest.us.sentry.io/4507921856593920',
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
