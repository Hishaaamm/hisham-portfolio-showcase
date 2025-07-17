import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Medal, Award, Star } from "lucide-react";

const AchievementsSection = () => {
  const achievements = [
    {
      icon: <Trophy className="h-8 w-8" />,
      title: "1st Prize, ADC 2024",
      subtitle: "IIIT Bangalore",
      description: "Nirbhaya Project - IoT-based women's safety device",
      year: "2024",
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-500/10"
    },
    {
      icon: <Medal className="h-8 w-8" />,
      title: "Runner-up, HackSummit 2024",
      subtitle: "National Hackathon",
      description: "Wish Web App - Social platform for community engagement",
      year: "2024",
      color: "from-gray-400 to-gray-600",
      bgColor: "bg-gray-500/10"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "RC Car Race Winner",
      subtitle: "College Competition",
      description: "1st Place in remote-controlled car racing competition",
      year: "2023",
      color: "from-blue-500 to-indigo-500",
      bgColor: "bg-blue-500/10"
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "Embed Design Challenge",
      subtitle: "2nd Year Achievement",
      description: "Winner of embedded systems design challenge",
      year: "2023",
      color: "from-green-500 to-teal-500",
      bgColor: "bg-green-500/10"
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Achievements
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Recognition & Awards
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Celebrating milestones and recognition in technology competitions and academic excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-primary/20 relative overflow-hidden"
            >
              {/* Background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <CardContent className="p-6 text-center relative z-10">
                {/* Icon with gradient background */}
                <div className={`w-16 h-16 rounded-full ${achievement.bgColor} flex items-center justify-center mx-auto mb-4 relative`}>
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${achievement.color} opacity-20`}></div>
                  <div className={`text-transparent bg-gradient-to-r ${achievement.color} bg-clip-text relative z-10`}>
                    {achievement.icon}
                  </div>
                </div>

                {/* Year badge */}
                <Badge variant="secondary" className="text-xs mb-3">
                  {achievement.year}
                </Badge>

                {/* Content */}
                <h3 className="font-bold text-lg mb-1 leading-tight">
                  {achievement.title}
                </h3>
                <p className="text-primary font-medium text-sm mb-3">
                  {achievement.subtitle}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {achievement.description}
                </p>

                {/* Decorative elements */}
                <div className="absolute top-2 right-2 w-2 h-2 bg-primary/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-2 left-2 w-1 h-1 bg-accent/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional stats */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { number: "10+", label: "Projects Completed" },
            { number: "4", label: "Major Awards" },
            { number: "2", label: "Leadership Roles" },
            { number: "50+", label: "Technologies Used" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;