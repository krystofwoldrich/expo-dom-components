import * as Sentry from '@sentry/react-native';

export const reactNavigationIntegration = Sentry.reactNavigationIntegration({
  enableTimeToInitialDisplay: true,
});

Sentry.init({
  debug: true,
  dsn: 'https://1df17bd4e543fdb31351dee1768bb679@o447951.ingest.us.sentry.io/5428561',
  tracesSampleRate: 1.0,
  tracePropagationTargets: [/.*?/],
  integrations: [
    reactNavigationIntegration,
  ],
  spotlight: !!__DEV__,
});
