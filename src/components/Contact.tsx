
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, User, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-sage-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-sage-800 mb-4">Let's Connect</h2>
          <div className="w-20 h-1 bg-sage-400 mx-auto rounded-full"></div>
          <p className="text-sage-600 mt-6 max-w-2xl mx-auto">
            Ready to collaborate on something amazing? Let's build the future together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-sage-800 mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Mail className="h-5 w-5 text-sage-600" />
                  <span className="text-sage-700">bavyasri2010@gmail.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <User className="h-5 w-5 text-sage-600" />
                  <span className="text-sage-700">+91 7780283794</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-sage-800 mb-4">Find me online</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://linkedin.com/in/saravana-bavya-sri-3200272b5"
                  className="w-12 h-12 bg-sage-700 text-white rounded-full flex items-center justify-center hover:bg-sage-800 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="https://github.com/Bavya20"
                  className="w-12 h-12 bg-sage-700 text-white rounded-full flex items-center justify-center hover:bg-sage-800 transition-colors"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a 
                  href="mailto:bavyasri2010@gmail.com"
                  className="w-12 h-12 bg-sage-700 text-white rounded-full flex items-center justify-center hover:bg-sage-800 transition-colors"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="border-sage-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl text-sage-800">Send a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sage-700">Name</Label>
                <Input 
                  id="name" 
                  placeholder="Your name"
                  className="border-sage-200 focus:border-sage-400 focus:ring-sage-200"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sage-700">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="your.email@example.com"
                  className="border-sage-200 focus:border-sage-400 focus:ring-sage-200"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-sage-700">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="border-sage-200 focus:border-sage-400 focus:ring-sage-200"
                />
              </div>
              <Button 
                className="w-full bg-sage-700 hover:bg-sage-800 text-white py-3 transition-all duration-300 transform hover:scale-105"
              >
                Send Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
