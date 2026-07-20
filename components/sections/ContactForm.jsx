'use client';

import { useState } from 'react';

const INTENTS = [
  { id: 'project', label: 'I have a project' },
  { id: 'hiring', label: "I'm hiring" },
];

const CONTACT_INFO = [
  {
    label: 'Email',
    href: 'mailto:tausif@example.com',
    display: 'tausif@example.com',
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/919876543210',
    display: '+91 98765 43210',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/tausif-alam',
    display: 'linkedin.com/in/tausif-alam',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/tausif-alam-64',
    display: 'github.com/tausif-alam-64',
  },
];

export default function ContactForm() {
  const [intent, setIntent] = useState('project');
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
    company: '',
    budget: '',
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      intent === 'hiring'
        ? `Hiring inquiry from ${form.name}`
        : `Project inquiry from ${form.name}`
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n${
        intent === 'hiring'
          ? `Company/Role: ${form.company}`
          : `Budget range: ${form.budget}`
      }\n\n${form.message}`
    );
    window.location.href = `mailto:tausif@example.com?subject=${subject}&body=${body}`;
  };

  const inputBase =
    'w-full border border-border rounded-lg bg-paper px-4 py-3 text-ink placeholder:text-ink-faint font-sans text-[0.9375rem] focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-accent-soft focus-visible:outline-none transition-colors duration-150';

  return (
    <div>
      {/* Intent switcher */}
      <div className="flex bg-paper-raised rounded-full p-1 mb-8 max-w-xs">
        {INTENTS.map((i) => (
          <button
            key={i.id}
            onClick={() => setIntent(i.id)}
            className={`flex-1 rounded-full px-4 py-2.5 font-sans text-sm font-medium transition-all duration-200 cursor-pointer ${
              intent === i.id
                ? 'bg-accent text-paper shadow-sm'
                : 'text-ink-soft hover:text-ink'
            }`}
          >
            {i.label}
          </button>
        ))}
      </div>

      {/* Sub-copy */}
      <p className="font-sans text-ink-soft text-[0.9375rem] leading-relaxed mb-8">
        {intent === 'project'
          ? 'Tell me about your project and I will get back to you with a plan and a price.'
          : 'Tell me about the role and your team. I am open to full-time and contract work.'}
      </p>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-5 mb-14">
        <div>
          <label
            htmlFor="name"
            className="block font-sans font-medium text-sm text-ink mb-1.5"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className={inputBase}
            placeholder="Your name"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block font-sans font-medium text-sm text-ink mb-1.5"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className={inputBase}
            placeholder="you@company.com"
          />
        </div>

        {/* Conditional field */}
        {intent === 'hiring' ? (
          <div>
            <label
              htmlFor="company"
              className="block font-sans font-medium text-sm text-ink mb-1.5"
            >
              Company / Role{' '}
              <span className="text-ink-faint font-normal">(optional)</span>
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={form.company}
              onChange={handleChange}
              className={inputBase}
              placeholder="Company name and role"
            />
          </div>
        ) : (
          <div>
            <label
              htmlFor="budget"
              className="block font-sans font-medium text-sm text-ink mb-1.5"
            >
              Budget range{' '}
              <span className="text-ink-faint font-normal">(optional)</span>
            </label>
            <input
              type="text"
              id="budget"
              name="budget"
              value={form.budget}
              onChange={handleChange}
              className={inputBase}
              placeholder="e.g. ₹25,000 – ₹50,000"
            />
          </div>
        )}

        <div>
          <label
            htmlFor="message"
            className="block font-sans font-medium text-sm text-ink mb-1.5"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows={5}
            className={`${inputBase} resize-y`}
            placeholder={
              intent === 'project'
                ? 'Tell me about what you need built...'
                : 'Tell me about the role and what you are looking for...'
            }
          />
        </div>

        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 font-sans font-medium text-[0.9375rem] leading-none tracking-[0.01em] bg-accent text-paper rounded-full px-8 py-3.5 hover:bg-accent-ink active:scale-[0.98] transition-all duration-150 cursor-pointer min-h-[44px]"
        >
          Send message
        </button>
      </form>

      {/* Direct contact */}
      <div className="border-t border-border pt-10">
        <p className="type-eyebrow mb-5">Or reach out directly</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {CONTACT_INFO.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith('http') ? '_blank' : undefined}
              rel={
                c.href.startsWith('http') ? 'noopener noreferrer' : undefined
              }
              className="flex flex-col gap-0.5 p-4 rounded-xl bg-paper-raised hover:bg-border/50 transition-colors duration-150"
            >
              <span className="font-sans text-xs font-semibold text-ink-faint uppercase tracking-wider">
                {c.label}
              </span>
              <span className="font-mono text-sm text-ink">{c.display}</span>
            </a>
          ))}
        </div>
        <p className="font-sans text-sm text-ink-faint mt-6">
          I reply within a day or two.
        </p>
      </div>
    </div>
  );
}
