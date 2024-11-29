import Link from 'next/link';
import { blog } from '@/app/source';
import TextReveal from '@/components/motion/text-reveal';
import Line from '@/components/motion/line';
import React from 'react';

import { createMetadata } from '@/lib/metadata';
import PostCard from '@/app/blog/_components/post-card';

import { metadata as meta } from '@/app/config';
import type { WithContext, Blog } from 'schema-dts';

const title = 'Blog';
const description = 'My thoughts on technology.';

export const metadata = createMetadata({
  title,
  description,
  openGraph: {
    url: '/blog',
    title,
    description
  },
  twitter: {
    title,
    description
  }
});

const jsonLd: WithContext<Blog> = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: title,
  description,
  url: `${meta.site.url}/blog`,
  author: {
    '@type': 'Person',
    name: meta.author.name,
    url: meta.site.url
  }
};

export default function BlogPage(): React.ReactElement {
  const posts = [...blog.getPages()].sort(
    (a, b) =>
      new Date(b.data.date ?? b.file.name).getTime() -
      new Date(a.data.date ?? a.file.name).getTime()
  );

  return (
    <main className="my-14 flex-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section
        className="relative flex min-h-[calc(50dvh)] items-center justify-center"
        id="hero"
      >
        <div className="flex flex-col items-center md:max-w-7xl">
          <h1 className="leading-wide tracking-relaxed text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
            <TextReveal delay={0.2}>Blog</TextReveal>
          </h1>

          <Line className={'mt-16'} />
        </div>
        {/*<motion.div*/}
        {/*  className="absolute bottom-8 left-1/2 -translate-x-1/2 transform"*/}
        {/*  style={{ opacity }}*/}
        {/*  animate={{ y: [0, 10, 0] }}*/}
        {/*  transition={{ duration: 1.5, repeat: Infinity }}*/}
        {/*>*/}
        {/*  <ChevronDown className="h-8 w-8" />*/}
        {/*</motion.div>*/}
      </section>
      {/*className="container max-sm:px-0 md:py-12"*/}
      <section className="grid w-full grid-cols-1 gap-4 p-4 md:grid-cols-2 2xl:grid-cols-3">
        {posts.map((post, index) => (
          <PostCard
            title={post.data.title}
            href={post.url}
            description={post.data.description}
            key={`post_${index}`}
            date={new Date(post.data.date ?? post.file.name)}
            thumbnail={`/images/blog/${post.slugs[0]}/cover.jpg`}
          />
        ))}
      </section>
    </main>
  );
}
