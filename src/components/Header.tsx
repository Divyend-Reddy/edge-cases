import { useState } from 'react';
import { Page } from '../types';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems: { label: string; value: Page }[] = [
    { label: 'Home', value: 'home' },
    { label: 'Services', value: 'services' },
    { label: 'About', value: 'about' },
    { label: 'Case Studies', value: 'case-studies' },
    { label: 'Contact', value: 'contact' },
  ];

  const handleNavClick = (page: Page) => {
    onNavigate(page);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#E8DED4]/85 border-b border-[#0D0D0D]/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo and Brand Name */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2 group cursor-pointer"
          id="nav-logo"
        >
          <div className="w-8 h-8 rounded-lg bg-[#0D0D0D] flex items-center justify-center text-[#E8DED4] font-serif font-bold text-lg border border-[#0D0D0D]/10 group-hover:scale-95 transition-transform duration-300">
            EC
          </div>
          <span className="font-serif font-bold text-xl tracking-tight text-[#0D0D0D]">
            Edge Cases
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-[#F7F5F2]/40 p-1.5 rounded-full border border-[#0D0D0D]/5">
          {navItems.map((item) => {
            const isActive = currentPage === item.value;
            return (
              <button
                key={item.value}
                id={`nav-${item.value}`}
                onClick={() => handleNavClick(item.value)}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 cursor-pointer ${
                  isActive ? 'text-[#E8DED4]' : 'text-[#0D0D0D]/70 hover:text-[#0D0D0D]'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavBackground"
                    className="absolute inset-0 bg-[#0D0D0D] rounded-full z-0"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button
            id="nav-cta-talk"
            onClick={() => handleNavClick('contact')}
            className="clay-btn text-sm px-5 py-2.5 cursor-pointer"
          >
            Let's Talk
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <button
          id="nav-toggle-mobile"
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 md:hidden text-[#0D0D0D] hover:bg-[#0D0D0D]/5 rounded-lg transition-colors cursor-pointer"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full bg-[#E8DED4] border-b border-[#0D0D0D]/10 py-6 px-6 flex flex-col gap-4 md:hidden shadow-xl"
            id="mobile-drawer"
          >
            {navItems.map((item) => {
              const isActive = currentPage === item.value;
              return (
                <button
                  key={item.value}
                  id={`mobile-nav-${item.value}`}
                  onClick={() => handleNavClick(item.value)}
                  className={`text-left text-lg font-medium py-2 px-3 rounded-xl transition-all ${
                    isActive
                      ? 'bg-[#0D0D0D] text-[#E8DED4]'
                      : 'text-[#0D0D0D]/70 hover:bg-[#0D0D0D]/5'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
            <button
              id="mobile-nav-cta"
              onClick={() => handleNavClick('contact')}
              className="clay-btn mt-2 justify-between flex w-full"
            >
              Let's Talk
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
