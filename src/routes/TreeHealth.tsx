import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import SectionHeader from '../components/SectionHeader';
import FAQ from '../components/FAQ';
import Reveal from '../components/Reveal';
import { IMAGES, TREE_HEALTH_FAQS, BUSINESS } from '../config';

export default function TreeHealth() {
  return (
    <>
      {/* ── 1. CINEMATIC HERO ──────────────────────────────────────── */}
      <Hero
        image={IMAGES.heroTreeHealth}
        imageAlt="Sunlight illuminating vibrant healthy forest canopy foliage"
        badge="Preventative Arboriculture & Diagnostics"
        title="Tree Health Assessments & Long-Term Care"
        subtitle="Visual Tree Assessments (VTA), supersonic air-spade root excavations, soil decompaction, and structural risk management to protect mature specimen trees from silent vascular decline."
        primaryAction={{ label: 'Schedule Health Assessment', to: '/contact' }}
        secondaryAction={{ label: 'Signs of Tree Stress', to: '#signs' }}
        breadcrumbs={[
          { label: 'Services', to: '/services' },
          { label: 'Tree Health' },
        ]}
        metrics={[
          { value: 'VTA', label: 'Diagnostic Protocol' },
          { value: 'Zero', label: 'Miracle Chemical Scams' },
          { value: 'Air-Spade', label: 'Root Collar Tool' },
          { value: '2-3 Yr', label: 'Inspection Cycle' },
        ]}
      />

      {/* ── 2. EDITORIAL INTRO WITH SPLIT HEADER ───────────────────── */}
      <section className="section">
        <div className="container">
          <Reveal>
            <SectionHeader
              tag="Stewardship Philosophy"
              title="Preserving Mature Canopy Trees Before Catastrophic Failure"
              lead="Suburban trees exist under chronic stresses absent in natural forests: lawn mower trunk impacts, herbicide drift, compacted clay soils, and severed roots from trenching. Tree decline is a multi-year spiral that can be intercepted when recognized early."
              align="split"
            />
          </Reveal>

          <div style={{ marginTop: '48px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
            <Reveal delay={50}>
              <div className="photo-card">
                <div className="photo-card__media">
                  <img src={IMAGES.treeHealth1} alt="Foliage chlorosis and crown dieback diagnostic" loading="lazy" />
                  <span className="photo-card__tag">01 · Canopy Health</span>
                </div>
                <div className="photo-card__body">
                  <div>
                    <h3 className="photo-card__title">Chlorosis & Crown Dieback</h3>
                    <p className="photo-card__desc">
                      Pale yellow foliage and dead twig clusters at uppermost canopy branches signify root uptake failure or severe micronutrient soil imbalances.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="photo-card">
                <div className="photo-card__media">
                  <img src={IMAGES.treeHealth2} alt="Internal trunk decay and shelf fungal conk inspection" loading="lazy" />
                  <span className="photo-card__tag">02 · Vascular Decay</span>
                </div>
                <div className="photo-card__body">
                  <div>
                    <h3 className="photo-card__title">Shelf Fungi & Cavities</h3>
                    <p className="photo-card__desc">
                      Fungal conks emerging from trunk fissures are the fruiting bodies of wood-decay fungi actively degrading structural heartwood lignin inside.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={250}>
              <div className="photo-card">
                <div className="photo-card__media">
                  <img src={IMAGES.treeHealth3} alt="Exposed healthy root flare excavation" loading="lazy" />
                  <span className="photo-card__tag">03 · Root Health</span>
                </div>
                <div className="photo-card__body">
                  <div>
                    <h3 className="photo-card__title">Girdling Collar Roots</h3>
                    <p className="photo-card__desc">
                      Excessive mulch piled against the trunk collar ("mulch volcanoes") traps moisture, causing lateral roots to wrap around the trunk and strangle vascular sap flow.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 3. EDITORIAL SPLIT SHOWCASE: AIR-SPADE EXCAVATION ──────── */}
      <section className="editorial-showcase">
        <div className="editorial-showcase__content" style={{ background: 'var(--color-charcoal)', color: '#fff' }}>
          <Reveal>
            <div className="section-badge" style={{ color: '#68B088' }}>
              <span className="section-badge__leaf">✦</span>
              <span>Non-Destructive Technology</span>
            </div>
            <h2 style={{ color: '#fff', fontSize: 'var(--fs-h2)', margin: '14px 0 20px' }}>
              Air-Spade Root Flare Excavation
            </h2>
            <p style={{ color: 'rgba(242, 240, 233, 0.8)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '20px' }}>
              How do you inspect a root system buried under 8 inches of suffocating soil without chopping roots with a shovel?
            </p>
            <p style={{ color: 'rgba(242, 240, 233, 0.7)', fontSize: '0.95rem', lineHeight: 1.65, marginBottom: '36px' }}>
              We deploy supersonic pneumatic air excavation tools that pulverize and blast compacted soil away while leaving delicate root bark 100% undamaged. This allows surgical excision of strangling girdling roots.
            </p>
            <Link to="/contact" className="btn-modern btn-modern--forest">
              <span>Book Diagnostic Inspection</span>
              <span>→</span>
            </Link>
          </Reveal>
        </div>
        <div className="editorial-showcase__image">
          <img src={IMAGES.treeHealth1} alt="Healthy tree root collar and vibrant green canopy" loading="lazy" />
        </div>
      </section>

      {/* ── 4. NUMBERED PROCESS STRIP ──────────────────────────────── */}
      <section className="section section--muted">
        <div className="container">
          <Reveal>
            <SectionHeader
              tag="Care Lifecycle"
              title="A Sustainable Multi-Year Tree Health Cycle"
              lead="Proactive annual care prevents costly emergency extractions and protects property equity."
              align="split"
            />
          </Reveal>

          <div className="process-strip">
            {[
              { num: '01', title: 'Baseline Property Inventory', desc: 'Cataloging species, diameter at breast height (DBH), vigor scores, and defects across all trees.' },
              { num: '02', title: 'Target Risk Mitigation', desc: 'Prioritizing corrective pruning or cabling for trees situated within striking range of homes or driveways.' },
              { num: '03', title: 'Root Collar Unearthing', desc: 'Clearing compacted soil and mulch away from the root flare to restore atmospheric gas exchange.' },
              { num: '04', title: 'Mycorrhizal Soil Inoculation', desc: 'Incorporating composted organic matter into the root zone to re-establish beneficial fungal symbiosis.' },
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
        <img src={IMAGES.treeHealth2} alt="Sunlit grove of mature oaks showing exceptional vigor" loading="lazy" />
        <div className="photo-banner__overlay" />
      </div>

      {/* ── 6. NUMBERED ACCORDION FAQ ─────────────────────────────── */}
      <section className="section">
        <div className="container" style={{ maxWidth: '960px' }}>
          <Reveal>
            <SectionHeader
              tag="Health Inquiries"
              title="Frequently Asked Questions About Tree Health"
              lead="Practical information about saving distressed trees, signs of fungal decay, and inspection timing."
              align="center"
            />
          </Reveal>
          <div style={{ marginTop: '48px' }}>
            <FAQ items={TREE_HEALTH_FAQS} />
          </div>
        </div>
      </section>

      {/* ── 7. CLOSING CTA ─────────────────────────────────────────── */}
      <section className="section section--dark" style={{ textAlign: 'center', padding: '120px 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <Reveal>
            <div className="section-badge" style={{ color: '#68B088' }}>
              <span className="section-badge__leaf">✦</span>
              <span>Living Canopy Protection</span>
            </div>
            <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', color: '#fff', margin: '16px 0 24px', lineHeight: 1.15 }}>
              Concerned About a Mature Specimen on Your Grounds?
            </h2>
            <p style={{ color: 'rgba(242, 240, 233, 0.8)', fontSize: '1.15rem', lineHeight: 1.65, marginBottom: '40px' }}>
              Contact {BUSINESS.name} today. We will evaluate your tree's physiological vitality and formulate an objective, science-based care plan.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn-modern btn-modern--forest">
                <span>Request Health Assessment</span>
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
