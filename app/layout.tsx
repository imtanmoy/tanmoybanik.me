import './globals.css';

import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script';

import GoogleAnalytics from './google-analytics';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
        <GoogleAnalytics />
        <Script id="onRouteChange">
          {`
                (function (history) {
                var pushState = history.pushState;
                history.pushState = function(state){
                    var result = pushState.apply(history, arguments);
                    window.dispatchEvent(new Event("routeChange", state));
                    return result;
                };
                })(window.history);
          `}
        </Script>
      </body>
    </html>
  );
}
