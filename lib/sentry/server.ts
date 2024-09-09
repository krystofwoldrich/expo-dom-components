import * as Sentry from '@sentry/node';

// Ensure to call this before importing any other modules!
Sentry.init({
  debug: false,
  dsn: 'https://2ae4f090e0101442ef289469e48a9aef@o4507921852137472.ingest.us.sentry.io/4507921856593920',

  // Add Tracing by setting tracesSampleRate
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
  environment: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  //spotlight: true,
});
