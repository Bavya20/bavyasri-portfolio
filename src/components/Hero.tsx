import { ArrowRight, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sage-50 via-white to-sage-100">
        <div className="absolute top-20 left-10 w-72 h-72 bg-sage-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-sage-300/20 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-sage-400/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Hero Content */}
        <div className="order-2 lg:order-1 text-center lg:text-left animate-fade-in">
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-sage-200/50 rounded-full text-sage-700 text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105">
              <Sparkles className="h-4 w-4 text-sage-500" />
              Available for new opportunities
            </div>
            
            <div className="space-y-4">
              <h2 className="text-lg font-medium text-sage-600 mb-2 tracking-widest uppercase opacity-80">
                Hello, I'm
              </h2>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-sage-800 via-sage-600 to-sage-700 bg-clip-text text-transparent">
                  Saravana
                </span>
                <br />
                <span className="bg-gradient-to-r from-sage-500 to-sage-600 bg-clip-text text-transparent">
                  Bavya Sri
                </span>
              </h1>
            </div>
            
            <div className="space-y-6">
              <p className="text-2xl md:text-3xl text-sage-700 font-light leading-relaxed">
                Curious coder. Real-world builder.
                <br />
                <span className="font-semibold bg-gradient-to-r from-sage-700 to-sage-800 bg-clip-text text-transparent">
                  Tech that speaks.
                </span>
              </p>
              
              <p className="text-lg text-sage-600 max-w-2xl leading-relaxed opacity-90">Passionate developer blending creativity with code — from gesture-based interfaces to modern web apps using Python, Django, and React. Always curious, always building.</p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button 
                size="lg" 
                className="group bg-gradient-to-r from-sage-600 to-sage-700 hover:from-sage-700 hover:to-sage-800 text-white px-8 py-4 rounded-2xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl shadow-lg"
                onClick={() => scrollToSection('projects')}
              >
                <span className="mr-2">View My Work</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-sage-300 bg-white/80 backdrop-blur-sm text-sage-700 hover:bg-sage-50 hover:border-sage-400 px-8 py-4 rounded-2xl transition-all duration-500 hover:shadow-xl shadow-md"
                onClick={() => scrollToSection('contact')}
              >
                Let's Connect
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start items-center gap-6 pt-8">
              <span className="text-sage-500 text-sm font-medium tracking-wide">Follow me</span>
              <div className="h-px bg-gradient-to-r from-sage-300 to-transparent w-16"></div>
              <div className="flex space-x-4">
                <a href="https://github.com/Bavya20" className="group p-3 bg-white/80 backdrop-blur-sm border border-sage-200/50 rounded-xl text-sage-600 hover:text-sage-800 hover:bg-sage-50 transition-all duration-300 hover:scale-110 hover:shadow-lg">
                  <Github className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </a>
                <a href="https://linkedin.com/in/saravana-bavya-sri-3200272b5" className="group p-3 bg-white/80 backdrop-blur-sm border border-sage-200/50 rounded-xl text-sage-600 hover:text-sage-800 hover:bg-sage-50 transition-all duration-300 hover:scale-110 hover:shadow-lg">
                  <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </a>
                <a href="mailto:bavyasri2010@gmail.com" className="group p-3 bg-white/80 backdrop-blur-sm border border-sage-200/50 rounded-xl text-sage-600 hover:text-sage-800 hover:bg-sage-50 transition-all duration-300 hover:scale-110 hover:shadow-lg">
                  <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Image */}
        <div className="order-1 lg:order-2 flex justify-center">
          <div className="relative group">
            {/* Main Image Container with Rectangular Mask */}
            <div className="relative z-10">
              <div className="w-80 h-96 md:w-96 md:h-[28rem] overflow-hidden shadow-2xl transform group-hover:scale-105 transition-all duration-700 border-4 border-white/50 backdrop-blur-sm bg-white/10 rounded-2xl">
                <div className="w-full h-full relative">
                  {/* Rectangular mask overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-sage-800/10 z-10 rounded-2xl"></div>
                  <img src="/lovable-uploads/747ee52e-0da3-47f7-b698-f617cc01ea75.png" alt="Saravana Bavya Sri" className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700" />
                </div>
              </div>
              
              {/* Glassmorphism Overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-sage-800/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-sage-200 to-sage-300 rounded-2xl opacity-60 animate-pulse transform rotate-12 group-hover:rotate-45 transition-transform duration-700"></div>
            <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-gradient-to-br from-sage-300 to-sage-400 rounded-xl opacity-40 animate-pulse delay-500 transform -rotate-12 group-hover:-rotate-45 transition-transform duration-700"></div>
            <div className="absolute top-1/4 -left-4 w-16 h-16 bg-gradient-to-br from-sage-100 to-sage-200 rounded-full opacity-50 animate-pulse delay-1000"></div>
            
            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-sage-400/20 to-sage-500/20 blur-xl scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-sage-500">
        <span className="text-sm font-medium tracking-wide">Scroll to explore</span>
        <div className="w-px h-12 bg-gradient-to-b from-sage-400 to-transparent animate-pulse"></div>
      </div>
    </section>;
};

export default Hero;
