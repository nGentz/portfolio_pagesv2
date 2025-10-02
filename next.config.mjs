import createMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';
import remarkToc from 'remark-toc';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';

const withMDX = createMDX({
  options: {
    remarkPlugins: [
      remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      rehypeAutolinkHeadings,
      [rehypePrettyCode, {
        theme: 'github-light',
        keepBackground: false,
        showLineNumbers: true,
        defaultCopy: true,
      }],
    ],
  },
});

export default withMDX({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  // Enable fully static export suitable for GitHub Pages
  output: 'export',
  // Safer routing for static hosts (serves .../path/ -> path/index.html)
  trailingSlash: true,
  // Base path/asset prefix for project pages (username.github.io/repo)
  // The GitHub Action sets BASE_PATH to "/<repo>" for project pages, or "" for user/organization pages
  basePath: process.env.BASE_PATH || '',
  assetPrefix: process.env.BASE_PATH || '',
  // If next/image is added later, avoid Image Optimization which requires a server
  images: { unoptimized: true },
});
