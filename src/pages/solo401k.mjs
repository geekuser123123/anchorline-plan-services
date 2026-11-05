import { pageHero, ctaBand, faqList, faqSchema, guideLayout, callout, SITE, ORG_ID } from '../lib.mjs';

const crumbs = [
  { name: 'Home', path: '/' },
  { name: 'Solo 401(k)', path: '/solo-401k/' },
];

const SECTIONS = [
  ['checklist', 'Quick eligibility checklist'],
  ['contrib', 'Contributions in two roles'],
  ['roth', 'Roth features'],
  ['deadlines', 'Key deadlines'],
  ['access', 'Loans, rollovers & distributions'],
  ['filing', 'The 5500-EZ threshold'],
  ['compare', 'Solo 401(k) vs. SEP & SIMPLE'],
  ['faq', 'FAQ'],
];

const faqs = [
  { q: 'I’m a W-2 employee who freelances on weekends. Can I open one?', a: '<p>Often yes, through the freelance business. Your employee-deferral limit is shared with any 401(k) or 403(b) at your day job; employer contributions from your own business are calculated separately.</p>' },
  { q: 'Can my spouse contribute?', a: '<p>Generally yes, if your spouse earns genuine, reasonable compensation from the business for real work. It doesn’t end one-participant status.</p>' },
  { q: 'Is a Solo 401(k) better than a SEP IRA?', a: '<p>It depends on income, savings goals and appetite for paperwork. A Solo 401(k) allows employee deferrals and loans; a SEP IRA is simpler. A CPA can compare the numbers for you.</p>' },
  { q: 'Can Anchorline set one up for me?', a: '<p>We assist with setup alongside the provider you choose, then can keep records and prepare Form 5500-EZ once it’s required. See <a href="/plan-services/">plan services</a>.</p>' },
];

