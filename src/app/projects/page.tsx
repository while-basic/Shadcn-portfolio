import Link from 'next/link';
import TextReveal from '@/components/motion/text-reveal';
import Line from '@/components/motion/line';
import React from 'react';

import { createMetadata } from '@/lib/metadata';
import ProjectCard from '@/app/projects/_components/project-card';
import { Breadcrumb } from '@/components/breadcrumb';

import { metadata as meta } from '@/app/config';
import { projects } from '@/config/projects';
import type { CollectionPage, WithContext } from 'schema-dts';

const title = 'Projects';
const description = 'Here are some projects I have worked on.';

export const metadata = createMetadata({
  title,
  description,
  openGraph: {
    url: '/projects',
    title,
    description
  },
  twitter: {
    title,
    description
  }
});

const jsonLd: WithContext<CollectionPage> = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: title,
  description,
  url: `${meta.site.url}/projects`
};

export default function ProjectsPage(): React.ReactElement {
  const breadcrumbItems = [
    { label: 'Projects' }
  ];

  return (
    <main className="my-14 flex-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container py-8">
        <div className="mb-8">
          <Breadcrumb items={breadcrumbItems} />
        </div>
        <section
          className="relative flex min-h-[calc(50dvh)] items-center justify-center"
          id="hero"
        >
          <div className="flex flex-col items-center md:max-w-7xl">
            <h1 className="leading-wide tracking-relaxed text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
              <TextReveal delay={0.1}>My Projects</TextReveal>
            </h1>
            <p className="mt-6 max-w-2xl text-center text-lg text-muted-foreground">
              <TextReveal delay={0.15}>
                A collection of my work in industrial automation, control systems, and infrastructure projects.
                Each project showcases technical expertise and innovative solutions.
              </TextReveal>
            </p>
            <Line className={'mt-16'} />
          </div>
        </section>
        <section className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard
                key={`project_${index}`}
                title={project.title}
                description={project.description}
                href={`/projects/${project.slug}`}
                tags={project.tags}
                thumbnail={`/images/projects/${project.slug}/cover.jpg`}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
