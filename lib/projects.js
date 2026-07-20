// ── Project data ──────────────────────────────────
// Add/edit/reorder projects here. Each entry drives
// the home page proof strip, projects index, and
// individual case-study pages automatically.
//
// Status values: "Live in production" | "Client build" | "Personal project"

export const projects = [
  {
    slug: 'study-zone',
    title: 'Study Zone',
    status: 'Live in production',
    vertical: 'Education',
    town: 'Kushinagar',
    description:
      'A full-stack library management SaaS — handles memberships, seat booking, fee collection with multi-month proration, and daily operations for a network of study libraries.',
    problem:
      'Two study libraries in Kushinagar were tracking memberships in notebooks and collecting fees in cash with no record of who owed what. Late fees were calculated by hand, seat availability was guesswork, and the owner had no way to see how either branch was actually performing.',
    approach:
      'Built a single Next.js app with role-based dashboards — one for library admins, one for the owner. Supabase handles auth, the database, and real-time updates. The trickiest part was getting the billing engine right: members can join mid-month, switch plans, or pause, and the system has to prorate every edge case correctly without manual intervention.',
    engineeringDecisions: [
      {
        label: 'Fixed a UTC/IST timezone bug across the codebase',
        detail:
          'Due dates and late fees were computing off by 5.5 hours for every user. Standardized all date logic to IST at the application layer.',
      },
      {
        label: 'Resolved Supabase connection-pool exhaustion',
        detail:
          'The app was crashing under concurrent load during evening peak hours. Added connection pooling via Supavisor.',
      },
      {
        label: 'Parallelized data fetching with Promise.all',
        detail:
          'Dashboard was loading five sequential queries on mount. Parallelizing them cut time-to-first-byte by roughly 60%.',
      },
      {
        label: 'Rebuilt multi-month payment proration logic',
        detail:
          'Partial-month billing was calculating incorrectly for mid-cycle plan changes. Rewrote the engine to handle all edge cases.',
      },
    ],
    outcome:
      'In daily use by two libraries since early 2025. The owner tracks both branches from one dashboard, and fee disputes have dropped to near zero because every transaction is logged.',
    techStack: ['Next.js', 'Supabase', 'Tailwind CSS', 'Zustand', 'Vercel'],
    role: 'Solo developer — design, build, deploy, support',
    timeline: 'Oct 2024 – present',
    liveUrl: null,
    thumbnail: '/images/projects/study-zone-thumb.jpg',
    thumbnailAlt:
      'Study Zone dashboard showing member list and seat availability grid',
    images: [
      {
        src: '/images/projects/study-zone-1.jpg',
        alt: 'Study Zone admin dashboard with membership overview and revenue stats',
      },
      {
        src: '/images/projects/study-zone-2.jpg',
        alt: 'Study Zone seat booking interface with time-slot grid',
      },
      {
        src: '/images/projects/study-zone-3.jpg',
        alt: 'Study Zone fee collection screen with payment history',
      },
    ],
  },
  {
    slug: 'gokul-sweets',
    title: 'Gokul Sweets',
    status: 'Client build',
    vertical: 'Retail',
    town: 'Kushinagar',
    description:
      'A product catalog and order-inquiry site for a local sweets shop — lets customers browse items, check prices, and place bulk-order inquiries for festivals and events.',
    problem:
      'Gokul Sweets had no online presence. Customers called to ask about prices and availability, especially before festivals when bulk orders spike. The owner wanted a simple way for people to see what is available and reach out for large orders without a full e-commerce setup.',
    approach:
      'Built a clean, fast catalog site with Next.js. Each product has a photo, weight options, and a price. A WhatsApp-linked inquiry form handles bulk orders — no payment gateway needed for this stage, since local transactions happen in person. The site is optimized for mobile because most of their customers browse on phones.',
    engineeringDecisions: [
      {
        label: 'Static generation with ISR for the product catalog',
        detail:
          'Products rarely change, so pages are pre-built at deploy time and revalidate every 24 hours. This keeps the site fast on low-bandwidth connections.',
      },
      {
        label: 'WhatsApp deep-link for order inquiries',
        detail:
          'The client and their customers already use WhatsApp for everything. A pre-filled message link removes friction compared to a traditional contact form.',
      },
      {
        label: 'Responsive image pipeline with next/image',
        detail:
          'Product photos are served at appropriate sizes per device, keeping page weight under 500KB on mobile.',
      },
    ],
    outcome:
      'The site is built and in client review. Once live, it will be the shop\'s first digital storefront, handling the festival-season inquiry load that currently overwhelms phone calls.',
    techStack: ['Next.js', 'Tailwind CSS', 'Vercel'],
    role: 'Solo developer — design, build, client communication',
    timeline: 'Mar 2025 – present',
    liveUrl: null,
    thumbnail: '/images/projects/gokul-sweets-thumb.jpg',
    thumbnailAlt:
      'Gokul Sweets product catalog showing sweets grid with prices',
    images: [
      {
        src: '/images/projects/gokul-sweets-1.jpg',
        alt: 'Gokul Sweets homepage with hero banner and featured products',
      },
      {
        src: '/images/projects/gokul-sweets-2.jpg',
        alt: 'Product detail page showing sweet options and bulk order form',
      },
    ],
  },
  {
    slug: 'kisan-inter-college',
    title: 'Kisan Inter College',
    status: 'Personal project',
    vertical: 'Education',
    town: 'Kushinagar',
    description:
      'An informational website for a local inter college — course listings, faculty info, admission details, and contact, built as a personal project to give the school a proper web presence.',
    problem:
      'Kisan Inter College had no website. Prospective students and parents relied on word of mouth for admission dates, course options, and fee structures. There was no central place to find accurate, up-to-date information about the school.',
    approach:
      'Built a fast, mobile-first static site with Next.js. The focus was on clarity — a parent on a phone with a slow connection should be able to find admission dates and fee structures within seconds. Content is structured so the school can update it easily without touching code.',
    engineeringDecisions: [
      {
        label: 'Fully static output with next export',
        detail:
          'No server needed. The site can be hosted on any static provider, keeping costs at zero for the school.',
      },
      {
        label: 'Content separated into data files',
        detail:
          'Course lists, faculty names, and fee tables live in JSON files. Non-technical staff can update them without touching React components.',
      },
      {
        label: 'Progressive image loading for slow connections',
        detail:
          'Hero and gallery images use blur-up placeholders so the page feels instant even on 3G.',
      },
    ],
    outcome:
      'Completed and functional. Serves as a reference build for future school/institution projects in the area.',
    techStack: ['Next.js', 'Tailwind CSS', 'Vercel'],
    role: 'Solo developer — design, build, content structuring',
    timeline: 'Jan 2025 – Feb 2025',
    liveUrl: null,
    thumbnail: '/images/projects/kisan-college-thumb.jpg',
    thumbnailAlt:
      'Kisan Inter College homepage showing campus hero and admission info',
    images: [
      {
        src: '/images/projects/kisan-college-1.jpg',
        alt: 'Kisan Inter College course listing page with fee structure table',
      },
      {
        src: '/images/projects/kisan-college-2.jpg',
        alt: 'College admission page with important dates and requirements',
      },
    ],
  },
];

// Helper: get a single project by slug (for dynamic route pages)
export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug) || null;
}

// Helper: get all slugs (for generateStaticParams)
export function getAllSlugs() {
  return projects.map((p) => ({ slug: p.slug }));
}

// Helper: get next/prev project for case-study navigation
export function getAdjacentProjects(slug) {
  const idx = projects.findIndex((p) => p.slug === slug);
  return {
    prev: idx > 0 ? projects[idx - 1] : projects[projects.length - 1],
    next: idx < projects.length - 1 ? projects[idx + 1] : projects[0],
  };
}
