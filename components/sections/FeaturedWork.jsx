'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';
import ProjectCard from '@/components/ui/ProjectCard';
import { projects } from '@/lib/projects';
import Link from 'next/link';

export default function FeaturedWork() {
  const ref = useScrollReveal();

  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="container-main reveal" ref={ref}>
        <h2 className="type-h2 mb-12">Selected work</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.slug} {...project} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/projects"
            className="font-sans font-medium text-accent hover:text-accent-ink transition-colors duration-150 text-[0.9375rem]"
          >
            View all work →
          </Link>
        </div>
      </div>
    </section>
  );
}
