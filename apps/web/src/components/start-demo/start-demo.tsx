'use client';

import { startDemo } from './actions';

export function StartDemo() {
  return <button onClick={() => startDemo()}>Start DEMO</button>;
}
