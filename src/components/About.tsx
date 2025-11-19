import { Card } from "@/components/ui/card";
import { Code2, Rocket, Users } from "lucide-react";
import profile from "/src/Assets/gaurav.jpg";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable code following best practices",
    },
    {
      icon: Rocket,
      title: "Fast Delivery",
      description: "Shipping quality features efficiently without compromising quality",
    },
    {
      icon: Users,
      title: "User-First",
      description: "Building intuitive interfaces that users love to interact with",
    },
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-[400px_1fr] gap-12 items-center">
          {/* Profile Image Section */}
          <div className="flex justify-center lg:justify-start animate-scale-in">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-full blur-lg opacity-75 group-hover:opacity-100 transition duration-500 animate-glow" />
              <div className="relative w-72 h-72 rounded-full overflow-hidden border-4 border-background shadow-[var(--shadow-large)]">
                <img
                  src={profile}
                  alt="Gaurav - Software Engineer"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-6 animate-fade-in">
            <p className="text-lg text-foreground/80 leading-relaxed">
              I'm a passionate <span className="text-primary font-semibold">Software Engineer</span> and{" "}
              <span className="text-primary font-semibold">Frontend Developer</span> who loves building
              scalable, interactive, and user-focused web applications.
            </p>
            
            <p className="text-lg text-foreground/80 leading-relaxed">
              Currently focused on <span className="font-medium">React.js</span>,{" "}
              <span className="font-medium">Material UI</span>,{" "}
              <span className="font-medium">TypeScript</span>, and modern JavaScript frameworks.
              I have 10 months of hands-on experience at{" "}
              <span className="font-medium text-primary">Studio137 Digital Media Solutions</span>, where I
              contributed to modern web applications involving complex forms, dashboards, and responsive UIs
              built with React, React Router, and API integrations.
            </p>

            <p className="text-lg text-foreground/80 leading-relaxed">
              I'm also preparing for <span className="font-medium text-primary">Google Summer of Code (GSoC)</span>{" "}
              with the Open Healthcare Network, contributing to open-source projects that focus on global
              healthcare interoperability.
            </p>

            <p className="text-lg text-foreground/80 leading-relaxed">
              I'm eager to join a company like <span className="font-semibold gradient-text">Microsoft</span>{" "}
              where I can solve challenging problems, grow as a software engineer, and contribute to
              impactful products that make a difference in people's lives.
            </p>
          </div>
        </div>

        {/* Highlights Section */}
        <div className="grid md:grid-cols-3 gap-6 mt-16 animate-fade-in-up"  style={{ animationDelay: "0.2s" }}>
          {highlights.map((item, index) => (
            <Card
              key={index}
              className="p-6 glass-card hover-lift border-border/50 group"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 rounded-xl bg-gradient-to-br from-primary to-accent group-hover:shadow-[var(--shadow-glow)] transition-shadow">
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-foreground/70">{item.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
