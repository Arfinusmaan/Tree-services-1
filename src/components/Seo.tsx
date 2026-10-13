import React, { useEffect } from 'react';

interface SeoProps {
  title: string;
  description?: string;
}

const Seo: React.FC<SeoProps> = ({ title, description }) => {
  useEffect(() => {
    document.title = `${title} | Evergreen Tree & Arbor Care`;
    if (description) {
      const meta = document.querySelector('meta[name=description]') as HTMLMetaElement | null;
      if (meta) {
        meta.content = description;
      } else {
        const metaTag = document.createElement('meta');
        metaTag.name = 'description';
        metaTag.content = description;
        document.head.appendChild(metaTag);
      }
    }
  }, [title, description]);
  return null;
};

export default Seo;
