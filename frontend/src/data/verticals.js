// Verticals (login roles). Each vertical decides what the user sees and can do.
// Demo password for every account: demo@123

export const VERTICALS = {
  sales: {
    key: 'sales',
    label: 'Sales',
    blurb: 'Leads, opportunities, RFP synopsis and recommendations',
    user: { name: 'Priya S.', initials: 'PS', title: 'Sales Manager · South India', email: 'sales@dealplus.demo' },
    nav: ['/', '/leads', '/rfp', '/opportunities', '/pre-po', '/post-po'],
    can: { createLead: true, createOpp: true, editOpp: true, editOppEarly: false, editOppLate: true, submitSynopsis: true, recommend: true, fallback: true }
  },
  pl: {
    key: 'pl',
    label: 'P&L Head',
    blurb: 'Approve leads and decide Proceed or Reject on deals',
    user: { name: 'Pushkar B.', initials: 'PB', title: 'Sales Head & P&L Head · South India', email: 'plhead@dealplus.demo' },
    nav: ['/', '/decisions', '/leads', '/opportunities', '/pre-po'],
    can: { approveLead: true, decide: true, fallback: true }
  },
  solution: {
    key: 'solution',
    label: 'Solution / Pre-Sales',
    blurb: 'RFP synopsis, compliance, PoCs and post-PO work',
    user: { name: 'Vikram N.', initials: 'VN', title: 'Pre-Sales Manager · Solutions', email: 'solution@dealplus.demo' },
    nav: ['/', '/rfp', '/opportunities', '/compliance', '/pre-po', '/post-po'],
    can: { editOpp: true, editOppEarly: true, editOppLate: false, acceptSynopsis: true, approveCompliance: true, createEval: true }
  }
};

export const DEMO_PASSWORD = 'demo@123';

export const NAV_ITEMS = [
  { path: '/', label: 'Dashboard' },
  { path: '/leads', label: 'Leads' },
  { path: '/rfp', label: 'RFP synopsis' },
  { path: '/opportunities', label: 'Opportunities' },
  { path: '/compliance', label: 'Compliance' },
  { path: '/pre-po', label: 'Pre-PO evaluations' },
  { path: '/decisions', label: 'P&L decisions' },
  { path: '/post-po', label: 'Post-PO' }
];
