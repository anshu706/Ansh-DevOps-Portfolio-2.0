import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { CertificatesSection } from './components/CertificatesSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-charcoal-900 text-slate-100 flex flex-col selection:bg-crimson-600 selection:text-white">
      {/* Top Fixed Navigation */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <HeroSection onOpenResume={() => setIsResumeOpen(true)} />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificatesSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Resume Download Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}

export default App;
