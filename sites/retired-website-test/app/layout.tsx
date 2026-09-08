import type { Metadata } from "next";
import { SecretFeedbackDot, SiteFooter, SiteHeader } from "./_components/SiteChrome";
import "./globals.css";
import "./easter-eggs.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://redquadrant.com"),
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
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "RedQuadrant",
    title: "RedQuadrant | Public service transformation",
    description:
      "Senior practitioners helping public service organisations make change work in practice.",
  },
  icons: {
    icon: "/assets/owned/8f63408fdd8dea51.jpg",
    shortcut: "/assets/owned/aa07d5f7d922c14e.jpg",
    apple: "/assets/owned/817432212425050c.jpg",
  },
};

const organisationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "RedQuadrant",
  url: "https://redquadrant.com",
  email: "ops@redquadrant.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "167–169 Great Portland Street, 5th Floor",
    addressLocality: "London",
    postalCode: "W1W 5PF",
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
