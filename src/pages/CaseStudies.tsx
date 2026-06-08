import { Page } from '../types';
import { motion } from 'motion/react';
import { caseStudies } from '../data/casestudies';
import { ArrowLeft, ArrowRight, Briefcase, Settings, Sparkles, TrendingUp } from 'lucide-react';

interface CaseStudiesProps {
  onNavigate: (page: Page) => void;
  selectedId: string | null;
  onSelectId: (id: string | null) => void;
}

export default function CaseStudies({ onNavigate, selectedId, onSelectId }: CaseStudiesProps) {
  // Find currently active case study
  const activeStudy = caseStudies.find(study => study.id === selectedId);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 20 }
    }
  };

  const selectStudy = (id: string) => {
    onSelectId(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goBackToList = () => {
    onSelectId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full relative py-20 px-6 max-w-7xl mx-auto" id="page-case-studies">
      {activeStudy ? (
        /* CASE STUDY DETAILS PAGE */
        <motion.div
          key="detail-view"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.4 }}
          id={`case-study-detail-${activeStudy.id}`}
        >
          {/* Back Action */}
          <button
            onClick={goBackToList}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0D0D0D]/60 hover:text-black mb-12 cursor-pointer py-2 px-4 rounded-full hover:bg-[#0D0D0D]/5 transition-all"
            id="back-to-portfolio-btn"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Portfolio</span>
          </button>

          {/* Title and Industry Header */}
          <div className="mb-16 border-b border-[#0D0D0D]/10 pb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0D0D0D]/5 rounded-full text-xs font-mono tracking-wider text-[#0D0D0D]/65 mb-6 uppercase border border-[#0D0D0D]/5">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Industry: {activeStudy.industry}</span>
            </div>
            
            <h1 className="font-serif text-4xl md:text-6xl font-bold tracking-tight text-[#0D0D0D] leading-[1.1] mb-6">
              {activeStudy.title}
            </h1>
            <p className="text-lg md:text-xl text-[#0D0D0D]/70 max-w-3xl leading-relaxed font-semibold">
              {activeStudy.subtitle}
            </p>
          </div>

          {/* Results Block - Large bold statistics */}
          <div className="mb-20">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0D0D0D]/50 block mb-8 font-mono">accomplished results</span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {activeStudy.results.map((res, index) => (
                <div
                  key={index}
                  className="bg-[#0D0D0D] text-[#E8DED4] p-8 md:p-10 rounded-[1.5rem] flex flex-col justify-between border border-[#E8DED4]/10 relative overflow-hidden"
                  id={`stat-box-${index}`}
                >
                  <div className="absolute top-0 right-0 p-4 opacity-5">
                    <TrendingUp className="w-24 h-24 stroke-[1]" />
                  </div>
                  <div className="text-5xl md:text-6xl font-serif font-bold tracking-tight mb-4">
                    {res.value}
                  </div>
                  <p className="text-[#E8DED4]/85 text-xs md:text-sm font-medium tracking-tight uppercase">
                    {res.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Detailed Content Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
            {/* Left Main Content */}
            <div className="lg:col-span-8 space-y-12">
              <div className="p-8 rounded-2xl bg-stone-100/40 border border-[#0D0D0D]/5">
                <h3 className="font-serif text-2xl font-bold text-[#0D0D0D] mb-4">
                  Problem
                </h3>
                <p className="text-[#0D0D0D]/80 text-[15px] leading-relaxed font-semibold">
                  {activeStudy.problem}
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-stone-100/40 border border-[#0D0D0D]/5">
                <h3 className="font-serif text-2xl font-bold text-[#0D0D0D] mb-4">
                  Our Approach
                </h3>
                <p className="text-[#0D0D0D]/80 text-[15px] leading-relaxed font-semibold">
                  {activeStudy.approach}
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-stone-100/40 border border-[#0D0D0D]/5">
                <h3 className="font-serif text-2xl font-bold text-[#0D0D0D] mb-4">
                  What We Built
                </h3>
                <p className="text-[#0D0D0D]/80 text-[15px] leading-relaxed font-semibold">
                  {activeStudy.whatWeBuilt}
                </p>
              </div>
            </div>

            {/* Right Meta Column */}
            <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-8">
              {/* Tools Used Box */}
              <div className="p-8 bg-stone-200/50 rounded-2xl border border-[#0D0D0D]/10">
                <div className="flex items-center gap-2 mb-6 text-[#0D0D0D]">
                  <Settings className="w-5 h-5 text-[#0D0D0D]/70" />
                  <h4 className="font-serif font-bold text-lg text-[#0D0D0D]">Tools Used</h4>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {activeStudy.tools.map((tool, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3.5 py-1.5 bg-[#0D0D0D] text-[#E8DED4] font-mono text-xs rounded-full border border-neutral-700 font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Action block */}
              <div className="p-8 border border-[#0D0D0D]/10 rounded-2xl text-center bg-[#F7F5F2]/40">
                <h4 className="font-serif font-bold text-lg mb-2">Have a similar pipeline gap?</h4>
                <p className="text-xs text-[#0D0D0D]/60 mb-6 font-semibold">We analyze your infrastructure and automate exceptions seamlessly.</p>
                <button
                  onClick={() => onNavigate('contact')}
                  className="clay-btn w-full text-sm cursor-pointer"
                  id="detail-page-cta-contact"
                >
                  Let's Solve It
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      ) : (
        /* CASE STUDIES PORTFOLIO LIST */
        <motion.div
          key="list"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          id="case-studies-portfolio-list"
        >
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0D0D0D]/50 block mb-3 font-mono">proven implementations</span>
            <motion.h1 
              variants={itemVariants}
              className="font-serif text-4xl md:text-6xl font-bold tracking-tight text-[#0D0D0D] mb-6"
            >
              Edge Cases Solved
            </motion.h1>
            <motion.p 
              variants={itemVariants}
              className="text-lg text-[#0D0D0D]/75 leading-relaxed font-semibold max-w-lg mx-auto"
            >
              Real problems. Real automations. Real results.
            </motion.p>
          </div>

          {/* Grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study) => {
              // Extract a main high impact result
              const coreResult = study.results[0];
              return (
                <motion.div
                  key={study.id}
                  variants={itemVariants}
                  onClick={() => selectStudy(study.id)}
                  className="clay-card p-8 flex flex-col justify-between cursor-pointer group text-left relative overflow-hidden"
                  id={`portfolio-item-card-${study.id}`}
                >
                  <div className="absolute top-0 right-0 p-4 opacity-5">
                    <Sparkles className="w-24 h-24" />
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-mono text-[10px] tracking-widest uppercase text-[#0D0D0D]/40 bg-[#0D0D0D]/5 px-2.5 py-1 rounded-full border border-[#0D0D0D]/5">
                        {study.industry}
                      </span>
                      <span className="text-xs text-[#0D0D0D]/50 group-hover:translate-x-1 transition-transform flex items-center gap-1 font-semibold">
                        View Solution
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>

                    <h2 className="font-serif text-xl md:text-2xl font-bold text-[#0D0D0D] mb-3 group-hover:text-black">
                      {study.title}
                    </h2>

                    <p className="text-[#0D0D0D]/70 text-sm leading-relaxed mb-8 pr-2 font-medium">
                      {study.subtitle}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-[#0D0D0D]/10 flex items-end justify-between mt-4">
                    <div>
                      <div className="text-2xl md:text-3xl font-serif font-bold text-[#0D0D0D] tracking-tight">
                        {coreResult.value}
                      </div>
                      <div className="text-[10px] font-mono uppercase tracking-wider text-[#0D0D0D]/45 font-bold">
                        {coreResult.label}
                      </div>
                    </div>
                    <div className="w-8 h-8 rounded-full border border-[#0D0D0D]/10 flex items-center justify-center text-[#0D0D0D]/40 group-hover:border-[#0D0D0D]/40 group-hover:text-[#0D0D0D] transition-colors bg-[#E8DED4]/20">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      )}
    </div>
  );
}
