import type { Metadata } from "next";
import { SecretFeedbackDot, SiteFooter, SiteHeader } from "./_components/SiteChrome";
import "./globals.css";
import "./easter-eggs.css";

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
    icon: "https://static.wixstatic.com/media/12b1f3_ffcb1d1d844d4c098d16fdfb3d4fef67%7Emv2.jpg/v1/fill/w_192%2Ch_192%2Clg_1%2Cusm_0.66_1.00_0.01/12b1f3_ffcb1d1d844d4c098d16fdfb3d4fef67%7Emv2.jpg",
    shortcut: "https://static.wixstatic.com/media/12b1f3_ffcb1d1d844d4c098d16fdfb3d4fef67%7Emv2.jpg/v1/fill/w_32%2Ch_32%2Clg_1%2Cusm_0.66_1.00_0.01/12b1f3_ffcb1d1d844d4c098d16fdfb3d4fef67%7Emv2.jpg",
    apple: "https://static.wixstatic.com/media/12b1f3_ffcb1d1d844d4c098d16fdfb3d4fef67%7Emv2.jpg/v1/fill/w_180%2Ch_180%2Clg_1%2Cusm_0.66_1.00_0.01/12b1f3_ffcb1d1d844d4c098d16fdfb3d4fef67%7Emv2.jpg",
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
