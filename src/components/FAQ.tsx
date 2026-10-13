import { useState } from 'react';

interface FAQItem {
  q: string;
  a: string;
}

interface Props {
  items: FAQItem[];
  dark?: boolean;
}

export default function FAQ({ items, dark = false }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // first item open by default for rich preview

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className={`faq-modern-accordion ${dark ? 'faq-modern-accordion--dark' : ''}`}>
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        const indexStr = (i + 1).toString().padStart(2, '0');
        return (
          <div key={i} className={`faq-modern-row ${isOpen ? 'faq-modern-row--open' : ''}`}>
            <button
              className="faq-modern-trigger"
              onClick={() => toggle(i)}
              aria-expanded={isOpen}
            >
              <div className="faq-modern-trigger__left">
                <span className="faq-modern-number">{indexStr}</span>
                <span className="faq-modern-question">{item.q}</span>
              </div>
              <span className="faq-modern-toggle-btn">
                <span className="faq-modern-bar faq-modern-bar--h" />
                <span className="faq-modern-bar faq-modern-bar--v" />
              </span>
            </button>
            <div className="faq-modern-body">
              <div className="faq-modern-content">
                <p>{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
