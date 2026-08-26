/**
 * Buttons and link-buttons. `variant="primary"` is the filled accent CTA;
 * `ghost` is the outlined secondary. Every target clears 44px for touch.
 */
const base =
  'inline-flex min-h-11 items-center gap-2 rounded-pill px-5 py-2.5 text-caption ' +
  'transition-all duration-300 ease-[var(--ease-out-expo)]'

const variants = {
  primary: 'bg-accent text-accent-ink hover:brightness-110 hover:gap-3',
  ghost: 'border border-line-2 text-ink hover:border-ink hover:gap-3',
}

export default function Button({ as = 'a', variant = 'ghost', className = '', children, ...rest }) {
  const Tag = as
  return (
    <Tag className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </Tag>
  )
}
