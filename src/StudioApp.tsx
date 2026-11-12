import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Shell } from "./components/studio/Shell";
import { Hero } from "./components/studio/Hero";
import { CaseStudyList } from "./components/studio/CaseStudyList";
import { Services } from "./components/studio/Services";
import { TeamBlock } from "./components/studio/TeamBlock";
import { StackBadges } from "./components/studio/StackBadges";
import { TeamProfile } from "./components/studio/TeamProfile";
import { NotFound } from "./components/studio/NotFound";

function Home() {
  return (
    <div className="grid gap-24">
      <Hero />
      <CaseStudyList />
      <Services />
      <TeamBlock />
      <StackBadges />
    </div>
  );
}

export default function StudioApp() {
  return (
    <BrowserRouter>
      <Shell>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team/:slug" element={<TeamProfile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Shell>
    </BrowserRouter>
  );
}
