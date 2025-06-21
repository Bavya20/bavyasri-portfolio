
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ArrowRight } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Gesture-Based Blockchain Voting System",
      description: "Revolutionary voting system using nose/eyebrow gestures for accessibility. Features secure blockchain logic, Flask backend, and virtual keyboard interface.",
      tools: ["Python", "OpenCV", "Dlib", "Flask", "SQLite", "Blockchain"],
      role: "Gesture Interface Developer & Flask Integrator",
      featured: true,
      achievements: [
        "Gesture recognition with 95% accuracy",
        "Secure blockchain voting implementation",
        "Accessible interface for disabled users",
        "Real-time gesture tracking"
      ]
    },
    {
      title: "Custom Landing Page",
      description: "Modern, responsive landing page with smooth animations and interactive elements.",
      tools: ["Next.js", "Tailwind CSS", "GSAP", "Netlify"],
      role: "Frontend Developer",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-sage-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-sage-800 mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-sage-400 mx-auto rounded-full"></div>
          <p className="text-sage-600 mt-6 max-w-2xl mx-auto">
            Innovative solutions that showcase my passion for creating impactful technology
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`${project.featured ? 'border-sage-300 shadow-xl' : 'border-sage-200'} hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}
            >
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl text-sage-800 mb-2">{project.title}</CardTitle>
                    <CardDescription className="text-sage-600 text-lg leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </div>
                  {project.featured && (
                    <span className="bg-sage-700 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  )}
                </div>
                <p className="text-sage-700 font-medium">{project.role}</p>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span 
                      key={tool}
                      className="px-3 py-1 bg-sage-200 text-sage-700 rounded-lg text-sm font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                {project.achievements && (
                  <div className="bg-white p-6 rounded-xl border border-sage-200">
                    <h4 className="font-semibold text-sage-800 mb-3">Key Achievements</h4>
                    <ul className="space-y-2">
                      {project.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-center text-sage-600">
                          <div className="w-2 h-2 bg-sage-400 rounded-full mr-3"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="flex gap-4 pt-4">
                  <Button 
                    variant="outline" 
                    className="border-sage-300 text-sage-700 hover:bg-sage-100"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </Button>
                  <Button className="bg-sage-700 hover:bg-sage-800 text-white">
                    Live Demo <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
