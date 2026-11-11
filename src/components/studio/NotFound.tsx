import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div>
      <h1 className="text-3xl font-semibold tracking-tight">Page not found</h1>
      <p className="mt-2 text-charcoal/80">This page does not exist.</p>
      <Link to="/" className="mt-6 inline-block text-electric underline underline-offset-4">
        Back to case studies
      </Link>
    </div>
  );
}
