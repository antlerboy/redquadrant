import Link from "next/link";

export const metadata = {
  title: "RedQuadrant",
  description: "Continue to the RedQuadrant website.",
  alternates: { canonical: "/" },
  robots: { index: false, follow: true },
};

export default function EmailDisruption() {
  return (
    <article className="site-frame" style={{ maxWidth: 880, padding: "48px 24px 64px" }}>
      <meta httpEquiv="refresh" content="0;url=/" />
      <h1>RedQuadrant</h1>
      <p><Link href="/">Continue to the RedQuadrant website</Link></p>
    </article>
  );
}
