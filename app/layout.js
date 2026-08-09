import { Geist, Geist_Mono, Source_Serif_4 } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';

const sans = Geist({ subsets: ['latin'], variable: '--font-sans-var' });
const mono = Geist_Mono({ subsets: ['latin'], variable: '--font-mono-var' });
const serif = Source_Serif_4({
  subsets: ['latin'],
  variable: '--font-serif-var',
});

export const metadata = {
  title: {
    template: '%s — Tausif Alam',
    default: 'Tausif Alam — Full-Stack Developer',
  },
  description:
    'Full-stack developer who independently builds and ships production software — currently running a PostgreSQL-backed library platform and a restaurant ordering site for paying clients.',
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${mono.variable} ${serif.variable}`}
    >
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
