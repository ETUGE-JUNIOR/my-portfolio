# EMJ Digital Studio: remove the old portfolio files (Windows PowerShell).
# Run from the repo root, on your branch:
#   powershell -ExecutionPolicy Bypass -File .\cleanup.ps1
# Uses plain file deletion (not "git rm"), so it works even with uncommitted changes.

$old = @(
  "src/App.tsx",
  "src/components/About.tsx",
  "src/components/AllProjects.tsx",
  "src/components/Contact.tsx",
  "src/components/Footer.tsx",
  "src/components/Hero.tsx",
  "src/components/ImageWithFallback.tsx",
  "src/components/Navigation.tsx",
  "src/components/Projects.tsx",
  "src/components/Skills.tsx",
  "src/components/ThemeSwitcher.tsx",
  "src/components/ThemeToggle.tsx",
  "src/components/figma",
  "src/components/ui",
  "src/imports",
  "src/assets",
  "styles",
  "src/styles/globals.css",
  "postcss.config.js"
)

foreach ($p in $old) {
  if (Test-Path $p) { Remove-Item $p -Recurse -Force; Write-Host "removed $p" }
  else { Write-Host "already gone: $p" }
}

# Build output should not be committed (Vercel builds it)
if (-not (Select-String -Path .gitignore -Pattern '^build$' -Quiet)) { Add-Content .gitignore "`nbuild" }
git rm -r --cached --ignore-unmatch build | Out-Null
git add -A

Write-Host "Done. Now run: npm run build"
