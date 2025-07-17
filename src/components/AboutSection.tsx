import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, GraduationCap, Users, Code } from "lucide-react";

const AboutSection = () => {
  const achievements = [
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Computer Science Engineer",
      description: "P.A. College of Engineering, Mangalore"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "President - Embed Club",
      description: "Leading embedded systems initiatives"
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Technical Lead - GLUG PACE",
      description: "GNU/Linux Users Group at PACE"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Based in Mangalore",
      description: "Karnataka, India"
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            About Me
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Passionate About Technology
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A dedicated Computer Science Engineer from Mangalore, Karnataka, with a deep passion 
            for full-stack development, embedded systems, and emerging technologies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              As the President of the Embed Club and Technical Lead of GLUG PACE at P.A. College of Engineering, 
              I've developed strong leadership skills while maintaining my technical expertise. My journey spans 
              across various domains of technology, from web development to IoT innovations.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              With numerous awards, national-level wins, and hands-on project experience, I bring both 
              technical prowess and leadership excellence to every project I undertake. I'm passionate 
              about creating solutions that make a real impact.
            </p>
            
            <div className="pt-4">
              <h3 className="text-xl font-semibold mb-4">Key Highlights</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">National-level competition winner</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Leadership in technical communities</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Full-stack development expertise</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">IoT and embedded systems specialist</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Achievement Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-primary/20"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                    {achievement.icon}
                  </div>
                  <h3 className="font-semibold mb-2">{achievement.title}</h3>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;