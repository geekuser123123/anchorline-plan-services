import { icon, pageHero, ctaBand, SERVICES, SITE, ORG_ID, B, esc, callout } from '../lib.mjs';

const crumbs = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services/' },
];

const DETAIL = {
  planSetup: {
    desc: 'We guide setup alongside the plan provider you choose — gathering information, completing forms, and making sure the plan’s EIN and plan-titled accounts are in place.',
    for: 'Owner-only businesses opening a Solo or self-directed 401(k), or weighing whether to.',
    covers: ['One list of everything your provider will ask for', 'Help completing adoption and account forms', 'EIN and plan-titled account checklist', 'A plain-English summary of your plan'],
  },
  filing: {
    desc: 'In years your one-participant plan must file, we prepare Form 5500-EZ from your plan records and walk through it with you before you sign.',
    for: 'Plans above $250,000 at year-end, plans in their final year, and plans catching up on missed years.',
    covers: ['Annual filing-requirement check', 'Return prepared from your records', 'Review before signature', 'EFAST2 or paper filing guidance'],
  },
  recordkeeping: {
    desc: 'We keep your plan file current — contributions, transactions and supported year-end values for every asset.',
    for: 'Plans holding real estate, private investments or several accounts; anyone who wants records a CPA can rely on.',
    covers: ['Contribution log by type and date', 'Transaction history per asset', 'Year-end valuation summary', 'Annual plan file'],
  },
  ongoing: {
    desc: 'A steady contact through the year — reminders before key dates and answers before you invest, hire, restructure or wind down.',
    for: 'Plan sponsors who like to check before they act.',
    covers: ['Key-date reminders', 'Questions before changes or new investments', 'Business changes that affect the plan', 'Coordination with your professionals'],
  },
  education: {
    desc: 'A clear walkthrough of how self-directed 401(k) plans work and the rules that keep them qualified.',
    for: 'Owners considering self-direction who want facts first.',
    covers: ['Plan anatomy and roles', 'Allowed vs. prohibited assets', 'Disqualified persons', 'Ongoing upkeep'],
  },
  solo401k: {
    desc: 'How one-participant plans work: eligibility, the two contribution roles, Roth features and annual filing.',
    for: 'Freelancers, consultants and owners with no eligible employees beyond owners and spouses.',
    covers: ['Eligibility and hiring', 'Employee vs. employer contributions', 'Roth features', 'Deadlines and Form 5500-EZ'],
  },
  consultation: {
    desc: 'A meeting at our Tampa office to talk through your plan and agree on next steps.',
    for: 'Anyone who prefers a conversation to a stack of reading.',
    covers: ['Your situation, start to finish', 'Plain answers', 'Which support would help, if any', 'No obligation'],
  },
};

const groups = [
  ['admin', 'Plan services', 'Hands-on administrative support for Solo and self-directed 401(k) plans, delivered in Tampa.'],
  ['education', 'Education & meetings', 'Understand the rules before you set course.'],
];

export default {
  path: '/services/',
  title: 'Services | Solo 401(k) Setup, Form 5500-EZ & Plan Records in Tampa',
  description:
    'Anchorline services in Tampa, FL: Solo 401(k) setup assistance, Form 5500-EZ preparation, plan records and valuations, year-round support, education and planning meetings.',
  crumbs,
  schema: SERVICES.map((s) => ({
    '@type': 'Service',
    '@id': `${SITE}/services/#${s.id}`,
    name: s.title,
    description: DETAIL[s.key].desc,
    provider: { '@id': ORG_ID },
    areaServed: B.serviceArea.map((n) => ({ '@type': 'City', name: n })),
    url: `${SITE}/services/#${s.id}`,
  })),
  body: () => `
${pageHero({
  kicker: 'Services',
  title: 'Plan services and education for Tampa business owners',
  lead: 'Everything Anchorline offers for Solo and self-directed 401(k) plans — administrative support and plain-English education, with meetings at our Tampa office.',
  crumbs,
  image: 'office',
})}

<section class="section section--tight">
  <div class="container">
    <nav class="pills" aria-label="Jump to a service">${SERVICES.map((s) => `<a href="#${s.id}">${s.title}</a>`).join('')}</nav>
    ${callout(`<p><strong>Our role.</strong> ${esc(B.publicName)} provides administrative support and education at your direction, alongside your plan provider. We are not a plan fiduciary, trustee, custodian, registered investment adviser or broker-dealer; we never hold or invest plan assets; and we don’t give legal or tax advice.</p>`)}
  </div>
</section>

${groups
  .map(
    ([g, title, sub]) => `<section class="section${g === 'education' ? ' section--fog' : ''}" aria-labelledby="g-${g}">
  <div class="container">
    <div class="head"><p class="kicker">${g === 'admin' ? 'Plan services' : 'Education'}</p><h2 id="g-${g}">${title}</h2><p>${sub}</p></div>
    <div class="svc-list">
      ${SERVICES.filter((s) => s.group === g)
        .map(
          (s) => `<article class="svc-row" id="${s.id}" aria-labelledby="${s.id}-h">
        <div class="svc-row__main">${icon(s.icon, 'svc-row__icon')}<div><h3 id="${s.id}-h">${s.title}</h3><p>${DETAIL[s.key].desc}</p><p class="svc-row__for"><strong>Who it’s for:</strong> ${DETAIL[s.key].for}</p></div></div>
        <div class="svc-row__side"><ul class="ticks">${DETAIL[s.key].covers.map((c) => `<li>${c}</li>`).join('')}</ul><a class="btn btn--dark btn--sm" href="/contact/?interest=${encodeURIComponent(s.title)}">Ask about this service</a></div>
      </article>`,
        )
        .join('')}
    </div>
  </div>
</section>`,
  )
  .join('')}

${ctaBand({ heading: 'Not sure what you need?', text: 'Tell us where your plan stands and we’ll suggest the right starting point.' })}
`,
};
