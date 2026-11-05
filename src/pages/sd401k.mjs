import { icon, pageHero, ctaBand, faqList, faqSchema, guideLayout, callout, mediaImg, SITE, ORG_ID } from '../lib.mjs';

const crumbs = [
  { name: 'Home', path: '/' },
  { name: 'Self-Directed 401(k)', path: '/self-directed-401k/' },
];

const SECTIONS = [
  ['glance', 'At a glance'],
  ['definition', 'Definition'],
  ['anatomy', 'Anatomy of the plan'],
  ['eligibility', 'Eligibility'],
  ['assets', 'Allowed assets'],
  ['boundaries', 'Hard boundaries'],
  ['taxes', 'Taxes inside the plan'],
  ['upkeep', 'Upkeep'],
  ['ira-vs', 'Versus a self-directed IRA'],
  ['faq', 'FAQ'],
];

const faqs = [
  { q: 'Could my plan buy a rental condo in Tampa?', a: '<p>If the plan document permits real estate, generally yes — strictly as an investment. The plan takes title and pays every cost; rent flows back to the plan; and no disqualified person may use the property, even for a weekend.</p>' },
  { q: 'Can I renovate a plan-owned property myself?', a: '<p>Doing the work yourself is generally treated as providing services to the plan — a prohibited transaction. Hire unrelated contractors and pay them from plan funds, and ask an ERISA attorney if you’re unsure.</p>' },
  { q: 'What if the plan needs a mortgage?', a: '<p>Plans can sometimes borrow on a non-recourse basis — you can’t personally guarantee the loan. Debt-financed income can raise UDFI questions, though qualified plans may be eligible for the §514(c)(9) real estate exception. Get tax advice first.</p>' },
  { q: 'Can I move my existing Solo 401(k) to a self-directed one?', a: '<p>Often, if the new provider’s document permits self-direction — by amending the plan or moving to a new provider. Your current provider can explain the process.</p>' },
];

