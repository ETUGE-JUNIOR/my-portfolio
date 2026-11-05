import { Button } from "./ui/button";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import { ImageWithFallback } from "./ImageWithFallback";
import { GlowButton } from "./ui/GlowButton";
import ProfilePicture from "../assets/imgs/profile-picture.jpg"
import BgImage from '../assets/imgs/bg-img.jpg'

export function Hero() {
  return (
    <section className=" relative min-h-screen flex items-center justify-center bg-linear-to-t  from-black/20 via-black/75 to-black text-white overflow-hidden">
        <div className="flex gap-4 absolute right-4 top-20 items-center ">
            {/* profile picture */}
            <div className=" cursor-pointer border border-amber-400 h-10 w-10 flex justify-center items-center rounded-full shadow-2xl bg-purple-100 overflow-clip align-middle group">
                <ImageWithFallback src={ProfilePicture} alt="My profile picture" className="cursor-pointer w-full h-full object-cover transition-transform group-hover:scale-105 duration-300" />
            </div>

            <GlowButton
                className="group h-10 text-sm"
                onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/cv.pdf'; // Update with your actual CV path
                    link.download = 'Etuge_Marxsim_Junior_CV.pdf';
                    link.click();
                }}
                >
                <Download className="h-5 w-5 text-purple-400 group-hover:text-violet-200 " size={18} />
                Download CV
            </GlowButton>
        </div>
      <div className="absolute inset-0 opacity-20">
        <ImageWithFallback
          src={BgImage}
          alt="Developer workspace"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative z-10 max-w-4xl mt-9 mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-6">
          <div className="inline-block px-4 py-2 bg-purple-600/20 border border-purple-500/30 rounded-full backdrop-blur-sm">
            <span className="text-purple-400">👋 Welcome to my portfolio</span>
          </div>
        </div>
        
        <h1 className="mb-6">
          Hi, I'm <span className="text-purple-400">Etuge Marxsim Junior</span>
        </h1>
        
        <h2 className="mb-6 text-gray-300">
          Frontend Developer & UI/UX Designer
        </h2>
        
        <p className="mb-8 text-gray-400 max-w-2xl mx-auto">
          I craft beautiful and intuitive user experiences through design and code. 
          Specialized in building modern, responsive web applications with React, TypeScript, and JavaScript while ensuring exceptional user interface design.
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <Button
            size="lg" 
            className=" cursor-pointer"
            onClick={() => {
              const contactSection = document.getElementById('contact');
              contactSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <Mail className="mr-2 h-4 w-4" />
            Get In Touch
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className=" cursor-pointer border-purple-600 dark:border-purple-600 text-purple-600 dark:text-purple-400 hover:bg-purple-200 hover:text-purple-600"
            onClick={() => {
              const projectsSection = document.getElementById('projects');
              projectsSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            View Projects
          </Button>
        </div>
        
        <div className="flex gap-4 justify-center">
          <a 
            href="https://github.com/ETUGE-JUNIOR" 
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-800/50 backdrop-blur-sm rounded-full hover:bg-gray-700 transition-colors border border-gray-700"
          >
            <Github className="h-5 w-5" />
          </a>
          <a 
            href="https://linkedin.com/in/YOUR_LINKEDIN_USERNAME" 
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-800/50 backdrop-blur-sm rounded-full hover:bg-gray-700 transition-colors border border-gray-700"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a 
            href="https://gmail.com/etugemarxsimjunior@gmail.com" 
            className="p-3 bg-gray-800/50 backdrop-blur-sm rounded-full hover:bg-gray-700 transition-colors border border-gray-700"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}