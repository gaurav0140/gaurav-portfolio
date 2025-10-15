import { Card } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "React.js", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "JavaScript", level: 90 },
        { name: "Material UI", level: 88 },
        { name: "Tailwind CSS", level: 85 },
        { name: "HTML/CSS", level: 95 },
      ],
    },
    {
      category: "Backend & Tools",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Java", level: 75 },
        { name: "REST APIs", level: 85 },
        { name: "Git/GitHub", level: 90 },
        { name: "Figma", level: 70 },
        { name: "React Router", level: 88 },
      ],
    },
  ];

  const technologies = [
    "React", "TypeScript", "JavaScript", "Node.js", "Java",
    "Material UI", "Tailwind CSS", "Git", "REST API", "Figma",
    "React Router", "Redux", "Socket.io", "MongoDB", "PostgreSQL",
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-6 glass-card border-border/50">
              <h3 className="text-2xl font-bold mb-6 gradient-text">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-primary font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 animate-fade-in"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-8 glass-card border-border/50">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Technology Stack
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="px-4 py-2 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 cursor-default group"
              >
                <span className="font-medium group-hover:text-primary transition-colors">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Skills;
