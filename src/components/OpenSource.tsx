import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, GitPullRequest, Star, ExternalLink } from "lucide-react";

const OpenSource = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Open Source & <span className="gradient-text">GSoC</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <Card className="max-w-4xl mx-auto p-8 glass-card border-border/50 hover-lift">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-4 rounded-lg bg-gradient-to-br from-primary to-accent animate-glow">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-2">Google Summer of Code Contributor</h3>
              <p className="text-xl text-primary font-medium">
                Open Healthcare Network
              </p>
            </div>
          </div>

          <div className="space-y-6 ml-0 sm:ml-20">
            <p className="text-lg text-foreground/80 leading-relaxed">
              Currently preparing for and contributing to{" "}
              <span className="font-semibold text-primary">Google Summer of Code (GSoC)</span> with
              the Open Healthcare Network, focusing on building React-based healthcare dashboards that
              promote global healthcare interoperability.
            </p>

            <div>
              <h4 className="font-semibold text-lg mb-3">Contributions & Impact:</h4>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">▹</span>
                  <span>
                    Developing FHIR-compliant healthcare data visualization components
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">▹</span>
                  <span>
                    Building patient management interfaces with emphasis on data privacy and security
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">▹</span>
                  <span>
                    Collaborating with international developers on healthcare interoperability standards
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">▹</span>
                  <span>
                    Contributing to open-source documentation and code reviews
                  </span>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center p-4 rounded-lg bg-secondary/50 border border-border/50">
                <GitPullRequest className="h-6 w-6 text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold">15+</p>
                <p className="text-sm text-muted-foreground">Pull Requests</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-secondary/50 border border-border/50">
                <Star className="h-6 w-6 text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold">25+</p>
                <p className="text-sm text-muted-foreground">Contributions</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-secondary/50 border border-border/50">
                <Heart className="h-6 w-6 text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold">3+</p>
                <p className="text-sm text-muted-foreground">Projects</p>
              </div>
            </div>

            <div className="pt-4">
              <Button
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90"
                asChild
              >
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View GitHub Profile
                </a>
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default OpenSource;
