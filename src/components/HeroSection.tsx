import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-glow to-accent opacity-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary/20 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 right-20 w-4 h-4 bg-accent rounded-full"></div>
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full"></div>
      
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 relative z-10">
        {/* Content */}
        <div className="flex-1 text-center lg:text-left animate-fade-in">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              👋 Hello, I'm
            </span>
            <h1 className="text-5xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              K Mohammad Hisham
            </h1>
            <h2 className="text-2xl lg:text-3xl text-muted-foreground mb-6">
              Computer Science Engineer
            </h2>
          </div>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
            Tech Enthusiast • Full-Stack Developer • IoT Innovator
          </p>
          
          <p className="text-base text-muted-foreground mb-8 max-w-2xl leading-relaxed">
            Passionate about full-stack development, embedded systems, and emerging technologies. 
            President of Embed Club and Technical Lead of GLUG PACE at P.A. College of Engineering.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow"
            >
              View My Work <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Contact Me
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center lg:justify-start gap-4">
            <Button 
              size="icon" 
              variant="outline" 
              className="hover:bg-primary hover:text-primary-foreground"
              asChild
            >
              <a href="https://github.com/hishaaamm" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button 
              size="icon" 
              variant="outline" 
              className="hover:bg-primary hover:text-primary-foreground"
              asChild
            >
              <a href="https://linkedin.com/in/hisham313" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button 
              size="icon" 
              variant="outline" 
              className="hover:bg-primary hover:text-primary-foreground"
              asChild
            >
              <a href="mailto:hishammohd313@gmail.com">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
        
        {/* Profile Image */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="relative">
            <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <div className="text-6xl font-bold text-primary">MH</div>
              </div>
            </div>
            {/* Decorative ring */}
            <div className="absolute -inset-4 border-2 border-dashed border-primary/30 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;