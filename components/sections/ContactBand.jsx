'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';
import Button from '@/components/ui/Button';

export default function ContactBand() {
  const ref = useScrollReveal();

  return (
    <section className="bg-paper-raised">
      <div className="container-main py-16 md:py-24 reveal" ref={ref}>
        <div className="text-center max-w-xl mx-auto">
          <h2 className="type-h2 mb-4">Let&apos;s work together</h2>
          <p className="font-sans text-ink-soft text-base mb-8 leading-relaxed">
            Whether you are hiring for a team or need software built for your
            business — I would like to hear from you.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button variant="primary" href="/contact">
              Start a project
            </Button>
            <Button variant="secondary" href="/contact">
              I&apos;m hiring
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