export default {
  path: '/self-directed-401k/',
  title: 'Self-Directed 401(k) Explained | Anchorline Plan Services, Tampa',
  description:
    'Self-Directed 401(k) explained: plan anatomy, eligibility, allowed assets, prohibited transactions and disqualified persons, UBTI/UDFI, upkeep and IRA comparison.',
  crumbs,
  schema: [
    { '@type': 'Article', '@id': `${SITE}/self-directed-401k/#article`, headline: 'Self-Directed 401(k) Explained', author: { '@id': ORG_ID }, publisher: { '@id': ORG_ID }, mainEntityOfPage: `${SITE}/self-directed-401k/`, dateModified: new Date().toISOString().slice(0, 10) },
    faqSchema(faqs),
  ],
  body: () => `
${pageHero({
  kicker: 'Guide',
  title: 'Self-Directed 401(k), explained from keel to mast',
  lead: 'What the plan is, who can sponsor one, what it may own, where the hard boundaries are — and the upkeep that keeps it sailing.',
  crumbs,
  image: 'guide',
  aside: `<dl class="facts"><div><dt>Sections</dt><dd>${SECTIONS.length}</dd></div><div><dt>Written for</dt><dd>Owners &amp; the self-employed</dd></div></dl>`,
})}

${guideLayout(
  SECTIONS,
  `
<section id="glance" aria-labelledby="s0">
  <h2 id="s0"><span class="sec-n">01</span>At a glance</h2>
  <div class="glance">
    <div><strong>What</strong><span>A 401(k) whose document permits investments beyond a fund menu</span></div>
    <div><strong>Who</strong><span>Businesses with earned income — most often owner-only</span></div>
    <div><strong>Can hold</strong><span>Real estate, private loans, private companies, qualifying bullion, securities — if the plan allows</span></div>
    <div><strong>Can’t</strong><span>Collectibles, or any deal with a disqualified person</span></div>
    <div><strong>Upkeep</strong><span>Records, annual values, Form 5500-EZ above $250k</span></div>
  </div>
</section>

<section id="definition" aria-labelledby="s1">
  <h2 id="s1"><span class="sec-n">02</span>Definition</h2>
  <p>“Self-directed” isn’t a legal plan type. It describes a 401(k) whose plan document allows participants to direct investments across a wide range of assets. Everything else — contribution limits, distribution rules, reporting — works like any other qualified 401(k).</p>
  <p>Owner-only businesses usually pair self-direction with a <a href="/solo-401k/">Solo 401(k)</a>.</p>
  ${callout('<p>Read the plan document first. It decides which assets, loans and Roth options your plan can actually use.</p>')}
</section>

<section id="anatomy" aria-labelledby="s2">
  <h2 id="s2"><span class="sec-n">03</span>Anatomy of the plan</h2>
  <div class="parts">
    <div>${icon('briefcase')}<h3>Plan sponsor</h3><p>Your business, which adopts and maintains the plan.</p></div>
    <div>${icon('doc')}<h3>Plan document</h3><p>The rules: eligibility, contributions, loans, permitted assets.</p></div>
    <div>${icon('shield')}<h3>Trust &amp; trustee</h3><p>Plan assets held in trust — often with the owner as trustee.</p></div>
    <div>${icon('layers')}<h3>Plan accounts</h3><p>Accounts titled to the plan under its own EIN.</p></div>
  </div>
  <p>With a trustee-directed (“checkbook”) setup, the trustee invests directly from a plan bank account. With a custodial setup, a specialty custodian holds alternative assets. The first is faster; the second adds a checkpoint. Both demand careful records.</p>
</section>

<figure class="guide__figure">${mediaImg('intro', { cls: 'guide__img', label: 'Tampa Bay' })}</figure>

<section id="eligibility" aria-labelledby="s3">
  <h2 id="s3"><span class="sec-n">04</span>Eligibility</h2>
  <ul>
    <li><strong>Earned income from a business</strong> is required — a 401(k) needs an employer sponsor.</li>
    <li><strong>Owner-only</strong> plans cover owners and spouses; eligible employees generally must be included.</li>
    <li><strong>Related companies</strong> can count as one employer under controlled-group rules.</li>
    <li><strong>Part-time staff</strong> may become eligible under the SECURE Act and SECURE 2.0 long-term part-time rules.</li>
  </ul>
</section>

<section id="assets" aria-labelledby="s4">
  <h2 id="s4"><span class="sec-n">05</span>Allowed assets</h2>
  <p>The tax code restricts a few assets rather than listing allowed ones. Within those limits, the plan document and provider decide. Common self-directed holdings:</p>
  <div class="chips">
    <span>${icon('home')}Real estate</span><span>${icon('handshake')}Private notes</span><span>${icon('building')}Private businesses &amp; LLCs</span><span>${icon('coins')}Qualifying bullion</span><span>${icon('growth')}Stocks, bonds &amp; funds</span>
  </div>
  <p><strong>Collectibles are out:</strong> art, antiques, gems, stamps, most coins, alcoholic beverages and similar items are treated as distributions when acquired by an individually directed account (IRC §408(m)).</p>
  <p class="muted">Alternative assets can be illiquid, hard to value and higher-risk. This is education, not a recommendation.</p>
</section>

<section id="boundaries" aria-labelledby="s5">
  <h2 id="s5"><span class="sec-n">06</span>Hard boundaries</h2>
  <p>IRC §4975 bars most transactions between the plan and <strong>disqualified persons</strong>: you, your spouse, your parents, grandparents, children and grandchildren and their spouses, your business, plan fiduciaries and service providers, and entities 50% or more owned by these persons. Siblings generally aren’t on the list.</p>
  <div class="dont">
    <div><strong>No</strong> sales, exchanges or leases with a disqualified person.</div>
    <div><strong>No</strong> loans either way, and no personal guarantees of plan debt.</div>
    <div><strong>No</strong> personal use of plan property.</div>
    <div><strong>No</strong> doing the work on plan property yourself.</div>
  </div>
  ${callout('<p>A prohibited transaction generally triggers a 15% excise tax on the amount involved for each year, rising to 100% if not corrected in time. Talk to an ERISA attorney promptly.</p>', 'warn')}
</section>

<section id="taxes" aria-labelledby="s6">
  <h2 id="s6"><span class="sec-n">07</span>Taxes inside the plan</h2>
  <ul>
    <li><strong>UBTI</strong> — income from an active business the plan owns, often through an LLC or partnership. Plans with $1,000 or more of gross unrelated business income generally file Form 990-T.</li>
    <li><strong>UDFI</strong> — income from debt-financed property. Qualified plans may qualify for an exception for certain real estate under IRC §514(c)(9), if its conditions are met; IRAs generally can’t.</li>
  </ul>
</section>

<section id="upkeep" aria-labelledby="s7">
  <h2 id="s7"><span class="sec-n">08</span>Upkeep</h2>
  <ul class="ticks">
    <li>Form 5500-EZ when one-participant plan assets exceed $250,000 at year-end, and for the final year.</li>
    <li>Fair-market valuations of every asset at least annually, with support.</li>
    <li>Contribution records by type and date; transaction records by asset.</li>
    <li>Plan document amendments when the law changes.</li>
    <li>Form 1099-R for distributions.</li>
  </ul>
  <p>This upkeep is what <a href="/plan-services/">Anchorline plan services</a> are built for.</p>
</section>

<section id="ira-vs" aria-labelledby="s8">
  <h2 id="s8"><span class="sec-n">09</span>Versus a self-directed IRA</h2>
  <div class="table-wrap"><table class="table">
    <thead><tr><th scope="col"></th><th scope="col">Self-directed IRA</th><th scope="col">Self-directed 401(k)</th></tr></thead>
    <tbody>
      <tr><th scope="row">Business needed</th><td>No</td><td>Yes</td></tr>
      <tr><th scope="row">Asset holder</th><td>IRA custodian</td><td>Plan trust</td></tr>
      <tr><th scope="row">Participant loans</th><td>No</td><td>If the plan allows</td></tr>
      <tr><th scope="row">Roth income limits</th><td>Apply</td><td>None on Roth deferrals</td></tr>
      <tr><th scope="row">Leveraged real estate</th><td>UDFI generally applies</td><td>§514(c)(9) exception may apply</td></tr>
      <tr><th scope="row">Annual reporting</th><td>Custodian files</td><td>Sponsor files 5500-EZ when required</td></tr>
    </tbody>
  </table></div>
</section>

<section id="faq" aria-labelledby="s9">
  <h2 id="s9"><span class="sec-n">10</span>FAQ</h2>
  ${faqList(faqs)}
  <p class="source">General education, not advice. Official sources: <a href="https://www.irs.gov/retirement-plans/one-participant-401k-plans" rel="noopener" target="_blank">IRS — One-Participant 401(k) Plans</a>; <a href="https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-prohibited-transactions" rel="noopener" target="_blank">IRS — Prohibited Transactions</a>. See our <a href="/disclosures/">disclosures</a>.</p>
</section>
`,
)}

${ctaBand({ heading: 'Want help keeping a self-directed plan shipshape?', text: 'We’ll meet you in Tampa and keep your plan’s records and filings on course.', button: 'Request a Meeting' })}
`,
};
