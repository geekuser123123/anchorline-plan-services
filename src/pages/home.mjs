import { icon, SERVICES, faqList, faqSchema, ctaBand, B, esc, mediaImg, heroVideo, phoneHref } from '../lib.mjs';

const faqs = [
  { q: 'What kind of help does Anchorline provide?', a: '<p>Administrative support and education for Solo and self-directed 401(k) plans: help setting a plan up with your chosen provider, plan records and year-end values, Form 5500-EZ preparation, and a steady contact for questions throughout the year.</p>' },
  { q: 'Where do we meet?', a: `<p>At our office at ${esc(B.address.streetAddress)} in ${esc(B.address.addressLocality)}, by appointment, Monday through Friday. A first call by phone is fine too.</p>` },
  { q: 'Who makes the investment decisions?', a: '<p>You do. Anchorline doesn’t recommend, approve or make investments. We keep the plan’s paperwork in order and explain the rules.</p>' },
  { q: 'Do you handle or hold plan money?', a: '<p>No. Plan money stays in accounts titled to your plan at the institutions you choose.</p>' },
  { q: 'Does every Solo 401(k) file Form 5500-EZ?', a: '<p>No. Generally only when total one-participant plan assets exceed $250,000 at the end of the plan year, and in the plan’s final year. We confirm it with you every year.</p>' },
  { q: 'How do we start?', a: `<p>Call <a href="${phoneHref()}">${esc(B.phone)}</a> or send a request through the <a href="/contact/">contact page</a>.</p>` },
];

const ADMIN = SERVICES.filter((s) => s.group === 'admin');
const EDU = SERVICES.filter((s) => s.group === 'education');

const QUARTERS = [
  ['Q1', 'January – March', ['Collect December 31 statements and values', 'Form 1099-R for any prior-year distributions (by Jan 31)', 'Review the year’s contributions by type']],
  ['Q2', 'April – June', ['Employer contributions generally due by the business tax-filing deadline (often March 15 or April 15; later if extended)', 'Confirm whether Form 5500-EZ is required', 'Start the return if it is']],
  ['Q3', 'July – September', ['Form 5500-EZ generally due July 31 for calendar-year plans', 'Form 5558 extends it 2½ months', 'Mid-year check on new investments']],
  ['Q4', 'October – December', ['Extended 5500-EZ deadline (October 15 for calendar-year plans)', 'Plan for year-end deferral elections', 'Note business changes for next year']],
];

