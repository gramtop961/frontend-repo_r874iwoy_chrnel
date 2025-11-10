import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    name: 'TaxBot',
    href: 'https://github.com/Nags-gk/Taxbot',
    img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1600&auto=format&fit=crop',
  },
  {
    name: 'SnoopTrade',
    href: 'https://github.com/Nags-gk/SnoopTrade',
    img: 'https://images.unsplash.com/photo-1559526324-593bc073d938?q=80&w=1600&auto=format&fit=crop', // stock trading related image
  },
  {
    name: 'Canvas-Go',
    href: 'https://github.com/Nags-gk/Canvas-Go',
    img: 'https://images.unsplash.com/photo-1504707748692-419802cf939d?q=80&w=1600&auto=format&fit=crop',
  },
  {
    name: 'Quantum ML Research',
    href: 'https://doi.org/10.5281/zenodo.17570822',
    img: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop', // quantum physics themed image
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-slate-950 py-20 text-slate-100">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">Projects</h2>

        {/* Grid: four across on desktop, responsive wrap */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((p, idx) => (
            <motion.a
              key={p.name}
              href={p.href}
              target={p.href ? '_blank' : undefined}
              rel={p.href ? 'noreferrer' : undefined}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.03 }}
              className="group relative block h-52 overflow-hidden rounded-xl border border-slate-800 bg-slate-900/40"
            >
              <img
                src={p.img}
                alt={p.name}
                className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <h3 className="text-center text-lg font-semibold text-slate-50 drop-shadow-md">
                  {p.name}
                </h3>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
