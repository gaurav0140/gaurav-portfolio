import { Card } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 glass-card border-l-4 border-l-primary hover-lift">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 rounded-lg bg-gradient-to-br from-primary to-accent">
                <Briefcase className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">Frontend Developer</h3>
                <p className="text-xl text-primary font-medium mb-2">
                  Studio137 Digital Media Solutions
                </p>
                <div className="flex items-center text-muted-foreground mb-4">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>10 months experience</span>
                </div>
              </div>
            </div>

            <div className="space-y-4 ml-16">
              <p className="text-foreground/80 leading-relaxed">
                Contributed to the development of modern web applications with a focus on creating
                seamless user experiences and maintaining high code quality standards.
              </p>

              <div>
                <h4 className="font-semibold text-lg mb-3">Key Contributions:</h4>
                <ul className="space-y-2 text-foreground/80">
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1">▹</span>
                    <span>
                      Developed complex UI layouts and modular components using React.js and Material UI
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1">▹</span>
                    <span>
                      Built interactive dashboards with data visualization using charts and graphs
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1">▹</span>
                    <span>
                      Integrated RESTful APIs and managed application state with modern patterns
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1">▹</span>
                    <span>
                      Implemented responsive designs ensuring consistent UX across all devices
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1">▹</span>
                    <span>
                      Collaborated with cross-functional teams to deliver features on schedule
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1">▹</span>
                    <span>
                      Maintained code quality through code reviews and best practices
                    </span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 flex flex-wrap gap-2">
                {["React.js", "Material UI", "TypeScript", "JavaScript", "React Router", "REST APIs", "Responsive Design"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;
