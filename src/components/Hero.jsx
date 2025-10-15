import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    "React Developer",
    "UI Engineer",
    "Problem Solver",
    "Open Source Contributor",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-background -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            Hi, I'm <span className="gradient-text">Gaurav</span>
          </h1>
          
          <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-8 h-12 flex items-center justify-center flex-wrap gap-2">
            <span className="text-muted-foreground">I'm a</span>
            <span className="gradient-text font-semibold animate-fade-in" key={currentRole}>
              {roles[currentRole]}
            </span>
          </div>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 px-4">
            Engineering seamless digital experiences with React, TypeScript, and modern web technologies.
            Passionate about building scalable, user-focused applications.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 px-4">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white shadow-[var(--shadow-medium)] hover:shadow-[var(--shadow-large)] transition-all w-full sm:w-auto"
            >
              Get In Touch
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="border-2 hover:bg-accent/10 w-full sm:w-auto"
            >
              View My Work
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition-colors hover:-translate-y-1 transform duration-300"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition-colors hover:-translate-y-1 transform duration-300"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:gaurav@example.com"
              className="text-foreground/60 hover:text-primary transition-colors hover:-translate-y-1 transform duration-300"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block">
          <ChevronDown className="h-8 w-8 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
