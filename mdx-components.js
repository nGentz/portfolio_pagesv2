import React from 'react';
import Chart from "./app/components/Chart";
import ScatterMap from "./app/components/ScatterMap";

function PageWrapper({ children }) {
  return (
    <main className="page-container" style={{
      fontFamily: 'Sweden Sans, system-ui, sans-serif',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
    }}>
      <div className="prose mdx-prose home-prose" style={{ maxWidth: 700, width: '100%' }}>{children}</div>
    </main>
  );
}

function H1(props) {
  return (
    <h1
      style={{ fontSize: '2rem', fontWeight: 500, marginBottom: '2rem', color: '#111' }}
      {...props}
    />
  );
}

function P(props) {
  return (
    <p
      style={{ fontSize: '1.08rem', color: 'var(--color-subtext)', margin: 0 }}
      {...props}
    />
  );
}

// Next MDX expects a function named `useMDXComponents`
// that merges any passed-in components with your custom ones.
// Base mapping used by both MDX runtimes
function A(props) {
  const href = props?.href || '';
  const isExternal = /^https?:\/\//.test(href);
  if (isExternal) {
    return (
      <a
        {...props}
        target={props.target || '_blank'}
        rel={props.rel || 'noopener noreferrer'}
      />
    );
  }
  return <a {...props} />;
}

const baseComponents = {
  // Rely on global .prose styles for typography
  a: A,
  Chart,
  ScatterMap,
};

// For next-mdx-remote (Work pages): NO wrapper to avoid extra spacing
export const components = {
  ...baseComponents,
};

// For Next.js built-in MDX pages: include wrapper for site-wide layout
export function useMDXComponents(componentsArg) {
  return {
    ...componentsArg,
    ...baseComponents,
    wrapper: PageWrapper,
  };
}
