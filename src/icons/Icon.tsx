import { icons, type IconName } from "./registry";

export type { IconName };

interface IconProps {
  name: IconName;
  /** Rendered size in px. Icons scale from their own viewBox, so 16px and 24px sources both work. */
  size?: number;
  /** Set only for an icon that stands alone with no text beside it. Otherwise it is hidden from screen readers. */
  label?: string;
  className?: string;
}

/** Inline SVG from the generated registry. Colour comes from the surrounding text colour (currentColor). */
export function Icon({ name, size = 16, label, className }: IconProps) {
  const { viewBox, fill, body } = icons[name];
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      width={size}
      height={size}
      fill={fill}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      focusable="false"
      className={"shrink-0 " + (className ?? "")}
      // The body comes from this repo's own SVG files, checked by scripts/build-icons.mjs. Never from user input.
      dangerouslySetInnerHTML={{ __html: body }}
    />
  );
}
