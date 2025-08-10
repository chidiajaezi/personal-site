export default function About() {
  return (
    <section className="section">
      <h1 className="section-title">About</h1>
      <p style={{maxWidth:760, margin:'16px auto 0', color:'var(--muted)'}}>
        I specialize in designing and implementing enterprise identity architectures across Okta, Entra ID, AWS IAM, and CyberArk, with a Zero Trust approach. I use automation (Okta Workflows, PowerShell, Python, Terraform) to streamline provisioning and access governance.
      </p>
      <h2 className="section-title" style={{marginTop:40}}>Founder & Builder</h2>
      <div className="two-col">
        <div className="card">
          <h3>MakerDad & Co.</h3>
          <p>Family STEM builds (planes, robots). Turning curiosity into hands-on engineering.</p>
        </div>
        <div className="card">
          <h3>Happydandis</h3>
          <p>Gifts brand donating 10% to schools in Nigeria.</p>
        </div>
      </div>
    </section>
  );
}
