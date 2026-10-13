import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import SectionHeader from '../components/SectionHeader';
import FAQ from '../components/FAQ';
import Reveal from '../components/Reveal';
import { IMAGES, LAND_CLEARING_FAQS, BUSINESS } from '../config';

export default function LandClearing() {
  return (
    <>
      {/* ── 1. CINEMATIC HERO ──────────────────────────────────────── */}
      <Hero
        image={IMAGES.heroLandClearing}
        imageAlt="Wooded parcel undergoing selective land clearing and site prep"
        badge="Site Development & Acreage Management"
        title="Professional Land & Lot Clearing Services"
        subtitle="Selective acreage thinning, forestry mulching, and full lot clearing for residential builds, additions, commercial developments, and defensible fire-space buffers."
        primaryAction={{ label: 'Request On-Site Estimate', to: '/contact' }}
        secondaryAction={{ label: 'Compare Clearing Methods', to: '#methods' }}
        breadcrumbs={[
          { label: 'Services', to: '/services' },
          { label: 'Land Clearing' },
        ]}
        metrics={[
          { value: 'Zero', label: 'Burn Pile Air Pollution' },
          { value: '100%', label: 'Selective Tree Preservation' },
          { value: 'CRZ', label: 'Critical Root Buffers' },
          { value: 'Erosion', label: 'Control Mulch Mats' },
        ]}
      />

      {/* ── 2. EDITORIAL INTRO WITH SPLIT HEADER ───────────────────── */}
      <section className="section">
        <div className="container">
          <Reveal>
            <SectionHeader
              tag="Environmental Engineering"
              title="Selective Clearing with Long-Term Soil & Canopy Preservation"
              lead="Land clearing should not mean indiscriminate bulldozing. Indiscriminate scraping destroys topsoil, triggers severe stormwater erosion, and damages roots of trees you intended to keep."
              align="split"
            />
          </Reveal>

          <div style={{ marginTop: '48px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
            <Reveal delay={50}>
              <div className="photo-card">
                <div className="photo-card__media">
                  <img src={IMAGES.landClearing1} alt="Tree root protection boundary during site clearing" loading="lazy" />
                  <span className="photo-card__tag">01 · Specimen Protection</span>
                </div>
                <div className="photo-card__body">
                  <div>
                    <h3 className="photo-card__title">Critical Root Zone Buffers</h3>
                    <p className="photo-card__desc">
                      We map high-value oaks, maples, and pines prior to staging, installing protective fencing to keep 20-ton tracked machinery off vital root flares.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="photo-card">
                <div className="photo-card__media">
                  <img src={IMAGES.landClearing2} alt="Forestry mulcher shredding underbrush into ground mulch" loading="lazy" />
                  <span className="photo-card__tag">02 · Forestry Mulching</span>
                </div>
                <div className="photo-card__body">
                  <div>
                    <h3 className="photo-card__title">In-Place Organic Shredding</h3>
                    <p className="photo-card__desc">
                      Understory brush, briars, and cedar saplings are shredded into an organic carpet that retains moisture, enriches soil, and eliminates burn piles.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={250}>
              <div className="photo-card">
                <div className="photo-card__media">
                  <img src={IMAGES.landClearing3} alt="Excavator grubbing root balls for construction pad" loading="lazy" />
                  <span className="photo-card__tag">03 · Build-Ready Finish</span>
                </div>
                <div className="photo-card__body">
                  <div>
                    <h3 className="photo-card__title">Excavator Grubbing</h3>
                    <p className="photo-card__desc">
                      For home foundations and driveway paths, heavy hydraulic excavators rake and extract complete stump root balls down to mineral subsoil.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 3. EDITORIAL SPLIT SHOWCASE: RESIDENTIAL VS COMMERCIAL ── */}
      <section className="editorial-showcase">
        <div className="editorial-showcase__content" style={{ background: 'var(--color-charcoal)', color: '#fff' }}>
          <Reveal>
            <div className="section-badge" style={{ color: '#68B088' }}>
              <span className="section-badge__leaf">✦</span>
              <span>Project Scale</span>
            </div>
            <h2 style={{ color: '#fff', fontSize: 'var(--fs-h2)', margin: '14px 0 20px' }}>
              Acreage Expansion & Building Pad Preparation
            </h2>
            <p style={{ color: 'rgba(242, 240, 233, 0.8)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '20px' }}>
              From reclaiming overgrown backyard briar patches to clearing commercial easements, we customize equipment packages to match terrain requirements.
            </p>
            <p style={{ color: 'rgba(242, 240, 233, 0.7)', fontSize: '0.95rem', lineHeight: 1.65, marginBottom: '36px' }}>
              Our crews work directly with general contractors, civil engineers, and private acreage owners to guarantee clean boundaries and compliance with municipal stormwater ordinances.
            </p>
            <Link to="/contact" className="btn-modern btn-modern--forest">
              <span>Schedule Lot Boundary Walk</span>
              <span>→</span>
            </Link>
          </Reveal>
        </div>
        <div className="editorial-showcase__image">
          <img src={IMAGES.landClearing1} alt="Selectively cleared woodland parcel showing mature trees preserved" loading="lazy" />
        </div>
      </section>

      {/* ── 4. METHODS COMPARISON ──────────────────────────────────── */}
      <section id="methods" className="section section--muted">
        <div className="container">
          <Reveal>
            <SectionHeader
              tag="Equipment Methodology"
              title="Forestry Mulching vs. Excavator Grubbing"
              lead="Selecting the right methodology prevents unnecessary hauling costs and soil disturbance."
              align="split"
            />
          </Reveal>

          <div style={{ marginTop: '48px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '36px' }}>
            <Reveal>
              <div style={{ background: '#fff', padding: '40px', border: '1px solid var(--color-surface-border)' }}>
                <span className="section-badge">Methodology 01</span>
                <h3 style={{ fontSize: '1.4rem', margin: '12px 0 14px' }}>Low-Impact Forestry Mulching</h3>
                <p style={{ color: 'var(--color-charcoal-muted)', fontSize: '0.95rem', lineHeight: 1.65, marginBottom: '20px' }}>
                  Tracked mulchers grind brush, shrubs, and trees up to 8 inches in diameter down to grade level, creating a natural mulch carpet without topsoil removal.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.9rem', color: 'var(--color-charcoal)' }}>
                  <li style={{ marginBottom: '8px' }}>• Zero burn piles or permit headaches</li>
                  <li style={{ marginBottom: '8px' }}>• Immediate ground cover suppresses weeds and mud</li>
                  <li>• Ideal for trails, fire breaks, and pasture reclaiming</li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div style={{ background: '#fff', padding: '40px', border: '1px solid var(--color-surface-border)' }}>
                <span className="section-badge">Methodology 02</span>
                <h3 style={{ fontSize: '1.4rem', margin: '12px 0 14px' }}>Excavator Grubbing & Root Raking</h3>
                <p style={{ color: 'var(--color-charcoal-muted)', fontSize: '0.95rem', lineHeight: 1.65, marginBottom: '20px' }}>
                  Heavy excavators with hydraulic thumbs extract complete stump root balls for foundation excavation, road corridors, and underground utilities.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.9rem', color: 'var(--color-charcoal)' }}>
                  <li style={{ marginBottom: '8px' }}>• Complete root extraction for stable foundations</li>
                  <li style={{ marginBottom: '8px' }}>• High-speed on-site commercial wood chipping</li>
                  <li>• Rough grading and final terrain shaping included</li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 5. IMMERSIVE PHOTO BANNER ──────────────────────────────── */}
      <div className="photo-banner">
        <img src={IMAGES.landClearing2} alt="Open graded land ready for custom home build" loading="lazy" />
        <div className="photo-banner__overlay" />
      </div>

      {/* ── 6. NUMBERED PROCESS STRIP ──────────────────────────────── */}
      <section className="section">
        <div className="container">
          <Reveal>
            <SectionHeader
              tag="Project Workflow"
              title="The 5-Stage Land Clearing Operating Procedure"
              lead="From survey boundary checks to final graded finish."
              align="split"
            />
          </Reveal>

          <div className="process-strip">
            {[
              { num: '01', title: 'Boundary & Tree Tagging', desc: 'We walk project lines with your survey stakes, flagging high-value specimen trees for preservation.' },
              { num: '02', title: 'Corridor & Silt Ingress', desc: 'Temporary access paths and silt fencing are installed to prevent runoff during mechanical work.' },
              { num: '03', title: 'Understory Mulching', desc: 'Compact mulchers clear tangled brush and deadwood to allow precision tree felling.' },
              { num: '04', title: 'Selective Felling & Extraction', desc: 'Designated trees are felled directionally, and root flares are grubbed out with excavators.' },
              { num: '05', title: 'Rough Grading & Rake', desc: 'Site is raked and graded smooth, leaving acreage clean, accessible, and ready for contractors.' },
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

      {/* ── 7. NUMBERED ACCORDION FAQ ─────────────────────────────── */}
      <section className="section section--muted">
        <div className="container" style={{ maxWidth: '960px' }}>
          <Reveal>
            <SectionHeader
              tag="Clearing Inquiries"
              title="Frequently Asked Questions About Lot Clearing"
              lead="Practical information about selective preservation, permits, and debris hauling."
              align="center"
            />
          </Reveal>
          <div style={{ marginTop: '48px' }}>
            <FAQ items={LAND_CLEARING_FAQS} />
          </div>
        </div>
      </section>

      {/* ── 8. CLOSING CTA ─────────────────────────────────────────── */}
      <section className="section section--dark" style={{ textAlign: 'center', padding: '120px 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <Reveal>
            <div className="section-badge" style={{ color: '#68B088' }}>
              <span className="section-badge__leaf">✦</span>
              <span>On-Site Parcel Assessments</span>
            </div>
            <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', color: '#fff', margin: '16px 0 24px', lineHeight: 1.15 }}>
              Ready to Prepare Your Lot for Development?
            </h2>
            <p style={{ color: 'rgba(242, 240, 233, 0.8)', fontSize: '1.15rem', lineHeight: 1.65, marginBottom: '40px' }}>
              Contact {BUSINESS.name} today. We will walk your property lines, discuss preservation goals, and provide an itemized written quote.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn-modern btn-modern--forest">
                <span>Request Lot Clearing Walk</span>
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
