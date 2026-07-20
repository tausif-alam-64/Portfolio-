import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  projects,
  getProjectBySlug,
  getAllSlugs,
  getAdjacentProjects,
} from '@/lib/projects';
import StatusBadge from '@/components/ui/StatusBadge';
import Button from '@/components/ui/Button';

export function generateStaticParams() {
  return getAllSlugs();
}

export function generateMetadata({ params }) {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
  };
}

export default function ProjectDetailPage({ params }) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  const { prev, next } = getAdjacentProjects(params.slug);

  return (
    <article className="pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="container-main">
        {/* Back link */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 font-sans text-sm text-ink-faint hover:text-ink transition-colors duration-150 mb-10"
        >
          ← All work
        </Link>

        {/* Header */}
        <header className="mb-12 max-w-3xl">
          <p className="type-eyebrow mb-4">
            {project.vertical} · {project.town}
          </p>
          <h1 className="type-hero mb-4">{project.title}</h1>
          <p className="font-sans text-ink-soft text-lg leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Meta chips */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="type-mono text-ink-faint text-xs bg-paper-raised rounded-lg px-3 py-1.5">
              {project.role}
            </span>
            <span className="type-mono text-ink-faint text-xs bg-paper-raised rounded-lg px-3 py-1.5">
              {project.timeline}
            </span>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="type-mono text-accent text-xs bg-accent-soft rounded-lg px-3 py-1.5 hover:text-accent-ink transition-colors duration-150"
              >
                View live ↗
              </a>
            )}
          </div>
          <StatusBadge status={project.status} />
        </header>

        {/* Hero screenshot */}
        <div className="relative overflow-hidden rounded-xl aspect-[16/10] mb-16">
          <Image
            src={project.thumbnail}
            alt={project.thumbnailAlt}
            fill
            sizes="(max-width: 1120px) 100vw, 1120px"
            className="object-cover"
            priority
          />
        </div>

        {/* Case study content */}
        <div className="max-w-2xl mx-auto">
          {/* The problem */}
          <section className="mb-12">
            <h2 className="type-h2 mb-4">The problem</h2>
            <p className="type-body text-ink-soft">{project.problem}</p>
          </section>

          {/* The build */}
          <section className="mb-12">
            <h2 className="type-h2 mb-4">The build</h2>
            <p className="type-body text-ink-soft">{project.approach}</p>
          </section>

          {/* Engineering decisions */}
          <section className="mb-12">
            <h2 className="type-h2 mb-6">Engineering decisions</h2>
            <div className="space-y-5">
              {project.engineeringDecisions.map((decision, i) => (
                <div
                  key={i}
                  className="border-l-2 border-border pl-5"
                >
                  <p className="type-mono font-medium text-ink mb-1">
                    {decision.label}
                  </p>
                  <p className="font-sans text-ink-soft text-sm leading-relaxed">
                    {decision.detail}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Outcome */}
          <section className="mb-16">
            <h2 className="type-h2 mb-4">Outcome</h2>
            <p className="type-body text-ink-soft">{project.outcome}</p>
          </section>

          {/* Tech stack */}
          <section className="mb-16">
            <p className="type-eyebrow mb-4">Built with</p>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="type-mono text-ink-faint text-xs bg-paper-raised rounded-lg px-3 py-1.5"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>
        </div>

        {/* Additional screenshots */}
        {project.images && project.images.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {project.images.map((img, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-xl aspect-[16/10]"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 540px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        )}

        {/* Next / Previous nav */}
        <nav className="border-t border-border pt-10 grid grid-cols-2 gap-6">
          <Link
            href={`/projects/${prev.slug}`}
            className="group"
          >
            <p className="type-eyebrow mb-2">← Previous</p>
            <p className="font-serif text-lg font-medium text-ink group-hover:text-accent transition-colors duration-150">
              {prev.title}
            </p>
          </Link>
          <Link
            href={`/projects/${next.slug}`}
            className="group text-right"
          >
            <p className="type-eyebrow mb-2">Next →</p>
            <p className="font-serif text-lg font-medium text-ink group-hover:text-accent transition-colors duration-150">
              {next.title}
            </p>
          </Link>
        </nav>
      </div>
    </article>
  );
}
