import { pageHero, ctaBand, faqList, faqSchema, B, esc, phoneHref } from '../lib.mjs';

const crumbs = [
  { name: 'Home', path: '/' },
  { name: 'FAQ', path: '/faq/' },
];

const GROUPS = [
  {
    id: 'working-together',
    title: 'Working together',
    faqs: [
      { q: 'Where do meetings take place?', a: `<p>At your home or office in ${esc(B.serviceArea.join(' and '))}, by appointment. An introductory call can happen by phone.</p>` },
      { q: 'When are you available?', a: '<p>Monday through Friday, 9:00 AM to 5:00 PM Eastern Time.</p>' },
      { q: 'What services do you offer?', a: '<p>Plan setup assistance, plan records and valuations, Form 5500-EZ preparation and year-round support for Solo and self-directed 401(k) plans, plus education and planning meetings. See <a href="/services/">Services</a>.</p>' },
      { q: 'Who decides what my plan invests in?', a: '<p>You do. We handle administrative work at your direction and explain the rules; we don’t recommend or approve investments.</p>' },
      { q: 'Can you coordinate with my CPA or attorney?', a: '<p>Yes, with your permission. Coordination is part of year-round support.</p>' },
    ],
  },
  {
    id: 'plan-types',
    title: 'Plan types',
    faqs: [
      { q: 'Solo 401(k) vs. self-directed 401(k) — what’s the difference?', a: '<p>“Solo” refers to who is covered: owners and spouses only. “Self-directed” refers to what the plan may hold: assets beyond a standard fund menu, if the plan document allows. Many owner-only plans are both.</p>' },
      { q: 'Do I need a business?', a: '<p>Yes. A 401(k) must be sponsored by an employer — for the self-employed, your own business.</p>' },
      { q: 'Can my spouse participate?', a: '<p>Generally yes, if your spouse earns genuine compensation from the business; it doesn’t end one-participant status.</p>' },
      { q: 'What changes if I hire?', a: '<p>Eligible employees generally must be covered, which usually ends one-participant status and brings testing and fuller reporting.</p>' },
    ],
  },
  {
    id: 'annual-filing',
    title: 'Annual filing & records',
    faqs: [
      { q: 'Does my Solo 401(k) need to file Form 5500-EZ?', a: '<p>Generally when total one-participant plan assets exceed $250,000 at year-end, and in the plan’s final year regardless of assets.</p>' },
      { q: 'When is it due?', a: '<p>By the last day of the seventh month after the plan year ends — July 31 for calendar-year plans — or 2½ months later with Form 5558.</p>' },
      { q: 'Who signs the return?', a: '<p>You, as plan sponsor or administrator. We prepare it and review it with you first.</p>' },
      { q: 'I think I missed a year. What now?', a: '<p>Address it promptly. IRS relief programs may reduce penalties for late filers in some situations. We can help rebuild records and prepare returns; your tax professional should advise on relief.</p>' },
      { q: 'What records should my plan keep?', a: '<p>Contributions by type and deposit date, every purchase and sale, income and expenses per asset, supported year-end values, and plan documents and amendments.</p>' },
    ],
  },
  {
    id: 'self-direction-rules',
    title: 'Self-direction rules',
    faqs: [
      { q: 'What can a self-directed 401(k) invest in?', a: '<p>What the plan document permits and federal law doesn’t prohibit — commonly real estate, private loans, private company interests, qualifying bullion and public securities. Collectibles are not allowed.</p>' },
      { q: 'Who is a disqualified person?', a: '<p>Generally you, your spouse, your ancestors and lineal descendants and their spouses, your business, plan fiduciaries and service providers, and entities 50% or more owned by those persons.</p>' },
      { q: 'What’s the penalty for a prohibited transaction?', a: '<p>The disqualified person generally owes a 15% excise tax on the amount involved for each year, rising to 100% if it isn’t corrected in time.</p>' },
      { q: 'Do you give investment advice?', a: '<p>No. Investment decisions are yours, ideally with a licensed adviser.</p>' },
    ],
  },
  {
    id: 'first-steps',
    title: 'First steps',
    faqs: [
      { q: 'How do I request a meeting?', a: `<p>Call <a href="${phoneHref()}">${esc(B.phone)}</a> or use the <a href="/contact/">contact form</a>.</p>` },
      { q: 'What should I have on hand?', a: '<p>Your business type; if you have a plan, the provider’s name and recent statements; and any IRS or provider notices. No plan yet? Just bring your questions.</p>' },
    ],
  },
];

const all = GROUPS.flatMap((g) => g.faqs);

export default {
  path: '/faq/',
  title: 'FAQ | Solo 401(k) Plan Services in Tampa — Anchorline',
  description:
    'Answers about Anchorline’s in-person plan services in Tampa, Solo vs. self-directed 401(k) plans, Form 5500-EZ filing and records, and self-directed investing rules.',
  crumbs,
  schema: [faqSchema(all)],
  body: () => `
${pageHero({ kicker: 'FAQ', title: 'Clear answers, before we meet', lead: `${all.length} answers about plans, filings, rules and working with Anchorline.`, crumbs })}

<div class="container faq-page">
  <nav class="faq-page__nav" aria-label="FAQ topics">
    <p class="guide__toc-h">Topics</p>
    <ol>${GROUPS.map((g) => `<li><a href="#${g.id}">${g.title}<span>${g.faqs.length}</span></a></li>`).join('')}</ol>
  </nav>
  <div class="faq-page__body">
    ${GROUPS.map((g) => `<section id="${g.id}" class="faq-group" aria-labelledby="${g.id}-h"><h2 id="${g.id}-h">${g.title}</h2>${faqList(g.faqs)}</section>`).join('')}
    <p class="source">General information only — not investment, legal or tax advice. See our <a href="/disclosures/">disclosures</a>.</p>
  </div>
</div>

${ctaBand({ heading: 'Have a question we didn’t cover?', text: 'Bring it to a meeting at your home or office in Tampa.', button: 'Request a Meeting' })}
`,
};
