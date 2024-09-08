import React from 'react';
import * as Sentry from '@sentry/react-native';

/**
 * Continue current RN tracing context in Expo Dom Components.
 */
export function continueTraceIn<T extends {
  dom?: import('expo/dom').DOMProps;
}>(Wrapped: React.ComponentType<T>) {
  if (!['ios', 'android'].includes(process.env.EXPO_OS || '')) {
    return (props: T) => <Wrapped {...props} />;
  }


  return (props: T) => {
    const currentTrace = Sentry.getCurrentScope().getPropagationContext().traceId;
    const activeSpan = Sentry.getActiveSpan();
    const currentSampled = activeSpan && Sentry.spanIsSampled(activeSpan);

    const dom = props.dom || {};
    // This won't work with enabled Apple Pay in Expo Dom Components on iOS.
    dom.injectedJavaScriptBeforeContentLoaded = `var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};e.__SENTRY_CONTINUE_TRACE='${currentTrace}',e.__SENTRY_CONTINUE_SAMPLED=${currentSampled};e.__SENTRY_CONTINUE_SPAN_ID='${activeSpan?.spanContext().spanId}';`
      + (dom.injectedJavaScriptBeforeContentLoaded || '');
    return <Wrapped {...props} dom={dom} />;
  };
}

/**
 * Pick up the current tracing context from the global object.
 */
export function continueTraceFromGlobal() {
  const traceId = (global as any).__SENTRY_CONTINUE_TRACE;
  const sampled = (global as any).__SENTRY_CONTINUE_SAMPLED;
  const spanId = (global as any).__SENTRY_CONTINUE_SPAN_ID;

  Sentry.getCurrentScope().setPropagationContext({
    sampled,
    traceId,
    spanId,
  });
}
