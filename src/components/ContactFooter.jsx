import React, { useState } from 'react';
import { Mail, Phone, MessageSquare } from 'lucide-react';

export default function ContactFooter() {
  const [status, setStatus] = useState('');

  function onSubmit(e) {
    e.preventDefault();
    setStatus('Thanks! We will get back to you within 24 hours.');
    e.target.reset();
  }

  return (
    <footer id="contact" className="border-t border-white/10 bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-widest text-blue-300/80">Let’s Collaborate</p>
            <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">Tell us about your project</h2>
            <p className="mt-3 text-neutral-300">We’ll review your goals and propose the best approach to design, build, and launch your product.</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href="mailto:hello@versasync.studio" className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm text-neutral-200 hover:bg-white/10">
                <Mail size={16} /> hello@versasync.studio
              </a>
              <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm text-neutral-200 hover:bg-white/10">
                <MessageSquare size={16} /> WhatsApp
              </a>
              <a href="tel:+10000000000" className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm text-neutral-200 hover:bg-white/10">
                <Phone size={16} /> Book a Call
              </a>
            </div>
          </div>

          <form onSubmit={onSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label className="block text-sm text-neutral-300">Name</label>
                <input required type="text" name="name" className="mt-1 w-full rounded-md border border-white/10 bg-neutral-900/80 px-3 py-2 text-sm text-white placeholder-neutral-500 outline-none focus:ring-2 focus:ring-blue-600" placeholder="Jane Doe" />
              </div>
              <div className="sm:col-span-1">
                <label className="block text-sm text-neutral-300">Email</label>
                <input required type="email" name="email" className="mt-1 w-full rounded-md border border-white/10 bg-neutral-900/80 px-3 py-2 text-sm text-white placeholder-neutral-500 outline-none focus:ring-2 focus:ring-blue-600" placeholder="jane@company.com" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm text-neutral-300">Project Type</label>
                <select name="type" className="mt-1 w-full rounded-md border border-white/10 bg-neutral-900/80 px-3 py-2 text-sm text-white outline-none focus:ring-2 focus:ring-blue-600">
                  <option>Web Design</option>
                  <option>Web Application</option>
                  <option>Mobile Application</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm text-neutral-300">Message</label>
                <textarea required rows={5} name="message" className="mt-1 w-full rounded-md border border-white/10 bg-neutral-900/80 px-3 py-2 text-sm text-white placeholder-neutral-500 outline-none focus:ring-2 focus:ring-blue-600" placeholder="Tell us about your goals, timeline, and budget."></textarea>
              </div>
            </div>
            <button type="submit" className="mt-4 inline-flex items-center justify-center rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-2.5 text-sm font-semibold text-white hover:from-blue-500 hover:to-indigo-500">
              Start Now →
            </button>
            {status && <p className="mt-3 text-sm text-green-400">{status}</p>}
          </form>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-neutral-400">© Versa Sync Studios — Powered by Code & Creativity.</p>
          <div className="flex items-center gap-4 text-sm text-neutral-400">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#portfolio" className="hover:text-white">Portfolio</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
