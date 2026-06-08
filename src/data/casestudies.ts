import { CaseStudy } from '../types';

export const caseStudies: CaseStudy[] = [
  {
    id: 'google-review-coupon',
    title: 'Restaurant Review & Coupon Automation',
    subtitle: 'Automated physical-to-digital customer loop turning diners into organic reviewers.',
    industry: 'Hospitality & Dining',
    problem: 'The restaurant was doing great numbers but struggle to collect Google Reviews organically. Prompting diners manually felt intrusive, and they had no structured way to retarget satisfied visitors or distribute returning coupons reliably.',
    approach: 'We embedded a frictionless feedback funnel directly into the dining experience. Instead of manual asking, we incentivized diners with immediate digital rewards triggered instantly upon review submission.',
    whatWeBuilt: 'A custom QR-to-WhatsApp funnel linked with table numbers. Scanning the QR code opens a WhatsApp conversation that provides a direct, single-tap Link to Google Reviews. Upon review completion, our backend workflow automatically validates the session and delivers a high-quality returning coupon code. Everything is logged in a real-time analytics spreadsheet.',
    results: [
      { value: '40%', label: 'Increase In Google Reviews In 3 Weeks' },
      { value: '85%', label: 'Reduction In Manual Follow-Ups' },
      { value: '3x', label: 'Faster Customer Response Rate' }
    ],
    tools: ['n8n', 'WhatsApp API', 'Google Sheets', 'PostgreSQL'],
    metrics: ['40% Review Lift', 'Zero Manual Admin', 'Trackable Coupon Usage']
  },
  {
    id: 'real-estate-lead-nurture',
    title: 'Real Estate Lead Nurture System',
    subtitle: 'Instant conversational qualification and calendar booking within 90 seconds of lead capture.',
    industry: 'Real Estate & Construction',
    problem: 'Ad campaign leads sat dormant in sheets for hours before agents could reach out. Highly motivated buyers went cold, resulting in poor advertising spend return and lower sales conversion.',
    approach: 'We built a rapid qualification layer that triggers active, helpful conversation the exact moment a buyer expresses interest online, filtering out unqualified inquiries.',
    whatWeBuilt: 'Instant Facebook/Google Ads lead webhook integrations feeding directly into n8n. Within 90 seconds, a tailored conversational agent initiates a personalized WhatsApp chat. It qualifies the lead\'s budget, preferred location, and buying timeline, then automatically sends a Calendly link to book an appointment with an agent for immediate closings.',
    results: [
      { value: '90s', label: 'Average Initial Response Time' },
      { value: '4.5x', label: 'More Scheduled Sales Meetings' },
      { value: '75%', label: 'Qualified Intake Automation' }
    ],
    tools: ['Make', 'WhatsApp API', 'OpenAI', 'Google Sheets'],
    metrics: ['Under 2 Min SLA', 'Pre-qualified CRM entries', 'Automated Bookings']
  },
  {
    id: 'healthcare-follow-up',
    title: 'Healthcare Patient Follow-Up System',
    subtitle: 'Interactive confirmation flows and automated EHR rescheduling loops.',
    industry: 'Healthcare & clinics',
    problem: 'No-shows were costing the clinics thousands of dollars in lost booking slots. Medical assistants spent hours of valuable clinic time sending confirmation texts and manually tracking replies.',
    approach: 'We designed a non-disruptive, clinical-grade patient automation flow that securely reads appointment rosters and handles patient confirmations and reschedules automatically.',
    whatWeBuilt: 'A custom middleware system connected securely to the clinic\'s EHR system. Patients receive highly tailored, gentle reminders on WhatsApp with simple interactive buttons to |Confirm|, |Reschedule|, or |Cancel|. In the case of reschedules, the system handles open slot suggestions dynamically and updates the EHR database instantly.',
    results: [
      { value: '70%', label: 'Reduction In Appointment No-Shows' },
      { value: '100%', label: 'Automated Database Synchronization' },
      { value: '4.8h', label: 'Staff Time Reclaimed Per Week' }
    ],
    tools: ['n8n', 'Supabase', 'PostgreSQL', 'WhatsApp API'],
    metrics: ['70% Drop in No-Shows', 'Full EHR Compliance', 'Staff Workload Reclaimed']
  },
  {
    id: 'saas-churn-alert',
    title: 'SaaS Customer Churn Alert System',
    subtitle: 'Proactive early-warning alerts for automated customer retention.',
    industry: 'Software as a Service (SaaS)',
    problem: 'The customer success team was entirely reactive. By the time a corporate user submitted a cancellation request, it was already too late to address their hidden technical friction.',
    approach: 'We transitioned the CS department from reactive fires to proactive, data-driven saves by tracking activation drop-offs in real-time.',
    whatWeBuilt: 'A high-speed synchronization system monitoring platform product analytics in Supabase. When a customer\'s crucial user engagement dashboard scores slip below calculated parameters, standard trigger automations scoring risk levels immediately alert customer success channels in Slack with comprehensive health summaries, a quick account overview, and a warm draft outreach email.',
    results: [
      { value: '30%', label: 'Reduction in Annual SaaS Churn' },
      { value: '12m', label: 'Reaction Time to Critical Churn Alerts' },
      { value: '3x', label: 'Improvement in Retention Meeting Bookings' }
    ],
    tools: ['Supabase', 'n8n', 'OpenAI', 'Slack API'],
    metrics: ['30% Churn Saver', 'Real-time Analytics Webhook', 'Proactive Customer Touches']
  }
];
