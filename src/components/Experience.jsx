import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="bg-slate-950 py-20 text-slate-100">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">Experience</h2>

        <div className="mt-12 space-y-10">
          {/* CXAnywhere */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="border-l-2 border-cyan-400/40 pl-6"
          >
            <div className="flex items-start gap-3">
              <Briefcase className="mt-0.5 text-cyan-300" size={18} />
              <div className="w-full">
                <h3 className="text-xl font-semibold text-slate-50">
                  Data Analyst Intern <span className="text-slate-400">•</span> <span className="text-cyan-200">CXAnywhere</span>
                </h3>
                <p className="text-sm text-slate-400">2023 — 2024</p>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-300">
                  <li>Built data pipelines and dashboards transforming raw events into actionable insights with measurable adoption.</li>
                  <li>Developed anomaly detection flows to surface outliers and reduce manual triage time.</li>
                  <li>Collaborated cross‑functionally to deliver KPIs that informed product decisions.</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* The Sparks Foundation */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="border-l-2 border-cyan-400/40 pl-6"
          >
            <div className="flex items-start gap-3">
              <Briefcase className="mt-0.5 text-cyan-300" size={18} />
              <div className="w-full">
                <h3 className="text-xl font-semibold text-slate-50">
                  Software Developer <span className="text-slate-400">•</span> <span className="text-cyan-200">The Sparks Foundation</span>
                </h3>
                <p className="text-sm text-slate-400">2022 — 2023</p>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-300">
                  <li>Shipped web features improving user experience and task completion rates.</li>
                  <li>Implemented secure backend endpoints and optimized data models.</li>
                  <li>Automated CI steps reducing regression defects across releases.</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
