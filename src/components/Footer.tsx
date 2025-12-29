import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-foreground/80">
              © {currentYear} Gaurav. All rights reserved.
            </p>
            <p className="text-sm text-foreground/60 mt-1 flex items-center justify-center md:justify-start">
              Built with VS Code using React & TypeScript.
            </p>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://github.com/gaurav0140"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition-colors hover:-translate-y-1 transform duration-300"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/gauravpratapsinghs/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition-colors hover:-translate-y-1 transform duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:singhgauravpratap645@gmail.com"
              className="text-foreground/60 hover:text-primary transition-colors hover:-translate-y-1 transform duration-300"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
