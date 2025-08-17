import Link from 'next/link';
import Image from 'next/image';

export const metadata = { title: 'About — Chidi Ajaezi' };

export default function About() {
  return (
    <section className="section">
      <h1 className="section-title">About</h1>
      <div style={{ textAlign: 'center', margin: '24px 0' }}>
        <Image
          src="/assets/chidi-headshot.jpg"
          alt="Chidi Ajaezi"
          width={200}
          height={200}
          style={{ borderRadius: '50%', margin: '0 auto' }}
        />
      </div>
      <p style={{ maxWidth: 760, margin: '16px auto 0', color: 'var(--muted)' }}>
        I specialize in designing and implementing enterprise identity architectures across Okta, Entra ID, AWS IAM, and CyberArk, with a Zero Trust approach. I use automation (Okta Workflows, PowerShell, Python, Terraform) to streamline provisioning and access governance.
      </p>
      <h2 className="section-title" style={{ marginTop: 40 }}>Founder & Builder</h2>
      <div className="two-col">
        <div className="card">
          <h3>MakerDad & Co.</h3>
          <p>Family STEM builds (planes, robots). Turning curiosity into hands-on engineering.</p>
          <a href="#" target="_blank" rel="noopener noreferrer" className="link">Visit →</a> {/* Placeholder link; replace # with actual URL when ready */}
        </div>
        <div className="card">
          <h3>Happydandis</h3>
          <p>Gifts brand donating 10% to schools in Nigeria.</p>
          <a href="https://happydandis.com" target="_blank" rel="noopener noreferrer" className="link">Visit →</a>
        </div>
      </div>
    </section>
  );
}