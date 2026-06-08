import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, ArrowRight, CheckCircle2, Ticket, Calendar, Cpu, Sparkles } from 'lucide-react';
import { ContactSubmission } from '../types';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    email: '',
    problem: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedTicket, setSubmittedTicket] = useState<ContactSubmission | null>(null);
  const [pastSubmissions, setPastSubmissions] = useState<ContactSubmission[]>([]);

  // Load past submissions from localStorage to simulate dynamic persistence
  useEffect(() => {
    const saved = localStorage.getItem('edgecases_submissions');
    if (saved) {
      try {
        setPastSubmissions(JSON.parse(saved));
      } catch (e) {
        console.error('Error loading submissions', e);
      }
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.problem) return;

    setIsSubmitting(true);

    // Simulate n8n webhook processing delay
    setTimeout(() => {
      const ticketId = `EC-${Math.floor(1000 + Math.random() * 9000)}`;
      const newSubmission: ContactSubmission = {
        id: ticketId,
        name: formData.name,
        business: formData.business || 'Independent',
        email: formData.email,
        problem: formData.problem,
        createdAt: new Date().toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })
      };

      const updated = [newSubmission, ...pastSubmissions];
      setPastSubmissions(updated);
      localStorage.setItem('edgecases_submissions', JSON.stringify(updated));
      
      setSubmittedTicket(newSubmission);
      setIsSubmitting(false);
      
      // Reset form
      setFormData({
        name: '',
        business: '',
        email: '',
        problem: ''
      });
    }, 1800);
  };

  return (
    <div className="w-full relative py-20 px-6 max-w-7xl mx-auto" id="page-contact">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* Left Information Panel */}
        <div className="lg:col-span-5 space-y-10 lg:sticky lg:top-28">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0D0D0D]/50 block mb-3 font-mono">connect now</span>
            <h1 className="font-serif text-4xl md:text-6xl font-bold tracking-tight text-[#0D0D0D] leading-tight mb-6">
              Let's Solve Your Next Edge Case
            </h1>
            <p className="text-sm md:text-base text-[#0D0D0D]/70 leading-relaxed font-semibold">
              Fill out our custom intake flow detailing your operational exceptions. We review manually within 2 hours and schedule an audit directly onto your calendars.
            </p>
          </div>

          <div className="space-y-6">
            <a
              href="mailto:teamedgecases@gmail.com"
              className="clay-card p-6 flex items-center gap-5 cursor-pointer hover:bg-white"
              id="contact-panel-email"
            >
              <div className="w-12 h-12 rounded-xl bg-[#0D0D0D] text-[#E8DED4] flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-[#0D0D0D]/40 font-bold">Email address</div>
                <div className="text-base font-bold text-[#0D0D0D]">teamedgecases@gmail.com</div>
              </div>
            </a>

            <a
              href="https://wa.me/917993171341"
              target="_blank"
              rel="noopener noreferrer"
              className="clay-card p-6 flex items-center gap-5 cursor-pointer hover:bg-white"
              id="contact-panel-whatsapp"
            >
              <div className="w-12 h-12 rounded-xl bg-neutral-900 text-[#E8DED4] flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-[#0D0D0D]/40 font-bold">whatsapp hotline</div>
                <div className="text-base font-bold text-[#0D0D0D]">+91 79931 71341</div>
              </div>
            </a>
          </div>

          <div className="p-6 bg-[#0D0D0D]/5 rounded-2xl border border-[#0D0D0D]/5">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-[#0D0D0D]/50 mb-3">Live Automation Feed</h4>
            <div className="flex items-center gap-2.5 text-xs text-[#0D0D0D]/70 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              <span>n8n active: monitoring inbound webhooks</span>
            </div>
          </div>
        </div>

        {/* Right Form or Ticket Status Screen */}
        <div className="lg:col-span-7">
          <AnimatePresence mode="wait">
            {!submittedTicket ? (
              /* ACTIVE CONTACT INTAKE FORM */
              <motion.div
                key="contact-form"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="bg-[#F7F5F2] border border-[#0D0D0D]/10 rounded-2xl p-8 md:p-10 shadow-sm"
              >
                <div className="mb-8">
                  <h3 className="font-serif text-2xl font-bold text-[#0D0D0D]">Describe the bottleneck</h3>
                  <p className="text-xs text-[#0D0D0D]/50 mt-1 font-semibold">Provide as much context as possible about the manual workaround.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6" id="agency-intake-form">
                  <div>
                    <label htmlFor="form-name" className="block text-xs uppercase tracking-wider font-mono text-[#0D0D0D]/60 mb-2 font-bold">
                      Your Name *
                    </label>
                    <input
                      required
                      type="text"
                      id="form-name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Divyend Reddy"
                      className="w-full bg-white/60 border border-[#0D0D0D]/10 hover:border-[#0D0D0D]/20 focus:border-[#0D0D0D] rounded-xl px-4 py-3 text-sm focus:outline-none transition-all placeholder-[#0D0D0D]/30"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="form-business" className="block text-xs uppercase tracking-wider font-mono text-[#0D0D0D]/60 mb-2 font-bold">
                        Business / Brand
                      </label>
                      <input
                        type="text"
                        id="form-business"
                        name="business"
                        value={formData.business}
                        onChange={handleInputChange}
                        placeholder="e.g. Acme Studio"
                        className="w-full bg-white/60 border border-[#0D0D0D]/10 hover:border-[#0D0D0D]/20 focus:border-[#0D0D0D] rounded-xl px-4 py-3 text-sm focus:outline-none transition-all placeholder-[#0D0D0D]/30"
                      />
                    </div>

                    <div>
                      <label htmlFor="form-email" className="block text-xs uppercase tracking-wider font-mono text-[#0D0D0D]/60 mb-2 font-bold">
                        Email Address *
                      </label>
                      <input
                        required
                        type="email"
                        id="form-email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="e.g. target@brand.com"
                        className="w-full bg-white/60 border border-[#0D0D0D]/10 hover:border-[#0D0D0D]/20 focus:border-[#0D0D0D] rounded-xl px-4 py-3 text-sm focus:outline-none transition-all placeholder-[#0D0D0D]/30"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="form-problem" className="block text-xs uppercase tracking-wider font-mono text-[#0D0D0D]/60 mb-2 font-bold">
                      Problem Description * (What standard tools failed to automate)
                    </label>
                    <textarea
                      required
                      rows={5}
                      id="form-problem"
                      name="problem"
                      value={formData.problem}
                      onChange={handleInputChange}
                      placeholder="e.g. Standard Zapier fails because we need to parse incoming nested arrays, check if the client ID exists on Supabase, and trigger a custom SMS verification on WhatsApp..."
                      className="w-full bg-white/60 border border-[#0D0D0D]/10 hover:border-[#0D0D0D]/20 focus:border-[#0D0D0D] rounded-xl px-4 py-3 text-sm focus:outline-none transition-all placeholder-[#0D0D0D]/30 resize-none"
                    ></textarea>
                  </div>

                  <button
                    required
                    type="submit"
                    disabled={isSubmitting}
                    className="clay-btn w-full py-4 text-base mt-2 justify-center transition-all cursor-pointer disabled:opacity-50"
                    id="submit-intake-btn"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-[#E8DED4] border-t-transparent rounded-full animate-spin"></span>
                        <span>Parsing exception fields...</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <span>Start The Conversation</span>
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    )}
                  </button>
                </form>
              </motion.div>
            ) : (
              /* CUSTOM TICKET CONFIRMATION SCREEN (CRM SIMULATION) */
              <motion.div
                key="success-ticket"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="bg-[#0D0D0D] text-[#E8DED4] border border-[#E8DED4]/15 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
                id="crm-success-ticket-view"
              >
                {/* Floating ambient glow */}
                <div className="absolute top-[10%] right-[10%] w-40 h-40 bg-stone-300/10 rounded-full blur-[60px]"></div>

                <div className="flex flex-col items-center text-center max-w-lg mx-auto mb-10">
                  <CheckCircle2 className="w-16 h-16 text-emerald-400 mb-6" />
                  <span className="font-mono text-xs uppercase tracking-widest text-[#E8DED4]/50 mb-2">Automation Triggered</span>
                  <h3 className="font-serif text-3xl font-bold tracking-tight mb-3">Ticket Successfully Created</h3>
                  <p className="text-sm text-[#E8DED4]/60">Your bottleneck data was captured by our n8n webhook and assigned to our direct queue.</p>
                </div>

                {/* Ticket Details Panel */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 space-y-6 mb-8 text-left">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div className="flex items-center gap-2">
                      <Ticket className="w-4.5 h-4.5 text-[#E8DED4]/60" />
                      <span className="font-mono text-sm tracking-wide font-bold">{submittedTicket.id}</span>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full font-mono text-[10px] uppercase bg-emerald-500/20 text-emerald-400 font-bold tracking-wider">
                      Live Queue / Active
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div>
                      <span className="block text-[#E8DED4]/40 uppercase font-mono tracking-wider mb-1">Company / Business</span>
                      <span className="font-medium text-sm text-[#E8DED4]">{submittedTicket.business}</span>
                    </div>
                    <div>
                      <span className="block text-[#E8DED4]/40 uppercase font-mono tracking-wider mb-1">Created At</span>
                      <span className="font-medium text-sm text-[#E8DED4]">{submittedTicket.createdAt}</span>
                    </div>
                  </div>

                  <div>
                    <span className="block text-[#E8DED4]/40 uppercase font-mono text-xs tracking-wider mb-2">Manual Workaround Described</span>
                    <p className="text-sm text-[#E8DED4]/80 leading-relaxed max-h-32 overflow-y-auto pr-2 font-semibold">
                      "{submittedTicket.problem}"
                    </p>
                  </div>
                </div>

                {/* Process Steps Indicator */}
                <div className="space-y-4 text-xs text-left mb-10 border-t border-white/10 pt-8">
                  <span className="block text-[#E8DED4]/40 uppercase font-mono tracking-widest mb-4">Pipeline Status Runs</span>
                  <div className="flex gap-3 items-start">
                    <div className="w-4 h-4 rounded-full bg-emerald-400 mt-0.5 flex items-center justify-center text-[8px] text-black font-extrabold">✓</div>
                    <div>
                      <span className="font-mono text-xs uppercase text-[#E8DED4]/80 tracking-wide font-bold">Step 1 — Inbound Webhook Verified</span>
                      <p className="text-[11px] text-[#E8DED4]/50 mt-0.5">n8n routed submission data parsed, scoring risk levels, mapped to founders.</p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <div className="w-4 h-4 rounded-full bg-stone-700 mt-0.5 flex items-center justify-center text-[8px] text-black font-extrabold animate-pulse">⚙</div>
                    <div>
                      <span className="font-mono text-xs uppercase text-[#E8DED4]/80 tracking-wide font-bold">Step 2 — Dynamic Slack Alert Sent</span>
                      <p className="text-[11px] text-[#E8DED4]/50 mt-0.5">Founders pinged on direct WhatsApp mobile notifications.</p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <div className="w-4 h-4 rounded-full bg-stone-700 mt-0.5 flex items-center justify-center text-[10px] text-black font-bold">•</div>
                    <div>
                      <span className="font-mono text-xs uppercase text-[#E8DED4]/80 tracking-wide font-bold">Step 3 — Founders Manual Verification</span>
                      <p className="text-[11px] text-[#E8DED4]/50 mt-0.5">Email validation check & detailed roadmap draft dispatch.</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => {
                      const phoneNumber = '917993171341';
                      const message = encodeURIComponent(`Hi, I've just logged ticket ${submittedTicket.id} from your website. Let's fast-track our audit!`);
                      window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
                    }}
                    className="flex-1 rounded-full bg-[#E8DED4] text-[#0D0D0D] font-medium py-3 px-6 hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2 text-sm text-[13px] font-semibold cursor-pointer"
                    id="success-whatsapp-escalate-btn"
                  >
                    Escalate via WhatsApp
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setSubmittedTicket(null)}
                    className="flex-1 rounded-full border border-white/20 text-[#E8DED4] hover:border-white hover:bg-white/5 font-medium py-3 px-6 transition-all text-sm text-[13px] cursor-pointer"
                    id="submit-another-btn"
                  >
                    Log Another Exception
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Past Submissions list panel for local persist review */}
          {pastSubmissions.length > 0 && (
            <div className="mt-12 pt-8 border-t border-[#0D0D0D]/10">
              <h4 className="font-serif font-bold text-lg text-[#0D0D0D] mb-4">Your Logged Tickets ({pastSubmissions.length})</h4>
              <div className="space-y-3">
                {pastSubmissions.slice(0, 3).map((sub) => (
                  <div
                    key={sub.id}
                    className="bg-stone-50/70 border border-[#0D0D0D]/5 rounded-xl p-4 flex items-center justify-between text-xs font-semibold"
                  >
                    <div>
                      <div className="font-mono font-bold text-[#0D0D0D]">{sub.id} • {sub.business}</div>
                      <div className="text-[10px] text-[#0D0D0D]/40 font-bold mt-1">Submitted at {sub.createdAt}</div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full font-mono text-[9px] uppercase bg-stone-200 text-stone-700 border border-neutral-300 font-bold tracking-wider">
                      Pending Review
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
