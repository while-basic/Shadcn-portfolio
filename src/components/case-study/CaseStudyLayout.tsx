import React from 'react';
import Image from 'next/image';
import { Project } from '@/types/project';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface CaseStudyLayoutProps {
  project: Project;
}

export function CaseStudyLayout({ project }: CaseStudyLayoutProps) {
  return (
    <article className="container max-w-4xl py-12">
      <div className="space-y-6">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">{project.title}</h1>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, index) => (
              <Badge key={index} variant="secondary">
                {tag.label}
              </Badge>
            ))}
          </div>
          <p className="text-xl text-muted-foreground">{project.description}</p>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="details">Technical Details</TabsTrigger>
            <TabsTrigger value="process">Process</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold">Background</h2>
                  <p>{project.background}</p>
                  
                  <h2 className="text-2xl font-semibold">Use Case</h2>
                  <p>{project.useCase}</p>
                  
                  <h2 className="text-2xl font-semibold">Key Benefits</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    {project.benefits.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="details" className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold">Technology Stack</h2>
                  <div className="flex flex-wrap gap-2">
                    {project.technologyStack.map((tech, index) => (
                      <Badge key={index} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <h2 className="text-2xl font-semibold">Key Features</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>

                  <h2 className="text-2xl font-semibold">Technical Challenges</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    {project.challenges.map((challenge, index) => (
                      <li key={index}>{challenge}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="process" className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold">Development Process</h2>
                  <p>{project.developmentProcess}</p>

                  <h2 className="text-2xl font-semibold">Future Plans</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    {project.futurePlans.map((plan, index) => (
                      <li key={index}>{plan}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </article>
  );
}
