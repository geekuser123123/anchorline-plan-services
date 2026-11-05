/**
 * ============================================================================
 *  ANCHORLINE PLAN SERVICES — SITE & BUSINESS CONFIGURATION
 *  Single source of truth for every page, the footer, structured data
 *  (JSON-LD), the sitemap and canonical URLs.
 * ============================================================================
 *
 *  - `null` means "not provided yet". Optional items are hidden until set.
 *  - `STRICT=1 node build.mjs` fails while required launch items are missing.
 *  - Nothing here is invented. Never add private data (EIN, home address).
 * ============================================================================
 */

export default {
  site: {
    url: 'https://anchorline-plan-services.netlify.app', // no trailing slash
    googleSiteVerification: null, // Search Console HTML-tag "content" value
    locale: 'en_US',
    language: 'en-US',
  },

  business: {
    legalName: null, // PRIVATE — schema only, and only if different from publicName
    publicName: 'Anchorline Plan Services',
    tagline: 'Solo & Self-Directed 401(k) Plan Support and Education',
    publicNameConfirmed: false, // true once the Florida fictitious name is registered (Sunbiz)
    owner: null, // optional — shown on About page only when provided
    foundingYear: null,

    phone: '(656) 232-3683',
    phoneE164: '+16562323683',
    email: null, // optional — hidden until set; visitors use the contact form

    /**
     * "service-area": the business meets clients at the client's location and
     * does not receive customers at its own address. Address stays hidden.
     */
    locationType: 'service-area',
    address: { streetAddress: null, addressLocality: 'Tampa', addressRegion: 'FL', postalCode: null, addressCountry: 'US' },
    geo: null,
    serviceArea: ['Tampa, FL'],

    hours: [
      { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '17:00' },
    ],
    hoursNote: 'Meetings at your home or office in Tampa, by appointment.',
    timeZoneLabel: 'Eastern Time',

    sameAs: [],
  },

  /** All confirmed by the owner. Disabled services disappear everywhere. */
  services: {
    education: { offered: true },
    solo401k: { offered: true },
    planSetup: { offered: true },
    filing: { offered: true },
    recordkeeping: { offered: true },
    ongoing: { offered: true },
    consultation: { offered: true },
  },

  team: [],

  about: { story: null, professionalBackground: null },

  form: { name: 'consultation' },

  analytics: { plausibleDomain: null },

  /** MEDIA — self-hosted, people-free imagery in src/assets/media/. */
  media: {
    // Pexels video 19699162 — Tampa waterfront and marina (Pexels License)
    heroVideo: { webm: '/assets/media/hero.webm', mp4: '/assets/media/hero.mp4', poster: '/assets/media/hero-poster.webp' },
    // Stock photos from Pexels (Pexels License), no people — sources in docs/MEDIA.md
    images: {
      city: { src: '/assets/media/city.webp', pos: '50% 60%', alt: 'Downtown Tampa skyline at sunset' },
      intro: { src: '/assets/media/intro.webp', pos: '40% 50%', alt: 'Rope tied around a wooden dock post above the water' },
      office: { src: '/assets/media/office.webp', pos: '60% 40%', alt: 'Downtown Tampa office towers under a blue sky' },
      workspace: { src: '/assets/media/workspace.webp', pos: '50% 50%', alt: 'Notepad and pen on a wooden desk' },
      guide: { src: '/assets/media/guide.webp', pos: '50% 60%', alt: 'Ship’s anchor hanging from the bow against a clear sky' },
      admin: { src: '/assets/media/admin.webp', pos: '50% 60%', alt: 'Open notebook, pens and clips on a white desk' },
    },
  },
};
