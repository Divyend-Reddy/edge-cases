import { motion } from 'motion/react';
import { Instagram, Cpu, Layers, GitFork, Hammer, Globe, Database, Cpu as Model } from 'lucide-react';
import { toolsUsed } from '../data/tools';

export default function About() {
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
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 20 }
    }
  };

  const founders = [
    {
      name: 'Divyend Reddy',
      role: 'Co-Founder & Technical Architect',
      instagram: '@divi.osx',
      instaUrl: 'https://instagram.com/divi.osx',
      bio: 'Builds automation systems, AI workflows, integrations, and backend infrastructure. Focused on creating scalable systems that reduce manual work and compound business efficiency.',
      avatarInit: 'DR'
    },
    {
      name: 'Shashank',
      role: 'Co-Founder & Automation Strategist',
      instagram: '@buildwithshashankk',
      instaUrl: 'https://instagram.com/buildwithshashankk',
      bio: 'Works closely with businesses to identify bottlenecks, map processes, and design automation strategies that generate measurable operational performance improvements.',
      avatarInit: 'S'
    }
  ];

  const approaches = [
    {
      title: 'We Embed, Not Deliver',
      description: 'We become a permanent structural division of your operations. Instead of delivering a project handoff and ignoring followups, we continuously monitor errors, update logic, and optimize as you scale.',
      icon: Layers
    },
    {
      title: 'We Solve Edge Cases, Not Templates',
      description: 'Standard drag-and-drop automations snap when encountering unusual user entries, format changes, or API dropouts. We write secondary validation layers and fallback scripts to secure workflows.',
      icon: GitFork
    },
    {
      title: 'We Compound Knowledge',
      description: 'Every operational component we connect automatically records metrics and health stats. This telemetry helps make successive workflow designs faster, lighter, and more intelligent.',
      icon: Cpu
    }
  ];

  // Helper to map tool category to an icon
  const getToolIcon = (category: string) => {
    switch (category) {
      case 'automation': return <Hammer className="w-5 h-5" />;
      case 'model': return <Model className="w-5 h-5" />;
      case 'database': return <Database className="w-5 h-5" />;
      case 'infrastructure': return <Globe className="w-5 h-5" />;
      default: return <Database className="w-5 h-5" />;
    }
  };

  return (
    <div className="w-full relative py-20 px-6 max-w-7xl mx-auto" id="page-about">
      
      {/* SECTION 1 — OUR STORY */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="mb-24 text-center md:text-left grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-b border-[#0D0D0D]/10 pb-20"
      >
        <div className="md:col-span-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#0D0D0D]/50 block mb-3 font-mono">who we are</span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold tracking-tight text-[#0D0D0D] leading-tight mb-8">
            Why Edge Cases Exists
          </h1>
        </div>
        <div className="md:col-span-7">
          <p className="text-lg md:text-xl text-[#0D0D0D]/85 leading-relaxed font-medium">
            Edge Cases was started because most automation agencies focus on simple, cookie-cutter workflows while growing businesses struggle with messy exceptions, manual quick-fixes, disconnected legacy systems, and operational bottlenecks.
          </p>
        </div>
        <div className="md:col-span-5 md:pl-8">
          <p className="text-sm md:text-base text-[#0D0D0D]/65 leading-relaxed font-semibold">
            We focus exclusively on the messy parts, the complex custom integrations, and the background anomalies that standard automation tools fail to resolve. We believe true efficiency comes from automating the difficult 20% that actually drains 80% of your labor.
          </p>
        </div>
      </motion.section>

      {/* SECTION 2 — FOUNDERS */}
      <section className="mb-28 border-b border-[#0D0D0D]/10 pb-20">
        <div className="mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#0D0D0D]/50 block mb-3 font-mono">agency leadership</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-[#0D0D0D]">
            Founders
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {founders.map((founder, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="clay-card p-8 md:p-10 flex flex-col justify-between"
              id={`founder-card-${idx}`}
            >
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-[#0D0D0D] text-[#E8DED4] flex items-center justify-center font-serif font-bold text-xl border border-stone-200">
                    {founder.avatarInit}
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-serif font-bold text-[#0D0D0D]">
                      {founder.name}
                    </h3>
                    <p className="text-xs uppercase tracking-wider text-[#0D0D0D]/50 font-mono mt-0.5">
                      {founder.role}
                    </p>
                  </div>
                </div>
                <p className="text-[#0D0D0D]/75 text-sm md:text-base leading-relaxed mb-8 font-medium">
                  {founder.bio}
                </p>
              </div>

              <div className="border-t border-[#0D0D0D]/10 pt-6">
                <a
                  href={founder.instaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-[#0D0D0D]/70 hover:text-black transition-colors font-semibold py-1.5 px-3.5 rounded-full hover:bg-[#0D0D0D]/5 text-sm"
                >
                  <Instagram className="w-5 h-5 text-[#0D0D0D]/60" />
                  <span>{founder.instagram}</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 3 — OUR APPROACH */}
      <section className="mb-28 border-b border-[#0D0D0D]/10 pb-20">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#0D0D0D]/50 block mb-3 font-mono">how we perform</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-[#0D0D0D]">
            Our Approach
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {approaches.map((approach, idx) => {
            const Icon = approach.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="clay-card p-8 text-left"
                id={`about-approach-card-${idx}`}
              >
                <div className="w-12 h-12 rounded-xl bg-[#0D0D0D] flex items-center justify-center text-[#E8DED4] mb-6">
                  <Icon className="w-5 h-5 stroke-[1.5]" />
                </div>
                <h3 className="font-serif text-lg font-bold mb-3 text-[#0D0D0D]">
                  {approach.title}
                </h3>
                <p className="text-[#0D0D0D]/70 text-sm leading-relaxed font-semibold">
                  {approach.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* SECTION 4 — TOOLS WE USE */}
      <section>
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#0D0D0D]/50 block mb-3 font-mono">precision stack</span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight text-[#0D0D0D]">
            Tools We Use
          </h2>
          <p className="text-xs md:text-sm text-[#0D0D0D]/60 mt-3 font-medium">
            We use a tailored suite of advanced integration, routing, and intelligence software to achieve perfect runtime safety.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {toolsUsed.map((tool, idx) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ y: -4 }}
              className="px-6 py-8 rounded-xl bg-stone-100/50 hover:bg-white border border-[#0D0D0D]/5 hover:border-[#0D0D0D]/15 transition-all text-center flex flex-col items-center gap-4 group"
              id={`about-tool-grid-item-${tool.name.replace(/\s+/g, '-').toLowerCase()}`}
            >
              <div className="text-[#0D0D0D]/70 group-hover:text-[#0D0D0D] transition-colors p-2 bg-[#0D0D0D]/5 rounded-lg">
                {getToolIcon(tool.category)}
              </div>
              <div>
                <h4 className="font-serif font-bold text-[#0D0D0D] text-base group-hover:text-black">
                  {tool.name}
                </h4>
                <p className="text-[10px] font-mono tracking-wide text-[#0D0D0D]/40 uppercase mt-1">
                  {tool.category}
                </p>
              </div>
              <p className="text-[11px] text-[#0D0D0D]/55 leading-relaxed font-semibold group-hover:text-[#0D0D0D]/80 transition-colors">
                {tool.tagline}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
