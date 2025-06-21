
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sage-50 to-sage-100 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Profile Image */}
        <div className="order-2 md:order-1 flex justify-center">
          <div className="relative">
            <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-700">
              <img 
                src="/lovable-uploads/a28df26f-bb57-4f7b-8cea-a4153159e732.png" 
                alt="Saravana Bavya Sri" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-sage-200 rounded-full opacity-50 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-sage-300 rounded-full opacity-30"></div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="order-1 md:order-2 text-center md:text-left animate-fade-in">
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-medium text-sage-600 mb-2 tracking-wide">Hello, I'm</h2>
              <h1 className="text-5xl md:text-6xl font-bold text-sage-800 leading-tight">
                Saravana
                <br />
                <span className="text-sage-600">Bavya Sri</span>
              </h1>
            </div>
            
            <p className="text-xl text-sage-700 max-w-lg leading-relaxed">
              Curious coder. Real-world builder. 
              <span className="font-semibold text-sage-800"> Tech that speaks.</span>
            </p>
            
            <p className="text-sage-600 max-w-lg">
              Passionate Python developer turning innovative ideas into impactful technology. 
              Specializing in gesture-based applications and web development.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-sage-700 hover:bg-sage-800 text-white px-8 py-3 rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                View My Work <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-sage-300 text-sage-700 hover:bg-sage-50 px-8 py-3 rounded-xl transition-all duration-300"
              >
                Let's Connect
              </Button>
            </div>

            <div className="flex justify-center md:justify-start space-x-6 pt-8">
              <a href="https://github.com/Bavya20" className="text-sage-600 hover:text-sage-800 transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com/in/saravana-bavya-sri-3200272b5" className="text-sage-600 hover:text-sage-800 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="mailto:bavyasri2010@gmail.com" className="text-sage-600 hover:text-sage-800 transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
