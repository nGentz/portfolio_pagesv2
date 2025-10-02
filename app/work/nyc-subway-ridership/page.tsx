import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import WorkPage from '../WorkPage';
import rehypeHighlight from 'rehype-highlight';

export default async function Layout() {
  const filePath = path.join(process.cwd(), 'app', 'work', 'nyc-subway-ridership', 'content.mdx');
  const raw = fs.readFileSync(filePath, 'utf8');
  const { content, data: frontMatter } = matter(raw);
  const mdxSource: MDXRemoteSerializeResult = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [rehypeHighlight],
    },
  });

  return (
    <WorkPage source={mdxSource} frontMatter={frontMatter} />
  );
}
