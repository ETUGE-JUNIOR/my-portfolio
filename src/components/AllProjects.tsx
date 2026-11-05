import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Github, ArrowLeft } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import ivoteU from "../assets/imgs/ivoteU-logo.png";
import TCF from "../assets/imgs/logo-vr_(icon + text).svg";
import SmartKitchen from "../assets/imgs/smart-kitchen.jpg"
import HbtHome from "../assets/imgs/ht-home.jpg"
interface AllProjectsProps {
    onBack: () => void;
}

export function AllProjects({ onBack }: AllProjectsProps) {
    const allProjects = [
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
        {
            title: " A Habit tracker",
            description: "A creative project exploring advanced frontend techniques and modern web APIs. Currently being built.",
            image: HbtHome,
            tags: ["React", "JavaScript", "HTML5"],
            status: "In Development",
            github: "#",
        },


    ];

    return (
        <div className="min-h-screen bg-secondary pt-24 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-8">
                    <Button variant="default" onClick={onBack} className="mb-4 shadow-2xl">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Home
                    </Button>
                    <h1 className="mb-4">All Projects</h1>
                    <p className="text-gray-600">
                        Browse through my complete portfolio of projects showcasing various technologies and solutions.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {allProjects.map((project, index) => (
                        <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                            <div className="relative h-48 overflow-hidden">
                                <ImageWithFallback
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-300"
                                />
                                <div className="absolute top-3 right-3">
                                    <Badge className="bg-yellow-500 hover:bg-yellow-600">
                                        {project.status}
                                    </Badge>
                                </div>
                            </div>
                            <CardHeader>
                                <CardTitle>{project.title}</CardTitle>
                                <CardDescription>{project.description}</CardDescription>
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
                                        Code
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}