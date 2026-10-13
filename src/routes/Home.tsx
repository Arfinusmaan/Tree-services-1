import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import SectionHeader from '../components/SectionHeader';
import FAQ from '../components/FAQ';
import Reveal from '../components/Reveal';
import { BUSINESS, SERVICES, IMAGES, HOME_FAQS, SERVICE_AREAS } from '../config';

export default function Home() {
  return (
    <>
      {/* ── 1. CINEMATIC EDITORIAL HERO ────────────────────────────── */}
      <Hero
        image={IMAGES.heroHome}
        imageAlt="Sunlight filtering through mature forest canopy"
        badge="Accredited Arboricultural Care & Tree Services"
        title="Considered Tree Care for Properties That Matter."
        subtitle="Expert tree removal, structural pruning, high-torque stump grinding, and rapid storm clearance—executed with precision rigging, heavy machinery, and absolute respect for your grounds."
        primaryAction={{ label: 'Request an On-Site Estimate', to: '/contact' }}
        secondaryAction={{ label: 'Explore Core Services', to: '/services' }}
        metrics={[
          { value: '100%', label: 'Written Proposals' },
          { value: 'Zero', label: 'Compromise on Safety' },
          { value: '12+', label: 'Regional Communities' },
          { value: 'Full', label: 'Turf Protection' },
        ]}
      />

      {/* ── 2. EDITORIAL INTRO WITH SPLIT HEADER ───────────────────── */}
      <section className="section">
        <div className="container">
          <Reveal>
            <SectionHeader
              tag="Our Working Approach"
              title="Tree Care That Begins With Biological Understanding"
              lead="Every mature specimen has decades of growth history and structural dynamics. Our crew brings disciplined arboricultural assessments before starting any saw."
              align="split"
            />
          </Reveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px', marginTop: '48px', alignItems: 'stretch' }}>
            <Reveal delay={50}>
              <div style={{ background: 'var(--color-surface-card)', padding: '40px', border: '1px solid var(--color-surface-border)', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <span className="section-badge"><span className="section-badge__leaf">01</span> Assessment</span>
                  <h3 style={{ fontSize: '1.4rem', margin: '14px 0 12px' }}>Structural Diagnostics</h3>
                  <p style={{ color: 'var(--color-charcoal-muted)', fontSize: '0.95rem', lineHeight: 1.65 }}>
                    We evaluate weight distribution, branch unions, internal decay pockets, and target zones before determining whether selective preservation or controlled dismantling is required.
                  </p>
                </div>
                <div style={{ marginTop: '28px', paddingTop: '20px', borderTop: '1px solid var(--color-surface-border)' }}>
                  <Link to="/about" style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    Our Company Standards →
                  </Link>
                </div>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="img-block" style={{ maxHeight: '340px', height: '100%', width: '100%', overflow: 'hidden' }}>
                <img src={IMAGES.introHome} alt="Tall healthy canopy with lush sunlit foliage" loading="lazy" style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
              </div>
            </Reveal>

            <Reveal delay={250}>
              <div style={{ background: 'var(--color-charcoal)', color: '#fff', padding: '40px', border: '1px solid #2e2e2e', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <span className="section-badge" style={{ color: '#68B088' }}><span className="section-badge__leaf">02</span> Property Care</span>
                  <h3 style={{ fontSize: '1.4rem', margin: '14px 0 12px', color: '#fff' }}>Rigorous Ground Protection</h3>
                  <p style={{ color: 'rgba(242, 240, 233, 0.75)', fontSize: '0.95rem', lineHeight: 1.65 }}>
                    From heavy ground distribution mats that protect lawns against rutting, to friction brake rigging that lowers multi-ton timber without impact cratering.
                  </p>
                </div>
                <div style={{ marginTop: '28px', paddingTop: '20px', borderTop: '1px solid rgba(255, 255, 255, 0.15)' }}>
                  <Link to="/contact" style={{ color: '#68B088', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    Book an On-Site Walk →
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 3. SERVICES DIRECTORY SHOWCASE ─────────────────────────── */}
      <section className="section section--muted">
        <div className="container">
          <Reveal>
            <SectionHeader
              tag="Comprehensive Portfolio"
              title="Full-Spectrum Arboricultural Capabilities"
              lead="From hazardous tight-quarter dismantling to proactive canopy maintenance, our specialized equipment and experienced field crews deliver dependable outcomes."
              align="split"
            />
          </Reveal>

          <div style={{ marginTop: '48px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '32px' }}>
            {SERVICES.map((s, idx) => {
              const servicePhoto = idx === 0 ? IMAGES.removalWork1
                : idx === 1 ? IMAGES.pruningWork1
                : idx === 2 ? IMAGES.stumpWork1
                : idx === 3 ? IMAGES.stormDamage1
                : idx === 4 ? IMAGES.landClearing1
                : IMAGES.treeHealth1;

              return (
                <Reveal key={s.id} delay={idx * 75}>
                  <div className="photo-card">
                    <div className="photo-card__media">
                      <img src={servicePhoto} alt={s.title} loading="lazy" />
                      <span className="photo-card__tag">Division 0{idx + 1}</span>
                    </div>
                    <div className="photo-card__body">
                      <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                          <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-forest)' }}>
                            Specialized Route
                          </span>
                          <span style={{ fontSize: '0.75rem', color: 'var(--color-charcoal-muted)' }}>
                            Verified Spec
                          </span>
                        </div>
                        <h3 className="photo-card__title">{s.title}</h3>
                        <p className="photo-card__desc">
                          {s.shortDesc}
                        </p>
                      </div>
                      <div className="photo-card__footer">
                        <Link to={s.path} className="btn-modern btn-modern--forest" style={{ width: '100%', padding: '12px 18px', fontSize: '0.8rem' }}>
                          <span>Explore {s.title}</span>
                          <span>→</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 4. TREE REMOVAL EDITORIAL SPLIT SHOWCASE ──────────────── */}
      <section className="editorial-showcase">
        <div className="editorial-showcase__content" style={{ background: 'var(--color-charcoal)', color: '#fff' }}>
          <Reveal>
            <div className="section-badge" style={{ color: '#68B088' }}>
              <span className="section-badge__leaf">✦</span>
              <span>Specialized Rigging Operations</span>
            </div>
            <h2 style={{ color: '#fff', fontSize: 'var(--fs-h2)', margin: '14px 0 20px' }}>
              Controlled Removal in Restricted Residential Spaces
            </h2>
            <p style={{ color: 'rgba(242, 240, 233, 0.8)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '20px' }}>
              When a mature oak, pine, or maple leans dangerously over a home, deck, or power corridor, standard felling is out of the question.
            </p>
            <p style={{ color: 'rgba(242, 240, 233, 0.7)', fontSize: '0.95rem', lineHeight: 1.65, marginBottom: '36px' }}>
              Our arborists deploy sectional dismantling systems, heavy-duty rigging friction blocks, and crane assistance to remove timber limb-by-limb, maintaining 100% control from canopy to lawn.
            </p>
            <Link to="/tree-removal" className="btn-modern btn-modern--forest">
              <span>Explore Removal Procedures</span>
              <span>→</span>
            </Link>
          </Reveal>
        </div>
        <div className="editorial-showcase__image">
          <img src={IMAGES.removalWork1} alt="Large pine timber being systematically dismantled" loading="lazy" />
        </div>
      </section>

      {/* ── 5. TREE PRUNING EDITORIAL SPLIT SHOWCASE ──────────────── */}
      <section className="editorial-showcase editorial-showcase--reverse">
        <div className="editorial-showcase__content">
          <Reveal>
            <div className="section-badge">
              <span className="section-badge__leaf">✦</span>
              <span>Canopy Stewardship</span>
            </div>
            <h2 style={{ fontSize: 'var(--fs-h2)', margin: '14px 0 20px' }}>
              Precision Structural Pruning & Health Thinning
            </h2>
            <p style={{ color: 'var(--color-charcoal-muted)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '20px' }}>
              Improper topping and flush cuts permanently compromise a tree's internal vascular system and trigger erratic, hazardous regrowth.
            </p>
            <p style={{ color: 'var(--color-charcoal-muted)', fontSize: '0.95rem', lineHeight: 1.65, marginBottom: '36px' }}>
              We follow strict ANSI A300 arboricultural standards: deadwood extraction, crown thinning to decrease wind sail resistance, and targeted elevation pruning that safeguards roofs and chimneys without disfiguring mature canopies.
            </p>
            <Link to="/tree-pruning" className="btn-modern btn-modern--charcoal">
              <span>View Pruning Standards</span>
              <span>→</span>
            </Link>
          </Reveal>
        </div>
        <div className="editorial-showcase__image">
          <img src={IMAGES.pruningWork1} alt="Arborist performing precision crown pruning" loading="lazy" />
        </div>
      </section>

      {/* ── 6. NUMBERED ESTIMATE & EXECUTION PROCESS ──────────────── */}
      <section className="section">
        <div className="container">
          <Reveal>
            <SectionHeader
              tag="Step-by-Step Workflow"
              title="From Initial Call to Spotless Cleanup"
              lead="A transparent 5-phase project process designed to eliminate ambiguity, safeguard property, and guarantee professional accountability."
              align="split"
            />
          </Reveal>

          <div className="process-strip">
            {[
              { num: '01', title: 'Consultation & Inquiry', desc: 'Tell us about your tree species, location, property access, and any storm or hazard urgency.' },
              { num: '02', title: 'On-Site Evaluation', desc: 'We inspect root flare health, structural lean, proximity to utilities, and ground condition.' },
              { num: '03', title: 'Written Scope & Quote', desc: 'You receive an itemized written estimate detailing cutting methods, rigging, and pricing.' },
              { num: '04', title: 'Controlled Execution', desc: 'Our crew arrives with certified safety gear, ground mats, and equipment to execute safely.' },
              { num: '05', title: 'Spotless Site Raking', desc: 'All logs and branches are chipped or hauled, leaving your lawn cleaner than when we arrived.' },
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

      {/* ── 7. IMMERSIVE FULL-WIDTH PHOTO BREAK ────────────────────── */}
      <div className="photo-banner">
        <img src={IMAGES.processHome} alt="Dense forest canopy under misty morning sunlight" loading="lazy" />
        <div className="photo-banner__overlay" />
      </div>

      {/* ── 8. SPECIALIZED EQUIPMENT & GROUND PROTECTION ──────────── */}
      <section className="section section--muted">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'center' }}>
          <Reveal>
            <div>
              <SectionBadge tag="Field Capability" />
              <h2 style={{ fontSize: 'var(--fs-h2)', margin: '14px 0 20px' }}>
                Purpose-Built Equipment for Low-Impact Operations
              </h2>
              <p style={{ color: 'var(--color-charcoal-muted)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '20px' }}>
                Heavy tree care equipment can destroy residential lawns if improperly deployed. That is why {BUSINESS.name} invests in specialized, turf-conscious machinery.
              </p>
              <div style={{ display: 'grid', gap: '16px', marginTop: '24px' }}>
                <div style={{ padding: '20px', background: '#fff', border: '1px solid var(--color-surface-border)' }}>
                  <h4 style={{ fontSize: '1.05rem', color: 'var(--color-forest)', marginBottom: '6px' }}>Turf-Dispersal Ground Mats</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-charcoal-muted)' }}>
                    High-density composite mats distribute machinery axle weight evenly, eliminating tire ruts in delicate lawns.
                  </p>
                </div>
                <div style={{ padding: '20px', background: '#fff', border: '1px solid var(--color-surface-border)' }}>
                  <h4 style={{ fontSize: '1.05rem', color: 'var(--color-forest)', marginBottom: '6px' }}>Narrow-Track Access Lifts</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-charcoal-muted)' }}>
                    Specialized spider lifts fit through standard 36-inch backyard gates to reach tall canopies without heavy truck ingress.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="img-block img-block--tall">
              <img src={IMAGES.equipmentHome} alt="Professional arborist equipment and chippers staged neatly" loading="lazy" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 9. REGIONAL SERVICE AREAS ──────────────────────────────── */}
      <section className="section">
        <div className="container">
          <Reveal>
            <SectionHeader
              tag="Coverage Directory"
              title="Communities & Municipalities We Proudly Serve"
              lead="Prompt dispatch across four primary counties with no unexpected travel surcharges within standard territory."
              align="split"
            />
          </Reveal>

          <div style={{ marginTop: '40px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            {SERVICE_AREAS.slice(0, 4).map((area, idx) => (
              <Reveal key={idx} delay={idx * 60}>
                <div style={{ padding: '28px', background: 'var(--color-surface-card)', border: '1px solid var(--color-surface-border)' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-forest)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    {area.county}
                  </span>
                  <h4 style={{ fontSize: '1.2rem', margin: '8px 0 12px' }}>{area.name}</h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-charcoal-muted)', marginBottom: '16px' }}>
                    Active municipal route for hazardous removals, storm response, and canopy pruning.
                  </p>
                  <Link to="/service-areas" style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-forest)' }}>
                    View Coverage Map →
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 10. NUMBERED ACCORDION FAQ ─────────────────────────────── */}
      <section className="section section--muted">
        <div className="container" style={{ maxWidth: '960px' }}>
          <Reveal>
            <SectionHeader
              tag="Customer Inquiries"
              title="Frequently Asked Questions"
              lead="Honest, practical answers about tree removals, permits, property cleanup, and on-site scheduling."
              align="center"
            />
          </Reveal>
          <div style={{ marginTop: '48px' }}>
            <FAQ items={HOME_FAQS} />
          </div>
        </div>
      </section>

      {/* ── 11. CLOSING HIGH-CONVERSION BANNER ─────────────────────── */}
      <section className="section section--dark" style={{ textAlign: 'center', padding: '120px 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <Reveal>
            <div className="section-badge" style={{ color: '#68B088' }}>
              <span className="section-badge__leaf">✦</span>
              <span>Written Proposals Provided</span>
            </div>
            <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', color: '#fff', margin: '16px 0 24px', lineHeight: 1.15 }}>
              Ready for a Considered Approach to Your Trees?
            </h2>
            <p style={{ color: 'rgba(242, 240, 233, 0.8)', fontSize: '1.15rem', lineHeight: 1.65, marginBottom: '40px' }}>
              Contact {BUSINESS.name} today. Our team will schedule an on-site visit to evaluate your property and provide an itemized proposal with zero ambiguity.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn-modern btn-modern--forest">
                <span>Request Written Estimate</span>
                <span>→</span>
              </Link>
              <Link to="/services" className="btn-modern btn-modern--glass">
                <span>Browse All Services</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function SectionBadge({ tag }: { tag: string }) {
  return (
    <div className="section-badge">
      <span className="section-badge__leaf">✦</span>
      <span>{tag}</span>
    </div>
  );
}
