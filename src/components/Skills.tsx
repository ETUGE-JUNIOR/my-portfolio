import { Rocket } from "lucide-react";
import { Badge } from "./ui/badge";

export function Skills() {
  const skillCategories = [
    {
      category: "Frontend Development",
      skills: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3","Bootstrap", "Tailwind CSS"],
    },
    {
      category: "UI/UX Design",
      skills: ["Figma", "Adobe XD", "Wireframing", "Prototyping", "User Research", "Responsive Design"],
    },
    {
      category: "Tools & Others",
      skills: ["Git", "GitHub", "VS Code", "npm", "Webpack", "REST APIs"],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="flex justify-center items-center flex-row-reverse gap-1 mb-4 text-purple-600 text-shadow-lg text-shadow-purple-900/25">Skills & Technologies <Rocket size={20} /> </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks I work with to build robust applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-card rounded-2xl p-6 border-0 order-border dark:border-none shadow-2xl">
              <h3 className="mb-4 font-black text-primary text-2xl">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge key={skillIndex} variant="default" className="bg-purple-300 px-3 py-1 text-purple-700 hover:bg-purple-400 hover:text-purple-900">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}