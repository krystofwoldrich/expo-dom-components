import * as Sentry from '@sentry/react-native';

export function initClientSentry() {
  Sentry.init({
    debug: true,
    dsn: 'https://1df17bd4e543fdb31351dee1768bb679@o447951.ingest.us.sentry.io/5428561',
  });
}

/**
 * Only needed when we want to capture events from the DOM with the native application context.
 */
export function withSentryDomOptions(dom: import('expo/dom').DOMProps): import('expo/dom').DOMProps {
  return {
    ...dom,
    onMessage: (event) => {
      try {
        const message = JSON.parse(event.nativeEvent.data);
        if (message.type === '__sentry-transport-send') {
          const parts = message.envelope.split('\n');
          for (let i = 1; i < parts.length; i++) {
            const header = parts[i];
            const item = parts[i + 1];
            try {
              if (JSON.parse(header).type === 'event') {
                Sentry.captureEvent(JSON.parse(item));
              }
            } catch (e) {
              //
            }
          }
          return;
        }
      } catch (error) {
        //
      }
      dom.onMessage?.(event);
    },
  };
}
