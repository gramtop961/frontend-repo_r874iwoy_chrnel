import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay to increase contrast; keep interactions */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(15,23,42,0)_0%,rgba(15,23,42,0.35)_55%,rgba(15,23,42,0.85)_100%)]" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 text-center sm:pt-36">
        <motion.span
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-xs font-medium text-cyan-300 backdrop-blur-sm"
        >
          Where Code Meets Creativity
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mx-auto max-w-5xl text-balance text-3xl font-semibold leading-tight text-slate-50 sm:text-5xl"
        >
          “Solutions that feel just right don't start that way — they’re born from curiosity and code.”
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-6 max-w-3xl text-pretty text-base text-slate-300 sm:text-lg"
        >
          Hi, I’m <span className="font-medium text-cyan-300">Nagaraj Gireppa Kanni</span>, a Software Engineer exploring the edge of AI, Data Science, and scalable systems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="https://www.linkedin.com/in/nagsgk"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-cyan-500/40 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-200 backdrop-blur-md transition hover:bg-cyan-500/20"
          >
            <Linkedin size={18} className="transition group-hover:scale-110" />
            Let’s Connect
          </a>
          <a
            href="https://github.com/Nags-gk"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/50 px-5 py-2 text-sm font-medium text-slate-200 backdrop-blur-md transition hover:bg-slate-800/80"
          >
            <Github size={18} /> GitHub
          </a>
          <a
            href="mailto:nagarajgk50@gmail.com"
            className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/50 px-5 py-2 text-sm font-medium text-slate-200 backdrop-blur-md transition hover:bg-slate-800/80"
          >
            <Mail size={18} /> Email
          </a>
        </motion.div>
      </div>

      {/* bottom gradient accent */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
    </section>
  );
};

export default Hero;
