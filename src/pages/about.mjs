import { icon, pageHero, ctaBand, esc, B, cfg, phoneHtml, mediaImg } from '../lib.mjs';

const crumbs = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about/' },
];

const VALUES = [
  ['shield', 'Steady', 'Calm, consistent work — no rush, no drama, no surprises.'],
  ['compass', 'Clear', 'Plain language about rules, roles and what happens next.'],
  ['handshake', 'Present', 'We meet at your location and answer when you call.'],
  ['layers', 'Thorough', 'Records complete enough that your CPA never has to chase.'],
];

export default {
  path: '/about/',
  title: 'About Anchorline Plan Services | Tampa, Florida',
  description:
    'About Anchorline Plan Services: Solo and self-directed 401(k) plan services and education for Tampa business owners, delivered in person with clear roles and careful records.',
  crumbs,
  pageType: 'AboutPage',
  body: () => `
${pageHero({
  kicker: 'About',
  title: 'A steady line for owner-run retirement plans',
  lead: `${esc(B.publicName)} helps Tampa business owners and self-employed professionals keep Solo and self-directed 401(k) plans organized, compliant and well understood.`,
  crumbs,
  image: 'city',
})}

<section class="section" aria-labelledby="who-h">
  <div class="container split">
    <div class="split__text">
      <p class="kicker">Who we are</p>
      <h2 id="who-h">In-person plan services for Tampa</h2>
      <p class="lead">Tampa is home to a growing community of consultants, contractors, medical and legal professionals, real estate investors with businesses of their own, and family-run companies. Many open a Solo 401(k) to save more — and then meet its administrative side.</p>
      <p>${esc(B.publicName)} works through that side with you: setup with your provider, records kept current, Form 5500-EZ prepared when it’s due, and the rules explained clearly. We meet at your home or office, by appointment.</p>
      ${cfg.about.story ? `<div class="prose">${cfg.about.story}</div>` : ''}
      ${B.owner ? `<p><strong>Founded by:</strong> ${esc(B.owner)}</p>` : ''}
    </div>
    <figure class="split__media">${mediaImg('office', { cls: 'split__img', label: 'Anchorline' })}</figure>
  </div>
</section>

<section class="section section--ink" aria-labelledby="name-h">
  <div class="container narrow center">
    <p class="kicker kicker--light">Why “Anchorline”</p>
    <h2 id="name-h" class="statement">An anchor line keeps a vessel <em>steady</em> when conditions change. That’s what good plan administration should do for your retirement savings.</h2>
  </div>
</section>

<section class="section" aria-labelledby="values-h">
  <div class="container">
    <div class="head head--center"><p class="kicker">How we work</p><h2 id="values-h">What we bring aboard</h2></div>
    <div class="markers">${VALUES.map(([ic, t, d], i) => `<article class="marker"><span class="marker__n">0${i + 1}</span>${icon(ic, 'marker__icon')}<h3>${t}</h3><p>${d}</p></article>`).join('')}</div>
  </div>
</section>

<section class="section section--sand" aria-labelledby="std-h">
  <div class="container split split--top">
    <div class="split__text"><p class="kicker">Standards</p><h2 id="std-h">Our commitments to you</h2></div>
    <ul class="standards">
      <li><strong>Defined scope.</strong> We agree what we handle, what your provider handles and what stays with you.</li>
      <li><strong>Your decisions stay yours.</strong> We’re not a plan fiduciary, trustee, custodian, registered investment adviser or broker-dealer, and we don’t give legal or tax advice.</li>
      <li><strong>Hands off plan money.</strong> Assets remain in accounts titled to your plan.</li>
      <li><strong>Current rules.</strong> We follow IRS and Department of Labor guidance and update our work as it changes.</li>
      <li><strong>Privacy.</strong> Your information is handled as described in our <a href="/privacy-policy/">Privacy Policy</a>.</li>
      ${cfg.about.professionalBackground ? `<li>${cfg.about.professionalBackground}</li>` : ''}
    </ul>
  </div>
</section>

<section class="section" aria-labelledby="area-h">
  <div class="container split">
    <figure class="split__media">${mediaImg('intro', { cls: 'split__img', label: 'Tampa Bay' })}</figure>
    <div class="split__text">
      <p class="kicker">Where we work</p>
      <h2 id="area-h">Serving ${esc(B.serviceArea.join(' & '))}</h2>
      <p>We meet business owners and self-employed professionals at their homes and offices in ${esc(B.serviceArea.join(' and '))}, Monday through Friday, by appointment.</p>
      <p class="contact-line">${icon('phone')} ${phoneHtml()}</p>
      <a class="btn btn--dark" href="/contact/">Request a meeting</a>
    </div>
  </div>
</section>

${ctaBand({ heading: 'Let’s meet where you work.', text: 'Tell us about your plan and we’ll schedule a time at your home or office in Tampa.', button: 'Request a Meeting' })}
`,
};
