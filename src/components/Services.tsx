import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Settings, User, Sparkles } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Mini Project Prototyping",
      description: "I love working on tech projects that solve real-world problems — from gesture-controlled interfaces to smart, user-friendly web apps.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Frontend Development",
      description: "Built and deployed responsive landing pages using modern stacks like Next.js, Tailwind CSS, and GSAP animations.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <User className="h-8 w-8" />,
      title: "Python Development",
      description: "Custom Python solutions for web applications, automation, and innovative projects with modern frameworks.",
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-white via-sage-50/30 to-sage-100/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-sage-200/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-sage-300/15 rounded-full blur-3xl animate-pulse delay-700"></div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-sage-200/50 rounded-full text-sage-700 text-sm font-medium shadow-lg mb-6">
            <Sparkles className="h-4 w-4 text-sage-500" />
            What I Offer
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-sage-800 via-sage-600 to-sage-700 bg-clip-text text-transparent mb-6">
            Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-sage-400 to-sage-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-sage-600 max-w-3xl mx-auto leading-relaxed">
            Specialized services that bring your ideas to life through innovative technology
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group relative text-center border-sage-200/50 hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-4 bg-white/80 backdrop-blur-sm overflow-hidden animate-slide-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Card Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-sage-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-sage-400/10 to-sage-500/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <CardHeader className="relative z-10 pb-6">
                <div className="relative mx-auto mb-6 group/icon">
                  {/* Icon Background with Gradient */}
                  <div className={`relative w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-2xl`}>
                    {service.icon}
                    
                    {/* Sparkle Effect */}
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                    <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-white rounded-full opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300 animate-pulse delay-200"></div>
                  </div>
                  
                  {/* Floating Ring */}
                  <div className="absolute inset-0 border-2 border-sage-300/30 rounded-2xl scale-110 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500"></div>
                </div>
                
                <CardTitle className="text-2xl text-sage-800 group-hover:text-sage-900 transition-colors duration-300 mb-4">
                  {service.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="relative z-10">
                <CardDescription className="text-sage-600 leading-relaxed text-base group-hover:text-sage-700 transition-colors duration-300">
                  {service.description}
                </CardDescription>
                
                {/* Bottom Accent Line */}
                <div className="mt-6 w-0 h-1 bg-gradient-to-r from-sage-400 to-sage-600 mx-auto rounded-full group-hover:w-16 transition-all duration-500"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
