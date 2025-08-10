import Link from 'next/link';

const projects = [
  { slug: 'okta-oidc-mfa', title: 'Okta OIDC + MFA Integration', blurb: 'Modern auth with adaptive MFA.' },
  { slug: 'entra-conditional-access-pim', title: 'Entra ID Conditional Access + PIM', blurb: 'Risk-based access & JIT privilege.' },
  { slug: 'aws-federation', title: 'AWS Federation via Okta/Entra', blurb: 'Least-privilege cloud access at scale.' },
];

export default function ProjectsIndex() {
  return (
    <section className="section">
      <h1 className="section-title">Projects / Case Studies</h1>
      <div className="grid">
        {projects.map(p => (
          <Link key={p.slug} href={`/projects/${p.slug}`} className="card">
            <h3>{p.title}</h3>
            <p>{p.blurb}</p>
            <span className="link">View case study →</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
