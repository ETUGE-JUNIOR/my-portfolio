import { Link } from "react-router-dom";
import { useI18n } from "../../i18n/context";

export function NotFound() {
  const { ui } = useI18n();
  return (
    <div>
      <h1 className="text-3xl font-semibold tracking-tight">{ui.pageNotFound}</h1>
      <p className="mt-2 text-ink/80">{ui.pageNotFoundText}</p>
      <Link to="/" className="mt-6 inline-block text-accent underline underline-offset-4">
        {ui.backToCaseStudies}
      </Link>
    </div>
  );
}
