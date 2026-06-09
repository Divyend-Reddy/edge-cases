import { useState, useEffect } from 'react';
import { Page } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import CaseStudies from './pages/CaseStudies';
import Contact from './pages/Contact';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedCaseStudyId, setSelectedCaseStudyId] = useState<string | null>(null);

  // Sync document page title for SEO and professional standards
  useEffect(() => {
    switch (currentPage) {
      case 'home':
        document.title = "Edge Cases | AI Automation Agency";
        break;
      case 'services':
        document.title = "Our Capabilities | Edge Cases";
        break;
      case 'about':
        document.title = "Aesthetic Founders & Approach | Edge Cases";
        break;
      case 'case-studies':
        document.title = "Proven Blueprints & Case Studies | Edge Cases";
        break;
      case 'contact':
        document.title = "Log Your Problem Bottleneck | Edge Cases";
        break;
      default:
        document.title = "Edge Cases | AI Automation Agency";
    }
  }, [currentPage]);

  // Navigate helper to keep states synchronous
  const handlePageNavigation = (page: Page) => {
    setCurrentPage(page);
    // If navigation didn't come from a deep link, reset case study detail choice
    if (page !== 'case-studies') {
      setSelectedCaseStudyId(null);
    }
  };

  const handleSelectCaseStudyFromExternal = (id: string) => {
    setSelectedCaseStudyId(id);
    setCurrentPage('case-studies');
  };

  const renderActivePage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <Home
            onNavigate={handlePageNavigation}
            onSelectCaseStudy={handleSelectCaseStudyFromExternal}
          />
        );
      case 'services':
        return <Services onNavigate={handlePageNavigation} />;
      case 'about':
        return <About />;
      case 'case-studies':
        return (
          <CaseStudies
            onNavigate={handlePageNavigation}
            selectedId={selectedCaseStudyId}
            onSelectId={setSelectedCaseStudyId}
          />
        );
      case 'contact':
        return <Contact />;
      default:
        return (
          <Home
            onNavigate={handlePageNavigation}
            onSelectCaseStudy={handleSelectCaseStudyFromExternal}
          />
        );
    }
  };

  return (
    <div className="flex flex-col min-h-screen selection:bg-[#0D0D0D] selection:text-[#E8DED4] font-sans antialiased bg-[#F6F4F1] text-[#0D0D0D]">
      {/* Header Panel */}
      <Header currentPage={currentPage} onNavigate={handlePageNavigation} />

      {/* Main Dynamic View with transitions */}
      <main className="flex-grow w-full relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage + (selectedCaseStudyId || '')}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            style={{ width: '100%' }}
          >
            {renderActivePage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer block */}
      <Footer onNavigate={handlePageNavigation} />

      {/* Fixed WhatsApp Call Action widget */}
      <FloatingWhatsApp />
    </div>
  );
}
