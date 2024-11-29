import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { projects } from '@/config/projects';
import { Breadcrumb } from '@/components/breadcrumb';

interface ProjectNavigationProps {
  currentSlug: string;
}

export function ProjectNavigation({ currentSlug }: ProjectNavigationProps) {
  const currentIndex = projects.findIndex((p) => p.slug === currentSlug);
  const currentProject = projects[currentIndex];
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  const breadcrumbItems = [
    { label: 'Projects', href: '/projects' },
    { label: currentProject.title },
  ];

  return (
    <div className="fixed top-24 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container py-4">
        <div className="mb-4">
          <Breadcrumb items={breadcrumbItems} />
        </div>
        
        <div className="flex items-center justify-between">
          <Button
            variant="ghost"
            size="sm"
            asChild
          >
            <Link href="/projects" className="flex items-center gap-2">
              <ChevronLeft className="h-4 w-4" />
              Back to Projects
            </Link>
          </Button>

          <div className="flex items-center gap-4">
            {prevProject && (
              <Button
                variant="ghost"
                size="sm"
                asChild
              >
                <Link href={`/projects/${prevProject.slug}`} className="flex items-center gap-2">
                  <ChevronLeft className="h-4 w-4" />
                  {prevProject.title}
                </Link>
              </Button>
            )}

            {nextProject && (
              <Button
                variant="ghost"
                size="sm"
                asChild
              >
                <Link href={`/projects/${nextProject.slug}`} className="flex items-center gap-2">
                  {nextProject.title}
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
