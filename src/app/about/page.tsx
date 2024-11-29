'use client';
import TextReveal from '@/components/motion/text-reveal';
import React from 'react';
import Line from '@/components/motion/line';

export default function About() {
  return (
    <main className="my-24 flex-1">
      <section
        className="relative flex min-h-[calc(50dvh)] items-center justify-center"
        id="hero"
      >
        <div className="flex flex-col items-center md:max-w-7xl">
          <h1 className="leading-wide tracking-relaxed text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
            <TextReveal delay={0.1}>
              Software Developer & Mechatronic Technician
            </TextReveal>
          </h1>
          <div className="mt-8 max-w-2xl text-center text-muted-foreground">
            <TextReveal delay={0.2}>
              Results-driven and innovative technician with extensive experience in computer science. 
              Expertise in software development and project management, complemented by a strong background in preventative maintenance and industrial manufacturing.
            </TextReveal>
          </div>
          <Line className={'mt-16'} />
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-4xl px-4">
        <div className="space-y-12">
          <div>
            <h2 className="mb-4 text-2xl font-bold">Introduction</h2>
            <p className="text-muted-foreground">
              I am a mechatronic technologist and software developer, where I work on industrial manufacturing equipment, software, and web development. Before my obsession with technology, I was primarily focused on music production. During COVID-19, I distributed my first album on streaming services such as Apple Music and Spotify. In my spare time, I enjoy investing in learning new things, building web apps, and further expanding my ideas. I am particularly interested in complex projects with artificial intelligence, virtual reality, industrial manufacturing, data centers, and blockchain technology. If you think I can be helpful to you or your cause and would like to meet, please feel free to get in touch.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-bold">Executive Summary</h2>
            <p className="text-muted-foreground">
              With over 11 years of experience troubleshooting complex electromechanical systems and developing software solutions, I believe I have the skills and background to excel in this position. As outlined on my attached resume, I have extensive hands-on experience maintaining and repairing industrial equipment and machinery. From pneumatic and hydraulic systems to PLCs and HMIs, I have worked with a wide variety of components and understand how to keep production lines running smoothly. I also have experience with programming languages C Python and JavaScript and have worked on projects involving robotics, computer vision, and embedded systems. In addition to my technical expertise, I am an analytical and solutions-oriented professional. Whether troubleshooting sudden breakdown or planning major upgrades, I can systematically evaluate problems, weigh alternatives, and implement effective solutions.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-bold">Objective</h2>
            <p className="text-muted-foreground">
              To obtain an Industrial Mechanic role that leverages my 11+ years of experience troubleshooting complex industrial equipment and developing robust software solutions for manufacturing systems, instrumentation, and robotics. I offer my expertise in preventative maintenance, manufacturing processes, and programming languages to improve production efficiency, uptime, quality, and innovation.
              My goal is to utilize my skill set in automation technologies to reduce downtime and drive process improvements through systemic analysis and effective implementations.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
