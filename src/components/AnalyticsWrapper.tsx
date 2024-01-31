'use client';

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function AnalyticsWrapper() {
  if (process.env.NODE_ENV !== 'production') {
    return <></>;
  }

  return (
    <>
      <Analytics />
      <SpeedInsights />
    </>
  );
}
