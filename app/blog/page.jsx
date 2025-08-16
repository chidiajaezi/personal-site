import Link from 'next/link';

export const metadata = { title: 'Blog — Chidi Ajaezi' };

export const posts = [ // Named export for posts array
  { slug: 'okta-aws-saml', title: 'Eliminating Long-Lived AWS Keys with Okta SAML Federation' },
  { slug: 'scim-in-plain-english', title: 'SCIM in Plain English: The protocol every IAM engineer should know' },
  { slug: 'saml-vs-oidc', title: 'SAML vs OIDC: When to use which' },
  { slug: 'identity-as-code-terraform', title: 'Identity as Code with Terraform' },
];

export default function BlogIndex() {
  return (
    <section className="section">
      <h1 className="section-title">Blog</h1>
      <ul className="list" style={{ marginTop: 24 }}>
        {posts.map(p => (
          <li key={p.slug} style={{ listStyle: 'none' }}>
            <Link href={`/blog/${p.slug}`} className="blog-link">
              <span className="blog-title">{p.title}</span>
              <span style={{ fontSize: 14 }}>Read →</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}