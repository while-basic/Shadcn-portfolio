import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function WhatIDo() {
  const skills = [
    {
      title: "Full-Stack Development",
      description: "Building modern web applications using React, Next.js, Node.js, and TypeScript with a focus on performance and user experience."
    },
    {
      title: "Automation Engineering",
      description: "Designing and implementing industrial automation systems, PLC programming, and process optimization solutions."
    },
    {
      title: "DevOps & Cloud",
      description: "Setting up CI/CD pipelines, cloud infrastructure management, and containerization using Docker and Kubernetes."
    },
    {
      title: "System Architecture",
      description: "Designing scalable and maintainable system architectures, focusing on microservices and distributed systems."
    }
  ];

  return (
    <section className="container py-12" id="what-i-do">
      <h2 className="text-3xl font-bold tracking-tighter mb-8">What I Do</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((skill, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{skill.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{skill.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
