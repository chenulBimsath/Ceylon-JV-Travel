# Ceylon JV Travel — Frontend

React + Vite frontend for Ceylon JV Travel, built section-by-section to match the Figma
(hero, nav, destinations) plus every additional page described in the project brief.

## Run it

```bash
npm install
npm run dev
```

## Structure

```
src/
  components/       one file per section (Hero, Navbar, Packages, Gallery, ...)
  components/ui/     shared building blocks (SectionHeading)
  data/content.js    all placeholder copy + image URLs in one place
  hooks/useReveal.js scroll-reveal + count-up animation hooks
  styles/theme.css   color tokens, typography, shared animations
```

## Replacing placeholder images

Every image is a `picsum.photos` placeholder. Open `src/data/content.js` and swap the
`img` (and `avatar`) URLs — the seed name in each URL tells you which real photo it
should become, e.g. `seed/sigiriya-hero` → your Sigiriya Rock hero photo.

## Color theme

Defined once in `src/styles/theme.css` as CSS variables — deep moss green + warm brass
gold on a cream base, instead of a default palette. Change the values there and it
updates across every component.

## Sections included

Hero, Navbar, Destinations carousel, Tour Packages (with filters), Destination Explorer
(clickable cards with a detail modal), Custom Trip Planner (multi-step form), Gallery
(masonry + lightbox), Why Choose Us (animated stat counters), Customer Reviews carousel,
Blog / Travel Guide, Booking form, floating AI Travel Assistant widget, and Footer.

Not yet built: online payment, calendar availability, admin dashboard, and the Spring
Boot backend — these are backend/integration work for the next phase.
