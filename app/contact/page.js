import ContactForm from '@/components/sections/ContactForm';

export const metadata = {
  title: 'Contact',
  description:
    'Get in touch — whether you are hiring or have a project that needs building.',
};

export default function ContactPage() {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="container-main max-w-xl">
        <h1 className="type-hero mb-8">Let&apos;s talk.</h1>
        <ContactForm />
      </div>
    </section>
  );
}
