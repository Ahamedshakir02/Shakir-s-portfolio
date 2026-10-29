/**
 * A case-study image: 1px hairline border and a 6px radius. Passing no `src`
 * renders nothing, so a project without artwork simply has no image.
 */
export default function ImageSlot({ src, alt = '', className = '', ...rest }) {
  if (!src) return null
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={`w-full rounded-[6px] border border-line ${className}`}
      {...rest}
    />
  )
}
