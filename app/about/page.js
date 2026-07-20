import Button from '@/components/ui/Button';
import Link from 'next/link';

export const metadata = {
  title: 'About',
  description:
    'Self-taught full-stack developer based in Kushinagar, UP — building production software for small businesses as a solo developer.',
};

const STACK = [
  'Next.js',
  'React',
  'JavaScript',
  'Tailwind CSS',
  'Supabase',
  'Zustand',
  'Vercel',
  'Figma',
  'Git',
];

export default function AboutPage() {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="container-main max-w-2xl">
        {/* H1 — a real sentence, not just "About me" */}
        <h1 className="type-hero mb-10">
          A solo developer who builds, prices, and sells real software.
        </h1>

        {/* Narrative */}
        <div className="space-y-5 mb-14">
          <p className="type-body text-ink-soft">
            I am Tausif Alam, a self-taught developer based in Kushinagar,
            Uttar Pradesh. I did not go to a coding bootcamp or study computer
            science in college. I started by reading documentation, building
            small tools for myself, and breaking things until I understood how
            they worked.
          </p>
          <p className="type-body text-ink-soft">
            The shift happened when I noticed that small businesses around
            me — study libraries, sweet shops, schools — were running
            everything on paper ledgers and phone calls. They had real
            operational problems that software could solve, but no one was
            building for them because the budgets are small and the problems
            are not glamorous. I started doing it anyway.
          </p>
          <p className="type-body text-ink-soft">
            Now I work solo: I design the interface, write the code, set up the
            database, deploy to production, price the project, and sit across
            the table from the client to sell it. No team, no agency, no
            middleman. The study-library SaaS I built is live and in daily use.
            The sweets shop catalog is in client review.
          </p>
          <p className="type-body text-ink-soft">
            The long-term direction is a small lab that combines hardware, AI,
            and software — but right now, the most useful thing I can do is
            keep building production tools for people who actually need them.
          </p>
        </div>

        {/* Stack / toolbox */}
        <div className="mb-14">
          <p className="type-eyebrow mb-5">Toolbox</p>
          <div className="flex flex-wrap gap-2">
            {STACK.map((tool) => (
              <span
                key={tool}
                className="type-mono text-ink-soft text-xs bg-paper-raised rounded-lg px-3 py-1.5"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Resume download */}
        <div className="mb-14">
          <Button variant="primary" href="/resume.pdf">
            Download resume
          </Button>
        </div>

        {/* Closing */}
        <p className="type-body text-ink-soft">
          If you are hiring or have a project in mind,{' '}
          <Link href="/contact" className="link-accent">
            let&apos;s talk
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
