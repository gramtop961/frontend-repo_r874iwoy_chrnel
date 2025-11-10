import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-slate-950 py-10 text-slate-400">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <div className="flex items-center justify-center gap-5">
          <a
            href="https://www.linkedin.com/in/nagsgk"
            target="_blank"
            rel="noreferrer"
            className="text-cyan-300 hover:text-cyan-200"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Nags-gk"
            target="_blank"
            rel="noreferrer"
            className="text-cyan-300 hover:text-cyan-200"
          >
            GitHub
          </a>
          <a
            href="mailto:nagarajgk50@gmail.com"
            className="text-cyan-300 hover:text-cyan-200"
          >
            Email
          </a>
        </div>
        <p className="mt-6 text-sm">© {year} Nagaraj Gireppa Kanni. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
