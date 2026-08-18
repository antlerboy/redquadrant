import type { Metadata } from "next";
import { SecretFeedbackDot, SiteFooter, SiteHeader } from "./_components/SiteChrome";
import "./globals.css";

const assetBase = process.env.GITHUB_PAGES_BASE_PATH ?? "";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.redquadrant.com"),
  title: {
    default: "RedQuadrant | Public service transformation",
    template: "%s | RedQuadrant",
  },
  description:
    "Senior public service practitioners helping organisations turn difficult problems into practical, sustainable change.",
  applicationName: "RedQuadrant",
  keywords: [
    "public service transformation",
    "local government consultancy",
    "public sector consulting",
    "service design",
    "organisational change",
  ],
  authors: [{ name: "RedQuadrant" }],
  creator: "RedQuadrant",
  publisher: "RedQuadrant Ltd",
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "RedQuadrant",
    title: "RedQuadrant | Public service transformation",
    description:
      "Senior practitioners helping public service organisations make change work in practice.",
  },
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: `${assetBase}/favicon.svg`,
    shortcut: `${assetBase}/favicon.svg`,
  },
};

const organisationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "RedQuadrant",
  url: "https://www.redquadrant.com",
  email: "ops@redquadrant.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "7 Bell Yard",
    addressLocality: "London",
    postalCode: "WC2A 2JR",
    addressCountry: "GB",
  },
  areaServed: "United Kingdom",
  knowsAbout: [
    "Public service transformation",
    "Local government reorganisation",
    "Service design",
    "Commissioning",
    "Digital transformation",
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
        <SecretFeedbackDot />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organisationSchema) }}
        />
      </body>
    </html>
  );
}
