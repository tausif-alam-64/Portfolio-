import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/lib/projects';
import StatusBadge from '@/components/ui/StatusBadge';

export const metadata = {
  title: 'Work',
  description:
    'Production web software and full-stack builds — library management, restaurant ordering, and e-commerce.',
};

export default function ProjectsPage() {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="container-main">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <p className="type-eyebrow mb-4">Work</p>
          <h1 className="type-hero mb-6">Selected work</h1>
          <p className="type-body text-ink-soft">
            Client work and independent builds. The first two are production
            software for paying clients in Uttar Pradesh. The third is a
            full-stack personal project built to the same standard.
          </p>
        </div>

        {/* Project list — editorial stacked rows */}
        <div className="space-y-0">
          {projects.map((project, idx) => (
            <article
              key={project.slug}
              className={`py-12 md:py-16 ${
                idx < projects.length - 1 ? 'border-b border-border' : ''
              }`}
            >
              <Link
                href={`/projects/${project.slug}`}
                className="group block"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  {/* Thumbnail */}
                  <div className="relative overflow-hidden rounded-xl aspect-[16/10]">
                    <Image
                      src={project.thumbnail}
                      alt={project.thumbnailAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 520px"
                      className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.02]"
                    />
                  </div>

                  {/* Text */}
                  <div>
                    <p className="type-eyebrow mb-3">
                      {project.vertical} · {project.town}
                    </p>
                    <h2 className="font-serif text-2xl md:text-3xl font-medium mb-3 text-ink">
                      {project.title}
                    </h2>
                    <p className="font-sans text-ink-soft text-[0.9375rem] leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="type-mono text-ink-faint text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <StatusBadge status={project.status} />
                      <span className="font-sans text-sm text-ink-faint group-hover:text-accent transition-colors duration-150">
                        Read the case study →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
