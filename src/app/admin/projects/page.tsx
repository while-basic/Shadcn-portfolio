'use client';

import { useState } from 'react';
import { ProjectImageGenerator } from '@/components/project-image-generator';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { projects } from '@/config/projects';
import Image from 'next/image';

export default function AdminProjects() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);

  const handleImageGenerated = async (imageUrl: string) => {
    setGeneratedImage(imageUrl);
    toast.success('Image generated successfully!');
    
    // Here you would typically save the image URL to your project configuration
    // For now, we'll just show a success message
    toast.info('Remember to save the image URL to your project configuration');
  };

  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold mb-8">Project Management</h1>
      
      <div className="grid gap-8 md:grid-cols-2">
        {/* Project List */}
        <Card>
          <CardHeader>
            <CardTitle>Projects</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {projects.map((project) => (
              <div
                key={project.slug}
                className={`p-4 rounded-lg cursor-pointer ${
                  selectedProject === project.slug
                    ? 'bg-accent'
                    : 'hover:bg-muted'
                }`}
                onClick={() => setSelectedProject(project.slug)}
              >
                <h3 className="font-semibold">{project.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Image Generator */}
        {selectedProject && (
          <div className="space-y-8">
            <ProjectImageGenerator
              onImageGenerated={handleImageGenerated}
              defaultTitle={projects.find(p => p.slug === selectedProject)?.title}
              defaultDescription={projects.find(p => p.slug === selectedProject)?.description}
            />

            {generatedImage && (
              <Card>
                <CardHeader>
                  <CardTitle>Generated Image</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                    <Image
                      src={generatedImage}
                      alt="Generated project image"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="mt-4">
                    <Input
                      value={generatedImage}
                      readOnly
                      onClick={(e) => {
                        e.currentTarget.select();
                        navigator.clipboard.writeText(generatedImage);
                        toast.success('Image URL copied to clipboard');
                      }}
                    />
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
