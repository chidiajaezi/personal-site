import { MDXRemote } from 'next-mdx-remote/rsc';
  import { promises as fs } from 'fs';
  import path from 'path';
  import CustomImage from '../../components/CustomImage';

  const customComponents = {
    h1: ({ children }) => <h1 style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--fg)' }}>{children}</h1>,
    h2: ({ children }) => <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: 'var(--fg)' }}>{children}</h2>,
    p: ({ children }) => <p style={{ color: 'var(--fg)', fontSize: '1rem', lineHeight: '1.6' }}>{children}</p>,
    a: ({ children, href }) => <a href={href} style={{ color: '#f97316', textDecoration: 'underline' }}>{children}</a>,
    code: ({ children }) => (
      <code style={{ color: '#f97316', fontFamily: 'monospace' }}>{children}</code>
    ),
    pre: ({ children }) => (
      <pre style={{ backgroundColor: '#f1f5f9', padding: '1rem', borderRadius: '4px', overflowX: 'auto', color: 'var(--fg)' }}>{children}</pre>
    ),
    img: CustomImage,
  };

  export async function generateStaticParams() {
    const projectsDir = path.join(process.cwd(), 'app/projects');
    const files = await fs.readdir(projectsDir);
    const slugs = files
      .filter(file => file.endsWith('.md') || file.endsWith('.mdx'))
      .map(file => ({ slug: file.replace(/\.mdx?$/, '') }));
    return slugs;
  }

  export async function generateMetadata({ params }) {
    const { slug } = params;
    return { title: `${slug} — Chidi Ajaezi` };
  }

  export default async function ProjectPage({ params }) {
    const { slug } = params;
    const filePath = path.join(process.cwd(), 'app/projects', `${slug}.md`);
    try {
      const fileContent = await fs.readFile(filePath, 'utf8');
      return (
        <section className="section">
          <article className="max-w-none p-6">
            <MDXRemote
              source={fileContent}
              components={customComponents}
            />
          </article>
        </section>
      );
    } catch (error) {
      console.error(`Error rendering ${slug}:`, error);
      return <div>Error loading project. Check console for details.</div>;
    }
  }