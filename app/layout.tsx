import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tanmoy Banik - Software Engineer | Full Stack Developer",
  description:
    "Experienced software engineer with 7+ years of expertise in back-end, front-end, and DevOps technologies. Proficient in various programming languages, databases, and frameworks for software development.",
  keywords:
    "software engineer,back-end,front-end,DevOps,Node.js,Java,Golang,Python,TypeScript,React,Next.js,REST,GraphQL",
  authors: [{ name: "Tanmoy Banik" }],
  creator: "Tanmoy Banik",
  openGraph: {
    title: "Tanmoy Banik - Software Engineer | Full Stack Developer",
    description:
      "Experienced software engineer with 7+ years of expertise in back-end, front-end, and DevOps technologies.",
    url: "https://tanmoybanik.me/",
    images: [
      {
        url: "https://tanmoybanik.me/images/me.jpg",
        width: 1200,
        height: 630,
        alt: "Tanmoy Banik - Software Engineer",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@tanmoy_banik",
    title: "Tanmoy Banik - Software Engineer | Full Stack Developer",
    description:
      "Experienced software engineer with 7+ years of expertise in back-end, front-end, and DevOps technologies.",
    images: ["https://tanmoybanik.me/images/me.jpg"],
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: "/favicon.ico",
  },
  other: {
    "theme-color": "#ffffff",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const CF_ANALYTICS_TOKEN = process.env.NEXT_PUBLIC_CF_ANALYTICS_TOKEN;
  const MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Preconnect to origins */}
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Additional fonts */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&display=swap"
          as="style"
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&display=swap"
          />
        </noscript>

        <link rel="sitemap" href="/sitemap-index.xml" />
      </head>

      <body className={`font-sans antialiased bg-[#1a1a1a] text-white m-0`}>
        {/* Cloudflare Web Analytics */}
        {CF_ANALYTICS_TOKEN && (
          <Script
            src="https://static.cloudflareinsights.com/beacon.min.js"
            data-cf-beacon={`{"token": "${CF_ANALYTICS_TOKEN}"}`}
            strategy="afterInteractive"
          />
        )}

        {/* Google Analytics */}
        {MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${MEASUREMENT_ID}');
              `}
            </Script>
          </>
        )}

        {children}
      </body>
    </html>
  );
}
