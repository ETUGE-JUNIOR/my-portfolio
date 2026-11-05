import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Github, ArrowRight, FileCheck } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import ivoteU from "../assets/imgs/ivoteU-logo-bg.jpg";
import TCF from "../assets/imgs/logo-vr_(icon + text).svg";
import SmartKitchen from "../assets/imgs/smart-kitchen.jpg"
interface ProjectsProps {
    onViewAll: () => void;
}

export function Projects({ onViewAll }: ProjectsProps) {
    const projects = [
        {
            title: "Gestion de vote  en ligne ( IvoteU )",
            description: "A modern web application built with React and TypeScript. Currently in development with core features being implemented.",
            image: ivoteU,
            tags: ["React", "JavaScript", "Tailwind CSS"],
            status: "In Development",
            github: "#",
        },
        {
            title: "🍁 TCF CANADA ",
            description: "Une plateforme web de révision et d'exercices pour le TCF Canada, permettant aux candidats de s'exercer sur des anciennes épreuves avec correction automatique et suivi des résultats.",
            image: TCF,
            tags: ["JavaScript", "CSS3", "React", "Tailwind CSS"],
            status: "In Development",
            github: "#",
        },
        {
            title: " AI Recipe Generator",
            description: " A mobile app that allows users to manage ingredients, plan meals, and generate recipes (including traditional Cameroonian dishes) using AI. Currently being built.",
            image: SmartKitchen,
            tags: ["React", "JavaScript", "HTML5"],
            status: "In Development",
            github: "#",
        },
    ];

    return (
        <section id="projects" className="py-20 bg-secondary">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="flex justify-center items-center flex-row-reverse gap-1 mb-4 text-purple-600 text-shadow-lg text-shadow-purple-900/25">Projects <FileCheck size={20} /> </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Here are some projects I'm currently working on. All code is available on GitHub as I continue to build and refine them.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <Card key={index} className="overflow-hidden hover:shadow-lg bg-card transition-shadow group">
                            <div className="relative h-48 overflow-hidden">
                                <div className="absolute h-full w-full top-0 left-0 bg-grblack/40 z-10"></div>
                                <ImageWithFallback
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-300 bg-card"
                                />
                                <div className="absolute -top-1 -right-1 z-20">
                                    <Badge variant={'destructive'} className=" rounded-tl-none rounded-br-none">
                                        {project.status}
                                    </Badge>
                                </div>
                            </div>
                            <CardHeader>
                                <CardTitle>{project.title}</CardTitle>
                                <CardDescription className="line-clamp-4">{project.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, tagIndex) => (
                                        <Badge key={tagIndex} variant="secondary" className="bg-purple-300 px-3 py-1 text-purple-700 hover:bg-purple-400 hover:text-purple-900">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                                <div className="flex gap-2">
                                    <Button size="sm" variant="outline" className="flex-1">
                                        <Github className="mr-2 h-4 w-4" />
                                        View Code
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Button onClick={onViewAll} size="lg" variant={'default'} className="group">
                        View All Projects
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </div>
            </div>
        </section>
    );
}