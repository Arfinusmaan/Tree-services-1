import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import SectionHeader from '../components/SectionHeader';
import FAQ from '../components/FAQ';
import Reveal from '../components/Reveal';
import { IMAGES, EMERGENCY_FAQS, BUSINESS } from '../config';

export default function Emergency() {
  return (
    <>
      {/* ── 1. CINEMATIC HERO ──────────────────────────────────────── */}
      <Hero
        image={IMAGES.heroEmergency}
        imageAlt="Severe storm winds moving through forest canopy"
        badge="Rapid Storm Stabilization & Triage"
        title="Emergency Tree Response & Storm Damage Mitigation"
        subtitle="Prompt dispatch, hazardous limb extraction, and structural crane stabilization for fallen trees, split canopies, and blocked access roads following severe weather."
        primaryAction={{ label: 'Report Tree Emergency', to: '/contact' }}
        secondaryAction={{ label: 'Safety Protocols', to: '#safety' }}
        breadcrumbs={[
          { label: 'Services', to: '/services' },
          { label: 'Emergency Services' },
        ]}
        metrics={[
          { value: '35ft', label: 'Minimum Wire Clearance' },
          { value: 'Zero', label: 'Unverified 24/7 Gimmicks' },
          { value: 'Crane', label: 'Roof Pick Capabilities' },
          { value: 'Full', label: 'Insurance Claim Photo Docs' },
        ]}
      />

      {/* ── 2. CRITICAL LIFE SAFETY PROTOCOL ───────────────────────── */}
      <section id="safety" className="section" style={{ background: '#fff', borderBottom: '2px solid var(--color-forest)' }}>
        <div className="container" style={{ maxWidth: '960px' }}>
          <Reveal>
            <div style={{ padding: '36px', borderLeft: '4px solid #b33927', background: 'var(--color-surface-card)', border: '1px solid var(--color-surface-border)', borderLeftWidth: '5px' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#b33927' }}>
                Life Safety Emergency Protocol
              </span>
              <h2 style={{ fontSize: '1.75rem', margin: '10px 0 14px', color: 'var(--color-charcoal)' }}>
                Downed Power Lines & Structural Intrusion Hazards
              </h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-charcoal)', marginBottom: '14px', lineHeight: 1.65 }}>
                If a fallen tree, broken limb, or root mass is touching or within 35 feet of any electrical wire, <strong>stay away and call your local electrical utility immediately</strong>. Never assume a downed line is de-energized or that tree bark cannot conduct high-voltage electricity.
              </p>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-charcoal)', lineHeight: 1.65 }}>
                If a tree has punctured a roof truss or compromised weight-bearing walls, evacuate building occupants immediately before scheduling tree stabilization crews.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 3. EDITORIAL INTRO WITH SPLIT HEADER ───────────────────── */}
      <section className="section">
        <div className="container">
          <Reveal>
            <SectionHeader
              tag="Storm Physics"
              title="Stabilizing Tensioned Timber After Catastrophic Weather"
              lead="Fallen trees during storms frequently rest under immense internal tension ('spring poles'). Making uncalculated chainsaw cuts can cause catastrophic whipping, secondary collapse, or severe injury."
              align="split"
            />
          </Reveal>

          <div style={{ marginTop: '48px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
            <Reveal delay={50}>
              <div className="photo-card">
                <div className="photo-card__media">
                  <img src={IMAGES.stormDamage1} alt="Fallen tree rested on residential roof structure" loading="lazy" />
                  <span className="photo-card__tag">01 · Structural Relief</span>
                </div>
                <div className="photo-card__body">
                  <div>
                    <h3 className="photo-card__title">Rooftop Offloading</h3>
                    <p className="photo-card__desc">
                      We rig crane picks to hoist heavy timber vertically off roof decking, preventing further punctured rafters, broken shingles, and interior water leaks.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="photo-card">
                <div className="photo-card__media">
                  <img src={IMAGES.stormClearing} alt="High capacity chain saw crew sectioning road blockage" loading="lazy" />
                  <span className="photo-card__tag">02 · Ingress Clearance</span>
                </div>
                <div className="photo-card__body">
                  <div>
                    <h3 className="photo-card__title">Driveway & Roadways</h3>
                    <p className="photo-card__desc">
                      High-capacity saws section uprooted trunks blocking emergency vehicle corridors and residential garages, reopening vital property access fast.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={250}>
              <div className="photo-card">
                <div className="photo-card__media">
                  <img src={IMAGES.stormDamage2} alt="Dangerous suspended tree limb caught high in crown" loading="lazy" />
                  <span className="photo-card__tag">03 · Canopy Hangers</span>
                </div>
                <div className="photo-card__body">
                  <div>
                    <h3 className="photo-card__title">Suspended Widow-Makers</h3>
                    <p className="photo-card__desc">
                      Partially sheared leader limbs lodged in high canopies are methodically extracted before secondary gusts send them crashing down unpredictably.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 4. EDITORIAL SPLIT SHOWCASE: INSURANCE CLAIM SUPPORT ──── */}
      <section className="editorial-showcase">
        <div className="editorial-showcase__content" style={{ background: 'var(--color-charcoal)', color: '#fff' }}>
          <Reveal>
            <div className="section-badge" style={{ color: '#68B088' }}>
              <span className="section-badge__leaf">✦</span>
              <span>Insurance Collaboration</span>
            </div>
            <h2 style={{ color: '#fff', fontSize: 'var(--fs-h2)', margin: '14px 0 20px' }}>
              Itemized Photographic Documentation for Adjusters
            </h2>
            <p style={{ color: 'rgba(242, 240, 233, 0.8)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '20px' }}>
              Insurance claims for storm tree damage require clear documentation distinguishing tree removal off structures versus yard debris clearing.
            </p>
            <p style={{ color: 'rgba(242, 240, 233, 0.7)', fontSize: '0.95rem', lineHeight: 1.65, marginBottom: '36px' }}>
              We capture pre-work, in-progress, and post-stabilization photographs, accompanied by itemized billing breaking down crane hours, rigging, and tarping to ensure seamless adjuster processing.
            </p>
            <Link to="/contact" className="btn-modern btn-modern--forest">
              <span>Request Claim Documentation Walk</span>
              <span>→</span>
            </Link>
          </Reveal>
        </div>
        <div className="editorial-showcase__image">
          <img src={IMAGES.stormDamage1} alt="Storm damage tree resting near structure undergoing documentation" loading="lazy" />
        </div>
      </section>

      {/* ── 5. NUMBERED PROCESS STRIP ──────────────────────────────── */}
      <section className="section section--muted">
        <div className="container">
          <Reveal>
            <SectionHeader
              tag="Emergency Protocol"
              title="The 4-Stage Storm Triage Operating Procedure"
              lead="How our teams mobilize, secure property perimeters, and restore safety."
              align="split"
            />
          </Reveal>

          <div className="process-strip">
            {[
              { num: '01', title: 'Triage & Risk Screening', desc: 'We verify utility absence, assess structural stability, and dispatch appropriate rigging and crane support.' },
              { num: '02', title: 'Perimeter Hazard Isolation', desc: 'Work zones are cordoned off with safety tape to prevent pedestrian access beneath tensioned wood.' },
              { num: '03', title: 'Controlled Rigging Offload', desc: 'Tensioned spring poles and roof-encroaching branches are mechanically relieved and lifted cleanly.' },
              { num: '04', title: 'Tarping & Debris Chipping', desc: 'Exposed roof holes are weather-sealed with heavy tarps, and wood debris is hauled or chipped.' },
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

      {/* ── 6. IMMERSIVE PHOTO BANNER ──────────────────────────────── */}
      <div className="photo-banner">
        <img src={IMAGES.stormClearing} alt="Cleaned up property following storm tree removal" loading="lazy" />
        <div className="photo-banner__overlay" />
      </div>

      {/* ── 7. NUMBERED ACCORDION FAQ ─────────────────────────────── */}
      <section className="section">
        <div className="container" style={{ maxWidth: '960px' }}>
          <Reveal>
            <SectionHeader
              tag="Urgent Inquiries"
              title="Frequently Asked Questions About Emergency Services"
              lead="Clear guidance regarding insurance coverage, emergency triage, and wire hazards."
              align="center"
            />
          </Reveal>
          <div style={{ marginTop: '48px' }}>
            <FAQ items={EMERGENCY_FAQS} />
          </div>
        </div>
      </section>

      {/* ── 8. CLOSING CTA ─────────────────────────────────────────── */}
      <section className="section section--dark" style={{ textAlign: 'center', padding: '120px 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <Reveal>
            <div className="section-badge" style={{ color: '#68B088' }}>
              <span className="section-badge__leaf">✦</span>
              <span>Prompt Hazard Mitigation</span>
            </div>
            <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', color: '#fff', margin: '16px 0 24px', lineHeight: 1.15 }}>
              Need Storm Damage or Hazard Stabilization?
            </h2>
            <p style={{ color: 'rgba(242, 240, 233, 0.8)', fontSize: '1.15rem', lineHeight: 1.65, marginBottom: '40px' }}>
              Contact {BUSINESS.name} immediately. Our operations coordinators evaluate urgency and coordinate qualified field crews to protect your property.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn-modern btn-modern--forest">
                <span>Contact Emergency Dispatch</span>
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
