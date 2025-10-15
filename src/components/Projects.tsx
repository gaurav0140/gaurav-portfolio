import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Digital Ministry Matrix Assessment",
      description:
        "Comprehensive assessment platform built with React and Material UI, featuring multi-step forms, data visualization with charts, and real-time API integration for ministry evaluation.",
      tags: ["React", "Material UI", "Charts.js", "REST API", "TypeScript"],
      github: "https://github.com",
      live: "https://example.com",
      gradient: "from-blue-500 to-purple-500",
    },
    {
      title: "Healthcare Dashboard",
      description:
        "Open-source healthcare interoperability dashboard for GSoC contribution with Open Healthcare Network. Features patient data management, analytics, and secure data handling.",
      tags: ["React", "TypeScript", "Node.js", "PostgreSQL", "FHIR"],
      github: "https://github.com",
      live: "https://example.com",
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      title: "E-Commerce Platform",
      description:
        "Full-featured e-commerce platform with product catalog, shopping cart, payment integration, and admin dashboard. Built with modern React patterns and responsive design.",
      tags: ["React", "Redux", "Stripe", "Firebase", "Tailwind CSS"],
      github: "https://github.com",
      live: "https://example.com",
      gradient: "from-orange-500 to-red-500",
    },
    {
      title: "Task Management App",
      description:
        "Collaborative task management application with real-time updates, team collaboration features, and intuitive drag-and-drop interface for project organization.",
      tags: ["React", "Socket.io", "MongoDB", "Express", "Material UI"],
      github: "https://github.com",
      live: "https://example.com",
      gradient: "from-indigo-500 to-blue-500",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A showcase of my recent work demonstrating technical expertise and problem-solving abilities
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden glass-card hover-lift border-border/50"
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-foreground/70 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="group/btn hover:bg-primary hover:text-white"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-primary to-accent hover:opacity-90"
                    asChild
                  >
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
