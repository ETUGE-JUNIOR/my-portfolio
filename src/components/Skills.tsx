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
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-4">Skills & Technologies</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks I work with to build robust applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 border-2 border-gray-100">
              <h3 className="mb-4 font-black text-gray-900 text-2xl">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge key={skillIndex} variant="default" className="bg-blue-600 px-3 py-1 hover:bg-blue-700">
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