import Image from 'next/image';
import Link from 'next/link';
import StatusBadge from './StatusBadge';

/**
 * Project card used in Featured Work section and projects index.
 *
 * Props: a project object from lib/projects.js
 *  - slug, title, status, vertical, town, description,
 *    thumbnail, thumbnailAlt
 */
export default function ProjectCard({
  slug,
  title,
  status,
  vertical,
  town,
  description,
  thumbnail,
  thumbnailAlt,
}) {
  return (
    <Link
      href={`/projects/${slug}`}
      className="group block bg-paper-raised rounded-2xl p-6 card-shadow-hover transition-shadow duration-300"
    >
      {/* Thumbnail */}
      <div className="relative overflow-hidden rounded-xl aspect-[16/10] mb-5">
        <Image
          src={thumbnail}
          alt={thumbnailAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 520px"
          className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.02]"
        />
      </div>

      {/* Eyebrow */}
      <p className="type-eyebrow mb-2">
        {vertical} · {town}
      </p>

      {/* Title */}
      <h3 className="type-h3 mb-2">{title}</h3>

      {/* Description */}
      <p className="font-sans text-ink-soft text-[0.9375rem] leading-relaxed mb-4 line-clamp-2">
        {description}
      </p>

      {/* Bottom row */}
      <div className="flex items-center justify-between">
        <StatusBadge status={status} />
        <span className="text-ink-faint font-sans text-sm group-hover:text-accent transition-colors duration-150">
          Read more →
        </span>
      </div>
    </Link>
  );
}
