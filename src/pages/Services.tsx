import { Page } from '../types';
import { motion } from 'motion/react';
import { Layers, Cpu, GitFork, MessageSquare, ShieldCheck, Check, ArrowRight, Eye, RefreshCw, BarChart, Settings } from 'lucide-react';

interface ServicesProps {
  onNavigate: (page: Page) => void;
}

export default function Services({ onNavigate }: ServicesProps) {
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

  const serviceCategories = [
    {
      title: 'Workflow Automation',
      description: 'End-to-end automation of highly repetitive operational pipelines using n8n, Make, and custom JavaScript/Python. We eliminate manual file-moving and data double-entry.',
      industries: 'All Verticals',
      icon: Layers
    },
    {
      title: 'AI Agent Builds',
      description: 'Custom autonomous AI agents capable of querying document catalogs, reading incoming service requests, qualifying incoming sales bookings, and carrying out automated operations.',
      industries: 'SaaS, Healthcare, Service Businesses',
      icon: Cpu
    },
    {
      title: 'Custom Integrations',
      description: 'Bridge custom-built or legacy on-premise components with modern SaaS systems. We write custom middleware, design secure API endpoints, webhooks, scraping, and logic routers.',
      industries: 'All Verticals',
      icon: GitFork
    },
    {
      title: 'WhatsApp Automation',
      description: 'Construct interactive lead conversion threads, verified review generation, and coupon delivery pipelines. Automate appointment confirmations and immediate follow-ups directly on users\' phones.',
      industries: 'SMBs, Restaurants, Local Businesses',
      icon: MessageSquare
    },
    {
      title: 'Retainer Partnership',
      description: 'Our premium service model. Continuous automation analysis, custom system builds, troubleshooting, and direct support as your business procedures evolve month over month.',
      industries: 'All Verticals',
      icon: ShieldCheck
    }
  ];

  const workflowSteps = [
    {
      title: 'Edge Audit',
      description: 'We spend time embedded inside your operational channels, observing staff workflow logs, mapping bottlenecks, and logging manual operations that occur on exceptions.',
      icon: Eye
    },
    {
      title: 'Prioritise',
      description: 'We stack-rank every identified bottleneck based on impact on daily metrics versus development load. We isolate high-leverage bottlenecks for rapid automation first.',
      icon: BarChart
    },
    {
      title: 'Build',
      description: 'Our technical architects build robust automation systems, writing logic filters, configuring fallback alerts, and linking endpoints with clean system logic.',
      icon: Settings
    },
    {
      title: 'Monitor',
      description: 'Deploying systems is only half the battle. We monitor telemetry logs live to capture anomalies or API dropouts before they can disrupt operations.',
      icon: ShieldCheck
    },
    {
      title: 'Iterate',
      description: 'We continuously review exception logs and work alongside staff to optimize workflows, expanding logic branches to make the system smarter over time.',
      icon: RefreshCw
    }
  ];

  const retainerTiers = [
    {
      id: 'starter',
      name: 'Starter',
      tagline: 'For small operations scaling past basic templates',
      features: [
        'Mapping of 1 key core bottleneck',
        'Built using n8n / Make integration layers',
        '2 weeks optimization and testing',
        'Weekly pipeline health reviews',
        'Email & WhatsApp tech support'
      ]
    },
    {
      id: 'growth',
      name: 'Growth',
      tagline: 'Ideal for scaling businesses with complex exceptions',
      features: [
        'Continuous auditing of 2 key business lanes',
        'Dedicated custom AI conversational agent',
        'Custom middleware and database connections',
        'Full error reporting notifications via Slack',
        '24-hour turnaround response on issues'
      ]
    },
    {
      id: 'partner',
      name: 'Partner',
      tagline: 'Your complete outsourced automation department',
      features: [
        'Full embedded operational audits',
        'Unlimited custom builds & deep integrations',
        'Custom cloud VPS & secure hosted backends',
        'Real-time uptime checking with dedicated alarms',
        'Direct founder contact on Slack / WhatsApp cell'
      ]
    }
  ];

  return (
    <div className="w-full relative py-20 px-6 max-w-7xl mx-auto" id="page-services">
      
      {/* HEADER SECTION */}
      <motion.section 
        className="text-center max-w-3xl mx-auto mb-20"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <span className="text-xs font-semibold uppercase tracking-wider text-[#0D0D0D]/50 block mb-4 font-mono">agency capabilities</span>
        <motion.h1 
          variants={itemVariants}
          className="font-serif text-4xl md:text-6xl font-bold tracking-tight text-[#0D0D0D] mb-6"
        >
          What We Solve
        </motion.h1>
        <motion.p 
          variants={itemVariants}
          className="text-lg md:text-xl text-[#0D0D0D]/75 leading-relaxed max-w-xl mx-auto font-medium"
        >
          We take on automation problems that have no clean off-the-shelf solution.
        </motion.p>
      </motion.section>

      {/* SERVICE CARDS */}
      <section className="mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCategories.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="clay-card p-8 flex flex-col justify-between"
                id={`services-card-${idx}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 rounded-xl bg-[#0D0D0D]/5 flex items-center justify-center text-[#0D0D0D]">
                      <Icon className="w-6 h-6 stroke-[1.5]" />
                    </div>
                    <span className="font-mono text-[10px] tracking-wide text-[#0D0D0D]/40 uppercase bg-[#0D0D0D]/5 px-2.5 py-1 rounded-full border border-[#0D0D0D]/10">
                      Target: {service.industries}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold mb-4 text-[#0D0D0D]">
                    {service.title}
                  </h3>
                  
                  <p className="text-[#0D0D0D]/70 text-sm leading-relaxed mb-6 font-semibold">
                    {service.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#0D0D0D]/10 flex items-center justify-between text-xs font-mono text-[#0D0D0D]/50 uppercase mt-4">
                  <span>Custom implementation</span>
                  <Check className="w-4 h-4 text-[#0D0D0D]/70" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* HOW WE WORK - TIMELINE */}
      <section className="mb-32 border-t border-[#0D0D0D]/10 pt-24">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#0D0D0D]/50 block mb-3 font-mono">technical integration roadmap</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-[#0D0D0D]">
            How We Work
          </h2>
          <p className="text-sm md:text-base text-[#0D0D0D]/65 mt-4 leading-relaxed font-semibold">
            Automating edge cases requires structured operational architecture. Here is our detailed delivery loop.
          </p>
        </div>

        {/* Timeline Desktop/Mobile */}
        <div className="relative max-w-4xl mx-auto" id="timeline-vertical">
          {/* Vertical Center Line */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-0.5 bg-[#0D0D0D]/10 -translate-x-1/2"></div>
          
          <div className="space-y-16">
            {workflowSteps.map((step, idx) => {
              const StepIcon = step.icon;
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6 }}
                  className="relative flex flex-col lg:flex-row items-start justify-between"
                  id={`timeline-step-${idx}`}
                >
                  {/* Circle Indicator Icon */}
                  <div className="absolute left-8 lg:left-1/2 w-12 h-12 bg-[#0D0D0D] text-[#E8DED4] rounded-full border-4 border-[#E8DED4] flex items-center justify-center -translate-x-1/2 z-10 font-bold shadow-md">
                    <StepIcon className="w-5 h-5" />
                  </div>

                  {/* Left Column Content for desktop */}
                  <div className={`w-full lg:w-[42%] pl-20 lg:pl-0 ${isEven ? 'lg:text-right' : 'lg:order-2 lg:text-left'}`}>
                    <div className="lg:inline-block">
                      <span className="font-mono text-xs uppercase tracking-widest text-[#0D0D0D]/40 block mb-2 font-bold whitespace-nowrap">
                        Step 0{idx + 1}
                      </span>
                      <h3 className="font-serif text-xl md:text-2xl font-bold text-[#0D0D0D] mb-4">
                        {step.title}
                      </h3>
                      <p className="text-[#0D0D0D]/70 text-sm md:text-base leading-relaxed font-semibold">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Spacer for structural balance on large screens */}
                  <div className="hidden lg:block lg:w-[42%]"></div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* RETAINER MODEL */}
      <section className="border-t border-[#0D0D0D]/10 pt-24">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#0D0D0D]/50 block mb-3 font-mono">on-demand support models</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-[#0D0D0D] leading-tight">
            Automation Is Never Finished
          </h2>
          <p className="text-sm md:text-base text-[#0D0D0D]/65 mt-4 leading-relaxed font-semibold">
            Every new workflow creates new opportunities and new edge cases. That's why our clients work with us long term.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-16">
          {retainerTiers.map((tier, idx) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`clay-card p-8 flex flex-col justify-between ${
                tier.id === 'growth' ? 'border-[#0D0D0D]/30 shadow-md relative overflow-hidden bg-white' : ''
              }`}
              id={`retainer-tier-card-${tier.id}`}
            >
              {tier.id === 'growth' && (
                <div className="absolute top-0 right-0 bg-[#0D0D0D] text-[#E8DED4] font-mono text-[9px] uppercase tracking-wider py-1 px-4 rounded-bl-xl border-l border-b border-[#0D0D0D]">
                  Recommended
                </div>
              )}

              <div>
                <span className="font-mono text-xs text-[#0D0D0D]/40 uppercase tracking-widest font-bold whitespace-nowrap">Tier 0{idx + 1}</span>
                <h3 className="font-serif text-2xl font-bold text-[#0D0D0D] mt-2 mb-3">
                  {tier.name}
                </h3>
                <p className="text-xs text-[#0D0D0D]/60 mb-8 font-medium">
                  {tier.tagline}
                </p>

                <ul className="space-y-4 mb-10">
                  {tier.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3 text-sm text-[#0D0D0D]/85 font-semibold">
                      <Check className="w-4 h-4 text-[#0D0D0D] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-[#0D0D0D]/10">
                <button
                  onClick={() => onNavigate('contact')}
                  className="clay-btn text-sm w-full py-3.5 cursor-pointer"
                  id={`retainer-${tier.id}-cta`}
                >
                  Inquire For Partnership
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-xs text-[#0D0D0D]/40 font-mono uppercase tracking-wider mb-4">
            Custom operational layouts required
          </p>
          <button
            onClick={() => onNavigate('contact')}
            id="retainer-explore-cta"
            className="clay-btn-secondary px-8 py-3.5 cursor-pointer"
          >
            Schedule Pipeline Audit
          </button>
        </div>
      </section>
    </div>
  );
}
