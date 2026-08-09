// ── Project data ──────────────────────────────────
// Add/edit/reorder projects here. Each entry drives
// the home page proof strip, projects index, and
// individual case-study pages automatically.
//
// Status values: "Live in production" | "Client build" | "Personal project"

export const projects = [
  {
    slug: 'study-zone',
    title: 'Gyaan Study Library',
    status: 'Live in production',
    vertical: 'Education',
    town: 'Lucknow',
    description:
      'A full-stack library management system built on Next.js and PostgreSQL — handles memberships, seat booking, fee collection with multi-month proration, and daily operations for Gyaan Study Library in Lucknow.',
    problem:
      'Gyaan Study Library in Lucknow was tracking memberships in notebooks and collecting fees in cash with no record of who owed what. Late fees were calculated by hand, seat availability was guesswork, and the owner had no way to see how the library was actually performing.',
    approach:
      'Built a Next.js app backed by PostgreSQL through Supabase, with an 11-table schema, row-level security, and stored procedures. Role-based dashboards let the admin manage day-to-day operations while the owner monitors performance. The billing engine handles mid-month joins, plan switches, and pauses — prorating every edge case without manual intervention. Pricing follows a setup fee plus monthly maintenance model.',
    engineeringDecisions: [
      {
        label: 'Parallelized sequential DB queries with Promise.all',
        detail:
          'The dashboard was running five queries one after another on mount. Parallelizing them with Promise.all cut TTFB from 2.04s to 0.34s — an 83% reduction.',
      },
      {
        label: 'Profiled client-side rendering bottleneck',
        detail:
          'Isolated a 4.88s First Contentful Paint gap to JavaScript bundle size. Identified the root cause through browser performance profiling.',
      },
      {
        label: 'Designed an 11-table PostgreSQL schema with row-level security',
        detail:
          'Memberships, seats, payments, and plans each have their own tables with RLS policies so users only see data they are authorized to access. Stored procedures handle complex billing logic at the database layer.',
      },
      {
        label: 'Fixed a UTC/IST timezone bug across the codebase',
        detail:
          'Due dates and late fees were computing off by 5.5 hours for every user. Standardized all date logic to IST at the application layer.',
      },
    ],
    outcome:
      'Live in production with 56 active member seats. The owner tracks operations from a single dashboard, and fee disputes have dropped to near zero because every transaction is logged.',
    techStack: ['Next.js', 'PostgreSQL', 'Supabase', 'Tailwind CSS', 'Vercel'],
    role: 'Solo developer — design, build, deploy, support',
    timeline: 'Oct 2024 – present',
    liveUrl: null,
    thumbnail: '/images/projects/study-zone-thumb.jpg',
    thumbnailAlt:
      'Gyaan Study Library dashboard showing member list and seat availability grid',
    images: [
      {
        src: '/images/projects/study-zone-1.jpg',
        alt: 'Gyaan Study Library admin dashboard with membership overview and revenue stats',
      },
      {
        src: '/images/projects/study-zone-2.jpg',
        alt: 'Gyaan Study Library seat booking interface with time-slot grid',
      },
      {
        src: '/images/projects/study-zone-3.jpg',
        alt: 'Gyaan Study Library fee collection screen with payment history',
      },
    ],
  },
  {
    slug: 'gokul-sweets',
    title: 'Gokul Sweets',
    status: 'Client build',
    vertical: 'Food & Beverage',
    town: 'Lucknow',
    description:
      'A restaurant ordering website for a local food business in Lucknow — customers browse the menu, build an order, and place it directly through WhatsApp.',
    problem:
      'Gokul Sweets had no online presence. Customers called to ask about menu items and prices, especially during busy hours and festival seasons. The owner wanted a way for people to browse the menu and place orders without phone tag, but did not need a full e-commerce payment setup since most transactions happen in person.',
    approach:
      'Built a responsive ordering site with Next.js and Zustand for cart state. Customers browse menu items, add them to a cart, and submit the order through a pre-filled WhatsApp message. Framer Motion handles page transitions and menu animations. The site is optimized for mobile because most of their customers order from phones.',
    engineeringDecisions: [
      {
        label: 'Zustand for lightweight cart state management',
        detail:
          'A full state management library would be overkill for a cart with add/remove/clear actions. Zustand keeps the bundle small and the logic readable.',
      },
      {
        label: 'WhatsApp deep-link for order submission',
        detail:
          'The client and their customers already use WhatsApp for everything. A pre-filled message with the full order removes friction compared to a traditional checkout flow.',
      },
      {
        label: 'Responsive image pipeline with next/image',
        detail:
          'Menu photos are served at appropriate sizes per device, keeping page weight low on mobile connections.',
      },
    ],
    outcome:
      'Delivered to the client as a working restaurant ordering site. Customers can browse the full menu, build an order, and send it through WhatsApp without a phone call.',
    techStack: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Zustand'],
    role: 'Solo developer — design, build, client communication',
    timeline: 'Mar 2025 – present',
    liveUrl: null,
    thumbnail: '/images/projects/gokul-sweets-thumb.jpg',
    thumbnailAlt:
      'Gokul Sweets restaurant ordering page showing menu items and cart',
    images: [
      {
        src: '/images/projects/gokul-sweets-1.jpg',
        alt: 'Gokul Sweets homepage with menu categories and featured items',
      },
      {
        src: '/images/projects/gokul-sweets-2.jpg',
        alt: 'Menu detail page showing item options and WhatsApp order button',
      },
    ],
  },
  {
    slug: 'blinkit',
    title: 'Blinkit',
    status: 'Personal project',
    vertical: 'E-Commerce',
    town: 'Lucknow',
    description:
      'A full-stack quick-commerce platform built with the MERN stack — product browsing, cart, Stripe checkout, and an admin dashboard with role-based access.',
    problem:
      'Wanted to build a production-grade e-commerce app that covers the full stack: authentication with token refresh, payment processing, image uploads, role-based admin controls, and order tracking. The goal was a working quick-commerce clone, not a tutorial project.',
    approach:
      'Built the frontend in React with Redux Toolkit for state management. The backend runs on Node.js and Express with MongoDB. JWT authentication uses access and refresh tokens with OTP-based email verification. Stripe handles payments. Cloudinary stores product images. The admin dashboard supports role-based access, category management, and order tracking.',
    engineeringDecisions: [
      {
        label: 'JWT with access and refresh token rotation',
        detail:
          'Access tokens expire quickly for security. Refresh tokens are stored securely and rotated on use, so users stay logged in without exposing long-lived credentials.',
      },
      {
        label: 'OTP-based email verification',
        detail:
          'New accounts verify through a one-time password sent to their email. This confirms real email addresses before granting full account access.',
      },
      {
        label: 'Cloudinary for product image uploads',
        detail:
          'Product images are uploaded to Cloudinary instead of the server filesystem. This keeps the app stateless and makes images available through a CDN.',
      },
      {
        label: 'Role-based admin dashboard',
        detail:
          'Admin users can manage categories, track orders, and control product listings. Access is gated by role so regular users cannot reach admin routes.',
      },
    ],
    outcome:
      'A working full-stack quick-commerce platform with authentication, payments, and admin controls. Code is on GitHub.',
    techStack: ['React', 'Redux Toolkit', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'Cloudinary'],
    role: 'Solo developer — full-stack design and build',
    timeline: '2025',
    liveUrl: 'https://github.com/tausif-alam-64/Blinkit',
    thumbnail: '/images/projects/kisan-college-thumb.jpg',
    thumbnailAlt:
      'Blinkit quick-commerce platform showing product grid and cart',
    images: [
      {
        src: '/images/projects/kisan-college-1.jpg',
        alt: 'Blinkit product browsing page with category filters and search',
      },
      {
        src: '/images/projects/kisan-college-2.jpg',
        alt: 'Blinkit admin dashboard showing order tracking and category management',
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
