'use client';

import Script from 'next/script';
import { memo, useEffect } from 'react';

const TRACKING_ID = process.env.NEXT_PUBLIC_GA4_TRACKING_ID || '';

const Analytics = () => {
  useEffect(() => {
    if (!TRACKING_ID) return;
    gtag('config', TRACKING_ID, {
      send_page_view: false,
    });
    gtag('event', 'page_view', {
      page_path: window.location.pathname,
      send_to: TRACKING_ID,
    });
  }, []);

  useEffect(() => {
    const handleRouteChange = () => {
      if (!TRACKING_ID) return;
      gtag('event', 'page_view', {
        page_path: window.location.pathname,
        send_to: TRACKING_ID,
      });
    };
    window.addEventListener('routeChange', handleRouteChange);
    return () => window.removeEventListener('routeChange', handleRouteChange);
  }, []);

  if (!TRACKING_ID) {
    return null;
  }
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${TRACKING_ID}`}
      ></Script>
      <Script
        id="gtag-init"
        dangerouslySetInnerHTML={{
          __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                    `,
        }}
      />
    </>
  );
};
export default memo(Analytics);
