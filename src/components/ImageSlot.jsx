/**
 * Drop-in for the design's <image-slot> custom element. Renders a bordered
 * placeholder; pass `src` to show a real image instead.
 */
export default function ImageSlot({ src, alt = '', placeholder = 'Drop your photo', className = '' }) {
  return (
    <div className={`image-slot ${className}`.trim()}>
      {src ? (
        <img src={src} alt={alt} />
      ) : (
        <span className="image-slot-ph">{placeholder}</span>
      )}
    </div>
  )
}
