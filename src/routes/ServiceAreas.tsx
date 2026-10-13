import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import SectionHeader from '../components/SectionHeader';
import FAQ from '../components/FAQ';
import Reveal from '../components/Reveal';
import { IMAGES, SERVICE_AREAS, AREAS_FAQS, BUSINESS } from '../config';

export default function ServiceAreas() {
  // Group service areas by county
  const counties = Array.from(new Set(SERVICE_AREAS.map(a => a.county)));

  return (
    <>
      {/* 1. HERO */}
      <Hero
        image={IMAGES.heroAreas}
        imageAlt="Picturesque tree-lined suburban neighborhood street with mature canopy"
        badge="Regional Dispatch & Operations Network"
        title="Service Areas & Regional Coverage"
        subtitle="Dedicated local tree care, canopy preservation, hazardous removal, and rapid storm dispatch across our regional territory and adjacent municipal corridors."
        primaryAction={{ label: 'Explore Municipal Directory', to: '#directory' }}
        secondaryAction={{ label: 'Request an On-Site Estimate', to: '/contact' }}
        metrics={[
          { value: `${counties.length} Counties`, label: 'Active Route Coverage' },
          { value: 'Zero', label: 'Travel Surcharges' },
          { value: '24–48h', label: 'Written Estimate Turnaround' },
          { value: '100%', label: 'Turnkey Debris Cleanup' },
        ]}
      />

      {/* 2. COVERAGE CONCEPT & DISPATCH POLICIES (EDITORIAL SPLIT) */}
      <section className="section">
        <div className="container">
          <SectionHeader
            badge="Local Operations"
            title="Strategic Regional Dispatch with Deep Local Arboricultural Knowledge"
            align="split"
          />

          <div className="editorial-split" style={{ marginTop: '48px' }}>
            <div>
              <p className="body-lead" style={{ marginBottom: '20px' }}>
                At {BUSINESS.name}, our certified crews, tracked lifts, and heavy chip trucks operate out of strategically positioned staging hubs to ensure responsive, punctual coverage throughout all serviced communities.
              </p>
              <p style={{ color: 'var(--color-charcoal-muted)', lineHeight: 1.7, marginBottom: '20px' }}>
                Canopies across our regional counties endure distinct microclimates—from saturated river bottomland soils prone to root plate upheaval, to exposed ridge properties vulnerable to severe wind shear and native insect infestations. Our familiarity with municipal tree protection bylaws and local utility corridors allows us to guide homeowners efficiently through permit approvals and compliant canopy care.
              </p>
              <p style={{ color: 'var(--color-charcoal-muted)', lineHeight: 1.7, marginBottom: '32px' }}>
                Every written proposal is guaranteed transparent: we never charge travel or fuel surcharges within our core service boundaries, and every estimate includes complete branch chipping, log clearing, and ground raking.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', paddingTop: '24px', borderTop: '1px solid var(--color-border)' }}>
                <div>
                  <span style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-forest)' }}>
                    Turnkey Equipment
                  </span>
                  <p style={{ fontSize: '14px', color: 'var(--color-charcoal)', marginTop: '6px' }}>
                    Truck-mounted cranes, tracked aerial lifts, and quiet electric chainsaws tailored for tight suburban lots.
                  </p>
                </div>
                <div>
                  <span style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-forest)' }}>
                    Regulatory Familiarity
                  </span>
                  <p style={{ fontSize: '14px', color: 'var(--color-charcoal)', marginTop: '6px' }}>
                    Seamless adherence to local historic district preservation orders and town tree removal permits.
                  </p>
                </div>
              </div>
            </div>

            <div className="img-block img-block--tall" style={{ maxHeight: '480px', width: '100%', alignSelf: 'center' }}>
              <img src={IMAGES.introHome} alt="Neighborhood canopy of tall mature trees" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVICE AREA DIRECTORY */}
      <section id="directory" className="section section--muted">
        <div className="container">
          <SectionHeader
            badge="Municipal Coverage"
            title="Communities & Municipalities We Proudly Serve"
            subtitle="Browse our regional service territory below. All locations are fully configurable for your active client operations."
            align="split"
          />

          <div style={{ marginTop: '56px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
            {counties.map(county => (
              <Reveal key={county}>
                <div style={{
                  background: 'var(--color-bg)',
                  padding: '40px',
                  border: '1px solid var(--color-border)',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.03)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%',
                }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                      <span className="section-label" style={{ color: 'var(--color-forest)', margin: 0 }}>
                        {county}
                      </span>
                      <span style={{
                        fontSize: '11px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        background: 'rgba(35, 95, 69, 0.08)',
                        color: 'var(--color-forest)',
                        padding: '4px 10px',
                        fontWeight: 600,
                      }}>
                        Active Territory
                      </span>
                    </div>

                    <h3 style={{ fontSize: '22px', marginBottom: '20px' }}>
                      Local Municipalities
                    </h3>

                    <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px 0', fontSize: '15px' }}>
                      {SERVICE_AREAS.filter(a => a.county === county).map((loc, idx) => (
                        <li key={idx} style={{
                          padding: '12px 0',
                          borderBottom: '1px solid var(--color-border)',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}>
                          <span style={{ fontWeight: 500, color: 'var(--color-charcoal)' }}>{loc.name}</span>
                          <span style={{ fontSize: '12px', color: 'var(--color-forest)', fontWeight: 600 }}>
                            Daily Route
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link to="/contact" className="btn btn--secondary" style={{ width: '100%', textAlign: 'center', fontSize: '13px' }}>
                    Request Service in {county}
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div style={{
              marginTop: '48px',
              padding: '32px',
              background: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '24px',
            }}>
              <div>
                <h4 style={{ fontSize: '18px', marginBottom: '6px' }}>Don't See Your Specific Township Listed?</h4>
                <p style={{ fontSize: '14px', color: 'var(--color-charcoal-muted)', margin: 0, maxWidth: '640px' }}>
                  We frequently accommodate residential estates, commercial grounds, and large acreage projects in neighboring townships. Contact our regional dispatch desk to confirm schedule availability.
                </p>
              </div>
              <Link to="/contact" className="btn btn--primary" style={{ whiteSpace: 'nowrap' }}>
                Verify Route Availability
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4. SERVICES DELIVERED ACROSS ALL AREAS (CARDS + DUAL PHOTO GRID) */}
      <section className="section">
        <div className="container">
          <SectionHeader
            badge="Full Field Capabilities"
            title="Complete Arboricultural Solutions Across Every Territory"
            subtitle="The exact same uncompromising standard of safety, ISA-guided pruning, and heavy crane access deployed on every regional job."
            align="split"
          />

          <div style={{ marginTop: '56px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '28px' }}>
            <div style={{ padding: '32px', border: '1px solid var(--color-border)', background: 'var(--color-surface)' }}>
              <span style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-forest)' }}>
                Division 01
              </span>
              <h4 style={{ fontSize: '18px', margin: '10px 0 10px 0' }}>Hazardous Tree Removal</h4>
              <p style={{ fontSize: '14px', color: 'var(--color-charcoal-muted)', lineHeight: 1.6 }}>
                Sectional rigging and crane picks for decaying, storm-damaged, or structurally compromised trees in close proximity to homes.
              </p>
              <Link to="/tree-removal" style={{ display: 'inline-block', marginTop: '16px', fontSize: '13px', fontWeight: 600, color: 'var(--color-forest)' }}>
                Explore Removal Specs →
              </Link>
            </div>

            <div style={{ padding: '32px', border: '1px solid var(--color-border)', background: 'var(--color-surface)' }}>
              <span style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-forest)' }}>
                Division 02
              </span>
              <h4 style={{ fontSize: '18px', margin: '10px 0 10px 0' }}>Canopy Trimming & Pruning</h4>
              <p style={{ fontSize: '14px', color: 'var(--color-charcoal-muted)', lineHeight: 1.6 }}>
                ANSI A300 crown thinning, structure elevation, deadwood removal, and architectural shaping for long-term canopy vigor.
              </p>
              <Link to="/tree-pruning" style={{ display: 'inline-block', marginTop: '16px', fontSize: '13px', fontWeight: 600, color: 'var(--color-forest)' }}>
                Explore Pruning Specs →
              </Link>
            </div>

            <div style={{ padding: '32px', border: '1px solid var(--color-border)', background: 'var(--color-surface)' }}>
              <span style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-forest)' }}>
                Division 03
              </span>
              <h4 style={{ fontSize: '18px', margin: '10px 0 10px 0' }}>Sub-Grade Stump Grinding</h4>
              <p style={{ fontSize: '14px', color: 'var(--color-charcoal-muted)', lineHeight: 1.6 }}>
                Mechanical grinding 8–14 inches below grade to eliminate stumps and surface roots, clearing ground for lawn or replanting.
              </p>
              <Link to="/stump-grinding" style={{ display: 'inline-block', marginTop: '16px', fontSize: '13px', fontWeight: 600, color: 'var(--color-forest)' }}>
                Explore Stump Specs →
              </Link>
            </div>

            <div style={{ padding: '32px', border: '1px solid var(--color-border)', background: 'var(--color-surface)' }}>
              <span style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-forest)' }}>
                Division 04
              </span>
              <h4 style={{ fontSize: '18px', margin: '10px 0 10px 0' }}>Rapid Storm Response</h4>
              <p style={{ fontSize: '14px', color: 'var(--color-charcoal-muted)', lineHeight: 1.6 }}>
                Priority mitigation for uprooted canopies, structural impacts, and dangerous hanging limbs blocking driveway access.
              </p>
              <Link to="/emergency-tree-service" style={{ display: 'inline-block', marginTop: '16px', fontSize: '13px', fontWeight: 600, color: 'var(--color-forest)' }}>
                Explore Emergency Specs →
              </Link>
            </div>
          </div>

          {/* Regional Photography Showcase */}
          <div style={{ marginTop: '56px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '28px' }}>
            <div className="img-block img-block--wide">
              <img src={IMAGES.areasSuburban} alt="Suburban neighborhood with mature tree canopy preserved by our crews" loading="lazy" />
            </div>
            <div className="img-block img-block--wide">
              <img src={IMAGES.homeFeature1} alt="Lush residential estate tree line maintained by certified crew" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQ */}
      <section className="section section--muted">
        <div className="container" style={{ maxWidth: '960px' }}>
          <SectionHeader
            badge="Territory Questions"
            title="Service Areas & Travel Policies FAQ"
            subtitle="Clear answers on scheduling logistics, municipal permitting, and service radius boundaries."
            align="split"
          />
          <div style={{ marginTop: '48px' }}>
            <FAQ items={AREAS_FAQS} />
          </div>
        </div>
      </section>

      {/* 6. CONVERSION CTA */}
      <section className="section section--dark" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '780px' }}>
          <Reveal>
            <span className="section-label" style={{ color: '#68B088' }}>Ready to Schedule?</span>
            <h2 style={{ fontSize: 'var(--font-size-3xl)', color: '#fff', marginTop: '16px', marginBottom: '20px' }}>
              Book an On-Site Tree Evaluation in Your Community
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '17px', marginBottom: '36px', lineHeight: 1.7 }}>
              Contact {BUSINESS.name} today to discuss your property needs and schedule an itemized, complimentary on-site assessment with an experienced tree professional.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn--primary">
                Request Your On-Site Estimate
              </Link>
              <Link to="/services" className="btn btn--secondary" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}>
                Review Full Service Catalog
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
