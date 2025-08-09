# Personal site and portfolio.  
Identity & Access Management (IAM) + security engineering.  

Specialties:
- Okta
- Entra ID (Azure AD)
- AWS IAM
- CyberArk
- Zero Trust
- Automation (Workflows, Terraform, PowerShell, Python)

Site includes:
- /projects — case studies + portfolio work
- /blog — technical notes + learning documentation
- About & Contact

---

## Local notes
Node.js 18+ required.

```bash
git clone https://github.com/chidiajaezi/personal-site.git
cd personal-site
npm install
npm run dev

---

## Deployment

Hosted on Vercel.  
Push to `main` → auto rebuild and publish.

---

## Structure

- **app/** — Pages & components (Next.js App Router)  
- **public/** — Static assets (resume.pdf, images)  
- **app/blog/*.mdx** — Blog posts  
- **app/projects/*.mdx** — Projects

