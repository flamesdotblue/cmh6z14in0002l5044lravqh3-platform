import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-24 md:pt-28 lg:pt-32">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-950/20 via-neutral-950/70 to-neutral-950"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-20 md:py-28 lg:py-36">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-widest text-blue-300/80">Full-Stack Digital Product Studio</p>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              We Build Websites, Web Apps & Mobile Apps that Sync with Your Vision.
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-neutral-300">
              From concept to launch — Versa Sync Studios transforms ideas into powerful digital products.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 rounded-md bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/15 border border-white/10"
              >
                Explore Our Work <ArrowRight size={16} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow hover:from-blue-500 hover:to-indigo-500"
              >
                Start a Project
              </a>
            </div>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              'WordPress',
              'Shopify',
              'Bubble.io',
              'Flutter',
              'Supabase',
              'Firebase',
              'n8n',
              'Custom Code',
            ].map((tech) => (
              <div key={tech} className="rounded border border-white/10 bg-white/5 px-3 py-2 text-center text-xs text-neutral-300">
                {tech}
              </div>
            ))}
          </div>

          <p className="mt-4 text-sm text-neutral-400">
            Our versatile tech stack allows us to build anything from websites to enterprise-grade applications.
          </p>
        </div>
      </div>
    </section>
  );
}
