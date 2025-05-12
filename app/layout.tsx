import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";
import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://teraboxstream.com"),
  title: {
    default: "TeraBox Stream - Watch & Download TeraBox Videos Online",
    template: "%s | TeraBox Stream",
  },
  description:
    "Stream and download videos from TeraBox without login. Fast, free, and secure video streaming service.",
  keywords: [
    "terabox",
    "terabox downloader",
    "terabox video",
    "terabox stream",
    "terabox video downloader",
    "terabox online player",
    "terabox video streaming",
  ],
  authors: [{ name: "TeraBox Stream" }],
  creator: "TeraBox Stream",
  publisher: "TeraBox Stream",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://teraboxstream.com",
    siteName: "TeraBox Stream",
    title: "TeraBox Stream - Watch & Download TeraBox Videos Online",
    description:
      "Stream and download videos from TeraBox without login. Fast, free, and secure video streaming service.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TeraBox Stream",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TeraBox Stream - Watch & Download TeraBox Videos Online",
    description:
      "Stream and download videos from TeraBox without login. Fast, free, and secure video streaming service.",
    images: ["/og-image.jpg"],
    creator: "@teraboxstream",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-site-verification",
    yandex: "your-yandex-verification",
    bing: "your-bing-verification",
  },
  alternates: {
    canonical: "https://teraboxstream.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" href="/favicon.svg" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-touch-icon" content="/favicon.svg" />
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "TeraBox Stream",
              description:
                "Stream and download videos from TeraBox without any software. Watch TeraBox videos online in HD quality. Fast, free, and secure TeraBox video streaming.",
              applicationCategory: "UtilityApplication",
              operatingSystem: "Any",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                ratingCount: "1250",
              },
              featureList: [
                "No registration required",
                "Fast streaming",
                "HD video quality",
                "Supports all Terabox domains",
                "Secure video streaming",
                "Free to use",
              ],
            }),
          }}
        />

        <Script
          id="faq-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What is Terabox?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Terabox is a cloud storage service that allows users to store and share files. It offers 1TB of free storage space and is popular for sharing large files. The service is available across multiple platforms including web, desktop, and mobile applications.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is it safe to use this downloader?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, our downloader is completely safe. We don&apos;t store any of your files or data on our servers. All downloads are processed directly from Terabox servers, and we use secure HTTPS connections for all transfers.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do I need to create an account?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "No, you don&apos;t need to create an account or log in to use our downloader. Simply paste the Terabox link and download your files. This makes the process much faster and more convenient.",
                  },
                },
              ],
            }),
          }}
        />

        <Script
          id="howto-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HowTo",
              name: "How to Download Files from Terabox",
              description:
                "Learn how to download files from Terabox without login using our free downloader.",
              step: [
                {
                  "@type": "HowToStep",
                  name: "Copy Terabox Link",
                  text: "Find and copy the Terabox file or video link you want to download from your Terabox share",
                },
                {
                  "@type": "HowToStep",
                  name: "Paste URL",
                  text: "Paste the copied Terabox URL into our downloader's input field",
                },
                {
                  "@type": "HowToStep",
                  name: "Download",
                  text: "Click the download button and save your file directly to your device",
                },
              ],
            }),
          }}
        />

        <Script
          id="organization-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "TeraBox Stream",
              url: "https://teraboxstream.com",
              logo: "https://teraboxstream.com/logo.png",
              sameAs: [
                "https://twitter.com/teraboxstream",
                "https://facebook.com/teraboxstream",
              ],
            }),
          }}
        />

        <Script
          id="breadcrumb-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://teraboxstream.com",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "About",
                  item: "https://teraboxstream.com/about",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "FAQ",
                  item: "https://teraboxstream.com/faq",
                },
              ],
            }),
          }}
        />
      </head>
      <body
        className={
          inter.className + " h-full bg-white flex flex-col min-h-screen"
        }
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
          <FloatingButton />
          <Toaster />
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
      {process.env.NODE_ENV == "production" && (
        <GoogleAnalytics gaId="G-8XXLSHRBCZ" />
      )}
    </html>
  );
}
