'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';
import Link from 'next/link';

export default function AboutTeaser() {
  const ref = useScrollReveal();

  return (
    <section className="py-16 md:py-24 lg:py-32 border-t border-border">
      <div className="container-main max-w-2xl reveal" ref={ref}>
        <p className="type-body text-ink-soft mb-6">
          I am a self-taught developer based in Kushinagar, Uttar Pradesh. I
          started by building small tools for myself, then realized local
          businesses around me had real problems that software could solve — and
          no one was building for them. So I started doing it.
        </p>
        <p className="type-body text-ink-soft mb-8">
          Right now I work solo — design, code, deploy, client calls, pricing,
          all of it. The long-term direction is a small lab that combines
          hardware, AI, and software.
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
