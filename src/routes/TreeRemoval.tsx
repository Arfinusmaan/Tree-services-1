import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import SectionHeader from '../components/SectionHeader';
import FAQ from '../components/FAQ';
import Reveal from '../components/Reveal';
import { IMAGES, REMOVAL_FAQS, BUSINESS } from '../config';

export default function TreeRemoval() {
  return (
    <>
      {/* ── 1. CINEMATIC HERO ──────────────────────────────────────── */}
      <Hero
        image={IMAGES.heroRemoval}
        imageAlt="Tree removal operation with professional arborist crew and heavy equipment"
        badge="Specialized Extraction Operations"
        title="Safe, Controlled Tree Removal in Confined Spaces"
        subtitle="Meticulous rigging, crane-assisted dismantles, and section-by-section lowering for compromised, decaying, or hazardous trees—executed with zero impact on adjacent structures."
        primaryAction={{ label: 'Request Removal Estimate', to: '/contact' }}
        secondaryAction={{ label: 'Explore Our Workflow', to: '#workflow' }}
        breadcrumbs={[
          { label: 'Services', to: '/services' },
          { label: 'Tree Removal' },
        ]}
        metrics={[
          { value: 'Zero', label: 'Drop Impact on Turf' },
          { value: 'Crane', label: 'Assisted Capability' },
          { value: '100%', label: 'Confined Space Rigging' },
          { value: 'ANSI', label: 'Z133 Safety Standard' },
        ]}
      />

      {/* ── 2. EDITORIAL INTRO WITH SPLIT HEADER ───────────────────── */}
      <section className="section">
        <div className="container">
          <Reveal>
            <SectionHeader
              tag="Evaluation Standard"
              title="When Tree Removal Becomes the Responsible Course"
              lead="Felling a mature tree is never our first choice. We advocate preservation whenever structural cabling or corrective pruning can restore stability. However, when decay compromises load-bearing wood, controlled extraction is essential."
              align="split"
            />
          </Reveal>

          <div style={{ marginTop: '48px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
            <Reveal delay={50}>
              <div className="photo-card">
                <div className="photo-card__media">
                  <img src={IMAGES.stormDamage2} alt="Hazardous leaning tree threatening roofline" loading="lazy" />
                  <span className="photo-card__tag">01 · Life Safety</span>
                </div>
                <div className="photo-card__body">
                  <div>
                    <h3 className="photo-card__title">Target Zone Threats</h3>
                    <p className="photo-card__desc">
                      Trees exhibiting heavy lean toward occupied bedrooms, driveways, solar arrays, or high-voltage lines represent unacceptable liability under severe wind shear.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="photo-card">
                <div className="photo-card__media">
                  <img src={IMAGES.removalWork1} alt="Fungal rot and trunk decay inspection" loading="lazy" />
                  <span className="photo-card__tag">02 · Vascular Decay</span>
                </div>
                <div className="photo-card__body">
                  <div>
                    <h3 className="photo-card__title">Non-Recoverable Rot</h3>
                    <p className="photo-card__desc">
                      Fungal conks, extensive trunk hollows exceeding 30% diameter, and root collar rot cannot be reversed. Controlled dismantling eliminates unpredicted collapse.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={250}>
              <div className="photo-card">
                <div className="photo-card__media">
                  <img src={IMAGES.removalWork2} alt="Tree root conflict near structure foundation" loading="lazy" />
                  <span className="photo-card__tag">03 · Structural Damage</span>
                </div>
                <div className="photo-card__body">
                  <div>
                    <h3 className="photo-card__title">Foundation & Sewer Ingress</h3>
                    <p className="photo-card__desc">
                      Aggressive root flares heaving load-bearing foundations, cracking retaining walls, or infiltrating underground utilities require surgical extraction.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 3. EDITORIAL SPLIT: RIGGING METHODOLOGY ────────────────── */}
      <section className="editorial-showcase">
        <div className="editorial-showcase__content" style={{ background: 'var(--color-charcoal)', color: '#fff' }}>
          <Reveal>
            <div className="section-badge" style={{ color: '#68B088' }}>
              <span className="section-badge__leaf">✦</span>
              <span>Rigging Physics</span>
            </div>
            <h2 style={{ color: '#fff', fontSize: 'var(--fs-h2)', margin: '14px 0 20px' }}>
              Sectional Lowering: Feather-Light Ground Touchdown
            </h2>
            <p style={{ color: 'rgba(242, 240, 233, 0.8)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '20px' }}>
              We never drop large tree sections unguided. In residential lots surrounded by fences and flowerbeds, each piece is rigged before the chainsaw touches the bark.
            </p>
            <p style={{ color: 'rgba(242, 240, 233, 0.7)', fontSize: '0.95rem', lineHeight: 1.65, marginBottom: '36px' }}>
              Using ground-anchored friction brakes and high-tensile arborist bull ropes, a 1,500-pound log is halted smoothly mid-air and lowered into designated landing zones with zero lawn cratering.
            </p>
            <Link to="/contact" className="btn-modern btn-modern--forest">
              <span>Discuss Your Site Constraints</span>
              <span>→</span>
            </Link>
          </Reveal>
        </div>
        <div className="editorial-showcase__image">
          <img src={IMAGES.removalWork1} alt="Sectional timber rigging operation" loading="lazy" />
        </div>
      </section>

      {/* ── 4. NUMBERED PROCESS STRIP ──────────────────────────────── */}
      <section id="workflow" className="section section--muted">
        <div className="container">
          <Reveal>
            <SectionHeader
              tag="Step-by-Step Workflow"
              title="The 5-Phase Removal Operating Procedure"
              lead="How our tree removal crew approaches every job site with discipline and precision."
              align="split"
            />
          </Reveal>

          <div className="process-strip">
            {[
              { num: '01', title: 'Perimeter Hazard Isolation', desc: 'Ground crew establishes exclusion perimeters and positions heavy composite turf protection mats.' },
              { num: '02', title: 'Ascent & Crown De-Branching', desc: 'Climber ascends to remove lateral branches from the bottom up, creating clean trunk clearance.' },
              { num: '03', title: 'Sectional Trunk Rigging', desc: 'Trunk timber is cut into controlled cylindrical blocks and lowered via friction braking winches.' },
              { num: '04', title: 'Mechanical Chipper Feeding', desc: 'Brush is pulverized into premium wood mulch on-site or loaded into high-capacity haul trucks.' },
              { num: '05', title: 'Deep Rake & Grade Check', desc: 'Work area is thoroughly blown, raked, and prepared for optional stump grinding or replanting.' },
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

      {/* ── 5. IMMERSIVE PHOTO BREAK ───────────────────────────────── */}
      <div className="photo-banner">
        <img src={IMAGES.removalEquipment} alt="Heavy duty bucket truck and chipper staged on site" loading="lazy" />
        <div className="photo-banner__overlay" />
      </div>

      {/* ── 6. TIGHT SPACE CRANE REMOVALS ──────────────────────────── */}
      <section className="section">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'center' }}>
          <Reveal>
            <div>
              <div className="section-badge">
                <span className="section-badge__leaf">✦</span>
                <span>Complex Access</span>
              </div>
              <h2 style={{ fontSize: 'var(--fs-h2)', margin: '14px 0 20px' }}>
                Crane-Assisted Tree Dismantling
              </h2>
              <p style={{ color: 'var(--color-charcoal-muted)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '20px' }}>
                When a dead tree is located in an enclosed courtyard, steep lakeside embankment, or directly over a conservatory glass ceiling, climbing the tree may be structurally hazardous.
              </p>
              <p style={{ color: 'var(--color-charcoal-muted)', fontSize: '0.95rem', lineHeight: 1.65, marginBottom: '24px' }}>
                We deploy all-terrain hydraulic cranes with certified rigging slings. Entire multi-ton canopy picks are lifted vertically over rooftops and swung directly to the street chipper without ever touching your lawn.
              </p>
              <Link to="/contact" className="btn-modern btn-modern--charcoal">
                <span>Request Crane Evaluation</span>
                <span>→</span>
              </Link>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="img-block img-block--tall">
              <img src={IMAGES.removalWork2} alt="Large crane picking timber over residential property" loading="lazy" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 7. RESIDENTIAL VS COMMERCIAL SCOPE ─────────────────────── */}
      <section className="section section--muted">
        <div className="container">
          <Reveal>
            <SectionHeader
              tag="Property Applications"
              title="Residential & Commercial Tree Removal"
              lead="Tailored protocols whether you are a private homeowner or a commercial facility manager."
              align="split"
            />
          </Reveal>

          <div style={{ marginTop: '48px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '36px' }}>
            <Reveal>
              <div style={{ background: '#fff', padding: '40px', border: '1px solid var(--color-surface-border)' }}>
                <span className="section-badge">Private Residences</span>
                <h3 style={{ fontSize: '1.4rem', margin: '12px 0 14px' }}>Backyard & Tight-Lot Removals</h3>
                <p style={{ color: 'var(--color-charcoal-muted)', fontSize: '0.95rem', lineHeight: 1.65, marginBottom: '20px' }}>
                  Close coordination with neighbors, driveway access protection, gate dimension checks, and spotless end-of-day turf raking.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.9rem', color: 'var(--color-charcoal)' }}>
                  <li style={{ marginBottom: '8px' }}>• Specialized 36-inch gate-access equipment</li>
                  <li style={{ marginBottom: '8px' }}>• Plywood garden bed and paver shielding</li>
                  <li>• Complete stump grinding coordination</li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div style={{ background: '#fff', padding: '40px', border: '1px solid var(--color-surface-border)' }}>
                <span className="section-badge">Commercial Campuses</span>
                <h3 style={{ fontSize: '1.4rem', margin: '12px 0 14px' }}>Office Parks, HOAs & Retail Sites</h3>
                <p style={{ color: 'var(--color-charcoal-muted)', fontSize: '0.95rem', lineHeight: 1.65, marginBottom: '20px' }}>
                  High-volume hazard mitigation scheduled around peak customer hours, traffic management cones, and comprehensive proof of insurance.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.9rem', color: 'var(--color-charcoal)' }}>
                  <li style={{ marginBottom: '8px' }}>• Off-hours and weekend staging availability</li>
                  <li style={{ marginBottom: '8px' }}>• Direct COI certificate delivery to management</li>
                  <li>• Multi-tree volume pricing and land clearing</li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 8. NUMBERED ACCORDION FAQ ─────────────────────────────── */}
      <section className="section">
        <div className="container" style={{ maxWidth: '960px' }}>
          <Reveal>
            <SectionHeader
              tag="Removal Inquiries"
              title="Frequently Asked Questions About Tree Removal"
              lead="Practical information about permits, underground utilities, stump grinding, and pricing."
              align="center"
            />
          </Reveal>
          <div style={{ marginTop: '48px' }}>
            <FAQ items={REMOVAL_FAQS} />
          </div>
        </div>
      </section>

      {/* ── 9. CLOSING CTA ─────────────────────────────────────────── */}
      <section className="section section--dark" style={{ textAlign: 'center', padding: '120px 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <Reveal>
            <div className="section-badge" style={{ color: '#68B088' }}>
              <span className="section-badge__leaf">✦</span>
              <span>Fast On-Site Scheduling</span>
            </div>
            <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', color: '#fff', margin: '16px 0 24px', lineHeight: 1.15 }}>
              Have a Hazardous Tree That Needs to Come Down?
            </h2>
            <p style={{ color: 'rgba(242, 240, 233, 0.8)', fontSize: '1.15rem', lineHeight: 1.65, marginBottom: '40px' }}>
              Contact {BUSINESS.name} today. We will visit your property, assess access and tree physics, and provide an itemized written quote.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn-modern btn-modern--forest">
                <span>Request Removal Estimate</span>
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
