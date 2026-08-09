'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';

const PRINCIPLES = [
  {
    label: 'Ships alone',
    text: 'Design, frontend, backend, database schema, deployment, client communication — one person, no handoffs, no waiting on someone else.',
  },
  {
    label: 'Owns the full stack',
    text: 'From PostgreSQL schema design with row-level security to the Vercel deploy, I handle the full build. No context lost between "designer" and "developer."',
  },
  {
    label: 'Profiles, does not guess',
    text: 'When the dashboard was slow, I traced it end-to-end: fixed a server-side query bottleneck (83% TTFB reduction), then profiled the client-side bundle. I measure before I fix.',
  },
  {
    label: 'Prices like a business',
    text: 'I quote a setup fee and monthly maintenance for defined scopes, not hourly rates. Clients know what they are paying before work starts.',
  },
];

export default function HowIWork() {
  const ref = useScrollReveal();

  return (
    <section className="py-16 md:py-24 lg:py-32 border-t border-border">
      <div className="container-main reveal" ref={ref}>
        <h2 className="type-h2 mb-12">How I work</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
          {PRINCIPLES.map((p) => (
            <div key={p.label}>
              <h3 className="type-h3 mb-2">{p.label}</h3>
              <p className="font-sans text-ink-soft text-[0.9375rem] leading-relaxed">
                {p.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
