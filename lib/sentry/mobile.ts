import * as Sentry from '@sentry/react-native';

export const reactNavigationIntegration = Sentry.reactNavigationIntegration({
  enableTimeToInitialDisplay: true,
});

Sentry.init({
  debug: true,
  dsn: 'https://2ae4f090e0101442ef289469e48a9aef@o4507921852137472.ingest.us.sentry.io/4507921856593920',
  tracesSampleRate: 1.0,
  tracePropagationTargets: [/.*?/],
  integrations: [
    reactNavigationIntegration,
  ],
  spotlight: !!__DEV__,
});
