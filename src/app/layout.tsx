import type { Metadata, Viewport } from "next";
import { Geist_Mono } from "next/font/google";
import { AnalyticsScripts } from "@/components/analytics";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { JsonLd } from "@/components/json-ld";
import {
  createPageMetadata,
  getOrganizationSchema,
  getWebsiteSchema,
  siteConfig,
} from "@/lib/seo";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  ...createPageMetadata(),
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover",
  themeColor: "#ffffff",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang={siteConfig.language}
      className={`${geistMono.variable} h-full bg-white antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Geomini&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="flex min-h-full flex-col bg-white font-sans text-foreground">
        <JsonLd data={[getOrganizationSchema(), getWebsiteSchema()]} />
        <AnalyticsScripts />
        <PageWrapper>
          <SiteHeader />
          <main className="main-wrapper flex-1 p-2 sm:p-3">{children}</main>
          <SiteFooter />
        </PageWrapper>
      </body>
    </html>
  );
}
