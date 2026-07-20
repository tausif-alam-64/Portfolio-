'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';

const PRINCIPLES = [
  {
    label: 'Ships alone',
    text: 'Design, frontend, backend, database, deployment, client communication — one person, no handoffs, no waiting on someone else.',
  },
  {
    label: 'Prices like a business',
    text: 'I quote fixed prices for defined scopes, not hourly rates. Clients know what they are paying before work starts.',
  },
  {
    label: 'Owns the whole stack',
    text: 'From the Figma mockup to the Vercel deploy, I handle the full build. No context lost between "designer" and "developer."',
  },
  {
    label: 'Builds for the real user',
    text: 'My clients are shopkeepers and library owners, not other developers. If they cannot use it without a tutorial, it is not done.',
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
