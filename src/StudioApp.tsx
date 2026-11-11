                                                                                                                         import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Shell } from "./components/studio/Shell";
import { CaseStudyList } from "./components/studio/CaseStudyList";
import { StackBadges } from "./components/studio/StackBadges";
import { TeamProfile } from "./components/studio/TeamProfile";
import { NotFound } from "./components/studio/NotFound";

function Home() {
  return (
    <>
      <CaseStudyList />
      <StackBadges />
    </>
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
