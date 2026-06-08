import { useState } from 'react';
import { MessageSquare, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function FloatingWhatsApp() {
  const [isHovered, setIsHovered] = useState(false);
  const phoneNumber = '917993171341';
  const welcomeMessage = encodeURIComponent(
    "Hi Divyend and Shashank, I'm reaching out from your website. I want to discuss automating some edge cases in our business workflows."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${welcomeMessage}`;

  return (
    <div
      className="fixed bottom-6 right-6 z-40 flex items-center md:gap-3"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence>
        {isHovered && (
          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.9 }}
            className="hidden sm:flex items-center gap-2 bg-[#E8DED4] text-[#0D0D0D] border border-[#0D0D0D]/10 px-4 py-2.5 rounded-full shadow-lg font-medium text-xs tracking-tight select-none cursor-pointer hover:bg-white transition-colors"
            id="floating-whatsapp-text-badge"
          >
            <span>Let's talk on WhatsApp</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#0D0D0D]/60" />
          </motion.a>
        )}
      </AnimatePresence>

      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 w-14 h-14 bg-[#0D0D0D] hover:bg-neutral-800 text-[#E8DED4] rounded-full flex items-center justify-center shadow-xl border border-[#E8DED4]/15 cursor-pointer relative group"
        id="floating-whatsapp-btn"
        aria-label="Contact founders on WhatsApp"
      >
        {/* Subtle animation ring behind */}
        <span className="absolute inset-0 rounded-full bg-[#0D0D0D] -z-10 group-hover:scale-110 opacity-30 transition-transform duration-300"></span>
        
        {/* Modern high-end message bubble svg/icon */}
        <MessageSquare className="w-6 h-6 stroke-[2]" />
      </motion.a>
    </div>
  );
}
