export const metadata = {
  title: 'Chidi Ajaezi — IAM Engineer',
  description: 'Identity & Access Management Engineer — Okta, Entra ID, AWS IAM, CyberArk',
};

import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="container header">
          <div className="brand">Chidi Ajaezi</div>
          <nav className="nav">
            <a href="/projects">Projects</a>
            <a href="/blog">Blog</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </nav>
        </header>
        <main className="container">{children}</main>
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
