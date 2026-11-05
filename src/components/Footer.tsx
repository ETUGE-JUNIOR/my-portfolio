import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/90 text-white py-1">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-gray-500 text-sm algn-center">
              © {currentYear} <span className="text-purple-400">Etuge Marxsim Junior</span>. All rights reserved.
            </p>
          </div>

          <div className="flex gap-2">
            <a
              href="https://www.github.com/ETUGE-JUNIOR"
              className="p-2 bg-transparent rounded-full hover:bg-primary/25 hover:text-purple-500 transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-3 w-3" />
            </a>
            <a
              href="#"
              className="p-2 bg-transparent  rounded-full hover:bg-primary/25 hover:text-purple-500 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-3 w-3" />
            </a>
            <a
              href="#"
              className="p-2 bg-transparent rounded-full hover:bg-primary/25 hover:text-purple-500 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-3 w-3" />
            </a>
            <a
              href="#"
              className="p-2 bg-transparent rounded-full hover:bg-primary/25 hover:text-purple-500 transition-colors"
              aria-label="Email"
            >
              <Mail className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}