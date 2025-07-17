import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code, Palette, Cpu, ArrowRight } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Full-Stack Web Development",
      description: "Building modern, responsive web applications using React, Flask, and other cutting-edge technologies. From frontend interfaces to backend APIs.",
      features: ["React & JavaScript", "Python Flask", "Database Design", "API Development"],
      color: "primary"
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "UI/UX Design",
      description: "Creating intuitive and visually appealing user interfaces with a focus on user experience and modern design principles.",
      features: ["Figma Design", "Responsive Layouts", "User Research", "Prototyping"],
      color: "accent"
    },
    {
      icon: <Cpu className="h-8 w-8" />,
      title: "Embedded Systems & IoT",
      description: "Developing innovative IoT solutions and embedded systems using Arduino, ESP32, STM32, and Raspberry Pi for real-world applications.",
      features: ["Arduino Programming", "IoT Prototyping", "Hardware Integration", "Sensor Networks"],
      color: "primary"
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Services
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            What I Offer
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technology solutions from web development to embedded systems
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-primary/20 relative overflow-hidden"
            >
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <CardHeader className="relative z-10">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
                  service.color === 'primary' ? 'bg-primary/10 text-primary' : 'bg-accent/10 text-accent'
                } group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <CardTitle className="text-xl mb-3">{service.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="relative z-10">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full ${
                        service.color === 'primary' ? 'bg-primary' : 'bg-accent'
                      }`}></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  variant="outline" 
                  className={`w-full group-hover:${service.color === 'primary' ? 'bg-primary hover:text-primary-foreground' : 'bg-accent hover:text-accent-foreground'} transition-colors`}
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;