import { Button } from "./ui/button";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import { ImageWithFallback } from "./ImageWithFallback";
import { GlowButton } from "./ui/GlowButton";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
    <GlowButton
              onClick={() => {
                // This will trigger download of CV
                // Replace with actual CV file path
                const link = document.createElement('a');
                link.href = '/cv.pdf'; // Update with your actual CV path
                link.download = 'Etuge_Marxsim_Junior_CV.pdf';
                link.click();
              }}
            >
              <Download className="h-5 w-5" />
              Download CV
      </GlowButton>
      <div className="absolute inset-0 opacity-20">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1707528041466-83a325f01a3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYyOTE2NjQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          // src="../assets/imgs/ivoteU-logo-bg.jpg"
          alt="Developer workspace"
          className="w-full h-full object-cover"
        />
        {/* <img src="../assets/imgs/ivoteU-logo-bg.jpg" alt="" className="w-full h-full object-cover" /> */}
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-6">
          <div className="inline-block px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full backdrop-blur-sm">
            <span className="text-blue-400">👋 Welcome to my portfolio</span>
          </div>
        </div>
        
        <h1 className="mb-6">
          Hi, I'm <span className="text-blue-500">Etuge Marxsim Junior</span>
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
            className="bg-blue-600 hover:bg-blue-700"
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
            className="border-gray-600 text-[rgba(0,124,255,0.94)] hover:bg-gray-800"
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
            href="https://github.com/YOUR_GITHUB_USERNAME" 
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
            href="etugemarxsim@example.com" 
            className="p-3 bg-gray-800/50 backdrop-blur-sm rounded-full hover:bg-gray-700 transition-colors border border-gray-700"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}