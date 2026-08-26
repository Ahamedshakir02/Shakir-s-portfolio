/**
 * An image with a graceful empty state. Passing no `src` renders a bordered
 * placeholder, so a project without artwork still holds its layout slot
 * instead of collapsing.
 */
export default function ImageSlot({
  src,
  alt = '',
  placeholder = 'No image yet',
  className = '',
  imgClassName = '',
  ...rest
}) {
  return (
    <div
      className={`overflow-hidden rounded-card border border-line bg-paper-2 ${className}`}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          className={`h-full w-full object-cover ${imgClassName}`}
          {...rest}
        />
      ) : (
        <span className="label flex h-full min-h-48 w-full items-center justify-center text-muted">
          {placeholder}
        </span>
      )}
    </div>
  )
}
