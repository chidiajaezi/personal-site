export const metadata = {
  title: 'Chidi Ajaezi — IAM Engineer',
  description: 'Identity & Access Management Engineer — Okta, Entra ID, AWS IAM, CyberArk',
};
import './globals.css';
import Link from 'next/link';
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex-col min-h-screen">
        <header className="header">
          <div className="container">
            <Link href="/" className="brand">
              <img src="/assets/chidi-logo.png" alt="Chidi Ajaezi Logo" className="brand-logo" style={{ width: '200px', height: '50px', objectFit: 'contain' }} />
            </Link>
            <nav className="nav">
              <a href="/projects">Projects</a>
              <a href="/blog">Blog</a>
              <a href="/about">About</a>
            </nav>
          </div>
        </header>
        <main className="container flex-grow">{children}</main>
        <footer className="footer">
          <div className="container footer-row">
            <p>© {new Date().getFullYear()} Chidi Ajaezi</p>
            <div className="footer-actions">
              <a className="btn primary" href="mailto:me@chidiajaezi.com">Email Me</a>
              <a href="https://linkedin.com/in/chidiajaezi" target="_blank">LinkedIn</a>
              <a href="https://github.com/chidiajaezi" target="_blank">GitHub</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}