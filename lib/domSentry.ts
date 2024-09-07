import * as Sentry from '@sentry/react-native';
import { serializeEnvelope } from '@sentry/utils';

export function initSentry() {
  Sentry.init({
    debug: true,
    dsn: 'https://1df17bd4e543fdb31351dee1768bb679@o447951.ingest.us.sentry.io/5428561',
    autoSessionTracking: false,

    /**
     * @experimental
     * Only set this if you want to pass the DOM Sentry Event to the native application SDK.
     */
    transport: () => ({
      async flush() {
        return true;
      },
      async send(request) {
        const envelope = serializeEnvelope(request);
        if (typeof envelope !== 'string') {
          console.warn('Envelopes with binary content are not supported.');
          return {};
        }
        postMessage({
          type: '__sentry-transport-send',
          envelope,
        })
        return {};
      },
    }),

    // Easy way to disable the experimental transport.
    // transport: undefined,
  });
}

function postMessage(message: any) {
  (window as any).ReactNativeWebView.postMessage(JSON.stringify(message));
}
