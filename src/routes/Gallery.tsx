import { useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import SectionHeader from '../components/SectionHeader';
import Reveal from '../components/Reveal';
import Lightbox from '../components/Lightbox';
import { IMAGES, GALLERY_IMAGES, GALLERY_CATEGORIES, BUSINESS } from '../config';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  const filteredImages = activeCategory === 'all'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter(img => img.category === activeCategory);

  return (
    <>
      {/* ── 1. CINEMATIC HERO ──────────────────────────────────────── */}
      <Hero
        image={IMAGES.heroGallery}
        imageAlt="Mature forest canopy looking upwards through vibrant greenery"
        badge="Curated Visual Documentation"
        title="Arboricultural Workmanship & Project Portfolio"
        subtitle="A visual exploration of precision sectional dismantles, delicate crown training, low-impact stump milling, and acreage forestry mulching."
        primaryAction={{ label: 'Request an Estimate', to: '/contact' }}
        secondaryAction={{ label: 'Filter by Division', to: '#gallery-grid' }}
        breadcrumbs={[
          { label: 'Gallery' },
        ]}
        metrics={[
          { value: '16+', label: 'Verified Showcase Captures' },
          { value: 'Zero', label: 'Fabricated Reviews' },
          { value: 'High-Res', label: 'Field Documentation' },
          { value: '5', label: 'Service Divisions' },
        ]}
      />

      {/* ── 2. EDITORIAL INTRO WITH SPLIT HEADER ───────────────────── */}
      <section className="section">
        <div className="container">
          <Reveal>
            <SectionHeader
              tag="Craft & Discipline"
              title="Visual Standards of Modern Arboriculture"
              lead="Behind every clean lawn and felled canopy is a strict discipline of physical mechanics, friction rigging calculations, and safety compliance. We never sacrifice ground control for speed."
              align="split"
            />
          </Reveal>

          {/* Filter Pills */}
          <div id="gallery-grid" style={{ marginTop: '48px', display: 'flex', justifyContent: 'flex-start', flexWrap: 'wrap', gap: '10px' }}>
            {GALLERY_CATEGORIES.map(cat => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  style={{
                    padding: '10px 20px',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    border: '1px solid',
                    borderColor: isActive ? 'var(--color-forest)' : 'var(--color-surface-border)',
                    backgroundColor: isActive ? 'var(--color-forest)' : '#fff',
                    color: isActive ? '#ffffff' : 'var(--color-charcoal)',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    borderRadius: '2px',
                  }}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Rhythmic Varied-Proportion Editorial Photo Grid (NO Bento Grids) */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
              gap: '32px',
              marginTop: '40px',
            }}
          >
            {filteredImages.map((img, idx) => (
              <Reveal key={idx} delay={(idx % 3) * 80}>
                <div
                  onClick={() => setSelectedImage(img)}
                  style={{
                    cursor: 'pointer',
                    overflow: 'hidden',
                    background: '#fff',
                    border: '1px solid var(--color-surface-border)',
                    position: 'relative',
                    aspectRatio: idx % 4 === 0 ? '16/10' : idx % 3 === 0 ? '4/5' : '1/1',
                  }}
                  className="img-block"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      transition: 'transform 0.6s var(--ease-editorial)',
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(16, 28, 22, 0.88) 0%, transparent 60%)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-end',
                      padding: '24px',
                      color: '#fff',
                    }}
                  >
                    <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#68B088', marginBottom: '6px' }}>
                      {img.category.toUpperCase()}
                    </span>
                    <p style={{ fontSize: '0.925rem', lineHeight: 1.45, color: 'rgba(255, 255, 255, 0.95)', margin: 0 }}>
                      {img.alt}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <p style={{ textAlign: 'center', padding: '60px 0', color: 'var(--color-charcoal-muted)' }}>
              No images found in this category.
            </p>
          )}
        </div>
      </section>

      {/* ── 3. IMMERSIVE PHOTO BANNER ──────────────────────────────── */}
      <div className="photo-banner">
        <img src={IMAGES.introHome} alt="Immaculate tree care property after professional pruning" loading="lazy" />
        <div className="photo-banner__overlay" />
      </div>

      {/* ── 4. LIGHTBOX MODAL ──────────────────────────────────────── */}
      {selectedImage && (
        <Lightbox
          src={selectedImage.src}
          alt={selectedImage.alt}
          onClose={() => setSelectedImage(null)}
        />
      )}

      {/* ── 5. CLOSING CTA ─────────────────────────────────────────── */}
      <section className="section section--dark" style={{ textAlign: 'center', padding: '120px 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <Reveal>
            <div className="section-badge" style={{ color: '#68B088' }}>
              <span className="section-badge__leaf">✦</span>
              <span>Transform Your Property</span>
            </div>
            <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', color: '#fff', margin: '16px 0 24px', lineHeight: 1.15 }}>
              Ready for Award-Winning Arboricultural Care?
            </h2>
            <p style={{ color: 'rgba(242, 240, 233, 0.8)', fontSize: '1.15rem', lineHeight: 1.65, marginBottom: '40px' }}>
              Contact {BUSINESS.name} today. We will evaluate your property and provide an itemized written quote.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn-modern btn-modern--forest">
                <span>Request Written Estimate</span>
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
