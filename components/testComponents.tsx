'use dom';

import { initSentry } from '../lib/domSentry';
import * as Sentry from '@sentry/react-native';

initSentry();

export default function DOMComponent({ name }: { name: string, dom?: import('expo/dom').DOMProps }) {
  // throw new Error('Test error.');

  return (
    <div>
      <h1>Hello, {name}!</h1>
      <button onClick={() => Sentry.captureException(new Error('Example'))}>Capture</button>
    </div>
  );
}