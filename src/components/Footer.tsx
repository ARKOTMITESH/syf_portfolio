import React from 'react';
import { ArrowUp, Compass, Phone, Mail, MapPin } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-studio-darker text-white border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-14 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 border border-studio-gold/60 rounded flex items-center justify-center bg-black/40">
                <Compass className="w-5 h-5 text-studio-gold" />
              </div>
              <div>
                <span className="block font-serif text-xl tracking-[0.16em] font-bold text-white">
                  SAIF ALI KHAN
                </span>
                <span className="block font-sans text-[10px] tracking-[0.25em] text-stone-400 uppercase font-medium">
                  Interior Designer • Civil Engineer
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-400 font-sans leading-relaxed max-w-md pt-2">
              "Designing spaces where aesthetics, functionality and execution come together." Transforming residential interiors across Nellore through precision 3D modeling and hands-on site management.
            </p>

            <div className="text-[11px] font-mono text-studio-gold uppercase tracking-wider">
              B.Tech Civil Engineering • QUBA Engg College
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold text-studio-gold tracking-wider uppercase mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs font-sans tracking-wide text-stone-400">
              <li>
                <a href="#home" className="hover:text-studio-gold transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-studio-gold transition-colors">About Me</a>
              </li>
              <li>
                <a href="#philosophy" className="hover:text-studio-gold transition-colors">Design Philosophy</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-studio-gold transition-colors">Featured Projects</a>
              </li>
              <li>
                <a href="#expertise" className="hover:text-studio-gold transition-colors">Services & BOQ</a>
              </li>
              <li>
                <a href="#process" className="hover:text-studio-gold transition-colors">From Design to Site</a>
              </li>
              <li>
                <a href="#team" className="hover:text-studio-gold transition-colors">Studio Team</a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-studio-gold transition-colors">Client Testimonials</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-studio-gold transition-colors">Contact Studio</a>
              </li>
            </ul>
          </div>

          {/* Studio Contact Info */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-serif text-sm font-bold text-studio-gold tracking-wider uppercase mb-4">
              Studio Location
            </h4>
            <div className="space-y-3 text-xs text-stone-400 leading-relaxed font-sans">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-studio-gold shrink-0 mt-0.5" />
                <span>{personal.contact.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-studio-gold shrink-0" />
                <a href={`tel:${personal.contact.phoneRaw}`} className="hover:text-studio-gold transition-colors">
                  {personal.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-studio-gold shrink-0" />
                <a href={`mailto:${personal.contact.email}`} className="hover:text-studio-gold transition-colors">
                  {personal.contact.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright & Back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-stone-500">
          <p>
            © {new Date().getFullYear()} Saif Ali Khan. All rights reserved. Designed with architectural purpose.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded bg-white/5 hover:bg-white/10 text-stone-300 hover:text-studio-gold transition-colors border border-white/10"
            aria-label="Back to top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
