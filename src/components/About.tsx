import { Code2, Palette, User, Zap } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export function About() {
  const features = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and well-documented code is my priority.",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Designing beautiful, intuitive interfaces with a focus on user experience and accessibility.",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Building fast, optimized applications that deliver excellent user experiences.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="flex justify-center items-center flex-row-reverse gap-1 mb-4 text-purple-600 text-shadow-lg text-shadow-purple-900/25">About Me <User size={20} /></h2>
          <p className="text-gray-600 max-w-2xl mx-auto dark:text-gray-500">
            I'm a passionate frontend developer and UI/UX designer who loves creating seamless digital experiences. 
            With a strong foundation in <span className="text-purple-400 " >React</span> , <span className="text-purple-400" >TypeScript</span>, and <span className="text-purple-700" >JavaScript</span>, I bring designs to life with clean, efficient code.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="border-2 hover:border-purple-500 shadow-2xl bg-card/35 transition-colors">
                <CardContent className="pt-6">
                  <div className="mb-4 inline-flex p-3 bg-purple-400/20 rounded-lg">
                    <Icon className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="mb-2 text-purple-600">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}