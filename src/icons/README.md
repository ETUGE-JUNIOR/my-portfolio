# Icon library

Icons are plain SVG files in `src/icons/svg/`. `npm run icons` turns them into `registry.ts`
(it also runs before every `npm run build`). Use them anywhere with:

```tsx
<Icon name="mail" />                 // 16px, follows the text colour
<Icon name="arrow-up-right" size={12} />
<Icon name="download" label="Download" />   // only when there is no text beside it
```

## Importing from Figma

1. One icon per frame, on a square grid (16 or 24). Name the frame in kebab-case: `arrow-up-right`.
2. Keep strokes as strokes (do not outline them) so line weight stays consistent. Flatten boolean groups.
3. Select the frame, Export, SVG. Leave "Include id attribute" off.
4. Drop the file into `src/icons/svg/` (the file name becomes the icon name; a file with the same name replaces
   the starter icon). Run `npm run icons`.
5. Open `/icons` in dev (`npm run dev`) to check every icon at 16, 24 and 32px.

The script turns every fill and stroke colour into `currentColor`, so icons follow the text colour and the theme.
It keeps `fill="none"` on the root, prefixes Figma's clip-path ids so icons never clash, and warns about
gradients, masks, filters and images (they cannot follow the theme: flatten them in Figma).

## Starter set

The 23 icons here are stand-ins drawn on a 16px grid with 1.5px strokes. `github`, `linkedin` and `whatsapp` are
neutral approximations: replace them with your own Figma versions (or the official brand assets).
