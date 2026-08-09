import Button from '@/components/ui/Button';
import Link from 'next/link';

export const metadata = {
  title: 'About',
  description:
    'Full-stack developer based in Lucknow, UP — independently designs, builds, and ships production software for paying clients, including a PostgreSQL-backed library platform in active use.',
};

const STACK = [
  'JavaScript',
  'TypeScript',
  'Python',
  'React',
  'React Native',
  'Next.js',
  'Node.js',
  'Express.js',
  'PostgreSQL',
  'MongoDB',
  'Supabase',
  'Redux Toolkit',
  'Zustand',
  'Tailwind CSS',
  'Docker',
  'Git',
  'Vercel',
  'AWS',
];

export default function AboutPage() {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="container-main max-w-2xl">
        {/* H1 — a real sentence, not just "About me" */}
        <h1 className="type-hero mb-10">
          I build, price, and ship production software on my own.
        </h1>

        {/* Narrative */}
        <div className="space-y-5 mb-14">
          <p className="type-body text-ink-soft">
            I am Tausif Alam, a full-stack developer based in Lucknow,
            Uttar Pradesh. I did not go through a bootcamp. I started by
            reading documentation, building small tools, and breaking things
            until I understood how they worked — from React components to
            neural networks built from scratch in NumPy.
          </p>
          <p className="type-body text-ink-soft">
            I noticed that small businesses around me — study libraries,
            restaurants, shops — were running operations on paper ledgers and
            phone calls. They had real problems that software could solve, but
            no one was building for them. So I started doing it, and started
            charging for it.
          </p>
          <p className="type-body text-ink-soft">
            Now I own the full cycle: I design the interface, write the
            backend, set up the database schema, deploy to production, price
            the project (setup fee plus monthly maintenance), and sit across
            the table from the client to close the deal. The library management
            platform I built runs on an 11-table PostgreSQL schema with
            row-level security and handles 56 active seats daily. When
            the dashboard was slow, I profiled it end-to-end — fixed a
            server-side bottleneck that cut TTFB by 83%, then traced the
            remaining lag to a client-side bundle size issue.
          </p>
          <p className="type-body text-ink-soft">
            I also build things for myself — a full-stack e-commerce platform,
            a neural network from scratch. The long-term direction is a lab
            that combines hardware, AI, and software. Right now, the most
            useful thing I can do is keep shipping production tools for people
            who actually need them.
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
