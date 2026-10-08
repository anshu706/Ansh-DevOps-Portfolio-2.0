import React from 'react';
import { 
  ArrowUp, 
  Terminal, 
  Heart,
  ShieldCheck,
  Radio
} from 'lucide-react';
import { LinkedInIcon, GitHubIcon, LeetCodeIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-charcoal-950 border-t border-charcoal-800/80 pt-16 pb-12 relative overflow-hidden">
      {/* Background Accent glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-crimson-600/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-charcoal-800">
          
          {/* Brand & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-crimson-600/20 border border-crimson-500/40 flex items-center justify-center text-crimson-500">
                <Terminal className="w-4 h-4" />
              </div>
              <span className="font-mono font-bold text-white text-lg tracking-tight">Ansh Upadhayay</span>
            </div>
            <p className="text-xs text-slate-400 font-mono max-w-sm">
              DevOps & Cloud Engineer — Building resilient cloud platforms and automated delivery pipelines.
            </p>
          </div>

          {/* Persistent Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              id="footer-social-linkedin"
              aria-label="LinkedIn"
              className="p-3 rounded-xl bg-charcoal-850 border border-charcoal-700/80 text-slate-400 hover:text-white hover:border-crimson-500 hover:bg-charcoal-800 hover:shadow-glow-crimson-sm transition-all"
            >
              <LinkedInIcon className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              id="footer-social-github"
              aria-label="GitHub"
              className="p-3 rounded-xl bg-charcoal-850 border border-charcoal-700/80 text-slate-400 hover:text-white hover:border-crimson-500 hover:bg-charcoal-800 hover:shadow-glow-crimson-sm transition-all"
            >
              <GitHubIcon className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.socialLinks.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              id="footer-social-leetcode"
              aria-label="LeetCode"
              className="p-3 rounded-xl bg-charcoal-850 border border-charcoal-700/80 text-slate-400 hover:text-amber-400 hover:border-amber-500/50 hover:bg-charcoal-800 transition-all flex items-center gap-1.5 font-mono text-xs"
            >
              <LeetCodeIcon className="w-4 h-4" />
              <span>LeetCode</span>
            </a>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              id="footer-back-to-top"
              aria-label="Back to top"
              className="p-3 rounded-xl bg-crimson-600/20 hover:bg-crimson-600 border border-crimson-500/40 text-crimson-400 hover:text-white hover:shadow-glow-crimson-sm transition-all cursor-pointer ml-2"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Bar: Copyright & SRE SLA */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            © {new Date().getFullYear()} Ansh Upadhayay. Built with React, Tailwind CSS & Framer Motion.
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>All Systems Operational (99.99% SLO)</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
