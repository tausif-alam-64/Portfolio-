import Link from 'next/link';

/**
 * Button component with four variants per spec §4.
 * Primary | Secondary | Ghost | Link
 *
 * Props:
 *  - variant: 'primary' | 'secondary' | 'ghost' | 'link' (default: 'primary')
 *  - href: if provided, renders as <Link>
 *  - disabled: boolean
 *  - className: additional classes
 *  - children, ...rest
 */
export default function Button({
  variant = 'primary',
  href,
  disabled = false,
  className = '',
  children,
  ...rest
}) {
  const base =
    'inline-flex items-center justify-center gap-2 font-sans font-medium text-[0.9375rem] leading-none tracking-[0.01em] transition-colors duration-150 cursor-pointer min-h-[44px] min-w-[44px]';

  const variants = {
    primary:
      'bg-accent text-paper rounded-full px-6 py-3 hover:bg-accent-ink active:scale-[0.98] active:transition-transform active:duration-100 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2',
    secondary:
      'border border-ink/20 text-ink rounded-full px-6 py-3 hover:border-ink/40 hover:bg-ink/[0.03] active:scale-[0.98] active:transition-transform active:duration-100 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2',
    ghost:
      'text-ink px-3 py-2 hover:underline hover:underline-offset-4 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2',
    link: 'text-accent underline underline-offset-2 hover:text-accent-ink focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 px-0 py-0 min-h-0 min-w-0',
  };

  const disabledStyles = 'opacity-40 pointer-events-none';

  const classes = `${base} ${variants[variant] || variants.primary} ${
    disabled ? disabledStyles : ''
  } ${className}`.trim();

  if (href && !disabled) {
    const isExternal = href.startsWith('http') || href.startsWith('mailto:');
    if (isExternal) {
      return (
        <a href={href} className={classes} {...rest}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} disabled={disabled} {...rest}>
      {children}
    </button>
  );
}
