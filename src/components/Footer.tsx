import { Page } from '../types';
import { Mail, Phone, Instagram, ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (page: Page) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0D0D0D] text-[#E8DED4] pt-20 pb-12 px-6 border-t border-[#0D0D0D]/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand block */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-[#E8DED4] flex items-center justify-center text-[#0D0D0D] font-serif font-bold text-lg">
                EC
              </div>
              <span className="font-serif font-bold text-xl tracking-tight text-[#E8DED4]">
                Edge Cases
              </span>
            </div>
            <p className="text-[#E8DED4]/60 max-w-sm mb-6 text-sm leading-relaxed">
              "We solve the automation problems templates can't." Let us help you address the complex manual exceptions and workflow gaps that drain your staff hours.
            </p>
            <div className="flex flex-col gap-3 text-sm">
              <a
                href="mailto:teamedgecases@gmail.com"
                className="flex items-center gap-2.5 text-[#E8DED4]/80 hover:text-[#E8DED4] transition-colors"
                id="footer-email-link"
              >
                <Mail className="w-4 h-4 text-[#E8DED4]/60" />
                teamedgecases@gmail.com
              </a>
              <a
                href="https://wa.me/917993171341"
                className="flex items-center gap-2.5 text-[#E8DED4]/80 hover:text-[#E8DED4] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                id="footer-whatsapp-link"
              >
                <Phone className="w-4 h-4 text-[#E8DED4]/60" />
                +91 79931 71341
              </a>
            </div>
          </div>

          {/* Navigation links */}
          <div>
            <h4 className="font-serif font-bold text-sm uppercase tracking-wider text-[#E8DED4]/40 mb-6">
              Agency Navigation
            </h4>
            <ul className="space-y-4 text-sm font-medium">
              {(['home', 'services', 'about', 'case-studies', 'contact'] as Page[]).map((page) => (
                <li key={page}>
                  <button
                    onClick={() => handleLinkClick(page)}
                    className="text-[#E8DED4]/70 hover:text-[#E8DED4] transition-all hover:translate-x-1 inline-block cursor-pointer"
                    id={`footer-nav-${page}`}
                  >
                    {page.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Founders Block */}
          <div>
            <h4 className="font-serif font-bold text-sm uppercase tracking-wider text-[#E8DED4]/40 mb-6 font-semibold">
              Founders
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex flex-col gap-0.5">
                <span className="font-medium text-[#E8DED4]">Divyend Reddy</span>
                <a
                  href="https://instagram.com/divi.osx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#E8DED4]/60 hover:text-[#E8DED4] inline-flex items-center gap-1 transition-colors"
                >
                  <Instagram className="w-3 h-3" />
                  @divi.osx
                </a>
              </li>
              <li className="flex flex-col gap-0.5">
                <span className="font-medium text-[#E8DED4]">Shashank</span>
                <a
                  href="https://instagram.com/buildwithshashankk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#E8DED4]/60 hover:text-[#E8DED4] inline-flex items-center gap-1 transition-colors"
                >
                  <Instagram className="w-3 h-3" />
                  @buildwithshashankk
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider and copyright */}
        <div className="pt-8 border-t border-[#E8DED4]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#E8DED4]/50">
          <div>
            © {currentYear} Edge Cases. All rights reserved. Made for businesses that scale.
          </div>
          <button
            onClick={handleScrollTop}
            className="flex items-center gap-1.5 hover:text-[#E8DED4] transition-colors py-1 px-3 border border-[#E8DED4]/10 hover:border-[#E8DED4]/30 rounded-full cursor-pointer"
            id="scroll-to-top-btn"
          >
            Back to Top
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
