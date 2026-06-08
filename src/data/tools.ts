export interface ToolItem {
  name: string;
  category: 'automation' | 'model' | 'database' | 'infrastructure' | 'messaging';
  tagline: string;
}

export const toolsUsed: ToolItem[] = [
  { name: 'n8n', category: 'automation', tagline: 'Complex node-based API workflows' },
  { name: 'Make', category: 'automation', tagline: 'Visual multi-app orchestrator' },
  { name: 'Zapier', category: 'automation', tagline: 'Lightweight rapid integrations' },
  { name: 'OpenAI', category: 'model', tagline: 'Enabling intelligence in workflows' },
  { name: 'Claude', category: 'model', tagline: 'Advanced reasoners for difficult edge cases' },
  { name: 'WhatsApp API', category: 'messaging', tagline: 'Hyper-responsive conversational funnels' },
  { name: 'Google Sheets', category: 'database', tagline: 'Business-friendly quick-access data' },
  { name: 'Hostinger VPS', category: 'infrastructure', tagline: 'Secure, lightweight private virtual servers' },
  { name: 'Supabase', category: 'database', tagline: 'High-speed cloud tables and Postgres backend' },
  { name: 'PostgreSQL', category: 'database', tagline: 'Durable relational core calculations' }
];
