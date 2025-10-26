import React, { useEffect, useState } from 'react';
import { Menu, X, Rocket, Sun, Moon, Phone } from 'lucide-react';

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add('dark');
    else root.classList.remove('dark');
  }, [dark]);

  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/50 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2 group">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded bg-gradient-to-br from-blue-500 to-indigo-500 text-white">
              <Rocket size={18} />
            </span>
            <span className="font-semibold tracking-wide text-white group-hover:text-blue-300 transition-colors">Versa Sync Studios</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-300">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <button
              aria-label="Toggle theme"
              className="inline-flex items-center justify-center rounded-md border border-white/10 bg-white/5 hover:bg-white/10 transition-colors h-9 w-9 text-neutral-200"
              onClick={() => setDark((d) => !d)}
            >
              {dark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 text-sm font-medium text-white shadow hover:from-blue-500 hover:to-indigo-500 transition-colors"
            >
              <Phone size={16} /> Start a Project
            </a>
            <button
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/5 text-neutral-200"
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-neutral-950/90">
          <div className="px-4 py-4 space-y-2 text-neutral-200">
            <a onClick={() => setOpen(false)} href="#services" className="block px-2 py-2 rounded hover:bg-white/5">Services</a>
            <a onClick={() => setOpen(false)} href="#portfolio" className="block px-2 py-2 rounded hover:bg-white/5">Portfolio</a>
            <a onClick={() => setOpen(false)} href="#about" className="block px-2 py-2 rounded hover:bg-white/5">About</a>
            <a onClick={() => setOpen(false)} href="#contact" className="block px-2 py-2 rounded hover:bg-white/5">Contact</a>
            <a onClick={() => setOpen(false)} href="#contact" className="mt-2 inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 text-sm font-medium text-white shadow">Start a Project</a>
          </div>
        </div>
      )}

      <a
        href="#contact"
        className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg hover:from-blue-500 hover:to-indigo-500 transition-colors"
      >
        <Phone size={16} /> Start a Project
      </a>
    </header>
  );
}
