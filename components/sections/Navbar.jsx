'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Button from '@/components/ui/Button';

const NAV_LINKS = [
  { label: 'Work', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  /* ── Scroll detection ──────────────────────────── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── Lock body scroll when menu open ───────────── */
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  /* ── Close on Escape ───────────────────────────── */
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape' && menuOpen) setMenuOpen(false);
    },
    [menuOpen]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  /* ── Close menu on route change ────────────────── */
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  /* ── Focus trap (simple: focus close button) ───── */
  useEffect(() => {
    if (menuOpen && menuRef.current) {
      const closeBtn = menuRef.current.querySelector('[data-close]');
      if (closeBtn) closeBtn.focus();
    }
  }, [menuOpen]);

  const isActive = (href) => {
    if (href === '/projects') return pathname.startsWith('/projects');
    return pathname === href;
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-paper/90 backdrop-blur-md border-b border-border'
            : 'bg-transparent'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container-main flex items-center justify-between h-16">
          {/* Wordmark */}
          <Link
            href="/"
            className="font-sans font-semibold text-ink text-lg tracking-tight hover:text-accent transition-colors duration-150"
          >
            Tausif Alam
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`type-nav transition-colors duration-150 ${
                  isActive(link.href)
                    ? 'text-accent underline underline-offset-[6px] decoration-1'
                    : 'text-ink-soft hover:text-ink'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button variant="primary" href="/contact" className="text-sm px-5 py-2.5">
              Let&apos;s talk
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex items-center justify-center w-11 h-11 text-ink"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            >
              <line x1="4" y1="7" x2="20" y2="7" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="17" x2="20" y2="17" />
            </svg>
          </button>
        </div>
      </nav>

      {/* ── Mobile menu overlay ──────────────────── */}
      {menuOpen && (
        <div
          ref={menuRef}
          className="fixed inset-0 z-[60] bg-paper flex flex-col"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          {/* Top bar */}
          <div className="container-main flex items-center justify-between h-16">
            <Link
              href="/"
              className="font-sans font-semibold text-ink text-lg tracking-tight"
              onClick={() => setMenuOpen(false)}
            >
              Tausif Alam
            </Link>
            <button
              data-close
              className="flex items-center justify-center w-11 h-11 text-ink"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              >
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="18" y1="6" x2="6" y2="18" />
              </svg>
            </button>
          </div>

          {/* Links */}
          <div className="flex-1 flex flex-col items-start justify-center container-main gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`font-serif text-[1.75rem] font-medium transition-colors duration-150 ${
                  isActive(link.href)
                    ? 'text-accent'
                    : 'text-ink hover:text-accent'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button
              variant="primary"
              href="/contact"
              className="mt-4"
              onClick={() => setMenuOpen(false)}
            >
              Let&apos;s talk
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
