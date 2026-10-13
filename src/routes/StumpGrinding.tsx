import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import SectionHeader from '../components/SectionHeader';
import FAQ from '../components/FAQ';
import Reveal from '../components/Reveal';
import { IMAGES, STUMP_FAQS, BUSINESS } from '../config';

export default function StumpGrinding() {
  return (
    <>
      {/* ── 1. CINEMATIC HERO ──────────────────────────────────────── */}
      <Hero
        image={IMAGES.heroStump}
        imageAlt="Close-up of freshly ground tree stump mulch and wood chips"
        badge="Ground Reclamation & Sub-Grade Milling"
        title="Complete Stump Grinding & Site Restoration"
        subtitle="High-torque mechanical stump reduction 6 to 12 inches below finished grade—eliminating tripping hazards, deterring subterranean termites, and preparing your turf for immediate sodding or replanting."
        primaryAction={{ label: 'Request Grinding Estimate', to: '/contact' }}
        secondaryAction={{ label: 'Review Turf Options', to: '#restoration' }}
        breadcrumbs={[
          { label: 'Services', to: '/services' },
          { label: 'Stump Grinding' },
        ]}
        metrics={[
          { value: '6-12"', label: 'Sub-Grade Depth' },
          { value: '36"', label: 'Gate Access Width' },
          { value: 'Zero', label: 'Lawn Excavation Damage' },
          { value: '100%', label: 'Root Flare Traced' },
        ]}
      />

      {/* ── 2. EDITORIAL INTRO WITH SPLIT HEADER ───────────────────── */}
      <section className="section">
        <div className="container">
          <Reveal>
            <SectionHeader
              tag="Process Breakdown"
              title="Why Mechanical Grinding Outperforms Chemical or Manual Digging"
              lead="Chemical rotting agents require 3 to 5 years of toxic decay, while backhoe excavation tears apart surrounding lawns and severed roots. Mechanical grinding uses carbide cutter wheels to pulverize wood into beneficial organic mulch in minutes."
              align="split"
            />
          </Reveal>

          <div style={{ marginTop: '48px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
            <Reveal delay={50}>
              <div className="photo-card">
                <div className="photo-card__media">
                  <img src={IMAGES.stumpTurf} alt="Lush restored green lawn after stump grinding" loading="lazy" />
                  <span className="photo-card__tag">01 · Turf Restoration</span>
                </div>
                <div className="photo-card__body">
                  <div>
                    <h3 className="photo-card__title">Smooth Mower Clearance</h3>
                    <p className="photo-card__desc">
                      Exposed root flares shatter mower blades and create persistent yard tripping hazards. Grinding below grade restores smooth, level lawn contours.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="photo-card">
                <div className="photo-card__media">
                  <img src={IMAGES.stumpWork1} alt="Carbide cutting wheel pulverizing stump" loading="lazy" />
                  <span className="photo-card__tag">02 · Pest Defense</span>
                </div>
                <div className="photo-card__body">
                  <div>
                    <h3 className="photo-card__title">Termite & Fungal Defense</h3>
                    <p className="photo-card__desc">
                      Dead underground hardwood harbors subterranean termites and carpenter ants that eventually migrate into nearby home foundations.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={250}>
              <div className="photo-card">
                <div className="photo-card__media">
                  <img src={IMAGES.stumpWork2} alt="Prepared subterranean planting zone" loading="lazy" />
                  <span className="photo-card__tag">03 · Site Renovation</span>
                </div>
                <div className="photo-card__body">
                  <div>
                    <h3 className="photo-card__title">Walkways, Patios & Replanting</h3>
                    <p className="photo-card__desc">
                      New fence lines, paver walkways, or replanted ornamental trees require root-free subterranean space to avoid foundation settling over time.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 3. EDITORIAL SPLIT SHOWCASE: COMPACT GATE ACCESS ───────── */}
      <section className="editorial-showcase">
        <div className="editorial-showcase__content" style={{ background: 'var(--color-charcoal)', color: '#fff' }}>
          <Reveal>
            <div className="section-badge" style={{ color: '#68B088' }}>
              <span className="section-badge__leaf">✦</span>
              <span>Low-Impact Machinery</span>
            </div>
            <h2 style={{ color: '#fff', fontSize: 'var(--fs-h2)', margin: '14px 0 20px' }}>
              Backyard Access Through Standard 36-Inch Gates
            </h2>
            <p style={{ color: 'rgba(242, 240, 233, 0.8)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '20px' }}>
              You don't need to dismantle your fence to remove a backyard stump.
            </p>
            <p style={{ color: 'rgba(242, 240, 233, 0.7)', fontSize: '0.95rem', lineHeight: 1.65, marginBottom: '36px' }}>
              Our commercial self-propelled stump grinders feature narrow-track chassis that navigate standard garden gates, stone garden steps, and steep yard slopes without leaving tire ruts.
            </p>
            <Link to="/contact" className="btn-modern btn-modern--forest">
              <span>Book Gate-Access Inspection</span>
              <span>→</span>
            </Link>
          </Reveal>
        </div>
        <div className="editorial-showcase__image">
          <img src={IMAGES.stumpWork1} alt="Compact self-propelled stump grinder operating on root flare" loading="lazy" />
        </div>
      </section>

      {/* ── 4. NUMBERED PROCESS STRIP ──────────────────────────────── */}
      <section className="section section--muted">
        <div className="container">
          <Reveal>
            <SectionHeader
              tag="Standard Workflow"
              title="The 4-Stage Mechanical Grinding Process"
              lead="How our operators isolate utilities, grind root flares, and restore ground contours."
              align="split"
            />
          </Reveal>

          <div className="process-strip">
            {[
              { num: '01', title: 'Utility Sweep & Prep', desc: 'We verify underground gas, irrigation, and power feeds, clearing rocks to prevent cutter deflection.' },
              { num: '02', title: 'Ballistic Netting Deployed', desc: 'Heavy debris shields protect window glass, vinyl siding, and ornamental planting zones from flying chips.' },
              { num: '03', title: 'Sub-Grade Lateral Milling', desc: 'The cutting wheel makes progressive horizontal passes 6–12 inches deep, chasing surface root flares.' },
              { num: '04', title: 'Backfill & Soil Leveling', desc: 'Mulch shavings are backfilled to allow natural settling, or hauled offsite for immediate sodding.' },
            ].map((p, idx) => (
              <Reveal key={idx} delay={idx * 70}>
                <div className="process-strip__card">
                  <div className="process-strip__number">{p.num}</div>
                  <h4 className="process-strip__title">{p.title}</h4>
                  <p className="process-strip__desc">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. IMMERSIVE PHOTO BANNER ──────────────────────────────── */}
      <div className="photo-banner">
        <img src={IMAGES.stumpTurf} alt="Pristine lawn completely restored after tree stump removal" loading="lazy" />
        <div className="photo-banner__overlay" />
      </div>

      {/* ── 6. POST-GRINDING TURF RESTORATION ──────────────────────── */}
      <section id="restoration" className="section">
        <div className="container">
          <Reveal>
            <SectionHeader
              tag="Ground Restoration"
              title="Post-Grinding Landscaping Options"
              lead="Choose how you want your site finished based on future landscape plans."
              align="split"
            />
          </Reveal>

          <div style={{ marginTop: '48px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '36px' }}>
            <Reveal>
              <div style={{ background: 'var(--color-surface-card)', padding: '40px', border: '1px solid var(--color-surface-border)' }}>
                <span className="section-badge">Option A</span>
                <h3 style={{ fontSize: '1.4rem', margin: '12px 0 14px' }}>Lawn Re-Establishment & Sodding</h3>
                <p style={{ color: 'var(--color-charcoal-muted)', fontSize: '0.95rem', lineHeight: 1.65, marginBottom: '20px' }}>
                  Excess wood chips are excavated, premium topsoil is added and tamped to prevent settling, and the area is prepped with matching turf sod or seed.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.9rem', color: 'var(--color-charcoal)' }}>
                  <li style={{ marginBottom: '8px' }}>• Prevents depression as subterranean chips decay</li>
                  <li style={{ marginBottom: '8px' }}>• Completely seamless blend with adjacent lawn</li>
                  <li>• Ideal for front yards and recreational lawn spaces</li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div style={{ background: 'var(--color-surface-card)', padding: '40px', border: '1px solid var(--color-surface-border)' }}>
                <span className="section-badge">Option B</span>
                <h3 style={{ fontSize: '1.4rem', margin: '12px 0 14px' }}>Mulch Bed Creation & Planting</h3>
                <p style={{ color: 'var(--color-charcoal-muted)', fontSize: '0.95rem', lineHeight: 1.65, marginBottom: '20px' }}>
                  The pulverized hardwood shavings remain in place as an organic weed-suppressing mulch blanket for new perennial beds or decorative shrubs.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.9rem', color: 'var(--color-charcoal)' }}>
                  <li style={{ marginBottom: '8px' }}>• Repurposes high-grade organic biomass on-site</li>
                  <li style={{ marginBottom: '8px' }}>• Saves wood chip hauling and disposal fees</li>
                  <li>• Excellent moisture retention for perennial shrubs</li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 7. NUMBERED ACCORDION FAQ ─────────────────────────────── */}
      <section className="section section--muted">
        <div className="container" style={{ maxWidth: '960px' }}>
          <Reveal>
            <SectionHeader
              tag="Stump Inquiries"
              title="Frequently Asked Questions About Stump Grinding"
              lead="Practical information about depth, utilities, wood chip reuse, and replanting."
              align="center"
            />
          </Reveal>
          <div style={{ marginTop: '48px' }}>
            <FAQ items={STUMP_FAQS} />
          </div>
        </div>
      </section>

      {/* ── 8. CLOSING CTA ─────────────────────────────────────────── */}
      <section className="section section--dark" style={{ textAlign: 'center', padding: '120px 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <Reveal>
            <div className="section-badge" style={{ color: '#68B088' }}>
              <span className="section-badge__leaf">✦</span>
              <span>Reclaim Usable Yard Space</span>
            </div>
            <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', color: '#fff', margin: '16px 0 24px', lineHeight: 1.15 }}>
              Ready to Eliminate Tripping Hazards & Unsightly Stumps?
            </h2>
            <p style={{ color: 'rgba(242, 240, 233, 0.8)', fontSize: '1.15rem', lineHeight: 1.65, marginBottom: '40px' }}>
              Contact {BUSINESS.name} today. We will measure your stumps, evaluate yard access, and provide an upfront written estimate.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn-modern btn-modern--forest">
                <span>Request Stump Grinding Estimate</span>
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
