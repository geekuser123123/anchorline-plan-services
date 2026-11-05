// Brand mark — anchor over a waterline ("Anchorline") on a petrol tile.
const ANCHOR = '<circle cx="24" cy="10.2" r="3.1"/><path d="M24 13.3 V37.6"/><path d="M17.2 18 H30.8"/><path d="M12.2 27.6 C13.2 33.8 18.2 37.8 24 37.8 C29.8 37.8 34.8 33.8 35.8 27.6"/><path d="M9.6 30.4 L12.2 27.2 L15.6 29.4"/><path d="M38.4 30.4 L35.8 27.2 L32.4 29.4"/>';

/** Logo mark SVG. `id` must be unique per page instance. */
export function markSvg(id = 'am', cls = 'brand__mark') {
  return `<svg class="${cls}" viewBox="0 0 48 48" aria-hidden="true" focusable="false"><defs><linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1B5F6E"/><stop offset="1" stop-color="#0E2C34"/></linearGradient></defs><rect width="48" height="48" rx="13" fill="url(#${id})"/><g fill="none" stroke="#F6F1E8" stroke-width="2.9" stroke-linecap="round" stroke-linejoin="round" transform="translate(0 -2.2)">${ANCHOR}</g><path d="M10 43 q3.5 -2.2 7 0 t7 0 t7 0 t7 0" fill="none" stroke="#F2A93B" stroke-width="2.2" stroke-linecap="round"/></svg>`;
}

export const markFile = () =>
  markSvg('g', 'mark').replace('<svg class="mark"', '<svg xmlns="http://www.w3.org/2000/svg"').replace(' aria-hidden="true" focusable="false"', '');
