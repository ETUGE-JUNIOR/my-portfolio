import { Code2, Palette, Zap } from "lucide-react";
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
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-4">About Me</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I'm a passionate frontend developer and UI/UX designer who loves creating seamless digital experiences. 
            With a strong foundation in <span className="text-blue-700" >React</span> , <span className="text-blue-700" >TypeScript</span>, and <span className="text-blue-700" >JavaScript</span>, I bring designs to life with clean, efficient code.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="border-2 hover:border-blue-500 transition-colors">
                <CardContent className="pt-6">
                  <div className="mb-4 inline-flex p-3 bg-blue-100 rounded-lg">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="mb-2">{feature.title}</h3>
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