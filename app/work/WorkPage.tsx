"use client";
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { components } from '../../mdx-components';
import MDXLayout from '../components/mdx-layout';

interface WorkPageProps {
  source: MDXRemoteSerializeResult;
  frontMatter: any;
}

export default function WorkPage({ source, frontMatter }: WorkPageProps) {
  return (
    <MDXLayout
      frontmatter={frontMatter}
      breadcrumbs={[
        { text: 'nickgentz', href: '/' },
        { text: 'works', href: '/work' },
        { text: frontMatter?.title || '' }
      ]}
    >
      <MDXRemote {...source} components={components} />
    </MDXLayout>
  );
}
