'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface MDXLayoutProps {
  children: React.ReactNode;
  frontmatter?: {
    title?: string;
    publishedAt?: string;
    summary?: string;
    tags?: string[];
  };
  tocLinks?: Array<{ text: string; href: string }>;
  breadcrumbs?: Array<{ text: string; href?: string }>;
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function getReadingTime(content: string) {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

export default function MDXLayout({ children, frontmatter, tocLinks, breadcrumbs }: MDXLayoutProps) {
  const [readingTime, setReadingTime] = useState<number>(0);

  useEffect(() => {
    // Calculate reading time
    const content = document.querySelector('main')?.textContent || '';
    setReadingTime(getReadingTime(content));
  }, []);

  return (
    <article className="page-container" style={{ maxWidth: 700, width: '100%', margin: '0 auto' }}>
      {/* Header */}
      {frontmatter && (
        <header className="mb-8">
          {/* Title aligned with sidebar */}
          <h1 className="mdx-title" style={{ 
            fontSize: '2rem', 
            fontWeight: 500, 
            margin: '0 0 1rem 0', 
            color: '#111',
            lineHeight: 1.2
          }}>
            {frontmatter.title}
          </h1>
          
          {/* Breadcrumbs below title */}
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav className="mdx-breadcrumbs" style={{ 
              fontSize: '1.05rem', 
              color: '#555', 
              marginBottom: '2.5rem', 
              fontWeight: 400,
              marginLeft: 0
            }}>
              {breadcrumbs.map((crumb, idx) => (
                <span key={idx}>
                  {crumb.href ? (
                    <Link href={crumb.href} className="mdx-breadcrumb-link" style={{ marginRight: 6, color: '#555' }}>
                      {crumb.text}
                    </Link>
                  ) : (
                    <span style={{ color: '#222', textDecoration: 'underline' }}>{crumb.text}</span>
                  )}
                  {idx < breadcrumbs.length - 1 && ' / '}
                </span>
              ))}
            </nav>
          )}
          
          {/* Optional manual section links */}
          {tocLinks && tocLinks.length > 0 && (
            <nav className="mt-6 mb-4" style={{ marginLeft: '2rem' }}>
              <ul className="flex flex-wrap gap-4">
                {tocLinks.map((link, idx) => (
                  <li key={idx}>
                    <a href={link.href} className="text-blue-600 hover:text-blue-800 underline transition-colors text-base font-medium">
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </header>
      )}
      {/* Content - hide the first h1 to avoid duplicate titles */}
      <div className="prose mdx-prose" style={{ marginLeft: 0 }}>
        <style jsx>{`
          .prose h1:first-of-type {
            display: none;
          }
          /* Breadcrumb link underline on hover */
          .mdx-breadcrumbs a { text-decoration: none !important; }
          .mdx-breadcrumbs a:hover { text-decoration: underline !important; text-underline-offset: 2px; }
          /* Mobile: center content and remove extra left margin */
          @media (max-width: 900px) {
            .mdx-title { margin: 0 0 1rem 0 !important; }
            .mdx-breadcrumbs {
              margin-left: 0 !important;
            }
            .mdx-prose {
              margin-left: 0 !important;
            }
          }
          /* Desktop: keep slight left alignment for readability */
          @media (min-width: 901px) {
            .mdx-title { margin-left: 0; }
            .mdx-breadcrumbs { margin-left: 0; }
            .mdx-prose { margin-left: 0; }
          }
        `}</style>
        {children}
      </div>
      {/* Footer */}
      <footer className="mt-12 pt-6 border-t border-gray-200">
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>Last updated: {frontmatter?.publishedAt ? formatDate(frontmatter.publishedAt) : 'Unknown'}</span>
          <a
            href="#top"
            className="text-blue-600 hover:text-blue-800 transition-colors"
          >
            Back to top ↑
          </a>
        </div>
      </footer>
    </article>
  );
} 
