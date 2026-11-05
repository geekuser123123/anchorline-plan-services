# Anchorline Plan Services: Website

Solo and self-directed 401(k) plan services and education in Tampa, delivered at the client's
location. It's a static site with no dependencies, built with Node and deployed to **Netlify**
at `https://anchorline-plan-services.netlify.app`.

## Quick start

```bash
node build.mjs          # builds ./dist; checks internal links; lists missing info
STRICT=1 node build.mjs # pre-launch check
```

## Deploy to Netlify

1. **Add new project → Import from Git**, then select this repo and branch `claude/nifty-cray-89pvhk`.
2. Name the project `anchorline-plan-services`.
3. **Forms → Enable form detection**, then deploy. Add an email notification for the `consultation` form.
4. Make the project **public**, then verify it in Google Search Console.

## Pages

`/`, `/plan-services/`, `/self-directed-401k/`, `/solo-401k/`, `/services/`, `/about/`,
`/faq/` (20 questions), `/contact/` (meeting request with a preferred location),
`/privacy-policy/`, `/terms/` and `/disclosures/` (Florida law).

## Design

- **Palette:** deep petrol `#0F2E36`, bay teal `#1F7A80`, seafoam `#E2F1EE`, sunlit amber `#F2A93B`, sand `#F3EEE4`, paper `#FBF9F4`
- **Type:** Young Serif (display) and Albert Sans (text), both self-hosted
- **Logo:** an anchor over an amber waterline on a petrol tile (`src/brand.mjs`)

See `docs/` for the launch checklist, media sources, Search Console and Google Business Profile steps.
