import { startIdleSpan } from '@sentry/core';
import { withProfiler } from '@sentry/react';

export function withActiveProfiler<
  P extends Record<string, any>
>(
  WrappedComponent: React.ComponentType<P>,
): React.FC<P> {
  startIdleSpan({
    op: 'ui.load',
    name: WrappedComponent.displayName || WrappedComponent.name || 'UnknownComponent',
  });

  return withProfiler(WrappedComponent);
}
