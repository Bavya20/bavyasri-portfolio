
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
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-sage-800 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-sage-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="text-lg text-sage-700 leading-relaxed">
              <p className="mb-6">
                Hi, I'm <span className="font-semibold text-sage-800">Saravana Bavya Sri</span> — a curious coder who loves turning ideas into real, impactful tech. From gesture-based voting systems to virtual internships with top firms, I'm all about building, learning, and growing as a developer.
              </p>
              
              <div className="bg-sage-50 p-6 rounded-xl">
                <h3 className="font-semibold text-sage-800 mb-3">Education</h3>
                <p className="text-sage-600">
                  Currently pursuing my passion for technology and innovation through hands-on projects and continuous learning.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-sage-800 mb-4">Soft Skills</h3>
              <div className="flex flex-wrap gap-3">
                {softSkills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-4 py-2 bg-sage-100 text-sage-700 rounded-full text-sm font-medium hover:bg-sage-200 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-sage-800 mb-6">Technical Skills</h3>
              <div className="space-y-4">
                {Object.entries(skills).map(([category, skillList]) => (
                  <Card key={category} className="p-4 border-sage-200 hover:shadow-lg transition-shadow">
                    <h4 className="font-medium text-sage-700 capitalize mb-3">{category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill) => (
                        <span 
                          key={skill}
                          className="px-3 py-1 bg-sage-700 text-white text-sm rounded-lg font-medium"
                        >
                          {skill}
                        </span>
                      ))}
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
