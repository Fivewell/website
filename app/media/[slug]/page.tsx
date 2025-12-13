import fs from 'fs';
import matter from 'gray-matter';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import path from 'path';
import { ReactNode } from 'react';
import ReactMarkdown, { Components } from 'react-markdown';

interface ArticleParams {
  params: {
    slug: string;
  };
}

// Type for the node in markdown components
type MarkdownNode = {
  children?: Array<{ tagName?: string; properties?: Record<string, unknown> }>;
  properties?: Record<string, unknown>;
  tagName?: string;
};

// Type for code component props
type CodeProps = {
  node?: unknown;
  className?: string;
  children?: ReactNode;
  inline?: boolean;
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = params;
  const filePath = path.join(process.cwd(), 'public/blogs', `${slug}.md`);

  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);

    return {
      title: data.title || 'Article',
      description: data.description || 'Read this article on FiveWell Africa',
    };
  } catch {
    return {
      title: 'Article Not Found',
      description: 'The requested article could not be found.',
    };
  }
}

export default async function ArticlePage({ params }: ArticleParams) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), 'public/blogs', `${slug}.md`);

  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { content: rawContent } = matter(fileContents);
    let content = rawContent.replace(/<data:image/g, 'data:image');
    content = content.replace(/(base64,[\s\S]*?)>/g, '$1');

    // Custom components for ReactMarkdown
    const components: Components = {
      img: (props) => {
        const { src, alt = '', title, width, height, className: _className, ...rest } = props;

        if (!src) {
          return null;
        }
        
        // Check if the alt text contains a credit in the format "description | credit"
        const [altTextOnly, credit] = alt.split('|').map((s: string) => s.trim());
        const isBase64 = typeof src === 'string' && src.startsWith('data:image');
        const isLocal = typeof src === 'string' && src.startsWith('/');

        // Convert width/height to numbers if they're strings
        const imgWidth = width ? Number(width) : 500;
        const imgHeight = height ? Number(height) : 500;

        return (
          <div className="my-8 group relative">
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              {isBase64 ? (
                // Handle base64 images
                <Image
                  src={src as string}
                  alt={altTextOnly}
                  width={imgWidth}
                  height={imgHeight}
                  className="w-full h-auto max-h-[500px] object-contain mx-auto"
                  loading="lazy"
                  {...rest}
                />
              ) : isLocal ? (
                // Handle local images from public folder
                <div className="relative w-full aspect-video">
                  <Image
                    src={src as string}
                    alt={altTextOnly}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    {...rest}
                  />
                </div>
              ) : (
                // Handle external images
                <Image
                  src={src as string}
                  alt={altTextOnly}
                  width={imgWidth}
                  height={imgHeight}
                  className="w-full h-auto max-h-[500px] object-contain mx-auto"
                  loading="lazy"
                  {...rest}
                />
              )}
              {title && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {title}
                </div>
              )}
            </div>
            {credit && (
              <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
                {credit}
              </p>
            )}
          </div>
        );
      },
      a: ({ ...props }) => {
        // Check if the link is external
        const isExternal = props.href?.startsWith('http');
        return (
          <a
            {...props}
            className="text-blue-600 hover:text-blue-700 hover:underline font-medium"
            target={isExternal ? "_blank" : "_self"}
            rel={isExternal ? "noopener noreferrer" : undefined}
          />
        );
      },
      h2: ({ ...props }) => {
        // Create an ID for the heading for anchor links
        const id = props.children
          ?.toString()
          .toLowerCase()
          .replace(/[^\w\s]/g, '')
          .replace(/\s+/g, '-');

        return (
          <h2 id={id} className="text-2xl font-bold mt-12 mb-6 text-gray-900 flex items-center group">
            <a
              href={`#${id}`}
              className="invisible group-hover:visible text-green-500 mr-2 no-underline hover:opacity-75"
              aria-hidden="true"
            >
              #
            </a>
            {props.children}
          </h2>
        );
      },
      p: ({ node, ...props }) => {
        const hasImageChild = (node as MarkdownNode)?.children?.some(
          child => child.tagName === 'img'
        );
        if (hasImageChild) {
          return <>{props.children}</>;
        }
        return <p className="my-6 text-gray-700 leading-relaxed text-base" {...props} />;
      },
      ul: ({ ...props }) => (
        <ul className="list-disc pl-8 my-6 space-y-3" {...props} />
      ),
      li: ({ ...props }) => (
        <li className="text-gray-700 leading-relaxed" {...props}>
          <span className="relative -left-1">{props.children}</span>
        </li>
      ),
      blockquote: ({ ...props }) => (
        <blockquote
          className="border-l-4 border-green-500 bg-green-50 dark:bg-green-900/20 pl-6 pr-4 py-3 my-6 text-gray-700 dark:text-gray-300 not-italic rounded-r-lg"
          {...props}
        />
      ),
      code: ({ node: _node, className, children, inline, ...props }: CodeProps) => {
        return !inline ? (
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 my-6 overflow-x-auto">
            <code className={className} {...props}>
              {children}
            </code>
          </div>
        ) : (
          <code className="bg-gray-100 dark:bg-gray-800 rounded px-1.5 py-0.5 text-sm font-mono">
            {children}
          </code>
        );
      },
    };

    return (
      <div className="bg-gray-50 pt-20 relative z-10">
        {/* Back Button */}
        <div className="container mx-auto">
          <div className="relative z-20 py-4">
            <Link
              href="/blog"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 text-lg transition-colors bg-white/80 backdrop-blur-sm rounded-lg  py-2 shadow-sm border border-gray-200"
            >
              <svg 
                className="w-5 h-5 mr-2 flex-shrink-0" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Media
            </Link>
          </div>
        </div>

        {/* Article Content */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="prose lg:prose-lg max-w-none">
            <ReactMarkdown components={components}>{content}</ReactMarkdown>
          </div>
        </article>
      </div>
    );
  } catch {
    notFound();
  }
}

// Generate static paths for all markdown files at build time
export async function generateStaticParams() {
  const blogDir = path.join(process.cwd(), 'public/blogs');

  try {
    const files = fs.readdirSync(blogDir);
    return files.map((filename) => ({
      slug: filename.replace(/\.md$/, ''),
    }));
  } catch {
    return [];
  }
}