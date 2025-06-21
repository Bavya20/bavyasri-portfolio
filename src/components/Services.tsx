
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Settings, User } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Mini Project Prototyping",
      description: "I love working on innovative tech ideas like gesture-controlled interfaces and interactive apps."
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Frontend Development",
      description: "Built and deployed responsive landing pages using modern stacks like Next.js, Tailwind CSS, and GSAP animations."
    },
    {
      icon: <User className="h-8 w-8" />,
      title: "Python Development",
      description: "Custom Python solutions for web applications, automation, and innovative projects with modern frameworks."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-sage-800 mb-4">Services</h2>
          <div className="w-20 h-1 bg-sage-400 mx-auto rounded-full"></div>
          <p className="text-sage-600 mt-6 max-w-2xl mx-auto">
            Specialized services that bring your ideas to life through innovative technology
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="text-center border-sage-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center text-sage-700 group-hover:bg-sage-700 group-hover:text-white transition-colors mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-xl text-sage-800">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sage-600 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
