'use client';

import { useState, useRef, useEffect } from 'react';
import {
  Header,
  Hero,
  About,
  Skills,
  Experience,
  Projects,
  Contact,
  Footer,
  WhatIDo
} from '@/components/sections';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { ArrowRight, Github, Linkedin, Mail, Play, Pause } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { projects } from '@/config/projects';
import { featuredMusic } from '@/config/music';

export default function Home() {
  const [currentTrack, setCurrentTrack] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = (audioUrl: string) => {
    if (currentTrack === audioUrl) {
      if (isPlaying) {
        audioRef.current?.pause();
      } else {
        audioRef.current?.play();
      }
      setIsPlaying(!isPlaying);
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setCurrentTrack(audioUrl);
      setIsPlaying(true);
      audioRef.current = new Audio(audioUrl);
      audioRef.current.play();
    }
  };

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Header loader={true} />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
          <div className="flex max-w-[980px] flex-col items-start gap-4">
            <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl lg:text-5xl lg:leading-[1.1]">
              Christopher Celaya
              <br className="hidden sm:inline" />
              <span className="text-primary">Full-Stack Developer & Automation Engineer</span>
            </h1>
            <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
              Building modern web applications and industrial automation systems with a focus on user experience and efficiency.
            </p>
            <div className="flex gap-4">
              <Link href="/projects">
                <Button>
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="https://github.com/yourusername" target="_blank">
                <Button variant="outline">
                  <Github className="mr-2 h-4 w-4" /> GitHub
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* What I Do Section */}
        <WhatIDo />

        {/* Image Carousel Section */}
        <section className="container py-8">
          <h2 className="mb-6 text-3xl font-bold tracking-tight">Featured Work</h2>
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {[1, 2, 3, 4, 5].map((index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <Image
                        src={`/images/carousel/image${index}.jpg`}
                        alt={`Featured work ${index}`}
                        width={400}
                        height={400}
                        className="rounded-lg object-cover"
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>

        {/* Featured Content Section */}
        <section className="container py-8">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Featured Projects */}
            <div>
              <h2 className="mb-6 text-3xl font-bold tracking-tight">Featured Projects</h2>
              <div className="grid gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Industrial Automation System</CardTitle>
                    <CardDescription>Complete automation solution for manufacturing processes</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge>PLC</Badge>
                      <Badge>SCADA</Badge>
                      <Badge>Industrial IoT</Badge>
                    </div>
                    <Link href="/projects/industrial-automation">
                      <Button variant="secondary" className="w-full">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Featured Music */}
            <div>
              <h2 className="mb-6 text-3xl font-bold tracking-tight">Featured Music</h2>
              <div className="grid gap-6">
                {featuredMusic.map((track, index) => (
                  <Card key={index}>
                    <div className="flex gap-4 p-4">
                      <div className="relative h-24 w-24 flex-shrink-0">
                        <Image
                          src={track.coverImage}
                          alt={track.title}
                          fill
                          className="rounded-md object-cover"
                        />
                        <Button
                          variant="secondary"
                          size="icon"
                          className="absolute bottom-2 right-2 h-8 w-8 rounded-full bg-background/80 backdrop-blur"
                          onClick={() => togglePlay(track.audioUrl)}
                        >
                          {currentTrack === track.audioUrl && isPlaying ? (
                            <Pause className="h-4 w-4" />
                          ) : (
                            <Play className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                      <div className="flex flex-col justify-between">
                        <div>
                          <h3 className="font-semibold">{track.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            {track.description}
                          </p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {track.tags.map((tag, tagIndex) => (
                            <Badge
                              key={tagIndex}
                              variant="secondary"
                              className="text-xs"
                            >
                              {tag.label}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Skills & Experience Section */}
        <section className="container py-8">
          <Tabs defaultValue="skills" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="experience">Experience</TabsTrigger>
            </TabsList>
            <TabsContent value="skills" className="border-none p-0 outline-none">
              <Card>
                <CardHeader>
                  <CardTitle>Skills & Technologies</CardTitle>
                  <CardDescription>
                    A comprehensive overview of my technical expertise and capabilities
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px] w-full rounded-md border p-4">
                    <div className="grid gap-6">
                      <div>
                        <h3 className="font-semibold mb-2">Software Development</h3>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="secondary">Python</Badge>
                          <Badge variant="secondary">JavaScript</Badge>
                          <Badge variant="secondary">Java</Badge>
                          <Badge variant="secondary">C#</Badge>
                          <Badge variant="secondary">HTML/CSS</Badge>
                          <Badge variant="secondary">React</Badge>
                          <Badge variant="secondary">Node.js</Badge>
                        </div>
                      </div>
                      <Separator />
                      <div>
                        <h3 className="font-semibold mb-2">Database & Cloud</h3>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="secondary">SQL</Badge>
                          <Badge variant="secondary">MongoDB</Badge>
                          <Badge variant="secondary">PostgreSQL</Badge>
                          <Badge variant="secondary">Google Cloud</Badge>
                          <Badge variant="secondary">Azure</Badge>
                          <Badge variant="secondary">Docker</Badge>
                        </div>
                      </div>
                      <Separator />
                      <div>
                        <h3 className="font-semibold mb-2">Industrial Automation</h3>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="secondary">PLC Programming</Badge>
                          <Badge variant="secondary">HMI Development</Badge>
                          <Badge variant="secondary">CMMS Systems</Badge>
                          <Badge variant="secondary">Preventive Maintenance</Badge>
                          <Badge variant="secondary">Industrial Manufacturing</Badge>
                        </div>
                      </div>
                      <Separator />
                      <div>
                        <h3 className="font-semibold mb-2">Project Management</h3>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="secondary">Project Planning</Badge>
                          <Badge variant="secondary">Team Leadership</Badge>
                          <Badge variant="secondary">Documentation</Badge>
                          <Badge variant="secondary">Quality Assurance</Badge>
                          <Badge variant="secondary">Process Improvement</Badge>
                        </div>
                      </div>
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="experience" className="border-none p-0 outline-none">
              <Card>
                <CardHeader>
                  <CardTitle>Professional Experience</CardTitle>
                  <CardDescription>
                    My journey through software development and industrial automation
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px] w-full rounded-md border p-4">
                    <div className="space-y-8">
                      <div>
                        <h3 className="text-lg font-semibold">Data Center Technician III</h3>
                        <p className="text-sm text-muted-foreground">T5 Data Centers - San Antonio, Texas</p>
                        <p className="text-sm text-muted-foreground font-medium">2021-2022</p>
                        <ul className="list-disc pl-4 mt-2 text-sm space-y-1">
                          <li>Managed critical and non-critical data center infrastructure</li>
                          <li>Collaborated with a team of Critical Facilities Technician (CFT) to ensure total uptime</li>
                          <li>Utilized CMMS for maintenance scheduling and documentation</li>
                          <li>Supervised external contractors and ensured compliance with facility standards</li>
                        </ul>
                      </div>
                      <Separator />
                      <div>
                        <h3 className="text-lg font-semibold">Mechatronics Technician</h3>
                        <p className="text-sm text-muted-foreground">CM Wire - Santa Teresa, New Mexico</p>
                        <p className="text-sm text-muted-foreground font-medium">2019-2021</p>
                        <ul className="list-disc pl-4 mt-2 text-sm space-y-1">
                          <li>Troubleshot and maintained electrical repairs on factory equipment</li>
                          <li>Programmed and maintained PLC and HMI touch panels</li>
                          <li>Updated manufacturing records and installation reports</li>
                          <li>Managed end-to-end electrical projects and maintenance schedules</li>
                        </ul>
                      </div>
                      <Separator />
                      <div>
                        <h3 className="text-lg font-semibold">Wiring Technician / Quality Assurance</h3>
                        <p className="text-sm text-muted-foreground">Schneider Electric - El Paso, Texas</p>
                        <p className="text-sm text-muted-foreground font-medium">2016-2017</p>
                        <ul className="list-disc pl-4 mt-2 text-sm space-y-1">
                          <li>Troubleshot electrical and electromechanical operations</li>
                          <li>Collaborated with engineering teams to resolve problems</li>
                          <li>Used various tools for grounded fault detection</li>
                          <li>Oversaw testing and assembly of low voltage electronic products</li>
                        </ul>
                      </div>
                      <Separator />
                      <div>
                        <h3 className="text-lg font-semibold">Maintenance Technician III</h3>
                        <p className="text-sm text-muted-foreground">Dal-Tile - El Paso, Texas</p>
                        <p className="text-sm text-muted-foreground font-medium">2013-2015</p>
                        <ul className="list-disc pl-4 mt-2 text-sm space-y-1">
                          <li>Installed and maintained hydraulic press and electrical panel systems</li>
                          <li>Performed routine maintenance on material conveyors and cooling systems</li>
                          <li>Operated hydraulic systems and conducted quality checks</li>
                          <li>Managed material processing and storage operations</li>
                        </ul>
                      </div>
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        {/* Schedule a Call Section */}
        <section className="container py-8 bg-muted/50">
          <Card className="relative overflow-hidden">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl">Let&apos;s Talk About Your Project</CardTitle>
              <CardDescription>
                Schedule a 30-minute call to discuss your ideas and how we can work together
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="space-y-2 flex-1">
                  <h4 className="font-medium">What to expect:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    <li>Project scope and requirements discussion</li>
                    <li>Technical feasibility assessment</li>
                    <li>Timeline and budget planning</li>
                    <li>Next steps and recommendations</li>
                  </ul>
                </div>
                <div className="flex-shrink-0">
                  <Link
                    href="https://cal.com/chriscelaya/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="lg" className="w-full md:w-auto">
                      Schedule a Call
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contact Section */}
        <section className="container py-8">
          <Card>
            <CardHeader>
              <CardTitle>Let&apos;s Connect</CardTitle>
              <CardDescription>Get in touch for collaborations or opportunities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link href="mailto:your.email@example.com">
                  <Button variant="outline" className="w-full sm:w-auto">
                    <Mail className="mr-2 h-4 w-4" /> Email Me
                  </Button>
                </Link>
                <Link href="https://linkedin.com/in/yourusername" target="_blank">
                  <Button variant="outline" className="w-full sm:w-auto">
                    <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                  </Button>
                </Link>
                <Link href="/chat">
                  <Button variant="default" className="w-full sm:w-auto">
                    Chat with AI Assistant
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>

        <Footer />
      </main>
    </div>
  );
}
