import { useLocation } from "react-router-dom";
import { members } from "../../data/team";
import { useI18n } from "../../i18n/context";
import { useActiveSection } from "./useActiveSection";

export interface NavItem {
  label: string;
  to: string;
  /** The visitor is here right now (section on screen, or the profile page). */
  current: boolean;
  /** A separate page, not a section of the home page: marked aria-current="page" instead of "location". */
  page: boolean;
}

/** Home-page sections that the navigation tracks, in page order. */
const sectionIds = ["projects", "services", "team", "stack", "contact"] as const;

/** One list of links for both the header (large screens) and the drawer (medium and small screens). */
export function useNavItems(): NavItem[] {
  const { ui } = useI18n();
  const { pathname } = useLocation();
  const onHome = pathname === "/";
  const section = useActiveSection(sectionIds, onHome);
  const profile = `/team/${members[0].slug}`;

  return [
    { label: ui.nav.home, to: "/", current: onHome && section === null, page: false },
    { label: ui.nav.projects, to: "/#projects", current: section === "projects", page: false },
    { label: ui.nav.services, to: "/#services", current: section === "services", page: false },
    { label: ui.nav.team, to: "/#team", current: section === "team", page: false },
    { label: ui.nav.stack, to: "/#stack", current: section === "stack", page: false },
    { label: ui.nav.contact, to: "/#contact", current: section === "contact", page: false },
    { label: ui.nav.profile, to: profile, current: pathname.startsWith("/team/"), page: true },
  ];
}
