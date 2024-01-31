import { Analytics } from '@vercel/analytics/react';

export default function AnalyticsWrapper() {
  if (process.env.NODE_ENV !== 'production') {
    return <></>;
  }

  return (
    <>
      <Analytics />
    </>
  );
}