export default {
  path: '/',
  title: 'Anchorline Plan Services | Solo 401(k) Support in Tampa, FL',
  description:
    'Solo and self-directed 401(k) support in Tampa: plan setup assistance, Form 5500-EZ preparation, plan records and valuations, year-round support and plan education.',
  schema: [faqSchema(faqs)],
  bodyClass: 'is-home',
  body: () => `
<section class="hero hero--center" aria-labelledby="hero-h">
  <div class="hero__bg" aria-hidden="true">${heroVideo()}<div class="hero__fallback"></div></div>
  <div class="container hero__inner">
    <p class="kicker kicker--light">Tampa · ${esc(B.tagline)}</p>
    <h1 id="hero-h">Keep your 401(k) <em>steady</em> while you run the business.</h1>
    <p class="hero__lead">Anchorline helps Tampa business owners and self-employed professionals set up and maintain Solo and self-directed 401(k) plans — clean records, on-time filings, clear answers — with meetings at our downtown Tampa office.</p>
    <div class="btn-row btn-row--center">
      <a class="btn btn--accent btn--lg" href="/contact/">Request a Meeting</a>
      <a class="btn btn--glass btn--lg" href="/plan-services/">See plan services ${icon('arrow')}</a>
    </div>
    <ul class="hero__chips" aria-label="Highlights">
      <li>${icon('pin')}Office on N Tampa St</li>
      <li>${icon('doc')}Form 5500-EZ prepared for your signature</li>
      <li>${icon('shield')}You stay in charge of every decision</li>
    </ul>
  </div>
</section>

<section class="section" aria-labelledby="steady-h">
  <div class="container split">
    <div class="split__text">
      <p class="kicker">Why it matters</p>
      <h2 id="steady-h">Control is the point. Paperwork is the price.</h2>
      <p class="lead">A Solo or self-directed 401(k) puts you in charge of your retirement plan. It also puts you in charge of its records, its valuations and, once it grows, an annual return to the IRS. That’s where we help.</p>
      <ul class="ticks">
        <li>A plan set up correctly with your provider from day one</li>
        <li>Contributions and transactions logged as they happen</li>
        <li>Year-end values documented for every asset</li>
        <li>Filings prepared on time, and only when they’re required</li>
      </ul>
      <a class="link-arrow" href="/plan-services/">How plan services work ${icon('arrow')}</a>
    </div>
    <figure class="split__media">${mediaImg('city', { cls: 'split__img', label: 'Tampa' })}</figure>
  </div>
</section>

<section class="section section--sand" aria-labelledby="deck-h">
  <div class="container">
    <div class="head head--split">
      <div><p class="kicker">Plan services</p><h2 id="deck-h">What we take off your plate</h2></div>
      <p>Hands-on administrative support for owner-run 401(k) plans, always alongside your plan provider and at your direction.</p>
    </div>
    <div class="markers">
      ${ADMIN.map((s, i) => `<a class="marker marker--link" href="/services/#${s.id}"><span class="marker__n">0${i + 1}</span>${icon(s.icon, 'marker__icon')}<h3>${s.title}</h3><p>${s.short}</p><span class="card__more">Details ${icon('arrow')}</span></a>`).join('')}
    </div>
  </div>
</section>

<section class="section" aria-labelledby="q-h">
  <div class="container">
    <div class="head head--center"><p class="kicker">Charting the year</p><h2 id="q-h">A calendar-year plan, quarter by quarter</h2><p>What typically happens when — and what we keep watch on for you. Exact dates depend on your plan year and business.</p></div>
    <div class="quarters">
      ${QUARTERS.map(([q, m, items]) => `<article class="quarter"><div class="quarter__top"><span class="quarter__q">${q}</span><span class="quarter__m">${m}</span></div><ul>${items.map((x) => `<li>${x}</li>`).join('')}</ul></article>`).join('')}
    </div>
  </div>
</section>

<section class="section section--ink" aria-labelledby="who-h">
  <div class="container">
    <div class="head head--split"><div><p class="kicker kicker--light">Who handles what</p><h2 id="who-h">Three roles, clearly divided</h2></div><p>The simplest way to keep a self-directed plan out of trouble is to know exactly whose job each task is.</p></div>
    <div class="resp">
      <div class="resp__col"><h3>You, the plan sponsor</h3><ul><li>Choose the plan and provider</li><li>Decide and deposit contributions</li><li>Make every investment decision</li><li>Review, sign and file returns</li></ul></div>
      <div class="resp__col resp__col--us"><h3>Anchorline</h3><ul><li>Setup assistance and checklists</li><li>Plan records and year-end values</li><li>Form 5500-EZ preparation</li><li>Reminders and answers all year</li></ul></div>
      <div class="resp__col"><h3>Your plan provider</h3><ul><li>Plan document and amendments</li><li>Plan accounts or custody, as applicable</li><li>Its own statements and notices</li></ul></div>
    </div>
  </div>
</section>

<section class="section" aria-labelledby="learn-h">
  <div class="container split split--top">
    <div class="split__text sticky-col">
      <p class="kicker">Education</p>
      <h2 id="learn-h">Know the rules of the water</h2>
      <p class="lead">Before you direct a 401(k) into real estate or private investments, it pays to understand what the law allows. Our guides and meetings cover it in plain English.</p>
      <div class="btn-row"><a class="btn btn--dark" href="/self-directed-401k/">Self-Directed 401(k) guide</a><a class="btn btn--outline" href="/solo-401k/">Solo 401(k) guide</a></div>
    </div>
    <div class="svc-stack">
      ${EDU.map((s) => `<a class="svc-line" href="/services/#${s.id}">${icon(s.icon, 'svc-line__icon')}<span><strong>${s.title}</strong>${s.short}</span>${icon('arrow', 'svc-line__go')}</a>`).join('')}
      <figure class="svc-figure">${mediaImg('workspace', { cls: 'svc-figure__img', label: 'Guides' })}</figure>
    </div>
  </div>
</section>

<section class="section section--sand" aria-labelledby="faq-h">
  <div class="container faq-wrap">
    <div class="faq-wrap__head"><p class="kicker">FAQ</p><h2 id="faq-h">Common first questions</h2><p>More on the <a href="/faq/">FAQ page</a>.</p></div>
    ${faqList(faqs)}
  </div>
</section>

${ctaBand({ heading: 'Let’s get your plan on an even keel.', text: 'Request a meeting at our Tampa office. We’ll review where your plan stands and what support would help.', button: 'Request a Meeting' })}
`,
};
