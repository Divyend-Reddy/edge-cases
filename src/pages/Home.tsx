import { Page } from '../types';
import { motion } from 'motion/react';
import { ArrowRight, Cpu, Layers, GitFork, RotateCcw, Check, Zap, Target } from 'lucide-react';
import { caseStudies } from '../data/casestudies';

interface HomeProps {
  onNavigate: (page: Page) => void;
  onSelectCaseStudy: (id: string) => void;
}

export default function Home({ onNavigate, onSelectCaseStudy }: HomeProps) {
  // Animation presets for standard high-end scrolling
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 20 }
    }
  };

  const trustCards = [
    {
      title: 'Workflow Automation',
      description: 'Replace manual file-moving, data synchronisation, and administrative hand-offs with bulletproof system pipelines.',
      icon: Layers
    },
    {
      title: 'AI Agents',
      description: 'Deploy advanced autonomous reasoners capable of checking data sources, qualified decisioning, and customer replies.',
      icon: Cpu
    },
    {
      title: 'Custom Integrations',
      description: 'Connect internal tools, SaaS endpoints, legacy software, and scraped portals with robust custom mid-layer engines.',
      icon: GitFork
    }
  ];

  const featuredSolutions = [
    {
      id: 'google-review-coupon',
      title: caseStudies[0].title,
      summary: 'Dynamic physical-to-digital QR loop turning diners into verified Google reviewers with instant rewards.',
      metric: '40% Reviews Increase',
      statLabel: 'Within 3 Weeks',
      tag: 'Local Retail & SMBs'
    },
    {
      id: 'real-estate-lead-nurture',
      title: caseStudies[1].title,
      summary: 'Conversational qualification chatbot reaching out to Facebook ads signups within 90 seconds.',
      metric: 'Under 90s SLA',
      statLabel: 'Lead response rate',
      tag: 'Real Estate'
    },
    {
      id: 'healthcare-follow-up',
      title: caseStudies[2].title,
      summary: 'Clinical EHR database synchronization automations reading weekly schedules and triggering confirmation requests.',
      metric: '70% No-Show Drop',
      statLabel: 'Clinic revenue saved',
      tag: 'Healthcare'
    },
    {
      id: 'saas-churn-alert',
      title: caseStudies[3].title,
      summary: 'Automated platform telemetry tracker evaluating active score dips and alerting CS reps proactively.',
      metric: '30% Less Churn',
      statLabel: 'Proactive retention',
      tag: 'SaaS Platforms'
    }
  ];

  const corePrinciples = [
    {
      title: 'We Embed, Not Deliver',
      description: 'We do not drop a file and disappear. We become an extension of your operations team, continually monitoring processes, optimizing live runs, and restructuring workflows as you scale.',
      icon: Target
    },
    {
      title: 'We Solve Edge Cases, Not Templates',
      description: 'Standard tools break when they encounter null values, empty rows, or minor exceptions. We write the logic filters, fallback pathways, and validations to keep systems green, no matter what.',
      icon: Zap
    },
    {
      title: 'We Compound Knowledge',
      description: 'Every custom script, automation loop, and database index we build is structured to feed back into itself. Your processes gather historical telemetry and get smarter every day.',
      icon: RotateCcw
    }
  ];

  const selectFeatured = (id: string) => {
    onSelectCaseStudy(id);
    onNavigate('case-studies');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full relative" id="page-home">
      
      {/* HERO SECTION */}
      <section className="relative overflow-hidden min-h-[85vh] flex items-center justify-center px-6 py-20 border-b border-[#0D0D0D]/10">
        {/* Clay ambient background movement */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-[#E8DED4] via-[#eedfd2] to-[#E3D4C8]">
          {/* Decorative clay contours */}
          <div className="absolute top-[10%] left-[5%] w-[40rem] h-[40rem] bg-white/20 rounded-full blur-[80px] clay-ripple opacity-60"></div>
          <div className="absolute bottom-[15%] right-[5%] w-[35rem] h-[35rem] bg-stone-300/20 rounded-full blur-[90px] clay-ripple opacity-40" style={{ animationDelay: '3s' }}></div>
        </div>

        <motion.div 
          className="max-w-4xl mx-auto text-center relative z-10"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Minimal aesthetic tag */}
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#0D0D0D]/5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#0D0D0D]/70 mb-8 border border-[#0D0D0D]/10"
          >
            <span className="w-1.5 h-1.5 bg-[#0D0D0D] rounded-full animate-pulse"></span>
            Systems agency
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="font-serif text-5xl md:text-7xl font-bold tracking-tight text-[#0D0D0D] leading-[1.08] mb-8"
          >
            Automation For The <br />
            <span className="italic font-normal">Problems Nobody Else Solves.</span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-[#0D0D0D]/75 leading-relaxed max-w-2xl mx-auto mb-12 font-medium"
          >
            Most agencies automate the obvious. We build systems for the edge cases, Exceptions, and workflow gaps that actually slow businesses down.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={() => onNavigate('contact')}
              id="hero-cta-call"
              className="clay-btn w-full sm:w-auto relative group py-3.5 px-8 cursor-pointer text-base"
            >
              Book A Call
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => onNavigate('case-studies')}
              id="hero-cta-cases"
              className="clay-btn-secondary w-full sm:w-auto py-3.5 px-8 cursor-pointer text-base"
            >
              View Case Studies
            </button>
          </motion.div>
        </motion.div>

        {/* Minimal Bottom Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 text-[10px] font-mono tracking-wider opacity-45 uppercase">
          <span>custom logic</span>
          <span className="w-1 h-1 bg-[#0D0D0D] rounded-full"></span>
          <span>fully embedded</span>
          <span className="w-1 h-1 bg-[#0D0D0D] rounded-full"></span>
          <span>production grade</span>
        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-b border-[#0D0D0D]/10">
        <div className="text-center md:text-left md:flex md:items-end md:justify-between mb-16">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0D0D0D]/50 block mb-3 font-mono">operational capacity</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-[#0D0D0D]">
              Built For Businesses That Need <br className="hidden md:block"/>More Than Templates
            </h2>
          </div>
          <p className="text-sm md:text-base text-[#0D0D0D]/60 max-w-md mt-4 md:mt-0 leading-relaxed font-medium">
            We avoid generic plug-and-play recipes. Every operational architecture is built with custom API hooks, strict exception boundaries, and deep system intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trustCards.map((card, idx) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="clay-card p-8 flex flex-col items-start"
                id={`trust-card-${idx}`}
              >
                <div className="w-12 h-12 rounded-xl bg-[#0D0D0D]/5 flex items-center justify-center text-[#0D0D0D] mb-6 border border-[#0D0D0D]/5">
                  <IconComponent className="w-6 h-6 stroke-[1.5]" />
                </div>
                <h3 className="font-serif text-xl font-bold mb-3 text-[#0D0D0D]">
                  {card.title}
                </h3>
                <p className="text-[#0D0D0D]/70 text-sm leading-relaxed font-medium">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* FEATURED SOLUTIONS PORTFOLIO */}
      <section className="py-24 bg-[#F7F5F2]/40 border-b border-[#0D0D0D]/10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0D0D0D]/50 block mb-3 font-mono">solved systems</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-[#0D0D0D]">
              Featured Solutions
            </h2>
            <p className="text-sm md:text-base text-[#0D0D0D]/60 mt-4 leading-relaxed font-medium">
              We design and fully build robust solutions deployed straight into your workflow. Click any card to explore full blueprints.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredSolutions.map((solution, idx) => (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                onClick={() => selectFeatured(solution.id)}
                className="clay-card p-8 flex flex-col justify-between group cursor-pointer border border-[#0D0D0D]/10 relative overflow-hidden text-left"
                id={`featured-solution-card-${solution.id}`}
              >
                {/* Background high-end card hover shimmer */}
                <div className="absolute inset-0 bg-stone-50/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none duration-500"></div>

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-[10px] tracking-wider uppercase text-[#0D0D0D]/40 bg-[#0D0D0D]/5 px-2.5 py-1 rounded-full border border-[#0D0D0D]/5">
                      {solution.tag}
                    </span>
                    <span className="text-xs text-[#0D0D0D]/50 group-hover:translate-x-1 transition-transform flex items-center gap-1 font-semibold">
                      Explore Case Study
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>

                  <h3 className="font-serif text-xl md:text-2xl font-bold text-[#0D0D0D] mb-3 group-hover:text-black transition-colors">
                    {solution.title}
                  </h3>
                  
                  <p className="text-[#0D0D0D]/70 text-sm leading-relaxed pr-4 mb-8 font-medium">
                    {solution.summary}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#0D0D0D]/10 flex items-baseline justify-between">
                  <div>
                    <div className="text-3xl font-serif font-bold text-[#0D0D0D] tracking-tight">
                      {solution.metric}
                    </div>
                    <div className="text-[11px] font-mono uppercase tracking-wider text-[#0D0D0D]/40">
                      {solution.statLabel}
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-full border border-[#0D0D0D]/10 flex items-center justify-center text-[#0D0D0D]/40 group-hover:border-[#0D0D0D]/40 group-hover:text-[#0D0D0D] transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY EDGE CASES */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-b border-[#0D0D0D]/10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          <div className="md:sticky md:top-28">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0D0D0D]/50 block mb-3 font-mono">agency framework</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-[#0D0D0D] leading-tight mb-6">
              Why Edge Cases
            </h2>
            <p className="text-sm md:text-base text-[#0D0D0D]/70 leading-relaxed font-medium">
              We started because templates aren't enough. Here is our operational standard for building automation loops that don't shatter under real-life edge scenarios.
            </p>
          </div>

          <div className="md:col-span-2 space-y-12">
            {corePrinciples.map((principle, idx) => {
              const Icon = principle.icon;
              return (
                <div 
                  key={idx}
                  className="flex gap-6 items-start p-8 rounded-2xl border border-[#0D0D0D]/5 bg-[#F7F5F2]/25"
                  id={`why-principle-block-${idx}`}
                >
                  <div className="w-12 h-12 rounded-xl bg-[#0D0D0D] flex items-center justify-center text-[#E8DED4] shrink-0">
                    <Icon className="w-5 h-5 stroke-[2]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold text-[#0D0D0D] mb-3">
                      {principle.title}
                    </h3>
                    <p className="text-sm text-[#0D0D0D]/70 leading-relaxed font-semibold">
                      {principle.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 px-6 relative bg-[#0D0D0D] text-[#E8DED4] overflow-hidden rounded-[2rem] max-w-7xl mx-auto my-16 border border-[#E8DED4]/10">
        <div className="absolute top-[30%] left-[80%] w-[30rem] h-[30rem] bg-white/5 rounded-full blur-[90px] clay-ripple opacity-30"></div>
        <div className="absolute bottom-[20%] right-[85%] w-[35rem] h-[35rem] bg-stone-300/5 rounded-full blur-[100px] clay-ripple opacity-20"></div>

        <div className="max-w-3xl mx-auto text-center relative z-10 py-8">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#E8DED4]/60 block mb-4 font-mono">take the first step</span>
          <h2 className="font-serif text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
            Your Business Has <br className="sm:hidden"/>Hidden Bottlenecks.
          </h2>
          <p className="text-lg md:text-xl text-[#E8DED4]/70 max-w-xl mx-auto mb-10 font-medium">
            We'll find them. We'll automate them.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            id="final-cta-btn"
            className="rounded-full bg-[#E8DED4] text-[#0D0D0D] font-medium py-4 px-10 hover:bg-white hover:text-black transition-all flex items-center gap-2 mx-auto shadow-lg text-sm md:text-base cursor-pointer"
          >
            Let's Talk
            <ArrowRight className="w-4 h-4 text-[#0D0D0D]" />
          </button>
        </div>
      </section>
    </div>
  );
}
