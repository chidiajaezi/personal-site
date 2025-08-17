import Link from 'next/link';
import { posts } from './blog/page'; // Import named export 'posts'
import { projects } from './projects/page'; // Import named export 'projects'

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <h1>
          Identity & Access Management Engineer
          <span className="stack">Okta · Entra ID · AWS IAM · CyberArk</span>
        </h1>
        <p>Designing and securing enterprise identity systems with a Zero Trust approach — enabling seamless, compliant access at scale.</p>
        <div className="cta">
          <a className="btn" href="/resume.pdf" target="_blank" rel="noreferrer">View Resume</a>
        </div>
      </section>

      <section className="section" aria-labelledby="skills">
        <h2 id="skills" className="section-title">Skills & Specialties</h2>
        <div className="chips">
          <span className="chip">IAM (Okta, Entra ID)</span>
          <span className="chip">Zero Trust</span>
          <span className="chip">PAM (CyberArk)</span>
          <span className="chip">AWS IAM</span>
          <span className="chip">Automation (Workflows)</span>
          <span className="chip">Terraform</span>
          <span className="chip">PowerShell</span>
          <span className="chip">Python</span>
        </div>
      </section>

      <section className="section" aria-labelledby="projects">
        <h2 id="projects" className="section-title">Featured Projects / Case Studies</h2>
        <div className="grid">
          {projects.slice(0, 3).map((project, index) => (
            <a key={project.slug} className="card" href={`/projects/${project.slug}`}>
              <h3>{project.title}</h3>
              <p>{project.blurb}</p>
              <span className="link">View case study →</span>
            </a>
          ))}
        </div>
      </section>

      <section className="section" aria-labelledby="blog">
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
          <h2 id="blog" className="section-title" style={{ textAlign: 'left' }}>Blog</h2>
          <a href="/blog" style={{ fontSize: 14 }}>View all posts →</a>
        </div>
        <div className="list">
          {posts.slice(0, 3).map((post, index) => ( // Limit to 3 most recent
            <a key={post.slug} href={`/blog/${post.slug}`}>
              <span>{post.title}</span>
              <span style={{ fontSize: 14 }}>Read →</span>
            </a>
          ))}
        </div>
      </section>

      <section className="section" aria-labelledby="founder">
        <h2 id="founder" className="section-title">Founder & Builder</h2>
        <div className="two-col">
          <div className="card">
            <h3>Happydandis</h3>
            <p>Gifts brand donating 10% to schools in Nigeria.</p>
            <a className="link" href="https://happydandis.com" target="_blank">Visit →</a>
          </div>
          <div className="card">
            <h3>MakerDad & Co.</h3>
            <p>Family STEM builds (planes, robots). Turning curiosity into hands-on engineering.</p>
            <a className="link" href="/maker">Learn more →</a>
          </div>
        </div>
      </section>
    </>
  );
}
          