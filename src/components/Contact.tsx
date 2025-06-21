
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, User, Github, Linkedin, Send, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-sage-50/50 via-white to-sage-100/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-sage-200/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-sage-300/15 rounded-full blur-3xl animate-float delay-1000"></div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-sage-200/50 rounded-full text-sage-700 text-sm font-medium shadow-lg mb-6">
            <Send className="h-4 w-4 text-sage-500" />
            Get In Touch
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-sage-800 via-sage-600 to-sage-700 bg-clip-text text-transparent mb-6">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-sage-400 to-sage-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-sage-600 max-w-3xl mx-auto leading-relaxed">
            Ready to collaborate on something amazing? Let's build the future together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8 animate-slide-up">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-sage-400/20 to-sage-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-sage-200/50 shadow-xl group-hover:shadow-2xl transition-all duration-500">
                <h3 className="text-3xl font-bold text-sage-800 mb-8 flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-sage-500 to-sage-600 rounded-xl flex items-center justify-center">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  Get in Touch
                </h3>
                
                <div className="space-y-6">
                  <div className="group/item flex items-center space-x-4 p-4 rounded-xl hover:bg-sage-50/50 transition-colors">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-red-500 rounded-xl flex items-center justify-center text-white group-hover/item:scale-110 transition-transform">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-sage-500 font-medium">Email</p>
                      <span className="text-sage-700 font-semibold">bavyasri2010@gmail.com</span>
                    </div>
                  </div>
                  
                  <div className="group/item flex items-center space-x-4 p-4 rounded-xl hover:bg-sage-50/50 transition-colors">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-500 rounded-xl flex items-center justify-center text-white group-hover/item:scale-110 transition-transform">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-sage-500 font-medium">Phone</p>
                      <span className="text-sage-700 font-semibold">+91 7780283794</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-sage-400/20 to-sage-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-sage-200/50 shadow-xl group-hover:shadow-2xl transition-all duration-500">
                <h4 className="text-xl font-bold text-sage-800 mb-6 flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-sage-500 to-sage-600 rounded-lg flex items-center justify-center">
                    <User className="h-4 w-4 text-white" />
                  </div>
                  Find me online
                </h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://linkedin.com/in/saravana-bavya-sri-3200272b5"
                    className="group/link w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl flex items-center justify-center hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-110 hover:shadow-xl"
                  >
                    <Linkedin className="h-6 w-6 group-hover/link:scale-110 transition-transform" />
                  </a>
                  <a 
                    href="https://github.com/Bavya20"
                    className="group/link w-14 h-14 bg-gradient-to-br from-gray-700 to-gray-800 text-white rounded-2xl flex items-center justify-center hover:from-gray-800 hover:to-gray-900 transition-all duration-300 transform hover:scale-110 hover:shadow-xl"
                  >
                    <Github className="h-6 w-6 group-hover/link:scale-110 transition-transform" />
                  </a>
                  <a 
                    href="mailto:bavyasri2010@gmail.com"
                    className="group/link w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 text-white rounded-2xl flex items-center justify-center hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-110 hover:shadow-xl"
                  >
                    <Mail className="h-6 w-6 group-hover/link:scale-110 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-up delay-200">
            <Card className="relative group border-sage-200/50 shadow-2xl bg-white/80 backdrop-blur-sm overflow-hidden">
              {/* Card Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-sage-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <CardHeader className="relative z-10">
                <CardTitle className="text-2xl text-sage-800 flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-sage-500 to-sage-600 rounded-xl flex items-center justify-center">
                    <Send className="h-5 w-5 text-white" />
                  </div>
                  Send a Message
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-6 relative z-10">
                <div className="space-y-3">
                  <Label htmlFor="name" className="text-sage-700 font-semibold">Name</Label>
                  <Input 
                    id="name" 
                    placeholder="Your name"
                    className="border-sage-200/50 focus:border-sage-400 focus:ring-sage-200 bg-white/80 backdrop-blur-sm transition-all duration-300 hover:shadow-md focus:shadow-lg"
                  />
                </div>
                
                <div className="space-y-3">
                  <Label htmlFor="email" className="text-sage-700 font-semibold">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="your.email@example.com"
                    className="border-sage-200/50 focus:border-sage-400 focus:ring-sage-200 bg-white/80 backdrop-blur-sm transition-all duration-300 hover:shadow-md focus:shadow-lg"
                  />
                </div>
                
                <div className="space-y-3">
                  <Label htmlFor="message" className="text-sage-700 font-semibold">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="border-sage-200/50 focus:border-sage-400 focus:ring-sage-200 bg-white/80 backdrop-blur-sm transition-all duration-300 hover:shadow-md focus:shadow-lg resize-none"
                  />
                </div>
                
                <Button 
                  className="w-full bg-gradient-to-r from-sage-600 to-sage-700 hover:from-sage-700 hover:to-sage-800 text-white py-4 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl group/btn"
                >
                  <span className="mr-2">Send Message</span>
                  <Send className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
