import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Philosophy } from './components/Philosophy';
import { ProjectGallery } from './components/ProjectGallery';
import { Expertise } from './components/Expertise';
import { SoftwareSkills } from './components/SoftwareSkills';
import { SiteExecution } from './components/SiteExecution';
import { Team } from './components/Team';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-studio-bg text-studio-dark selection:bg-studio-gold selection:text-white font-sans">
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Philosophy />
        <ProjectGallery />
        <Expertise />
        <SoftwareSkills />
        <SiteExecution />
        <Team />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
