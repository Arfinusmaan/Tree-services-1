interface Props {
  src: string;
  alt: string;
  onClose: () => void;
}

export default function Lightbox({ src, alt, onClose }: Props) {
  return (
    <div className="lightbox-overlay" onClick={onClose} role="dialog" aria-label="Image preview">
      <button className="lightbox-close" onClick={onClose} aria-label="Close image preview">✕</button>
      <img src={src} alt={alt} onClick={(e) => e.stopPropagation()} />
    </div>
  );
}
