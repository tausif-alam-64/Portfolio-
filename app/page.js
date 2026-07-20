import Hero from '@/components/sections/Hero';
import FeaturedWork from '@/components/sections/FeaturedWork';
import HowIWork from '@/components/sections/HowIWork';
import AboutTeaser from '@/components/sections/AboutTeaser';
import ContactBand from '@/components/sections/ContactBand';

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedWork />
      <HowIWork />
      <AboutTeaser />
      <ContactBand />
    </>
  );
}
