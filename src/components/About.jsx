import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  'Python', 'FastAPI', 'React', 'PyTorch', 'TensorFlow', 'LangChain', 'Docker', 'AWS', 'Vector Search', 'LLMs',
];

const About = () => {
  return (
    <section id="about" className="relative w-full bg-slate-950 py-20 text-slate-100">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">About Me</h2>

        <div className="mx-auto mt-10 max-w-3xl text-lg leading-relaxed text-slate-300">
          <p>
            I turn complex data problems into intuitive, intelligent systems — from AI-powered chatbots to anomaly detection engines.
          </p>
          <div className="mt-6 grid gap-2 text-base sm:grid-cols-2">
            <div>
              <p className="font-medium text-slate-200">M.S. Software Engineering</p>
              <p className="text-slate-400">San Jose State University (2024–2025)</p>
            </div>
            <div>
              <p className="font-medium text-slate-200">B.E. Computer Science</p>
              <p className="text-slate-400">NMIT, Bangalore (2018–2022)</p>
            </div>
          </div>
        </div>

        <div className="mt-14">
          <h3 className="text-center text-2xl font-semibold text-slate-50">Skills</h3>
          {/* Rotating skill cloud - minimal aesthetic, no cards */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {skills.map((s) => (
              <motion.span
                key={s}
                whileHover={{ scale: 1.06 }}
                className="rounded-full border border-cyan-400/30 bg-cyan-400/5 px-4 py-1.5 text-sm text-cyan-200"
              >
                {s}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
