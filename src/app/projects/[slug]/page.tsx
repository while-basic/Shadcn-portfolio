import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ProjectNavigation } from '@/components/project-navigation';
import { Badge } from '@/components/ui/badge';
import { createMetadata } from '@/lib/metadata';
import { projects } from '@/config/projects';
import { Card, CardContent } from '@/components/ui/card';
import { Section } from '@/components/section';

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = await getProject(params.slug);
  if (!project) notFound();

  return createMetadata({
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [
        {
          width: 1200,
          height: 630,
          url: `/images/projects/${params.slug}/cover.jpg`,
          type: 'image/png'
        }
      ],
      type: 'article',
      url: `/projects/${params.slug}`
    }
  });
}

async function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = await getProject(params.slug);
  if (!project) notFound();

  return (
    <>
      <ProjectNavigation currentSlug={params.slug} />
      <main className="my-14 flex-1">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight">{project.title}</h1>
              <p className="text-xl text-muted-foreground">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary">
                    {tag.label}
                  </Badge>
                ))}
              </div>
            </div>
            
            {/* Cover Image */}
            <div className="mt-8 overflow-hidden rounded-lg bg-muted">
              <Image
                src={`/images/projects/${params.slug}/cover.jpg`}
                width={1280}
                height={720}
                alt={`Cover image for ${project.title}`}
                className="w-full object-cover"
                priority
              />
            </div>

            {/* Project Content */}
            <div className="mt-12 prose dark:prose-invert max-w-none">
              <Card className="mb-8">
                <CardContent className="pt-6">
                  <div className="grid gap-4">
                    <div>
                      <h3 className="font-semibold mb-2">Project Date</h3>
                      <p className="text-muted-foreground">{project.date}</p>
                    </div>
                    {project.technologyStack && (
                      <div>
                        <h3 className="font-semibold mb-2">Technology Stack</h3>
                        <div className="flex flex-wrap gap-2">
                          {project.technologyStack.map((tech, index) => (
                            <Badge key={index} variant="outline">{tech}</Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              <Section title="Introduction" content={project.introduction} />
              <Section title="Background" content={project.background} />
              <Section title="Use Case" content={project.useCase} />
              <Section title="Inspiration" content={project.inspiration} />
              <Section title="Project Details" content={project.projectDetails} />
              <Section title="Development Process" content={project.developmentProcess} />
              <Section title="Features" content={project.features} />
              <Section title="Benefits" content={project.benefits} />
              <Section title="Challenges" content={project.challenges} />
              <Section title="Future Plans" content={project.futurePlans} />
              <Section title="Conclusion" content={project.conclusion} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
