import { Card } from "@/components/ui/card";
import { Award, Trophy, Target, Zap } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "GSoC Contributor",
      description: "Selected for Google Summer of Code with Open Healthcare Network",
      date: "2024",
    },
    {
      icon: Award,
      title: "Professional Experience",
      description: "10 months at Studio137 Digital Media Solutions",
      date: "2023-2024",
    },
    {
      icon: Target,
      title: "Advanced Projects",
      description: "Built 15+ production-ready web applications",
      date: "2023-2024",
    },
    {
      icon: Zap,
      title: "Open Source",
      description: "25+ contributions to healthcare interoperability projects",
      date: "2024",
    },
  ];

  return (
    <section className="py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Achievements</span> & Milestones
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              className="p-4 sm:p-6 glass-card border-border/50 hover-lift text-center group"
            >
              <div className="p-3 sm:p-4 rounded-full bg-gradient-to-br from-primary to-accent w-fit mx-auto mb-3 sm:mb-4 group-hover:shadow-[var(--shadow-glow)] transition-shadow">
                <achievement.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="text-base sm:text-lg font-bold mb-2">{achievement.title}</h3>
              <p className="text-xs sm:text-sm text-foreground/70 mb-2">
                {achievement.description}
              </p>
              <p className="text-xs text-primary font-medium">{achievement.date}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
