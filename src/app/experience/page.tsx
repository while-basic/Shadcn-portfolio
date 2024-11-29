import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

interface Education {
  school: string;
  degree: string;
  status: string;
}

interface Certification {
  name: string;
}

const experiences: Experience[] = [
  {
    title: "Data Center Technician II",
    company: "T5 Data Centers",
    location: "San Antonio, Texas",
    period: "2021-2022",
    description: [
      "Maintain and operate both critical and non-critical data center infrastructure, equipment, and systems",
      "Collaborate with a team of Critical Facilities Technician (CFT) to ensure total availability (100% uptime) while minimizing risks",
      "Utilize a Computerized Maintenance Management System (CMMS) for managing scheduled and unscheduled data center tasks",
      "Conduct preventive maintenance on electrical and mechanical equipment within the data center",
      "Troubleshoot and document technical problems, escalate when necessary, and ensure resolution",
      "Supervise external contractors, ensuring adherence to critical facility work rules"
    ],
  },
  {
    title: "Mechatronics Technician",
    company: "CN Wire",
    location: "Santa Teresa, New Mexico",
    period: "2018-2021",
    description: [
      "Troubleshoot, maintain, and perform repairs and installations on factory equipment",
      "Interpret diagrams, schematics, and electrical code specification",
      "Install and repair electrical commutators, electronic sensors, and Human Machine Interface (HMI) touch panels",
      "Maintain a number of cooling, compression and emulsion systems required for the facility to maintain operation",
      "Update manufacturing records, process work orders, and installation reports",
      "Install, maintain, and troubleshoot electrical components and equipment for industrial installation",
      "Managed end-to-end electrical projects, minimizing downtime, and ensuring production safety and quality standards are met"
    ],
  },
  {
    title: "Wiring Technician | Quality Assurance",
    company: "Schneider Electric",
    location: "El Paso, Texas",
    period: "2016-2017",
    description: [
      "Troubleshoot electrical and electromechanical operations",
      "Interpret point-to-point diagrams, bill of materials, and wiring schematics",
      "Collaborate with engineering and assembly teams to resolve problems",
      "Use various tools and software for ground fault detection",
      "Oversee testing and assembly of low voltage electronic products for clients"
    ],
  },
  {
    title: "Maintenance Technician",
    company: "Delfingen",
    location: "El Paso, Texas",
    period: "2015-2016",
    description: [
      "Manage maintenance on powered industrial equipment, including pneumatic, hydraulic, water, and electrical power",
      "Carry out tasks including PVC cutter repair, electrical troubleshooting, and preventative maintenance",
      "Determine and resolve issues with corrugated screws, cutters, pullies, and printing systems",
      "Complete additional duties such as welding, fabrication, including building maintenance"
    ],
  },
  {
    title: "Maintenance Technician III",
    company: "Dal-Tile",
    location: "El Paso, Texas",
    period: "2013-2015",
    description: [
      "Install and maintain hydraulic press, electrical panels and mechanical components",
      "Acknowledge machine malfunctions, install electro-mechanical valves, and perform routine maintenance",
      "Carry out additional routine maintenance on raw material conveyors, dust, compression, and cooling systems",
      "Operate industrial hydraulic systems, serve oil changes, and routine die-block quality checks",
      "Manage material processing and storage, including silos, spray dryers, ball mills, and vibrating screens",
      "Monitor material transportation utilizing pneumatic, belt, and elevator conveying systems"
    ],
  }
];

const education: Education[] = [
  {
    school: "University of Texas at El Paso",
    degree: "Electrical Engineering",
    status: "Attended"
  },
  {
    school: "El Paso Community College",
    degree: "Electrical Engineering & Computer Science",
    status: "Attended"
  }
];

const certifications: Certification[] = [
  { name: "NFPA 70E - Electrical Safety" },
  { name: "OSHA 10 - Construction Safety" }
];

const skills = [
  "Python, JavaScript, Java, C, C#",
  "HTML, CSS, React, Node.js",
  "SQL, MongoDB, PostgreSQL",
  "Google Cloud, Azure",
  "Docker",
  "Git",
  "Preventative Maintenance",
  "Software Development",
  "Industrial Manufacturing",
  "Project Management",
  "Product Design and Prototyping",
  "Problem-solving",
  "Cross-Disciplinary Knowledge"
];

export default function ExperiencePage() {
  return (
    <div className="container py-8 md:py-12">
      <div className="space-y-8">
        {/* Profile Section */}
        <section>
          <h1 className="text-4xl font-bold mb-4">Profile</h1>
          <Card>
            <CardContent className="pt-6">
              <p className="text-muted-foreground">
                Results-driven and innovative technician with extensive experience in computer 
                science. Expertise in software development and project management, 
                complemented by a strong background in preventative maintenance and industrial 
                manufacturing. Seeking a challenging position to apply technical skills toward the 
                growth and success of a forward-thinking organization.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Work Experience Section */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Work Experience</h2>
          <div className="grid gap-6">
            {experiences.map((exp, index) => (
              <Card key={index} className="transition-all hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="flex flex-col space-y-2">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                      <span className="text-xl font-bold">{exp.title}</span>
                      <span className="text-sm text-muted-foreground">{exp.period}</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {exp.company} - {exp.location}
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="text-muted-foreground">
                        {desc}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Education</h2>
          <Card>
            <CardContent className="pt-6">
              {education.map((edu, index) => (
                <div key={index} className="mb-4 last:mb-0">
                  <h3 className="font-bold">{edu.school}</h3>
                  <p className="text-muted-foreground">{edu.degree}</p>
                  <p className="text-sm text-muted-foreground">{edu.status}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>

        {/* Skills Section */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Skills</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Certifications Section */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Certifications</h2>
          <Card>
            <CardContent className="pt-6">
              <ul className="list-disc list-inside space-y-2">
                {certifications.map((cert, index) => (
                  <li key={index} className="text-muted-foreground">
                    {cert.name}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
