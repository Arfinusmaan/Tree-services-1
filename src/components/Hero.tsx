import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  image: string;
  imageAlt: string;
  // Support both new `badge` and legacy `label`
  badge?: string;
  label?: string;
  title: string;
  subtitle?: string;
  primaryAction?: { label: string; to: string };
  secondaryAction?: { label: string; to: string };
  metrics?: Array<{ value: string; label: string }>;
  breadcrumbs?: Array<{ label: string; to?: string }>;
  children?: ReactNode;
  variant?: 'fullscreen' | 'editorial' | 'compact';
  // Legacy props
  short?: boolean;
  medium?: boolean;
  className?: string;
}

export default function Hero({
  image,
  imageAlt,
  badge,
  label,
  title,
  subtitle,
  primaryAction,
  secondaryAction,
  metrics,
  breadcrumbs,
  children,
  variant,
  short,
  medium,
  className = '',
}: Props) {
  const displayBadge = badge || label || 'Professional Tree Care & Arborist Services';
  const isCompact = variant === 'compact' || short;
  const isMedium = medium;

  return (
    <section className={`hero-editorial ${isCompact ? 'hero-editorial--compact' : ''} ${isMedium ? 'hero-editorial--medium' : ''} ${className}`}>
      {/* Background with Dark Multi-Stop Vignette & Glass Grain */}
      <div className="hero-editorial__media">
        <img src={image} alt={imageAlt} className="hero-editorial__img" loading="eager" />
        <div className="hero-editorial__scrim" />
        <div className="hero-editorial__grid-overlay" />
      </div>

      <div className="container hero-editorial__container">
        {/* Breadcrumb Path if Provided */}
        {breadcrumbs && (
          <nav aria-label="Breadcrumb" className="hero-editorial__breadcrumbs">
            <ol>
              <li><Link to="/">Home</Link></li>
              {breadcrumbs.map((b, idx) => (
                <li key={idx}>
                  <span className="sep">/</span>
                  {b.to ? <Link to={b.to}>{b.label}</Link> : <span aria-current="page">{b.label}</span>}
                </li>
              ))}
            </ol>
          </nav>
        )}

        {/* Floating Pill Tag with Pulsing Status Indicator */}
        <div className="hero-editorial__pill">
          <span className="hero-editorial__pill-dot" />
          <span className="hero-editorial__pill-text">{displayBadge}</span>
        </div>

        {/* Editorial Headline */}
        <h1 className="hero-editorial__headline">
          {title}
        </h1>

        {/* Supporting Narrative */}
        {subtitle && (
          <p className="hero-editorial__lead">
            {subtitle}
          </p>
        )}

        {/* Interactive Action Bar */}
        {(primaryAction || secondaryAction) && (
          <div className="hero-editorial__cta-group">
            {primaryAction && (
              <Link to={primaryAction.to} className="btn-modern btn-modern--forest">
                <span>{primaryAction.label}</span>
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </Link>
            )}
            {secondaryAction && (
              <Link to={secondaryAction.to} className="btn-modern btn-modern--glass">
                <span>{secondaryAction.label}</span>
              </Link>
            )}
          </div>
        )}

        {/* Bottom Editorial Metrics Strip */}
        {metrics && metrics.length > 0 && (
          <div className="hero-editorial__metrics">
            {metrics.map((m, idx) => (
              <div key={idx} className="hero-editorial__metric-cell">
                <div className="hero-editorial__metric-val">{m.value}</div>
                <div className="hero-editorial__metric-lbl">{m.label}</div>
              </div>
            ))}
          </div>
        )}

        {children}
      </div>
    </section>
  );
}
