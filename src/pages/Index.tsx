import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import CollaboratorCard from "@/components/CollaboratorCard";
import { projects } from "@/data/projects";
import { collaborators } from "@/data/collaborators";
import { Mail } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <Hero />

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="text-gradient">About Me</span>
          </h2>
          
          <div className="bg-card rounded-2xl p-8 md:p-12 border border-border">
            <p className="text-lg text-foreground leading-relaxed mb-8">
              Hello, I am a seasoned Roblox programmer looking for work. I specialize in logarithmic systems, but I am a veteran in all areas of coding. I've been developing on Roblox for 4 years and take minimal time on my work. From animations to UI, I am your guy to make it happen swiftly and at a lower cost compared to competitors.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-secondary/50 rounded-xl p-6">
                <h3 className="text-2xl font-bold mb-4 text-primary">Things I am best at:</h3>
                <ul className="space-y-2 text-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">▸</span>
                    UI functionality
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">▸</span>
                    DataStoreService
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">▸</span>
                    Client-server communication
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">▸</span>
                    Matchmaking & other algorithms
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">▸</span>
                    Optimizing & upgrading existing code
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">▸</span>
                    Debugging code
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">▸</span>
                    Combat systems & projectiles
                  </li>
                </ul>
              </div>

              <div className="space-y-6">
                <div className="bg-secondary/50 rounded-xl p-6">
                  <h3 className="text-2xl font-bold mb-4 text-primary">Things I cannot do:</h3>
                  <ul className="space-y-2 text-foreground">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">▸</span>
                      Vehicles
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">▸</span>
                      First-person shooter mechanics (to an extent)
                    </li>
                  </ul>
                </div>

                <div className="bg-secondary/50 rounded-xl p-6">
                  <h3 className="text-2xl font-bold mb-4 text-primary">Things I can do:</h3>
                  <ul className="space-y-2 text-foreground">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">▸</span>
                      Everything else
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-secondary/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            <span className="text-gradient">My Projects</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            All the projects I worked on solo as a scripter
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Collaborators Section */}
      <section id="collaborators" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            <span className="text-gradient">Verified Collaborators</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Talented professionals I've worked with
          </p>

          {collaborators.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {collaborators.map((collaborator) => (
                <CollaboratorCard key={collaborator.id} collaborator={collaborator} />
              ))}
            </div>
          ) : (
            <div className="bg-card rounded-2xl p-12 border border-border text-center">
              <p className="text-muted-foreground text-lg">
                No collaborators added yet. Edit <code className="text-primary bg-secondary px-2 py-1 rounded">src/data/collaborators.ts</code> to add verified users you've worked with.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-secondary/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            <span className="text-gradient">Contact Me</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            If you're interested in collaborating or have any questions, feel free to reach out!
          </p>

          <div className="bg-card rounded-2xl p-8 md:p-12 border border-border">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Discord</p>
                  <p className="text-lg font-semibold text-foreground">animuswizurd</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a
                    href="mailto:mugic.wuzd@gmail.com"
                    className="text-lg font-semibold text-foreground hover:text-primary transition-colors"
                  >
                    mugic.wuzd@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            &copy; 2024 Roblox Developer Portfolio, Animuswizurd
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
