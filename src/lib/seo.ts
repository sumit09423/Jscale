import type { Metadata } from "next";
import type { Organization, WebSite, WithContext } from "schema-dts";

export const siteConfig = {
  name: "JSCALE",
  title: "JSCALE — Scale Your Business in the United States",
  description:
    "JSCALE helps businesses grow and succeed across the United States with modern digital solutions built for the US market.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.jscale.com",
  locale: "en_US" as const,
  language: "en-US" as const,
  country: "US" as const,
  region: "United States",
  keywords: [
    "JSCALE",
    "IT Staffing Company USA",
    "IT Recruitment Agency USA",
    "Software Developer Recruitment",
    "Tech Staffing Agency",
    "IT Consulting Services",
    "Hire Software Developers",
    "Hire Java Developers",
    "Hire Python Developers",
    "Hire AI Engineers",
    "Hire AWS Engineers",
    "Contract IT Staffing",
    "Remote Software Developers",
    "US Staffing Company",
    "Technical Recruiters USA",
    "Recruitment Agency for IT Jobs",
  ],
  twitterHandle: "@jscale",
  contactEmail: "hello@jscale.com",
  phone: "+1 (412) 203-6859",
  whatsapp: "+91 8233633213",
  social: {
    instagram: "https://www.instagram.com/jscalemarketing/",
    whatsapp: "https://wa.me/918233633213",
  },
  address: {
    street: "30 N Gould St Ste N",
    city: "Sheridan",
    region: "WY",
    postalCode: "82801",
    country: "US",
  },
};

export function getSiteUrl(path = ""): string {
  const base = siteConfig.url.replace(/\/$/, "");
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return path ? `${base}${normalizedPath}` : base;
}

export function createPageMetadata({
  title,
  description,
  path = "",
  noIndex = false,
}: {
  title?: string;
  description?: string;
  path?: string;
  noIndex?: boolean;
} = {}): Metadata {
  const pageTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.title;
  const pageDescription = description ?? siteConfig.description;
  const canonicalUrl = getSiteUrl(path);

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: siteConfig.keywords,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: canonicalUrl,
      languages: {
        "en-US": canonicalUrl,
      },
    },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url: canonicalUrl,
      siteName: siteConfig.name,
      title: pageTitle,
      description: pageDescription,
      countryName: siteConfig.region,
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      creator: siteConfig.twitterHandle,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
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
    other: {
      "geo.region": siteConfig.country,
      "geo.placename": siteConfig.region,
      "content-language": siteConfig.language,
    },
  };
}

export function getOrganizationSchema(): WithContext<Organization> {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.contactEmail,
    telephone: siteConfig.phone,
    areaServed: {
      "@type": "Country",
      name: siteConfig.region,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.region,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    sameAs: [siteConfig.social.instagram, siteConfig.social.whatsapp],
  };
}

export function getWebsiteSchema(): WithContext<WebSite> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: siteConfig.language,
    description: siteConfig.description,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}
