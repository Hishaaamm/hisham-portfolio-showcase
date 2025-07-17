import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Award } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Nirbhaya",
      description: "IoT-based women's safety device that won 1st Prize at ADC 2024 at IIIT Bangalore. Features real-time location tracking and emergency alerts.",
      technologies: ["IoT", "Arduino", "GPS", "GSM", "Mobile App"],
      role: "Lead Developer",
      award: "🏆 1st Prize ADC 2024",
      category: "IoT",
      image: "bg-gradient-to-br from-red-500/20 to-pink-500/20"
    },
    {
      title: "Playtone",
      description: "Comprehensive turf booking platform with user management, booking system, and payment integration. Streamlines sports facility reservations.",
      technologies: ["React", "Node.js", "MongoDB", "Payment Gateway"],
      role: "Full-Stack Developer",
      category: "Web Development",
      image: "bg-gradient-to-br from-green-500/20 to-blue-500/20"
    },
    {
      title: "ConversAI",
      description: "Advanced chatbot application powered by Llama 2 model and built with Streamlit. Features natural language processing and conversational AI.",
      technologies: ["Python", "Llama 2", "Streamlit", "NLP", "AI/ML"],
      role: "AI Developer",
      category: "AI/ML",
      image: "bg-gradient-to-br from-purple-500/20 to-indigo-500/20"
    },
    {
      title: "Smart Store",
      description: "E-commerce platform developed during internship with modern UI/UX, product management, and shopping cart functionality.",
      technologies: ["React", "Flask", "PostgreSQL", "UI/UX"],
      role: "Frontend Developer",
      category: "E-commerce",
      image: "bg-gradient-to-br from-orange-500/20 to-yellow-500/20"
    },
    {
      title: "Wish Web App",
      description: "Runner-up project at HackSummit 2024. A social platform for sharing and fulfilling wishes with community engagement features.",
      technologies: ["React", "Firebase", "Real-time DB", "PWA"],
      role: "Team Lead",
      award: "🥈 Runner-up HackSummit 2024",
      category: "Social Platform",
      image: "bg-gradient-to-br from-teal-500/20 to-cyan-500/20"
    },
    {
      title: "RC Car Race Winner",
      description: "Custom-built remote-controlled car that won 1st place in college competition. Features advanced motor control and wireless communication.",
      technologies: ["Arduino", "RF Communication", "Motor Control", "Electronics"],
      role: "Hardware Engineer",
      award: "🥇 1st Place RC Car Race",
      category: "Hardware",
      image: "bg-gradient-to-br from-gray-500/20 to-slate-500/20"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Portfolio
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A showcase of innovative projects spanning web development, IoT, AI, and embedded systems
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-primary/20 overflow-hidden"
            >
              {/* Project Image/Placeholder */}
              <div className={`h-48 ${project.image} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <Badge variant="secondary" className="text-xs">
                    {project.category}
                  </Badge>
                </div>
                {project.award && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-accent text-accent-foreground">
                      <Award className="w-3 h-3 mr-1" />
                      Award
                    </Badge>
                  </div>
                )}
              </div>

              <CardHeader>
                <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                {project.award && (
                  <Badge variant="outline" className="text-xs w-fit border-accent text-accent">
                    {project.award}
                  </Badge>
                )}
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <p className="text-xs font-medium mb-2 text-primary">Role: {project.role}</p>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{project.technologies.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1 text-xs">
                    <ExternalLink className="w-3 h-3 mr-1" />
                    Demo
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 text-xs">
                    <Github className="w-3 h-3 mr-1" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;