export default {
  path: '/solo-401k/',
  title: 'Solo 401(k) Checklist & Guide | Anchorline Plan Services, Tampa',
  description:
    'A practical Solo 401(k) guide for Tampa business owners: eligibility checklist, two-role contributions, Roth features, deadlines, loans, Form 5500-EZ and SEP/SIMPLE comparison.',
  crumbs,
  schema: [
    { '@type': 'Article', '@id': `${SITE}/solo-401k/#article`, headline: 'Solo 401(k) Checklist & Guide', author: { '@id': ORG_ID }, publisher: { '@id': ORG_ID }, mainEntityOfPage: `${SITE}/solo-401k/`, dateModified: new Date().toISOString().slice(0, 10) },
    faqSchema(faqs),
  ],
  body: () => `
${pageHero({
  kicker: 'Guide',
  title: 'The Solo 401(k) checklist for owner-only businesses',
  lead: 'A one-participant 401(k) can offer generous savings room. Use this guide to check whether it fits — and what you’ll need to keep up with.',
  crumbs,
  image: 'workspace',
  aside: `<dl class="facts"><div><dt>IRS term</dt><dd>One-participant 401(k)</dd></div><div><dt>Sections</dt><dd>${SECTIONS.length}</dd></div></dl>`,
})}

${guideLayout(
  SECTIONS,
  `
<section id="checklist" aria-labelledby="t1">
  <h2 id="t1"><span class="sec-n">01</span>Quick eligibility checklist</h2>
  <p>A Solo 401(k) is a 401(k) profit-sharing plan covering only owners — and spouses or co-owners where applicable. It may fit if you can tick these boxes:</p>
  <ul class="ticks">
    <li>Your business has self-employment or business income.</li>
    <li>No one besides owners and spouses meets the plan’s eligibility rules.</li>
    <li>You’ve considered other businesses you own under controlled-group rules.</li>
    <li>You’ve checked long-term part-time rules if you have part-time staff.</li>
  </ul>
  ${callout('<p>Hiring soon? An eligible employee generally ends one-participant status. Plan the transition with your provider before you hire.</p>', 'warn')}
</section>

<section id="contrib" aria-labelledby="t2">
  <h2 id="t2"><span class="sec-n">02</span>Contributions in two roles</h2>
  <div class="duo">
    <div><h3>Employee role</h3><p><strong>Elective deferrals</strong>, pre-tax or Roth, up to the annual limit, plus catch-up contributions from 50 and a higher catch-up at 60–63 under SECURE 2.0. The deferral limit is per person across every 401(k) and 403(b) you’re in.</p></div>
    <div><h3>Employer role</h3><p><strong>Profit-sharing contributions</strong>: generally up to 25% of W-2 pay for corporations; for sole proprietors, a calculation based on net self-employment earnings after the half-SE-tax and contribution deductions — roughly 20%.</p></div>
  </div>
  <p>Together they’re capped by the overall §415(c) limit, plus catch-ups. Limits change most years; confirm the current figures at IRS.gov or with your CPA.</p>
</section>

<section id="roth" aria-labelledby="t3">
  <h2 id="t3"><span class="sec-n">03</span>Roth features</h2>
  <ul>
    <li><strong>Roth deferrals</strong> when the plan offers them — no income limit.</li>
    <li><strong>Roth employer contributions</strong>, allowed under SECURE 2.0 if your plan and provider support them.</li>
    <li><strong>In-plan Roth conversions</strong> where permitted — generally taxable in the year of conversion.</li>
  </ul>
</section>

<section id="deadlines" aria-labelledby="t4">
  <h2 id="t4"><span class="sec-n">04</span>Key deadlines</h2>
  <ul>
    <li>A new plan can generally be adopted up to the business’s tax-filing deadline, including extensions, for <strong>employer</strong> contributions for that year.</li>
    <li>Under SECURE 2.0, sole proprietors and single-member LLCs establishing a new plan after year-end can make <strong>first-year deferrals</strong> up to their individual return’s original due date.</li>
    <li>Incorporated owners generally defer from pay issued after the plan exists and an election is in place.</li>
  </ul>
</section>

<section id="access" aria-labelledby="t5">
  <h2 id="t5"><span class="sec-n">05</span>Loans, rollovers &amp; distributions</h2>
  <ul>
    <li><strong>Loans</strong>, if allowed: generally up to the lesser of $50,000 or 50% of the vested balance, repaid at least quarterly within five years.</li>
    <li><strong>Rollovers in</strong> from qualified plans, 403(b)s, governmental 457(b)s and traditional IRAs, if accepted. Roth IRAs can’t be rolled into a 401(k).</li>
    <li><strong>Distributions</strong> before 59½ are generally taxable plus a 10% additional tax unless an exception applies. RMDs generally start at 73 (75 from 2033); Roth 401(k) balances no longer have lifetime RMDs.</li>
  </ul>
</section>

<section id="filing" aria-labelledby="t6">
  <h2 id="t6"><span class="sec-n">06</span>The 5500-EZ threshold</h2>
  <p>Once total assets across your one-participant plans exceed <strong>$250,000</strong> at year-end — and always in the final plan year — the plan generally files <strong>Form 5500-EZ</strong> by the last day of the seventh month after year-end (July 31 for calendar-year plans), extendable with Form 5558. <a href="/plan-services/">We prepare it</a> for your signature.</p>
</section>

<section id="compare" aria-labelledby="t7">
  <h2 id="t7"><span class="sec-n">07</span>Solo 401(k) vs. SEP &amp; SIMPLE</h2>
  <div class="table-wrap"><table class="table">
    <thead><tr><th scope="col"></th><th scope="col">Solo 401(k)</th><th scope="col">SEP IRA</th><th scope="col">SIMPLE IRA</th></tr></thead>
    <tbody>
      <tr><th scope="row">Employee deferrals</th><td>Yes</td><td>No</td><td>Yes, lower limit</td></tr>
      <tr><th scope="row">Loans</th><td>If plan allows</td><td>No</td><td>No</td></tr>
      <tr><th scope="row">Covers</th><td>Owners &amp; spouses</td><td>Eligible employees</td><td>Eligible employees</td></tr>
      <tr><th scope="row">Annual filing</th><td>5500-EZ above $250k</td><td>Generally none</td><td>Generally none</td></tr>
    </tbody>
  </table></div>
</section>

<section id="faq" aria-labelledby="t8">
  <h2 id="t8"><span class="sec-n">08</span>FAQ</h2>
  ${faqList(faqs)}
  <p class="source">Official source: <a href="https://www.irs.gov/retirement-plans/one-participant-401k-plans" rel="noopener" target="_blank">IRS — One-Participant 401(k) Plans</a>. General education only; see our <a href="/disclosures/">disclosures</a>.</p>
</section>
`,
)}

${ctaBand({ heading: 'Thinking about a Solo 401(k)?', text: 'Let’s meet at your Tampa office and talk through setup and the support you’d want afterward.', button: 'Request a Meeting' })}
`,
};
