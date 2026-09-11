import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Compass } from 'lucide-react';

interface NavbarProps {
  onOpenContactModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Scrollspy
      const sections = ['home', 'about', 'philosophy', 'projects', 'expertise', 'process', 'team', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', href: '#home', id: 'home' },
    { label: 'ABOUT', href: '#about', id: 'about' },
    { label: 'PROJECTS', href: '#projects', id: 'projects' },
    { label: 'EXPERTISE', href: '#expertise', id: 'expertise' },
    { label: 'PROCESS', href: '#process', id: 'process' },
    { label: 'TEAM', href: '#team', id: 'team' },
    { label: 'TESTIMONIALS', href: '#testimonials', id: 'testimonials' },
    { label: 'CONTACT', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-studio-darker/95 backdrop-blur-md py-3.5 border-b border-white/10 shadow-2xl shadow-black/40'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <a href="#home" className="group flex items-center gap-3">
          <div className="w-10 h-10 border border-studio-gold/60 rounded flex items-center justify-center bg-black/40 group-hover:border-studio-gold transition-colors">
            <Compass className="w-5 h-5 text-studio-gold group-hover:rotate-45 transition-transform duration-500" />
          </div>
          <div>
            <span className="block font-serif text-lg tracking-[0.18em] font-semibold text-white group-hover:text-studio-gold transition-colors">
              SAIF ALI KHAN
            </span>
            <span className="block font-sans text-[10px] tracking-[0.25em] text-stone-400 uppercase font-medium">
              Interior Design & Site Execution
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-6 2xl:gap-7" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`text-[11px] xl:text-xs font-sans tracking-[0.12em] xl:tracking-[0.16em] uppercase transition-all duration-200 relative py-1 whitespace-nowrap ${
                activeSection === link.id
                  ? 'text-studio-gold font-semibold'
                  : 'text-stone-300 hover:text-white'
              }`}
            >
              {link.label}
              {activeSection === link.id && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-studio-gold transition-all duration-300" />
              )}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden sm:flex items-center flex-shrink-0 ml-8 lg:ml-10 xl:ml-12">
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2 px-4 py-2 xl:px-5 xl:py-2.5 bg-studio-gold text-studio-darker font-sans text-[11px] xl:text-xs tracking-[0.14em] uppercase font-semibold rounded hover:bg-studio-goldLight transition-all duration-300 shadow-md shadow-studio-gold/20 whitespace-nowrap"
          >
            <span>Let's Discuss Your Project</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex lg:hidden items-center gap-3">
          <a
            href="#contact"
            className="sm:hidden text-xs bg-studio-gold text-studio-darker font-semibold px-3 py-1.5 rounded tracking-wider uppercase"
          >
            Enquire
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-stone-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-studio-gold/50 rounded"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-studio-gold" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bg-studio-darker/98 border-b border-white/10 backdrop-blur-xl shadow-2xl px-6 py-8 transition-all animate-in fade-in slide-in-from-top-4 duration-300">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm tracking-[0.18em] uppercase py-2 border-b border-white/5 flex items-center justify-between ${
                  activeSection === link.id
                    ? 'text-studio-gold font-semibold'
                    : 'text-stone-300 hover:text-white'
                }`}
              >
                <span>{link.label}</span>
                <span className="text-xs text-stone-500 font-mono">0{navLinks.indexOf(link) + 1}</span>
              </a>
            ))}
            <div className="pt-4">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 bg-studio-gold text-studio-darker font-sans text-xs tracking-[0.16em] uppercase font-semibold rounded hover:bg-studio-goldLight transition-colors"
              >
                <span>Let's Discuss Your Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
