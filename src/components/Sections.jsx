import React from 'react';
import { Globe, Code2, Smartphone, Layers, Shield, Timer } from 'lucide-react';

function ServiceCard({ Icon, title, desc }) {
  return (
    <div className="group rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow">
          <Icon size={18} />
        </span>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>
      <p className="mt-3 text-sm text-neutral-300">{desc}</p>
      <a href="#services" className="mt-4 inline-block text-sm font-medium text-blue-300 hover:text-blue-200">Learn More →</a>
    </div>
  );
}

function ProjectCard({ title, stack, desc, img }) {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-white/5">
      <div className="aspect-video w-full bg-neutral-900">
        {/* Mock image area */}
        <img src={img} alt={title} loading="lazy" className="h-full w-full object-cover" />
      </div>
      <div className="p-5">
        <div className="flex flex-wrap gap-2 text-[11px] text-neutral-300">
          {stack.map((s) => (
            <span key={s} className="rounded bg-white/5 px-2 py-1 border border-white/10">{s}</span>
          ))}
        </div>
        <h4 className="mt-3 text-base font-semibold text-white">{title}</h4>
        <p className="mt-1 text-sm text-neutral-300">{desc}</p>
        <button className="mt-3 text-sm font-medium text-blue-300 hover:text-blue-200">View Project →</button>
      </div>
    </div>
  );
}

export default function Sections() {
  return (
    <div className="relative">
      {/* Services */}
      <section id="services" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-widest text-blue-300/80">What We Do</p>
          <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">Services crafted for impact</h2>
          <p className="mt-3 text-neutral-300">We don’t just build apps — we build experiences.</p>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            Icon={Globe}
            title="Web Design"
            desc="UI/UX-driven websites built on WordPress & Shopify with responsive, accessible interfaces."
          />
          <ServiceCard
            Icon={Code2}
            title="Web Applications"
            desc="From MVPs to robust apps using Bubble.io, Supabase, Firebase, and n8n automation."
          />
          <ServiceCard
            Icon={Smartphone}
            title="Mobile Applications"
            desc="Flutter-based cross-platform apps with secure backends and custom logic."
          />
        </div>
      </section>

      {/* Portfolio Preview */}
      <section id="portfolio" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-widest text-blue-300/80">Featured</p>
          <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">Recent Work</h2>
          <p className="mt-3 text-neutral-300">From prototype to production, we’ve got your back.</p>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ProjectCard
            title="E-commerce Revamp"
            stack={["Shopify", "React", "n8n"]}
            desc="A conversion-focused storefront with automated workflows."
            img="https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=1200&auto=format&fit=crop"
          />
          <ProjectCard
            title="No-Code SaaS MVP"
            stack={["Bubble.io", "Supabase"]}
            desc="Launched MVP in 4 weeks with scalable data models."
            img="https://images.unsplash.com/photo-1527443224154-c4f2a9d2b4d3?q=80&w=1200&auto=format&fit=crop"
          />
          <ProjectCard
            title="Cross-Platform App"
            stack={["Flutter", "Firebase"]}
            desc="A seamless mobile experience with real-time sync."
            img="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop"
          />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-widest text-blue-300/80">Why Choose Us</p>
            <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">Engineered for performance</h2>
            <p className="mt-3 text-neutral-300">End-to-end expertise with an eye for detail and speed.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Value title="End-to-End Expertise" desc="Strategy, design, build, and launch—handled in-house." Icon={Layers} />
            <Value title="Performance & Scalability" desc="Modern stack, best practices, and future-ready architecture." Icon={Shield} />
            <Value title="Cross-Platform Development" desc="Build once, deploy across web and mobile." Icon={Smartphone} />
            <Value title="Fast Turnaround" desc="Agile sprints and automation reduce time-to-market." Icon={Timer} />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">About Versa Sync Studios</h2>
          <p className="mt-3 text-neutral-300">
            Founded by developers and designers passionate about merging creativity with technology. Every project starts with understanding your vision—we sync ideas with execution to build products people love.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <MiniCard title="Design First" desc="Human-centered UI/UX that converts." />
            <MiniCard title="Automation Ready" desc="Trigger workflows with n8n and serverless functions." />
            <MiniCard title="Secure & Reliable" desc="Best practices, reviews, and testing baked in." />
          </div>
        </div>
      </section>
    </div>
  );
}

function Value({ title, desc, Icon }) {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
      <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-md bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
        <Icon size={16} />
      </span>
      <div>
        <h3 className="text-sm font-semibold text-white">{title}</h3>
        <p className="text-sm text-neutral-300">{desc}</p>
      </div>
    </div>
  );
}

function MiniCard({ title, desc }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
      <h4 className="text-base font-semibold text-white">{title}</h4>
      <p className="mt-1 text-sm text-neutral-300">{desc}</p>
    </div>
  );
}
