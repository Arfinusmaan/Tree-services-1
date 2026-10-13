import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import SectionHeader from '../components/SectionHeader';
import FAQ from '../components/FAQ';
import Reveal from '../components/Reveal';
import { IMAGES, PRUNING_FAQS, BUSINESS } from '../config';

export default function TreePruning() {
  return (
    <>
      {/* ── 1. CINEMATIC HERO ──────────────────────────────────────── */}
      <Hero
        image={IMAGES.heroPruning}
        imageAlt="Sunlit tree canopy with balanced branch architecture"
        badge="Canopy Health & Structural Training"
        title="Precision Tree Pruning & Canopy Architecture"
        subtitle="Structural thinning, crown raising, deadwood extraction, and weight reduction—performed according to ANSI A300 standards to promote cellular vigor and resist high wind failure."
        primaryAction={{ label: 'Schedule Pruning Assessment', to: '/contact' }}
        secondaryAction={{ label: 'Learn Pruning Methods', to: '#types' }}
        breadcrumbs={[
          { label: 'Services', to: '/services' },
          { label: 'Tree Pruning' },
        ]}
        metrics={[
          { value: '25% Max', label: 'Live Canopy Limit' },
          { value: 'Zero', label: 'Harmful Tree Topping' },
          { value: 'ANSI', label: 'A300 Standard Cuts' },
          { value: '100%', label: 'Disinfected Saws' },
        ]}
      />

      {/* ── 2. EDITORIAL INTRO WITH SPLIT HEADER ───────────────────── */}
      <section className="section">
        <div className="container">
          <Reveal>
            <SectionHeader
              tag="Arboricultural Science"
              title="The Difference Between Tree Trimming and Proper Pruning"
              lead="Trimming is cosmetic shaping; pruning is surgical biology. Every branch cut permanently alters the tree's vascular circulation, growth hormones, and internal wood defense systems."
              align="split"
            />
          </Reveal>

          <div style={{ marginTop: '48px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
            <Reveal delay={50}>
              <div className="photo-card">
                <div className="photo-card__media">
                  <img src={IMAGES.pruningDetail} alt="Clean ANSI A300 branch collar pruning cut" loading="lazy" />
                  <span className="photo-card__tag">01 · Collar Integrity</span>
                </div>
                <div className="photo-card__body">
                  <div>
                    <h3 className="photo-card__title">Natural Target Pruning</h3>
                    <p className="photo-card__desc">
                      We cut strictly outside the branch bark ridge and collar. This preserves the tree's chemical barrier zone, enabling rapid wound compartmentalization against rot.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="photo-card">
                <div className="photo-card__media">
                  <img src={IMAGES.pruningWork1} alt="Selective crown thinning allowing wind to filter through" loading="lazy" />
                  <span className="photo-card__tag">02 · Wind Load</span>
                </div>
                <div className="photo-card__body">
                  <div>
                    <h3 className="photo-card__title">Crown Thinning & Sail Reduction</h3>
                    <p className="photo-card__desc">
                      By selectively thinning congested interior foliage, wind filters through the canopy rather than catching it like a sailboat sail, preventing storm shear fractures.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={250}>
              <div className="photo-card">
                <div className="photo-card__media">
                  <img src={IMAGES.heroPruning} alt="Canopy end-weight reduction over residential roof" loading="lazy" />
                  <span className="photo-card__tag">03 · Structural Balance</span>
                </div>
                <div className="photo-card__body">
                  <div>
                    <h3 className="photo-card__title">End-Weight Relief</h3>
                    <p className="photo-card__desc">
                      Over-extended horizontal limbs over rooftops accumulate massive torque. Reducing distal branch weight relieves lever-arm tension, preventing limb tear-outs.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 3. EDITORIAL SPLIT SHOWCASE: TOPPING WARNING ──────────── */}
      <section className="editorial-showcase">
        <div className="editorial-showcase__content" style={{ background: 'var(--color-charcoal)', color: '#fff' }}>
          <Reveal>
            <div className="section-badge" style={{ color: '#68B088' }}>
              <span className="section-badge__leaf">✦</span>
              <span>Professional Standards</span>
            </div>
            <h2 style={{ color: '#fff', fontSize: 'var(--fs-h2)', margin: '14px 0 20px' }}>
              Why We Never Top Trees
            </h2>
            <p style={{ color: 'rgba(242, 240, 233, 0.8)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '20px' }}>
              "Topping" or arbitrarily decapitating the crown is an outdated practice that permanently ruins mature trees.
            </p>
            <p style={{ color: 'rgba(242, 240, 233, 0.7)', fontSize: '0.95rem', lineHeight: 1.65, marginBottom: '36px' }}>
              It starves the root system of photosynthetic energy, creates giant rotting stubs, and triggers hundreds of weakly anchored "water sprouts" that break off in moderate winds. We practice legitimate crown reduction through directional lateral pruning cuts.
            </p>
            <Link to="/contact" className="btn-modern btn-modern--forest">
              <span>Request Canopy Assessment</span>
              <span>→</span>
            </Link>
          </Reveal>
        </div>
        <div className="editorial-showcase__image">
          <img src={IMAGES.pruningCanopy} alt="Properly thinned and balanced oak canopy against morning sky" loading="lazy" />
        </div>
      </section>

      {/* ── 4. TYPES OF PRUNING SERVICES ───────────────────────────── */}
      <section id="types" className="section section--muted">
        <div className="container">
          <Reveal>
            <SectionHeader
              tag="Pruning Disciplines"
              title="Tailored Pruning Categories for Every Tree Stage"
              lead="Different species and maturity levels require targeted pruning strategies."
              align="split"
            />
          </Reveal>

          <div style={{ marginTop: '48px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
            {[
              { title: 'Crown Cleaning', desc: 'Surgical extraction of dead, dying, diseased, or crossing branches from the canopy before fungal pathogens migrate to healthy wood.' },
              { title: 'Crown Raising (Clearance)', desc: 'Removing lowest tier branches to clear 10–14 feet over driveways, roofs, and sidewalks for vehicular and pedestrian passage.' },
              { title: 'Crown Thinning', desc: 'Selective branch reduction evenly throughout the canopy to increase solar penetration to underlying lawns without lion-tailing.' },
              { title: 'Crown Reduction', desc: 'Shortening overall canopy height and spread by cutting back to lateral branches at least one-third the diameter of the parent limb.' },
              { title: 'Structural Training', desc: 'Subordination of co-dominant stems in juvenile trees to create one dominant central trunk leader with 45-degree scaffold branch unions.' },
              { title: 'Deadwood Extraction', desc: 'Meticulous removal of brittle dead branches exceeding 2 inches in diameter over play areas, patios, and swimming pools.' },
            ].map((p, idx) => (
              <Reveal key={idx} delay={idx * 60}>
                <div style={{ background: '#fff', padding: '32px', border: '1px solid var(--color-surface-border)', height: '100%' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-forest)', marginBottom: '8px' }}>
                    Standard 0{idx + 1}
                  </div>
                  <h4 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>{p.title}</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-charcoal-muted)', lineHeight: 1.6 }}>{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. IMMERSIVE PHOTO BANNER ──────────────────────────────── */}
      <div className="photo-banner">
        <img src={IMAGES.heroPruning} alt="Arborist suspended in harness performing precision crown pruning" loading="lazy" />
        <div className="photo-banner__overlay" />
      </div>

      {/* ── 6. NUMBERED PROCESS STRIP ──────────────────────────────── */}
      <section className="section">
        <div className="container">
          <Reveal>
            <SectionHeader
              tag="Field Execution"
              title="Our Systematic Pruning Operating Procedure"
              lead="How our climbers ascend, evaluate, cut, and inspect every tree."
              align="split"
            />
          </Reveal>

          <div className="process-strip">
            {[
              { num: '01', title: 'Ground Walkthrough', desc: 'We inspect root flare stability, identify property targets, and formulate a species-tailored cut plan.' },
              { num: '02', title: 'Spikeless Climbing Ascent', desc: 'We climb using friction rope systems without spur spikes that pierce cambium bark on living trees.' },
              { num: '03', title: 'Systematic Cut Execution', desc: 'Working from top to bottom, deadwood is removed and end-weight relieved according to ANSI A300.' },
              { num: '04', title: 'Continuous Ground Rigging', desc: 'Falling branches are roped cleanly past lower limbs to protect roof gutters and garden shrubs.' },
              { num: '05', title: 'Blower Cleanup & Review', desc: 'All twig debris and leaves are processed through chippers, leaving lawns completely immaculate.' },
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
              tag="Pruning Inquiries"
              title="Frequently Asked Questions About Pruning"
              lead="Clear guidance regarding pruning seasons, oak wilt prevention, and tree regrowth."
              align="center"
            />
          </Reveal>
          <div style={{ marginTop: '48px' }}>
            <FAQ items={PRUNING_FAQS} />
          </div>
        </div>
      </section>

      {/* ── 8. CLOSING CTA ─────────────────────────────────────────── */}
      <section className="section section--dark" style={{ textAlign: 'center', padding: '120px 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <Reveal>
            <div className="section-badge" style={{ color: '#68B088' }}>
              <span className="section-badge__leaf">✦</span>
              <span>Certified Arborist Guidance</span>
            </div>
            <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', color: '#fff', margin: '16px 0 24px', lineHeight: 1.15 }}>
              Ready to Enhance the Safety & Beauty of Your Canopy?
            </h2>
            <p style={{ color: 'rgba(242, 240, 233, 0.8)', fontSize: '1.15rem', lineHeight: 1.65, marginBottom: '40px' }}>
              Contact {BUSINESS.name} today. We will assess your tree health and provide an itemized proposal with clear pruning recommendations.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn-modern btn-modern--forest">
                <span>Request Pruning Estimate</span>
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
