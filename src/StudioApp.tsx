import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Shell } from "./components/studio/Shell";
import { Hero } from "./components/studio/Hero";
import { CaseStudyList } from "./components/studio/CaseStudyList";
import { Services } from "./components/studio/Services";
import { TeamBlock } from "./components/studio/TeamBlock";
import { StackBadges } from "./components/studio/StackBadges";
import { Contact } from "./components/studio/Contact";
import { TeamProfile } from "./components/studio/TeamProfile";
import { NotFound } from "./components/studio/NotFound";
import { IconGallery } from "./icons/IconGallery";
import { I18nProvider } from "./i18n/I18nProvider";
import { ThemeProvider } from "./theme/ThemeProvider";

function Home() {
  return (
    <div className="grid gap-24">
      <Hero />
      <CaseStudyList />
      <Services />
      <TeamBlock />
      <StackBadges />
      <Contact />
    </div>
  );
}

export default function StudioApp() {
  return (
    <I18nProvider>
      <ThemeProvider>
        <BrowserRouter>
          <Shell>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/team/:slug" element={<TeamProfile />} />
              {import.meta.env.DEV && <Route path="/icons" element={<IconGallery />} />}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Shell>
        </BrowserRouter>
      </ThemeProvider>
    </I18nProvider>
  );
}
