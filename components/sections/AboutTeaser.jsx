'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';
import Link from 'next/link';

export default function AboutTeaser() {
  const ref = useScrollReveal();

  return (
    <section className="py-16 md:py-24 lg:py-32 border-t border-border">
      <div className="container-main max-w-2xl reveal" ref={ref}>
        <p className="type-body text-ink-soft mb-6">
          I am a full-stack developer based in Lucknow, Uttar Pradesh. I
          build production software for paying clients — a library management
          platform with a PostgreSQL backend, a restaurant ordering site
          with WhatsApp integration — and I own the full cycle from schema
          design to client invoicing.
        </p>
        <p className="type-body text-ink-soft mb-8">
          I work solo: design, code, deploy, client calls, pricing, all of
          it. No team, no agency, no middleman.
        </p>
        <Link
          href="/about"
          className="font-sans font-medium text-accent hover:text-accent-ink transition-colors duration-150 text-[0.9375rem]"
        >
          More about me →
        </Link>
      </div>
    </section>
  );
}
