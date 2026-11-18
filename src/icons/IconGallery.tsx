import { Icon, type IconName } from "./Icon";
import { icons } from "./registry";

/** Development-only page at /icons: check every icon at three sizes after importing from Figma. */
export function IconGallery() {
  const names = Object.keys(icons) as IconName[];
  return (
    <div>
      <h1 className="text-3xl font-semibold tracking-tight">Icons</h1>
      <p className="mt-2 font-mono text-sm text-ink/70">{names.length} icons. Development only.</p>
      <ul className="mt-8 grid grid-cols-2 gap-px border border-ink bg-ink @xl:grid-cols-3 @4xl:grid-cols-4">
        {names.map((n) => (
          <li key={n} className="bg-surface p-4">
            <div className="flex items-end gap-4">
              <Icon name={n} size={16} />
              <Icon name={n} size={24} />
              <Icon name={n} size={32} className="text-accent" />
            </div>
            <p className="mt-3 font-mono text-xs">{n}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
