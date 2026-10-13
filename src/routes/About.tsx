import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import SectionHeader from '../components/SectionHeader';
import FAQ from '../components/FAQ';
import Reveal from '../components/Reveal';
import { IMAGES, ABOUT_FAQS, BUSINESS } from '../config';

export default function About() {
  return (
    <>
      {/* ── 1. CINEMATIC HERO ──────────────────────────────────────── */}
      <Hero
        image={IMAGES.heroAbout}
        imageAlt="Mature tree trunks and dappled sunlight in a pristine forest"
        badge="Company Ethos & Professional Standards"
        title="Arboricultural Standards Rooted in Care & Precision"
        subtitle="A disciplined approach to residential and commercial tree management—prioritizing property integrity, rigorous crew safety protocols, and transparent client communication."
        primaryAction={{ label: 'Contact Our Operations Team', to: '/contact' }}
        secondaryAction={{ label: 'Explore Operating Principles', to: '#principles' }}
        breadcrumbs={[
          { label: 'About Us' },
        ]}
        metrics={[
          { value: '100%', label: 'Written Cost Transparency' },
          { value: 'Full', label: 'Ground Protection Mats' },
          { value: 'Zero', label: 'Unverified History Claims' },
          { value: 'Daily', label: 'Tailboard Safety Briefings' },
        ]}
      />

      {/* ── 2. EDITORIAL INTRO WITH SPLIT HEADER ───────────────────── */}
      <section className="section">
        <div className="container">
          <Reveal>
            <SectionHeader
              tag="Foundational Ethos"
              title="A Thoughtful Alternative to Reckless Tree Cutting"
              lead="At Evergreen Tree & Arbor Care, we believe that managing trees on private properties demands more than loud chainsaws and heavy machinery. Trees are living capital that take decades to mature."
              align="split"
            />
          </Reveal>

          <div style={{ marginTop: '48px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
            <Reveal delay={50}>
              <div className="photo-card">
                <div className="photo-card__media">
                  <img src={IMAGES.introHome} alt="Immaculately maintained residential lawn and mature tree" loading="lazy" />
                  <span className="photo-card__tag">01 · Respect</span>
                </div>
                <div className="photo-card__body">
                  <div>
                    <h3 className="photo-card__title">Property Care Standards</h3>
                    <p className="photo-card__desc">
                      We treat every homeowner's grounds with the same care and caution we expect on our own properties—preventing lawn ruts, driveway cracks, and trampled gardens.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="photo-card">
                <div className="photo-card__media">
                  <img src={IMAGES.treeHealth2} alt="Certified arborist inspecting canopy biology and wood density" loading="lazy" />
                  <span className="photo-card__tag">02 · Science</span>
                </div>
                <div className="photo-card__body">
                  <div>
                    <h3 className="photo-card__title">Biological Understanding</h3>
                    <p className="photo-card__desc">
                      Every cut respects branch collar compartmentalization. We understand wood mechanics, decay dynamics, and seasonal tree biology for all regional species.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={250}>
              <div className="photo-card">
                <div className="photo-card__media">
                  <img src={IMAGES.contactConsultation} alt="Consultation walk discussing clear itemized proposal" loading="lazy" />
                  <span className="photo-card__tag">03 · Integrity</span>
                </div>
                <div className="photo-card__body">
                  <div>
                    <h3 className="photo-card__title">Upfront Communication</h3>
                    <p className="photo-card__desc">
                      No surprise charges or changing scopes. You receive a comprehensive, itemized written proposal and continuous arrival updates throughout your project.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 3. EDITORIAL SPLIT SHOWCASE: FIELD SAFETY & TRAINING ──── */}
      <section id="principles" className="editorial-showcase">
        <div className="editorial-showcase__content" style={{ background: 'var(--color-charcoal)', color: '#fff' }}>
          <Reveal>
            <div className="section-badge" style={{ color: '#68B088' }}>
              <span className="section-badge__leaf">✦</span>
              <span>Field Culture</span>
            </div>
            <h2 style={{ color: '#fff', fontSize: 'var(--fs-h2)', margin: '14px 0 20px' }}>
              Rigorous Safety Protocols & Continuous Skills Training
            </h2>
            <p style={{ color: 'rgba(242, 240, 233, 0.8)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '20px' }}>
              Modern arboriculture requires deep knowledge of rigging friction, chainsaw bore-cutting, and emergency aerial rescue.
            </p>
            <p style={{ color: 'rgba(242, 240, 233, 0.7)', fontSize: '0.95rem', lineHeight: 1.65, marginBottom: '36px' }}>
              Every work day begins with a mandatory tailboard safety briefing. Certified helmet systems with integrated Bluetooth headsets allow climbers and ground crew to communicate in quiet whispers without shouting over engine noise.
            </p>
            <Link to="/contact" className="btn-modern btn-modern--forest">
              <span>Connect with Our Team</span>
              <span>→</span>
            </Link>
          </Reveal>
        </div>
        <div className="editorial-showcase__image">
          <img src={IMAGES.aboutTeam} alt="Professional field crew discussing project workflow" loading="lazy" />
        </div>
      </section>

      {/* ── 4. THREE-COLUMN PHOTOGRAPHIC WORK SHOWCASE ─────────────── */}
      <section className="section section--muted">
        <div className="container">
          <Reveal>
            <SectionHeader
              tag="Craft Documentation"
              title="Arboriculture in Practice"
              lead="Specialized rigging friction blocks, modern low-impact aerial lifts, and immaculate end-of-day site raking."
              align="split"
            />
          </Reveal>

          <div style={{ marginTop: '48px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '28px' }}>
            <Reveal delay={50}>
              <div className="img-block img-block--tall">
                <img src={IMAGES.aboutField} alt="Arborist in climbing harness preparing canopy rigging" loading="lazy" />
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="img-block img-block--tall">
                <img src={IMAGES.equipmentHome} alt="Heavy-duty arborist chipper and low-impact equipment staged" loading="lazy" />
              </div>
            </Reveal>
            <Reveal delay={250}>
              <div className="img-block img-block--tall">
                <img src={IMAGES.introHome} alt="Immaculate completed property cleanup after canopy maintenance" loading="lazy" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 5. IMMERSIVE PHOTO BANNER ──────────────────────────────── */}
      <div className="photo-banner">
        <img src={IMAGES.aboutValues} alt="Forest canopy reflecting natural balance and ecological health" loading="lazy" />
        <div className="photo-banner__overlay" />
      </div>

      {/* ── 6. NUMBERED ACCORDION FAQ ─────────────────────────────── */}
      <section className="section">
        <div className="container" style={{ maxWidth: '960px' }}>
          <Reveal>
            <SectionHeader
              tag="Company Inquiries"
              title="Frequently Asked Questions About Our Standards"
              lead="Clear policies on property protection, written estimates, and professional qualifications."
              align="center"
            />
          </Reveal>
          <div style={{ marginTop: '48px' }}>
            <FAQ items={ABOUT_FAQS} />
          </div>
        </div>
      </section>

      {/* ── 7. CLOSING CTA ─────────────────────────────────────────── */}
      <section className="section section--dark" style={{ textAlign: 'center', padding: '120px 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <Reveal>
            <div className="section-badge" style={{ color: '#68B088' }}>
              <span className="section-badge__leaf">✦</span>
              <span>Work with a Considered Team</span>
            </div>
            <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', color: '#fff', margin: '16px 0 24px', lineHeight: 1.15 }}>
              Ready to Experience the Evergreen Difference?
            </h2>
            <p style={{ color: 'rgba(242, 240, 233, 0.8)', fontSize: '1.15rem', lineHeight: 1.65, marginBottom: '40px' }}>
              Contact {BUSINESS.name} today. We will schedule a site visit to evaluate your property and provide an itemized written quote.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn-modern btn-modern--forest">
                <span>Request Written Estimate</span>
                <span>→</span>
              </Link>
              <Link to="/services" className="btn-modern btn-modern--glass">
                <span>View All Services</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
