import { icon, pageHero, ctaBand, faqList, faqSchema, callout, mediaImg, B, esc, SITE, ORG_ID } from '../lib.mjs';

const crumbs = [
  { name: 'Home', path: '/' },
  { name: 'Plan Services', path: '/plan-services/' },
];

const faqs = [
  { q: 'How do I know if my plan has to file Form 5500-EZ?', a: '<p>Generally, a one-participant plan files for any year its total assets — combined with the employer’s other one-participant plans — exceed $250,000 at year-end, and for the final plan year. We check each year with you.</p>' },
  { q: 'Who is responsible for filing?', a: '<p>The plan sponsor or plan administrator — usually you. We prepare the return and review it with you; you sign and submit it electronically through EFAST2 or on paper with the IRS.</p>' },
  { q: 'Can you help if I’m already behind?', a: '<p>Yes. We gather what exists, rebuild the contribution and transaction log, and identify missing filings. If returns are late, IRS penalty relief programs may apply; your tax professional should advise on those.</p>' },
  { q: 'Will you tell me whether an investment is allowed?', a: '<p>We explain the general rules and flag questions to raise, but we don’t approve or recommend investments. Check specific transactions with your plan provider, CPA or an ERISA attorney.</p>' },
  { q: 'Are you a fiduciary to my plan?', a: '<p>Our role is administrative and educational support at your direction; we don’t take discretionary authority over plan assets or investments. For questions about fiduciary status in your situation, consult an ERISA attorney.</p>' },
];

const SERVICES_DETAIL = [
  { icon: 'check', title: 'Plan setup assistance', lede: 'A clean start saves years of cleanup.', items: ['Information your provider will need, gathered in one place', 'Help completing adoption and account forms', 'Plan EIN and plan-titled account checklist', 'A plain-English summary of your plan’s options'] },
  { icon: 'layers', title: 'Plan records & valuations', lede: 'The documentation a self-directed plan lives on.', items: ['Contribution log by type, source and deposit date', 'Transaction history for every plan asset', 'Year-end valuation summary with support', 'An annual plan file for you and your CPA'] },
  { icon: 'doc', title: 'Form 5500-EZ preparation', lede: 'The annual return, ready for your signature.', items: ['Each year: is a filing required?', 'Return prepared from plan records', 'Walk-through before you sign', 'Guidance on EFAST2 or paper filing'] },
  { icon: 'shield', title: 'Year-round plan support', lede: 'Someone to call before you act.', items: ['Reminders ahead of key dates', 'Questions before new investments or changes', 'What changes when you hire, restructure or close', 'Coordination with your CPA, attorney or provider'] },
];

export default {
  path: '/plan-services/',
  title: 'Solo 401(k) Plan Services in Tampa | Setup, Records & Form 5500-EZ',
  description:
    'Anchorline plan services for Tampa business owners: Solo and self-directed 401(k) setup assistance, records and valuations, Form 5500-EZ preparation and year-round support.',
  crumbs,
  schema: [
    {
      '@type': 'Service',
      '@id': `${SITE}/plan-services/#service`,
      name: 'Solo & Self-Directed 401(k) Plan Services',
      serviceType: 'Retirement plan administrative support',
      provider: { '@id': ORG_ID },
      areaServed: B.serviceArea.map((n) => ({ '@type': 'City', name: n })),
      description: 'Setup assistance, plan records and valuations, Form 5500-EZ preparation and year-round support for one-participant and self-directed 401(k) plans in Tampa, Florida.',
    },
    faqSchema(faqs),
  ],
  body: () => `
${pageHero({
  kicker: 'Plan services',
  title: 'The administrative side of your 401(k), kept on course',
  lead: 'Solo and self-directed plans give you real control — and real paperwork. Anchorline handles that work with you, at your direction and alongside your plan provider, with meetings at our Tampa office.',
  crumbs,
  image: 'admin',
  aside: `<dl class="facts"><div><dt>For</dt><dd>Solo &amp; self-directed 401(k) plans</dd></div><div><dt>Meetings</dt><dd>At our Tampa office</dd></div><div><dt>Area</dt><dd>${esc(B.serviceArea.join(' · '))}</dd></div></dl>`,
})}

<section class="section" aria-labelledby="ps-h">
  <div class="container">
    <div class="head"><p class="kicker">On deck</p><h2 id="ps-h">Four services, one steady plan</h2></div>
    <div class="support">
      ${SERVICES_DETAIL.map((s, i) => `<article class="support__item"><div class="support__head"><span class="support__n">0${i + 1}</span>${icon(s.icon, 'support__icon')}</div><h3>${s.title}</h3><p class="support__lede">${s.lede}</p><ul class="ticks">${s.items.map((x) => `<li>${x}</li>`).join('')}</ul></article>`).join('')}
    </div>
  </div>
</section>

<section class="section section--sand" aria-labelledby="lim-h">
  <div class="container split">
    <figure class="split__media">${mediaImg('office', { cls: 'split__img', label: 'Working sessions' })}</figure>
    <div class="split__text">
      <p class="kicker">Clear limits</p>
      <h2 id="lim-h">What Anchorline doesn’t do</h2>
      <p class="lead">You remain the plan sponsor and, usually, trustee. These boundaries keep roles clear.</p>
      <ul class="crosses">
        <li>Hold, move or invest plan money</li>
        <li>Recommend or approve investments</li>
        <li>Serve as trustee, custodian or plan fiduciary</li>
        <li>Give legal or tax advice</li>
        <li>Sign or submit filings on your behalf</li>
      </ul>
    </div>
  </div>
</section>

<section class="section" aria-labelledby="course-h">
  <div class="container">
    <div class="head head--center"><p class="kicker">Setting the course</p><h2 id="course-h">How we work together</h2></div>
    <ol class="rhythm">
      <li><span>1</span><h3>Introductory call</h3><p>Your business, your plan, and where you want help.</p></li>
      <li><span>2</span><h3>Agree on scope</h3><p>Who handles what — you, your provider, Anchorline.</p></li>
      <li><span>3</span><h3>Set up or catch up</h3><p>New plan: setup with your provider. Existing plan: records gathered, gaps closed.</p></li>
      <li><span>4</span><h3>Through the year</h3><p>Activity recorded, reminders sent, questions answered.</p></li>
      <li><span>5</span><h3>Year-end</h3><p>Values documented; Form 5500-EZ prepared for your signature when required.</p></li>
    </ol>
  </div>
</section>

<section class="section section--sand" aria-labelledby="psf-h">
  <div class="container narrow">
    <div class="head head--center"><p class="kicker">Questions</p><h2 id="psf-h">Plan services FAQ</h2></div>
    ${faqList(faqs)}
    ${callout('<p>Administrative support isn’t a substitute for professional advice. For tax treatment, legal compliance or investment suitability, consult a qualified CPA, ERISA attorney or licensed adviser.</p>')}
  </div>
</section>

${ctaBand({ heading: 'Ready to get your plan squared away?', text: 'New plan or existing one, we’ll meet at our Tampa office and map out the support that fits.', button: 'Request a Meeting' })}
`,
};
