
import { Card } from "@/components/ui/card";

const About = () => {
  const skills = {
    languages: ["Python", "Java", "C++"],
    web: ["HTML", "CSS", "JavaScript", "Django"],
    databases: ["SQL", "MongoDB"],
    tools: ["VS Code", "Excel", "Forage", "Unstop"],
    core: ["DSA", "OOP", "System Design", "Networking"]
  };

  const softSkills = [
    "Problem-solving", "Adaptability", "Teamwork", "Communication"
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-white via-sage-50/30 to-sage-100/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-sage-200/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-sage-300/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-sage-200/50 rounded-full text-sage-700 text-sm font-medium shadow-lg mb-6">
            <div className="w-2 h-2 bg-sage-500 rounded-full animate-pulse"></div>
            About Me
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-sage-800 via-sage-600 to-sage-700 bg-clip-text text-transparent mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-sage-400 to-sage-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8 animate-slide-up">
            <div className="text-lg text-sage-700 leading-relaxed">
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-sage-400 to-sage-600 rounded-full"></div>
                <p className="mb-8 pl-8">
                  Hi, I'm <span className="font-bold bg-gradient-to-r from-sage-800 to-sage-600 bg-clip-text text-transparent">Saravana Bavya Sri</span> — a curious coder who loves turning ideas into real, impactful tech. From gesture-based voting systems to virtual internships with top firms, I'm all about building, learning, and growing as a developer.
                </p>
              </div>
              
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-sage-400/20 to-sage-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-sage-200/50 shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-sage-500 to-sage-600 rounded-xl flex items-center justify-center">
                      <div className="w-6 h-6 bg-white rounded-md"></div>
                    </div>
                    <h3 className="font-bold text-sage-800 text-xl">Education</h3>
                  </div>
                  <p className="text-sage-600 leading-relaxed">
                    Currently pursuing my passion for technology and innovation through hands-on projects and continuous learning at SASTRA University.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-sage-800 flex items-center gap-3">
                <div className="w-2 h-8 bg-gradient-to-b from-sage-500 to-sage-600 rounded-full"></div>
                Soft Skills
              </h3>
              <div className="flex flex-wrap gap-4">
                {softSkills.map((skill, index) => (
                  <span 
                    key={skill}
                    className="group px-6 py-3 bg-white/80 backdrop-blur-sm text-sage-700 rounded-2xl text-sm font-semibold hover:bg-sage-500 hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg border border-sage-200/50 cursor-default"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8 animate-slide-up delay-200">
            <div>
              <h3 className="text-2xl font-bold text-sage-800 mb-8 flex items-center gap-3">
                <div className="w-2 h-8 bg-gradient-to-b from-sage-500 to-sage-600 rounded-full"></div>
                Technical Skills
              </h3>
              <div className="space-y-6">
                {Object.entries(skills).map(([category, skillList], categoryIndex) => (
                  <Card 
                    key={category} 
                    className="group relative p-6 border-sage-200/50 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm overflow-hidden"
                    style={{ animationDelay: `${categoryIndex * 150}ms` }}
                  >
                    {/* Card Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-sage-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-gradient-to-br from-sage-500 to-sage-600 rounded-xl flex items-center justify-center text-white font-bold text-sm">
                          {category.charAt(0).toUpperCase()}
                        </div>
                        <h4 className="font-bold text-sage-800 capitalize text-lg">{category}</h4>
                      </div>
                      
                      <div className="flex flex-wrap gap-3">
                        {skillList.map((skill, skillIndex) => (
                          <span 
                            key={skill}
                            className="px-4 py-2 bg-gradient-to-r from-sage-600 to-sage-700 text-white text-sm rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                            style={{ animationDelay: `${(categoryIndex * 150) + (skillIndex * 50)}ms` }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
