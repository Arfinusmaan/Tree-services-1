import { useState } from 'react';
import type { FormEvent } from 'react';
import Hero from '../components/Hero';
import SectionHeader from '../components/SectionHeader';
import FAQ from '../components/FAQ';
import Reveal from '../components/Reveal';
import { IMAGES, CONTACT_FAQS, BUSINESS, SERVICES } from '../config';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'tree-removal',
    address: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Full name is required.';
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      errs.email = 'A valid email address is required.';
    }
    if (!formData.phone.trim()) errs.phone = 'Phone number is required for site visit scheduling.';
    if (!formData.address.trim()) errs.address = 'Property address is required to assess tree location.';
    return errs;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    // Explicit demo submission feedback as required by technical instructions
    setSubmitted(true);
  };

  return (
    <>
      {/* 1. HERO */}
      <Hero
        image={IMAGES.heroContact}
        imageAlt="Mature green woodland pathway under clear morning sunlight"
        badge="Prompt, Professional Dispatch"
        title="Schedule an On-Site Tree Assessment"
        subtitle="Provide project details below to schedule an on-site property evaluation. We inspect canopy health, calculate crane or lift access, and deliver an itemized written proposal."
        primaryAction={{ label: 'Jump to Estimate Request Form', to: '#estimate-form' }}
        secondaryAction={{ label: 'Call Our Office Desk', to: 'tel:5550192834' }}
        metrics={[
          { value: '24–48h', label: 'Proposal Turnaround' },
          { value: 'Itemized', label: 'Transparent Pricing' },
          { value: 'Zero', label: 'Obligation or Travel Fees' },
          { value: 'ISA', label: 'Evaluation Standards' },
        ]}
      />

      {/* 2. FORM & CONTACT DIRECTORY GRID */}
      <section id="estimate-form" className="section">
        <div className="container grid-2" style={{ alignItems: 'start', gap: '64px' }}>
          {/* Estimate Request Form */}
          <Reveal>
            <div style={{
              background: 'var(--color-surface)',
              padding: '48px',
              border: '1px solid var(--color-border)',
              boxShadow: '0 12px 40px rgba(0,0,0,0.04)',
            }}>
              <span className="section-label">Written Proposals</span>
              <h2 style={{ fontSize: '32px', marginTop: '10px', marginBottom: '14px', letterSpacing: '-0.02em' }}>
                On-Site Estimate Request
              </h2>
              <p style={{ fontSize: '15px', color: 'var(--color-charcoal-muted)', marginBottom: '32px', lineHeight: 1.6 }}>
                Submit your project specifications below. Our field estimators evaluate property scope, clearance hazards, and equipment access to deliver a clear written scope.
              </p>

              {submitted ? (
                <div style={{
                  padding: '40px 32px',
                  background: '#eaf4ee',
                  border: '1px solid #68B088',
                  textAlign: 'center',
                }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    background: 'var(--color-forest)',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '24px',
                    margin: '0 auto 16px auto',
                  }}>
                    ✓
                  </div>
                  <h3 style={{ fontSize: '22px', color: 'var(--color-forest)', marginBottom: '12px' }}>
                    Request Received (Demonstration Mode)
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--color-charcoal)', lineHeight: 1.6, marginBottom: '24px' }}>
                    Thank you, <strong>{formData.name}</strong>. In an active production deployment with a configured mail or CRM backend, our dispatch team would confirm your on-site assessment for <strong>{formData.address}</strong> within 1–2 business days.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', service: 'tree-removal', address: '', message: '' });
                    }}
                    className="btn btn--secondary"
                    style={{ fontSize: '13px' }}
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '8px', color: 'var(--color-charcoal)' }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Eleanor Vance"
                      style={{
                        width: '100%',
                        padding: '14px 16px',
                        border: errors.name ? '1px solid #b33927' : '1px solid var(--color-border)',
                        background: 'var(--color-bg)',
                        fontSize: '15px',
                        outline: 'none',
                        transition: 'border-color 0.2s ease',
                      }}
                    />
                    {errors.name && <span style={{ color: '#b33927', fontSize: '12px', marginTop: '6px', display: 'block' }}>{errors.name}</span>}
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', marginBottom: '20px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '8px', color: 'var(--color-charcoal)' }}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@example.com"
                        style={{
                          width: '100%',
                          padding: '14px 16px',
                          border: errors.email ? '1px solid #b33927' : '1px solid var(--color-border)',
                          background: 'var(--color-bg)',
                          fontSize: '15px',
                          outline: 'none',
                        }}
                      />
                      {errors.email && <span style={{ color: '#b33927', fontSize: '12px', marginTop: '6px', display: 'block' }}>{errors.email}</span>}
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '8px', color: 'var(--color-charcoal)' }}>
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(555) 000-0000"
                        style={{
                          width: '100%',
                          padding: '14px 16px',
                          border: errors.phone ? '1px solid #b33927' : '1px solid var(--color-border)',
                          background: 'var(--color-bg)',
                          fontSize: '15px',
                          outline: 'none',
                        }}
                      />
                      {errors.phone && <span style={{ color: '#b33927', fontSize: '12px', marginTop: '6px', display: 'block' }}>{errors.phone}</span>}
                    </div>
                  </div>

                  <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '8px', color: 'var(--color-charcoal)' }}>
                      Primary Service Category *
                    </label>
                    <select
                      value={formData.service}
                      onChange={e => setFormData({ ...formData, service: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '14px 16px',
                        border: '1px solid var(--color-border)',
                        background: 'var(--color-bg)',
                        fontSize: '15px',
                        outline: 'none',
                      }}
                    >
                      {SERVICES.map(s => (
                        <option key={s.id} value={s.id}>{s.title}</option>
                      ))}
                      <option value="multiple">Multiple / Full Grounds Care</option>
                    </select>
                  </div>

                  <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '8px', color: 'var(--color-charcoal)' }}>
                      Property Address & Municipality *
                    </label>
                    <input
                      type="text"
                      value={formData.address}
                      onChange={e => setFormData({ ...formData, address: e.target.value })}
                      placeholder="e.g. 742 Evergreen Terrace, Springfield"
                      style={{
                        width: '100%',
                        padding: '14px 16px',
                        border: errors.address ? '1px solid #b33927' : '1px solid var(--color-border)',
                        background: 'var(--color-bg)',
                        fontSize: '15px',
                        outline: 'none',
                      }}
                    />
                    {errors.address && <span style={{ color: '#b33927', fontSize: '12px', marginTop: '6px', display: 'block' }}>{errors.address}</span>}
                  </div>

                  <div style={{ marginBottom: '28px' }}>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '8px', color: 'var(--color-charcoal)' }}>
                      Project Details, Canopy Condition & Gate Access
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe the tree location (front lawn, backyard gate width), approximate diameter or height, proximity to structures or power lines, and any timing requirements..."
                      style={{
                        width: '100%',
                        padding: '14px 16px',
                        border: '1px solid var(--color-border)',
                        background: 'var(--color-bg)',
                        fontSize: '15px',
                        outline: 'none',
                        resize: 'vertical',
                      }}
                    />
                  </div>

                  <button type="submit" className="btn btn--primary" style={{ width: '100%', textAlign: 'center', padding: '16px' }}>
                    Submit On-Site Estimate Request
                  </button>
                </form>
              )}
            </div>
          </Reveal>

          {/* Business Details & Alternative Contact Options */}
          <Reveal delay={150}>
            <div>
              <SectionHeader
                badge="Direct Communication"
                title="Office Coordination & Field Dispatch"
              />
              <p style={{ marginBottom: '32px', lineHeight: 1.7, color: 'var(--color-charcoal-muted)' }}>
                Prefer discussing your property scope directly with our project coordinator? We welcome telephone calls and dispatch inquiries during standard operating hours.
              </p>

              <div style={{ marginBottom: '24px', padding: '28px', background: 'var(--color-bg)', border: '1px solid var(--color-border)' }}>
                <span className="section-label" style={{ color: 'var(--color-forest)', margin: 0 }}>Office Telephone</span>
                <p style={{ fontSize: '22px', fontWeight: 700, margin: '8px 0 4px 0', color: 'var(--color-charcoal)', letterSpacing: '-0.01em' }}>
                  {BUSINESS.phone}
                </p>
                <p style={{ fontSize: '13px', color: 'var(--color-charcoal-muted)', margin: 0 }}>
                  Demo placeholder number – replaced with your verified client dispatch phone.
                </p>
              </div>

              <div style={{ marginBottom: '24px', padding: '28px', background: 'var(--color-bg)', border: '1px solid var(--color-border)' }}>
                <span className="section-label" style={{ color: 'var(--color-forest)', margin: 0 }}>Email Dispatch Desk</span>
                <p style={{ fontSize: '20px', fontWeight: 700, margin: '8px 0 4px 0', color: 'var(--color-charcoal)' }}>
                  {BUSINESS.email}
                </p>
                <p style={{ fontSize: '13px', color: 'var(--color-charcoal-muted)', margin: 0 }}>
                  Monitored continuously for new property inquiries and contractor tenders.
                </p>
              </div>

              <div style={{ marginBottom: '32px', padding: '28px', background: 'var(--color-bg)', border: '1px solid var(--color-border)' }}>
                <span className="section-label" style={{ color: 'var(--color-forest)', margin: 0 }}>Operating Hours</span>
                <p style={{ fontSize: '16px', fontWeight: 600, margin: '8px 0 4px 0', color: 'var(--color-charcoal)' }}>
                  {BUSINESS.hours}
                </p>
                <p style={{ fontSize: '13px', color: 'var(--color-charcoal-muted)', margin: 0 }}>
                  Emergency storm crews dispatched on standby during severe regional weather alerts.
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                <div className="img-block">
                  <img src={IMAGES.contactSupport} alt="Arborist vehicle and tools staged neatly on site" loading="lazy" />
                </div>
                <div className="img-block">
                  <img src={IMAGES.contactConsultation} alt="Consultation walk assessing mature oak trees" loading="lazy" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3. WHAT TO EXPECT DURING THE ESTIMATE VISIT */}
      <section className="section section--muted">
        <div className="container">
          <SectionHeader
            badge="Inspection Process"
            title="What to Expect During Your On-Site Visit"
            subtitle="How our arborists evaluate scope, ground protection, and rigging requirements to ensure clear, transparent proposals."
            align="split"
          />

          <div style={{ marginTop: '56px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
            <div style={{ background: 'var(--color-bg)', padding: '36px', border: '1px solid var(--color-border)' }}>
              <span style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-forest)' }}>
                Step 01
              </span>
              <h4 style={{ fontSize: '19px', margin: '12px 0 10px 0' }}>Comprehensive Canopy Inspection</h4>
              <p style={{ fontSize: '14px', color: 'var(--color-charcoal-muted)', lineHeight: 1.6 }}>
                We inspect trunk integrity, co-dominant stems, bark inclusions, deadwood loads, and distance to structures, service drops, and property fences.
              </p>
            </div>

            <div style={{ background: 'var(--color-bg)', padding: '36px', border: '1px solid var(--color-border)' }}>
              <span style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-forest)' }}>
                Step 02
              </span>
              <h4 style={{ fontSize: '19px', margin: '12px 0 10px 0' }}>Equipment Access & Ground Route</h4>
              <p style={{ fontSize: '14px', color: 'var(--color-charcoal-muted)', lineHeight: 1.6 }}>
                We measure gate widths, inspect lawn slopes, and plan whether tracked spider lifts, mini-skid steers, or outrigger ground mats are required.
              </p>
            </div>

            <div style={{ background: 'var(--color-bg)', padding: '36px', border: '1px solid var(--color-border)' }}>
              <span style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-forest)' }}>
                Step 03
              </span>
              <h4 style={{ fontSize: '19px', margin: '12px 0 10px 0' }}>Itemized Written Proposal</h4>
              <p style={{ fontSize: '14px', color: 'var(--color-charcoal-muted)', lineHeight: 1.6 }}>
                You receive a clear digital proposal detailing cutting methods, log clearing, wood retention options, stump grinding, and fixed pricing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FAQ */}
      <section className="section">
        <div className="container" style={{ maxWidth: '960px' }}>
          <SectionHeader
            badge="Common Inquiries"
            title="Estimate & Scheduling FAQ"
            subtitle="Straightforward answers about estimate turnaround times, property presence requirements, and scheduling policies."
            align="split"
          />
          <div style={{ marginTop: '48px' }}>
            <FAQ items={CONTACT_FAQS} />
          </div>
        </div>
      </section>
    </>
  );
}
