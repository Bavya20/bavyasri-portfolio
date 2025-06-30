
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Star, Code, Zap } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Gesture-Based Voting System",
      description: "Revolutionary voting system using nose/eyebrow gestures for accessibility. Features Django backend with secure authentication, Flask integration, and virtual keyboard interface.",
      tools: ["Python", "OpenCV", "Dlib", "Django", "Flask", "SQLite"],
      role: "Gesture Interface Developer & Django Backend Developer",
      featured: true,
      githubUrl: "https://github.com/Bavya20/Smart-E-voting-System.git",
      achievements: [
        "Gesture recognition with 95% accuracy",
        "Secure Django backend with user authentication",
        "Accessible interface for disabled users",
        "Real-time gesture tracking"
      ]
    },
    {
      title: "Django Telegram Bot Integration",
      description: "Backend system with bot-powered user interaction and background task handling.",
      tools: ["Django", "Django REST Framework", "Celery + Redis", "Telegram Bot API", "SQLite/PostgreSQL"],
      role: "Backend Developer",
      featured: false,
      githubUrl: "https://github.com/Bavya20/django-intern-project.git"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-gradient-to-br from-sage-50/50 via-white to-sage-100/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-40 left-20 w-72 h-72 bg-sage-300/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-40 right-20 w-96 h-96 bg-sage-200/15 rounded-full blur-3xl animate-float delay-1000"></div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-sage-200/50 rounded-full text-sage-700 text-sm font-medium shadow-lg mb-6">
            <Code className="h-4 w-4 text-sage-500" />
            Featured Work
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-sage-800 via-sage-600 to-sage-700 bg-clip-text text-transparent mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-sage-400 to-sage-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-sage-600 max-w-3xl mx-auto leading-relaxed">
            Innovative solutions that showcase my passion for creating impactful technology
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`group relative ${project.featured ? 'border-sage-300/50 shadow-2xl' : 'border-sage-200/50'} hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-3 bg-white/80 backdrop-blur-sm overflow-hidden animate-slide-up`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Card Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-sage-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {project.featured && (
                <div className="absolute top-6 right-6 z-20">
                  <div className="flex items-center gap-2 bg-gradient-to-r from-sage-600 to-sage-700 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    <Star className="h-4 w-4 fill-current" />
                    Featured
                  </div>
                </div>
              )}

              <CardHeader className="relative z-10 pb-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-sage-500 to-sage-600 rounded-xl flex items-center justify-center text-white">
                        <Zap className="h-6 w-6" />
                      </div>
                      <CardTitle className="text-3xl text-sage-800 group-hover:text-sage-900 transition-colors">
                        {project.title}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-sage-600 text-lg leading-relaxed mb-4">
                      {project.description}
                    </CardDescription>
                    <div className="flex items-center gap-2 text-sage-700 font-semibold">
                      <div className="w-2 h-2 bg-sage-500 rounded-full"></div>
                      {project.role}
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-8 relative z-10">
                <div className="flex flex-wrap gap-3">
                  {project.tools.map((tool, toolIndex) => (
                    <span 
                      key={tool}
                      className="px-4 py-2 bg-sage-100/80 text-sage-700 rounded-xl text-sm font-semibold border border-sage-200/50 hover:bg-sage-200/80 transition-colors duration-300"
                      style={{ animationDelay: `${(index * 200) + (toolIndex * 50)}ms` }}
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                {project.achievements && (
                  <div className="relative group/achievements">
                    <div className="absolute inset-0 bg-gradient-to-r from-sage-400/10 to-sage-500/10 rounded-2xl blur-xl opacity-0 group-hover/achievements:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative bg-white/90 backdrop-blur-sm p-8 rounded-2xl border border-sage-200/50 shadow-lg group-hover/achievements:shadow-xl transition-all duration-500">
                      <h4 className="font-bold text-sage-800 mb-6 text-lg flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-sage-500 to-sage-600 rounded-lg flex items-center justify-center">
                          <Star className="h-4 w-4 text-white fill-current" />
                        </div>
                        Key Achievements
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {project.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-center text-sage-600 group/item hover:text-sage-800 transition-colors">
                            <div className="w-3 h-3 bg-gradient-to-r from-sage-400 to-sage-500 rounded-full mr-4 group-hover/item:scale-110 transition-transform"></div>
                            <span className="leading-relaxed">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button 
                    variant="outline" 
                    className="group/btn border-sage-300 text-sage-700 hover:bg-sage-50 hover:border-sage-400 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                    View Code
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
