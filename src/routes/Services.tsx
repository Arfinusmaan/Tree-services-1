import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import SectionHeader from '../components/SectionHeader';
import FAQ from '../components/FAQ';
import Reveal from '../components/Reveal';
import { IMAGES, SERVICES_FAQS, BUSINESS, SERVICES } from '../config';

export default function Services() {
  return (
    <>
      {/* ── 1. CINEMATIC SERVICES HERO ────────────────────────────── */}
      <Hero
        image={IMAGES.heroServices}
        imageAlt="Dense forest canopy viewed from below"
        badge="Complete Arboricultural Capabilities"
        title="Comprehensive Tree & Arbor Care Services"
        subtitle="From hazardous tree removals and technical rigging to crown preservation, high-torque stump milling, and emergency storm clearance."
        primaryAction={{ label: 'Request an On-Site Estimate', to: '/contact' }}
        secondaryAction={{ label: 'View Project Gallery', to: '/gallery' }}
        breadcrumbs={[{ label: 'Services' }]}
        metrics={[
          { value: '6', label: 'Specialized Service Divisions' },
          { value: '100%', label: 'Written Cost Estimates' },
          { value: 'ANSI', label: 'A300 Pruning Compliance' },
          { value: 'Zero', label: 'Turf Rutting Guarantee' },
        ]}
      />

      {/* ── 2. EDITORIAL INTRO WITH SPLIT HEADER ───────────────────── */}
      <section className="section">
        <div className="container">
          <Reveal>
            <SectionHeader
              tag="Overview & Methodology"
              title="Tailored Arboriculture for Distinct Landscapes"
              lead="Every property has unique topography, tree species composition, and spatial constraints. We deploy trained arborists and purpose-built machinery to address each specific condition."
              align="split"
            />
          </Reveal>

          <div style={{ marginTop: '48px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '32px' }}>
            <Reveal delay={50}>
              <div style={{ padding: '36px', background: 'var(--color-surface-card)', border: '1px solid var(--color-surface-border)', height: '100%' }}>
                <span className="section-badge"><span className="section-badge__leaf">01</span> Safety & Rigging</span>
                <h3 style={{ fontSize: '1.35rem', margin: '14px 0 10px' }}>Engineered Load Control</h3>
                <p style={{ color: 'var(--color-charcoal-muted)', fontSize: '0.95rem', lineHeight: 1.65 }}>
                  We utilize modern stationary rope work positioning, friction brake lowering devices, and crane picks to control heavy wood without shocking anchor points or dropping timber onto lawns.
                </p>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div style={{ padding: '36px', background: 'var(--color-surface-card)', border: '1px solid var(--color-surface-border)', height: '100%' }}>
                <span className="section-badge"><span className="section-badge__leaf">02</span> Biology First</span>
                <h3 style={{ fontSize: '1.35rem', margin: '14px 0 10px' }}>Tree Anatomy Compliance</h3>
                <p style={{ color: 'var(--color-charcoal-muted)', fontSize: '0.95rem', lineHeight: 1.65 }}>
                  Every cut honors branch bark ridges and branch collars. We never top trees, flush-cut branch collars, or remove excessive live foliage that would induce stress rot.
                </p>
              </div>
            </Reveal>

            <Reveal delay={250}>
              <div style={{ padding: '36px', background: 'var(--color-surface-card)', border: '1px solid var(--color-surface-border)', height: '100%' }}>
                <span className="section-badge"><span className="section-badge__leaf">03</span> Clean Grounds</span>
                <h3 style={{ fontSize: '1.35rem', margin: '14px 0 10px' }}>Complete Site Raking</h3>
                <p style={{ color: 'var(--color-charcoal-muted)', fontSize: '0.95rem', lineHeight: 1.65 }}>
                  Jobs conclude with industrial turf blowers, rake sweeps, and high-capacity chipper processing. We leave gardens, sidewalks, and driveways completely debris-free.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 3. DETAILED 6-SERVICE DIRECTORY WITH PHOTOGRAPHY ──────── */}
      <section className="section section--muted">
        <div className="container">
          <Reveal>
            <SectionHeader
              tag="Core Divisions"
              title="Explore Individual Service Offerings"
              lead="Click into any dedicated service page below to learn about specific equipment, safety workflows, and project timelines."
              align="split"
            />
          </Reveal>

          <div style={{ marginTop: '48px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '32px' }}>
            {SERVICES.map((s, idx) => (
              <Reveal key={s.id} delay={idx * 60}>
                <div style={{ background: '#fff', border: '1px solid var(--color-surface-border)', display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden' }}>
                  <div style={{ height: '220px', overflow: 'hidden' }}>
                    <img
                      src={idx === 0 ? IMAGES.removalWork1 : idx === 1 ? IMAGES.pruningWork1 : idx === 2 ? IMAGES.stumpWork1 : idx === 3 ? IMAGES.stormDamage1 : idx === 4 ? IMAGES.landClearing1 : IMAGES.treeHealth1}
                      alt={s.title}
                      loading="lazy"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <div style={{ padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1 }}>
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                        <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-forest)' }}>
                          Division 0{idx + 1}
                        </span>
                        <span style={{ fontSize: '0.75rem', color: 'var(--color-charcoal-muted)' }}>Dedicated Page</span>
                      </div>
                      <h3 style={{ fontSize: '1.35rem', marginBottom: '10px' }}>{s.title}</h3>
                      <p style={{ fontSize: '0.925rem', color: 'var(--color-charcoal-muted)', lineHeight: 1.65 }}>
                        {s.shortDesc}
                      </p>
                    </div>
                    <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid var(--color-surface-border)' }}>
                      <Link to={s.path} className="btn-modern btn-modern--forest" style={{ width: '100%', padding: '12px 18px', fontSize: '0.8rem' }}>
                        <span>Explore {s.title}</span>
                        <span>→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. VISUAL GUIDE TO RECOGNIZING TREE HAZARDS ────────────── */}
      <section className="section">
        <div className="container">
          <Reveal>
            <SectionHeader
              tag="Visual Diagnostic Guide"
              title="Recognizing Common Tree Risk Indicators"
              lead="How homeowners can identify structural defects before catastrophic storm failure occurs."
              align="split"
            />
          </Reveal>

          <div style={{ marginTop: '48px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '28px' }}>
            {[
              { num: 'A', title: 'Co-Dominant Stems with Included Bark', desc: 'V-shaped stem unions where bark pinches between trunks, representing high probability of split failure under wind shear.' },
              { num: 'B', title: 'Cavities & Bracket Fungi', desc: 'Shelf conks protruding from trunk wood indicate extensive internal heartwood rot reducing load-bearing capacity.' },
              { num: 'C', title: 'Ground Mounding & Root Heave', desc: 'Fresh soil fractures or raised turf on the side opposite a tree lean indicates root anchor detachment.' },
              { num: 'D', title: 'Deadwood Canopy Clusters', desc: 'Large dead limbs suspended in high crowns ("widow-makers") that can drop suddenly without wind.' },
            ].map((item, idx) => (
              <Reveal key={idx} delay={idx * 60}>
                <div style={{ padding: '28px', background: 'var(--color-surface-card)', border: '1px solid var(--color-surface-border)', borderTop: '3px solid var(--color-forest)' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-forest)', marginBottom: '8px' }}>
                    {item.num}
                  </div>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '8px' }}>{item.title}</h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-charcoal-muted)', lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. IMMERSIVE PHOTO BREAK ───────────────────────────────── */}
      <div className="photo-banner">
        <img src={IMAGES.servicesIntro} alt="Dense forest pathway showing towering mature conifers" loading="lazy" />
        <div className="photo-banner__overlay" />
      </div>

      {/* ── 6. NUMBERED ASSESSMENT LIFECYCLE ──────────────────────── */}
      <section className="section section--muted">
        <div className="container">
          <Reveal>
            <SectionHeader
              tag="Evaluation Standard"
              title="How We Assess Complex Projects"
              lead="A disciplined 4-stage engineering evaluation conducted during every on-site assessment."
              align="split"
            />
          </Reveal>

          <div className="process-strip">
            {[
              { num: '01', title: 'Species Identification', desc: 'Evaluating species-specific wood densities, failure tendencies, and rooting architectures.' },
              { num: '02', title: 'Defect Analysis', desc: 'Scrutinizing crown weight distribution, trunk fissures, co-dominant stems, and root collar flare.' },
              { num: '03', title: 'Target Proximity', desc: 'Mapping physical drop zones relative to roofs, driveways, electrical cables, and pools.' },
              { num: '04', title: 'Rigging Formulation', desc: 'Calculating required crane pick weights, friction block locations, and ground protection mats.' },
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

      {/* ── 7. ACCORDION FAQ ───────────────────────────────────────── */}
      <section className="section">
        <div className="container" style={{ maxWidth: '960px' }}>
          <Reveal>
            <SectionHeader
              tag="Inquiries"
              title="Frequently Asked Questions"
              lead="Clear guidance regarding permit compliance, pruning cycles, and site access."
              align="center"
            />
          </Reveal>
          <div style={{ marginTop: '48px' }}>
            <FAQ items={SERVICES_FAQS} />
          </div>
        </div>
      </section>

      {/* ── 8. CLOSING CTA ─────────────────────────────────────────── */}
      <section className="section section--dark" style={{ textAlign: 'center', padding: '120px 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <Reveal>
            <div className="section-badge" style={{ color: '#68B088' }}>
              <span className="section-badge__leaf">✦</span>
              <span>Professional Proposals</span>
            </div>
            <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', color: '#fff', margin: '16px 0 24px', lineHeight: 1.15 }}>
              Ready for a Professional Tree Evaluation?
            </h2>
            <p style={{ color: 'rgba(242, 240, 233, 0.8)', fontSize: '1.15rem', lineHeight: 1.65, marginBottom: '40px' }}>
              Contact {BUSINESS.name} today for an honest, detailed written estimate for your residential or commercial property.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn-modern btn-modern--forest">
                <span>Request Written Estimate</span>
                <span>→</span>
              </Link>
              <Link to="/gallery" className="btn-modern btn-modern--glass">
                <span>View Project Gallery</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
