import React from 'react';
import { UserCheck, Palette } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Team: React.FC = () => {
  const { team } = PORTFOLIO_DATA;

  const roleIcons: Record<string, React.ReactNode> = {
    'SAIF ALI KHAN': <UserCheck className="w-5 h-5 text-studio-gold" />,
    'ARSHI': <Palette className="w-5 h-5 text-studio-gold" />
  };

  return (
    <section id="team" className="py-24 sm:py-32 bg-studio-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono tracking-[0.25em] text-studio-taupe uppercase font-semibold">
              07 / People & Leadership
            </span>
            <span className="w-12 h-[1px] bg-studio-gold" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-studio-dark tracking-tight">
            OUR STUDIO TEAM
          </h2>
          <p className="mt-4 text-sm text-stone-600 font-sans leading-relaxed">
            Collaborative synergy uniting creative spatial vision, material curation, and dedicated engineering site management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
          {team.map((member) => (
            <div
              key={member.name}
              className="group p-6 rounded-2xl bg-white border border-stone-200/80 hover:border-studio-gold/60 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                <div className="relative aspect-square rounded-xl overflow-hidden mb-6 bg-stone-100 border border-stone-200">
                  <img
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-30 group-hover:opacity-10 transition-opacity" />
                  
                  <div className="absolute bottom-3 left-3 p-2 rounded-lg bg-black/70 backdrop-blur-md">
                    {roleIcons[member.name] || <UserCheck className="w-5 h-5 text-studio-gold" />}
                  </div>
                </div>

                <div className="text-[11px] font-mono tracking-[0.2em] text-studio-gold uppercase font-bold mb-1">
                  {member.role}
                </div>

                <h3 className="font-serif text-2xl font-bold text-studio-dark mb-3 group-hover:text-studio-gold transition-colors">
                  {member.name}
                </h3>

                <p className="text-xs text-stone-600 font-sans leading-relaxed">
                  {member.bio}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-[11px] font-mono text-stone-400">
                <span>Active Studio Member</span>
                <span className="text-studio-gold">Nellore Branch</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
