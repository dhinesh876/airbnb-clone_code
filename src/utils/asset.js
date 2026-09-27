/**
 * Resolves a path under /public (e.g. "assets/image/x.png") against Vite's
 * configured base path, so local images work both in dev (base "/") and
 * once deployed under a subpath (e.g. GitHub Pages project sites, where
 * base is "/your-repo-name/"). Always use this instead of a raw
 * "/assets/..." string for any local file living in /public.
 */
export function asset(path) {
  const base = import.meta.env.BASE_URL || '/';
  return `${base}${String(path).replace(/^\/+/, '')}`;
}
