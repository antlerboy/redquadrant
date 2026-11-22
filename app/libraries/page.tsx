import Link from "next/link";

export const metadata = {
  title: "Libraries and archives",
  description: "RedQuadrant’s library service reviews, archive location studies, and strategy work for councils and public libraries.",
  alternates: { canonical: "/libraries/" },
};

export default function LibrariesPage() {
  return (
    <article className="site-frame offer-page">
      <h1>Libraries and archives</h1>
      <p className="offer-lead">We help councils decide what they need from a library or archive service, where it should operate, and what the options would mean for its users.</p>
      <p>In Croydon, we reviewed the library service and appraised options for its future. Sutton asked us to review its archives service. In Lambeth, the question was where to locate the borough’s archives. We also worked on Abu Dhabi Public Libraries’ 2020 Public Library Strategy.</p>
      <p><Link href="/services#culture-community">Culture, consultation, and community engagement projects</Link></p>
      <p><a href="mailto:benjamin.taylor@redquadrant.com">Email Benjamin Taylor about a library or archive review</a>.</p>
      <p><Link href="/customer-focus/">Customer contact and service design</Link></p>
    </article>
  );
}
