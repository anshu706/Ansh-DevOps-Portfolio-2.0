import React, { useState, useEffect } from 'react';
import { Terminal, Download, Menu, X, CheckCircle2, ShieldCheck } from 'lucide-react';

export const Navbar = ({ onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['about', 'skills', 'projects', 'certificates'];
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });
      if (current) setActiveSection(current);
      else if (window.scrollY < 300) setActiveSection('hero');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certificates', href: '#certificates' },
  ];

  const handleScrollTo = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-charcoal-900/85 backdrop-blur-md border-b border-charcoal-700/80 shadow-lg shadow-black/40 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Terminal Prompt */}
          <a
            href="#hero"
            onClick={(e) => handleScrollTo(e, '#hero')}
            className="flex items-center gap-3 group text-left cursor-pointer"
            id="nav-logo"
          >
            <div className="w-10 h-10 rounded-lg bg-charcoal-800 border border-charcoal-600/70 flex items-center justify-center text-crimson-500 group-hover:border-crimson-500/80 group-hover:shadow-glow-crimson-sm transition-all duration-300">
              <Terminal className="w-5 h-5 text-crimson-500" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono font-bold text-white text-base tracking-tight">ansh@devops</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" title="System Operational"></span>
              </div>
              <p className="text-xs font-mono text-slate-400 group-hover:text-crimson-400 transition-colors">~/cloud-infra $</p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-charcoal-800/60 border border-charcoal-700/60 rounded-full px-4 py-1.5 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  id={`nav-link-${link.name.toLowerCase()}`}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className={`px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-white bg-crimson-600/20 text-crimson-400 border border-crimson-500/40 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-charcoal-700/50'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action CTA & Status Indicator */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-charcoal-800/80 border border-charcoal-700 text-xs font-mono text-emerald-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>SRE SLA 99.99%</span>
            </div>

            <button
              id="nav-resume-btn"
              onClick={onOpenResume}
              className="relative inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-gradient-to-r from-crimson-600 to-crimson-700 hover:from-crimson-500 hover:to-crimson-600 text-white font-medium text-sm shadow-glow-crimson-sm hover:shadow-glow-crimson transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 border border-crimson-400/40 cursor-pointer"
            >
              <Download className="w-4 h-4 animate-bounce" />
              <span>Download Resume</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onOpenResume}
              className="px-3 py-1.5 rounded-lg bg-crimson-600 text-white text-xs font-medium flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>

            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-charcoal-800 border border-charcoal-700 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-charcoal-900/95 border-b border-charcoal-700/80 backdrop-blur-xl px-4 pt-3 pb-6 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="px-4 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:bg-charcoal-800 hover:text-crimson-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 border-t border-charcoal-800 mt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-crimson-600 text-white font-medium text-sm shadow-glow-crimson-sm"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
