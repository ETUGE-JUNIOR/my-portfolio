import { useState } from "react";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Navigation } from "./components/Navigation";
import { AllProjects } from "./components/AllProjects";

export default function App() {
  const [showAllProjects, setShowAllProjects] = useState(false);

  if (showAllProjects) {
    return (
      <>
        <Navigation />
        <AllProjects onBack={() => setShowAllProjects(false)} />
        <Footer />
      </>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <div id="home">
        <Hero />
      </div>
      <About />
      <Projects onViewAll={() => setShowAllProjects(true)} />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}