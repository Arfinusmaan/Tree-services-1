interface Props {
  // Support tag, badge, and legacy label
  tag?: string;
  badge?: string;
  label?: string;
  title: string;
  // Support both new `lead` and legacy `subtitle`
  lead?: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'split';
  // Support legacy `centered` boolean
  centered?: boolean;
  dark?: boolean;
}

export default function SectionHeader({
  tag,
  badge,
  label,
  title,
  lead,
  subtitle,
  align,
  centered,
  dark = false,
}: Props) {
  const displayTag = tag || badge || label;
  const displayLead = lead || subtitle;
  const resolvedAlign = align || (centered ? 'center' : 'left');

  if (resolvedAlign === 'split') {
    return (
      <div className={`section-header-modern section-header-modern--split ${dark ? 'section-header-modern--dark' : ''}`}>
        <div className="section-header-modern__col">
          {displayTag && (
            <div className="section-badge">
              <span className="section-badge__leaf">✦</span>
              <span>{displayTag}</span>
            </div>
          )}
          <h2 className="section-header-modern__title">{title}</h2>
        </div>
        {displayLead && (
          <div className="section-header-modern__col section-header-modern__col--lead">
            <p className="section-header-modern__lead">{displayLead}</p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`section-header-modern section-header-modern--${resolvedAlign} ${dark ? 'section-header-modern--dark' : ''}`}>
      {displayTag && (
        <div className="section-badge">
          <span className="section-badge__leaf">✦</span>
          <span>{displayTag}</span>
        </div>
      )}
      <h2 className="section-header-modern__title">{title}</h2>
      {displayLead && <p className="section-header-modern__lead">{displayLead}</p>}
    </div>
  );
}
