'use client';

import { useEffect, useRef } from 'react';
import Button from '@/components/ui/Button';
import { projects } from '@/lib/projects';

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    const items = el.querySelectorAll('.hero-stagger');
    if (prefersReduced) {
      items.forEach((item) => {
        item.style.opacity = '1';
        item.style.transform = 'none';
      });
      return;
    }

    // Trigger animations on mount
    requestAnimationFrame(() => {
      items.forEach((item) => item.classList.add('animate'));
    });
  }, []);

  return (
    <section className="pt-28 pb-20 md:pt-36 md:pb-28 lg:pt-40 lg:pb-32">
      <div className="container-main max-w-3xl" ref={containerRef}>
        {/* Eyebrow */}
        <p className="hero-stagger type-eyebrow mb-5">
          Full-stack developer · Kushinagar, UP
        </p>

        {/* H1 */}
        <h1 className="hero-stagger type-hero mb-6">
          I build software small businesses actually run their day on.
        </h1>

        {/* Sub-line + CTAs */}
        <div className="hero-stagger">
          <p className="font-sans text-ink-soft text-base md:text-lg leading-relaxed mb-8 max-w-[60ch]">
            I design, build, price, and support production web software alone —
            currently live for a study-library network and a sweets shop in
            Uttar Pradesh.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-12">
            <Button variant="primary" href="/contact">
              Start a project
            </Button>
            <Button variant="secondary" href="/about">
              View resume
            </Button>
          </div>
        </div>

        {/* Proof strip */}
        <div className="hero-stagger flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
          {projects.map((project) => (
            <span
              key={project.slug}
              className="type-mono text-ink-faint inline-flex items-center gap-2"
            >
              {project.status === 'Live in production' && (
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
              )}
              <span className="font-medium text-ink-soft">
                {project.title}
              </span>
              <span>—</span>
              <span>{project.status === 'Live in production' ? 'Live' : project.status}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
