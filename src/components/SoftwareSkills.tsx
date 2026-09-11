import React from 'react';
import { Layers, Sparkles, Box, CheckCircle } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const SoftwareSkills: React.FC = () => {
  const { softwareSkills } = PORTFOLIO_DATA;

  const softwareIcons: Record<string, React.ReactNode> = {
    'SketchUp Pro': <Box className="w-7 h-7 text-studio-gold" />,
    'Lumion': <Sparkles className="w-7 h-7 text-studio-gold" />,
    'Enscape': <Layers className="w-7 h-7 text-studio-gold" />
  };

  return (
    <section className="py-20 bg-studio-dark text-white relative overflow-hidden border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-mono tracking-[0.25em] text-studio-gold uppercase font-semibold">
              04 / Technical Stack
            </span>
            <span className="w-12 h-[1px] bg-studio-gold" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight">
            3D MODELING & VISUALIZATION
          </h2>
          <p className="mt-3 text-sm text-stone-400 font-sans">
            Specialized toolset utilized for parametric millwork drawings, rapid client approvals, and real-time photorealistic spatial walkthroughs.
          </p>
        </div>

        {/* 3 Architectural Software Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {softwareSkills.map((sw) => (
            <div
              key={sw.name}
              className="p-8 rounded-xl bg-studio-surface border border-white/10 hover:border-studio-gold/60 transition-all duration-300 relative group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-black/60 border border-white/10 flex items-center justify-center group-hover:border-studio-gold/40 transition-colors">
                    {softwareIcons[sw.name] || <Box className="w-7 h-7 text-studio-gold" />}
                  </div>
                  <span className="px-3 py-1 rounded-full bg-studio-gold/10 text-studio-gold text-[11px] font-mono tracking-wider uppercase font-semibold border border-studio-gold/30">
                    {sw.proficiency}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-white mb-1">
                  {sw.name}
                </h3>
                <div className="text-xs font-mono text-studio-gold uppercase tracking-wider mb-4">
                  {sw.role}
                </div>

                <p className="text-sm text-stone-400 font-sans leading-relaxed mb-6">
                  {sw.description}
                </p>

                <div className="space-y-2.5 pt-4 border-t border-white/10">
                  <div className="text-[11px] font-mono uppercase tracking-widest text-stone-500 font-semibold mb-2">
                    Key Workflows:
                  </div>
                  {sw.capabilities.map((cap) => (
                    <div key={cap} className="flex items-center gap-2.5 text-xs text-stone-300">
                      <CheckCircle className="w-3.5 h-3.5 text-studio-gold shrink-0" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 text-[11px] font-mono text-stone-500 flex items-center justify-between">
                <span>Integrated in all 6 Portfolio Projects</span>
                <span className="text-studio-gold">Active Suite</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
