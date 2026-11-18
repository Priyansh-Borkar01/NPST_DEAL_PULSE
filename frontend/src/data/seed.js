// Seed data that mirrors the screens in the design.

const L = (id, salutation, firstName, lastName, company, designation, state, phone, mobile, email, status, owner, created, extra = {}) => ({
  id, recordType: 'TSP', salutation, firstName, middleName: '', lastName, suffix: '', company, designation, state, phone, mobile, email,
  website: email.split('@')[1], status, owner, created, leadSource: 'Sales Outbound', rating: 'Warm', productTsp: 'UPI', module: 'Acquiring Switch',
  productTsp2: '—', productTsp3: '—', productTsp4: '—', rfp: false, approval: 'none', employeeReferral: '',
  industry: 'Banking', subIndustry: 'Coop Bank', country: 'India', need: '', budgetApproved: false, timelineKnown: '',
  history: [{ t: 'Lead created · status New', m: owner + ' · ' + created }],
  ...extra
});

export const seedLeads = [
  L('LEAD-2026-00352', 'Ms.', 'Anita', 'Rao', 'Coastal Gramin Bank', 'AGM, IT', 'Karnataka', '+91 80 4000 1122', '+91 98450 11223', 'anita.rao@coastalgb.example', 'Working', 'Meera D.', '2026-11-01',
    { leadSource: 'Employee Referral', employeeReferral: 'Meera D.', rating: 'Hot', productTsp: 'BBPS', module: 'Operating Unit', productTsp2: 'UPI', rfp: true }),
  L('LEAD-2026-00349', 'Mr.', 'K.', 'Menon', 'Meridian Bank', 'CTO', 'Kerala', '+91 484 400 2200', '+91 94470 22334', 'k.menon@meridian.example', 'Working', 'Arjun K.', '2026-10-29', { leadSource: 'Event', rating: 'Hot', approval: 'pending', need: 'Yes', budgetApproved: true, authority: 'CTO', timelineKnown: 'Yes', timeline: 'Budget earmarked for FY27', event: 'GFF 2025', currentVolume: '40 Cr card transactions / year', subIndustry: 'Private Bank', city: 'Kochi', street: 'MG Road', zip: '682016',
    spocFirstName: 'Asha', spocLastName: 'Varghese', spocDesignation: 'AGM, Cards', spocEmail: 'asha.v@meridian.example', spocPhone: '+91 94470 11122',
    approvalLog: [{ d: 'Submitted', by: 'Arjun K.', at: '12 Nov 2026, 11:20', comment: 'CTO confirmed budget for card switch modernisation in FY27.' }],
    emails: [{ id: 'm8', from: 'k.menon@meridian.example', name: 'K. Menon', subject: 'Card switch modernisation – budget for FY27', date: '2026-11-09', snippet: 'Budget for the card switch modernisation is earmarked for FY27. Please share a high-level proposal by month end.' }] }),
  L('LEAD-2026-00344', 'Mr.', 'S.', 'Pillai', 'Tarang SFB', 'Head, Payments', 'Tamil Nadu', '+91 44 4000 3300', '+91 98400 33445', 's.pillai@tarang.example', 'Working', 'Arjun K.', '2026-10-24', { productTsp: 'Banking SuperApp + Omnichannel', module: 'Banking SuperApp - Retail', subIndustry: 'Small Finance Bank' }),
  L('LEAD-2026-00337', 'Ms.', 'P.', 'Nair', 'Northfield Bank', 'GM, Financial Inclusion', 'Karnataka', '+91 80 4000 4400', '+91 99000 44556', 'p.nair@northfield.example', 'Working', 'Priya S.', '2026-10-18',
    { leadSource: 'Tender Portal', productTsp: 'Others', module: '', productRemark: 'AePS switch for BC agents', rfp: true, approval: 'approved', status: 'Qualified', need: 'Yes', budgetApproved: true, authority: 'GM, Financial Inclusion', timelineKnown: 'Yes', timeline: 'Bid due 06 Nov 2026', subIndustry: 'Private Bank',
      approvalLog: [{ d: 'Approved', by: 'Pushkar B.', at: '20 Oct 2026, 17:05', comment: 'Strategic tender — go ahead with the synopsis.' }, { d: 'Submitted', by: 'Priya S.', at: '19 Oct 2026, 12:40', comment: 'GeM tender for AePS switch; eligibility looks fine.' }] }),
  L('LEAD-2026-00355', 'Mr.', 'R.', 'Desai', 'Vardhan Urban Bank', 'GM, Digital', 'Maharashtra', '+91 20 4000 5500', '+91 98220 55667', 'r.desai@vardhan.example', 'New', 'Priya S.', '2026-11-02'),
  L('LEAD-2026-00350', 'Mr.', 'M.', 'Bhat', 'Sahyog Payments Bank', 'CIO', 'Karnataka', '+91 80 4000 6600', '+91 98860 66778', 'm.bhat@sahyog.example', 'New', 'Pushkar B.', '2026-10-31', { productTsp: 'EFRM', module: '', subIndustry: 'Payments Bank' }),
  L('LEAD-2026-00321', 'Mr.', 'V.', 'Kamath', 'Kaveri Co-op Bank', 'DGM, Ops', 'Karnataka', '+91 821 400 7700', '+91 94480 77889', 'v.kamath@kaveri.example', 'Nurturing', 'Meera D.', '2026-10-12', { productTsp: 'BBPS', module: 'Operating Unit', rating: 'Cold', need: 'No', subIndustry: 'Coop Bank' }),
  L('LEAD-2026-00298', 'Ms.', 'L.', 'Thomas', 'Harbour Credit Society', 'Manager, IT', 'Kerala', '+91 484 400 8800', '+91 94960 88990', 'l.thomas@harbour.example', 'Unqualified', 'Meera D.', '2026-09-02', { rating: 'Cold' })
];

const O = (id, name, account, value, stage, close, owner, presales, tag, tone, extra = {}) => ({
  id, name, account, arr: Math.round(value * 0.3), oneTime: Math.round(value * 0.7), stage, closeDate: close, owner, presales, tag, tone,
  territory: 'South', currency: 'INR', productTsp: 'UPI', module: 'Acquiring Switch', productTsp2: '—', oppType: 'Hunting', leadSource: 'Sales Outbound',
  tender: 'Non RFP', hosting: 'On-premise', partner: 'No', competition: '—', compellingEvent: '', painPoint: '', transactions: '', nextStep: '',
  history: [{ t: 'Opportunity created at Qualification', m: owner + ' · ' + close }],
  ...extra
});

export const seedOpportunities = [
  O('OPP-2026-00131', 'IMPS gateway migration', 'Kaveri Co-op Bank', 9000000, 'Qualification', '2027-02-15', 'Arjun K.', '—', 'Pre-Sales not yet requested', 'gray'),
  O('OPP-2026-00128', 'Merchant QR onboarding', 'Vardhan Urban Bank', 12000000, 'Qualification', '2027-03-10', 'Priya S.', '—', '', 'gray'),
  O('OPP-2026-00118', 'Empanelment 2026', 'State Apex Bank', 34000000, 'Needs Analysis', '2027-01-20', 'Priya S.', 'Vikram N.', 'RFP · Synopsis accepted 20 Oct', 'green', { tender: 'Empanelment' }),
  O('OPP-2026-00112', 'BBPS biller platform', 'Kaveri Co-op Bank', 18000000, 'Needs Analysis', '2027-02-20', 'Meera D.', 'Sneha G.', 'Demo 05 Nov', 'blue', { productTsp: 'BBPS', module: 'Operating Unit' }),
  O('OPP-2026-00097', 'Mobile Banking revamp', 'Tarang Small Finance Bank', 62000000, 'Impact Analysis', '2027-03-15', 'Arjun K.', 'Vikram N.', 'Pre-PO · Pilot in progress', 'amber', { productTsp: 'Banking SuperApp + Omnichannel', module: 'Banking SuperApp - Retail', tender: 'RFP' }),
  O('OPP-2026-00084', 'UPI Switch upgrade', 'Meridian Bank', 42000000, 'Proposal', '2027-01-15', 'Priya S.', 'Vikram N.', 'Pre-PO PoC · Under bank evaluation', 'blue', {
    arr: 12000000, oneTime: 30000000, oppType: 'Farming', businessType: 'Existing Business', leadSource: 'Event', tender: 'RFP', competition: 'Finacus', compellingEvent: 'Switch AMC ends Mar 2027',
    painPoint: 'TPS ceiling at festive peaks', transactions: '45,00,000 per day', nextStep: 'DR switchover demo, then negotiation.', productTsp2: 'EFRM',
    history: [
      { t: 'Sent to P&L Head with a Yes recommendation', m: 'Priya S. · 02 Nov, 19:24' },
      { t: 'Legal requested changes on Technical v3', m: 'N. Shah · 02 Nov' },
      { t: 'PoC submitted to bank', m: 'Sneha G. · 24 Oct' },
      { t: 'Proposal submitted on bank portal', m: 'Vikram N. · 18 Oct' },
      { t: 'Compliance matrix finalised (12 / 12)', m: 'Compliance · 16 Oct' },
      { t: 'Commercial revised: ₹4.20 Cr → ₹4.10 Cr', m: 'Priya S. · 15 Oct' },
      { t: 'Stage: Impact Analysis → Proposal', m: 'Priya S. · 10 Oct' },
      { t: 'Synopsis accepted; lead converted, opportunity created', m: 'Pre-Sales Mgr · 29 Jul' }
    ]
  }),
  O('OPP-2026-00079', 'Fraud risk engine', 'Sahyog Payments Bank', 26000000, 'Proposal', '2026-12-20', 'Pushkar B.', 'Sneha G.', 'Finance review open', 'amber', { productTsp: 'EFRM', module: '', subIndustry: 'Payments Bank' }),
  O('OPP-2026-00061', 'Card switch AMC renewal', 'Meridian Bank', 21000000, 'Negotiation', '2026-11-28', 'Pushkar B.', 'Sneha G.', 'RFP · Commercial evaluation', 'blue', { oppType: 'Farming', businessType: 'Existing Business', tender: 'RFP', contractShared: 'Yes', commercials: 'Yes', documentation: 'Yes', bankInterview: 'Yes', bankApproval: 'No', uatAgreement: 'No', poReceived: 'No' }),
  O('OPP-2026-00042', 'UPI TPAP integration', 'Vardhan Urban Bank', 15000000, 'Closed Won', '2026-10-14', 'Meera D.', 'Vikram N.', 'Post-PO: 3 of 5 open', 'green', { module: 'TPAP', poDate: '2026-10-14', poValue: 15000000, poReceived: 'Yes', projectStartActual: '2026-11-01', firstBillingDate: '2026-12-15', firstBillingValue: 4500000 }),
  O('OPP-2026-00051', 'Core banking connector', 'Coastal Gramin Bank', 11000000, 'Closed Lost', '2026-09-02', 'Arjun K.', 'Sneha G.', 'Lost on price', 'red', { lostReason: 'Price', lostReasonRemark: 'Bank matched the L1 bid from a competitor' }),
  O('OPP-2026-00066', 'National switch consolidation', 'State Apex Bank', 550000000, 'No Bid', '2026-09-20', 'Pushkar B.', 'Vikram N.', 'Eligibility not met', 'gray'),
  O('OPP-2026-00073', 'Loan origination portal', 'Tarang Small Finance Bank', 24000000, 'On Hold', '2026-12-15', 'Priya S.', 'Sneha G.', 'Hold · Client budget freeze', 'amber', {
    holdReason: 'External', holdDetails: 'Bank froze new IT capex until the Q4 board review; CIO asked us to revisit in January.', holdFrom: 'Proposal', holdAt: '02 Nov 2026, 15:10', holdUntil: '2027-01-10',
    fallbacks: [{ kind: 'Fallback', by: 'Priya S.', at: '05 Nov 2026, 10:30', plan: 'Propose a phased rollout: AA integration first, loan workflows in phase 2.', suggestion: 'Offer an opex / subscription model to fit the frozen capex budget.', comment: 'CIO is open to a smaller first phase if it can be funded from opex.' }],
    history: [{ t: 'Stage: Proposal → On Hold · hold reason: External — client budget freeze', m: 'Priya S. · 02 Nov 2026, 15:10' }, { t: 'Opportunity created at Qualification', m: 'Priya S. · 12 Aug 2026' }] })
];

export const seedSynopses = [
  {
    id: 'SYN-2026-041', leadId: 'LEAD-2026-00337', name: 'AePS tender', account: 'Northfield Bank', due: '2026-11-06', status: 'Submitted', owner: 'Priya S.',
    rfpRef: 'RFP/NB/2026/207 · GeM · GEM/2026/B/5518230',
    scope: 'Bank wants an AePS switch for 1,200 BC agents with Aadhaar authentication, micro-ATM support and settlement with NPCI. Hosted on bank premises; 5-year AMC.',
    dealSize: 34000000, products: 'AePS', preBid: '2026-10-24', submission: '2026-11-06', bidOpening: '2026-11-10',
    emd: 'Yes', emdAmount: '6,80,000', pbg: 'Yes · 3%',
    eligibility: '3 AePS deployments at scheduled banks in last 5 years; turnover ≥ ₹25 Cr; CERT-In empanelled auditor report.',
    context: 'Existing UPI client since 2024. IT head favours on-prem. Incumbent vendor contract ends Mar 2027.',
    risks: 'Two incumbents likely. Bank expects L1 pricing; scope for relaxation on turnover clause raised at pre-bid.'
  },
  { id: 'SYN-2026-037', leadId: null, name: 'Mobile Banking revamp', account: 'Tarang SFB', due: '2026-11-19', status: 'Accepted', owner: 'Arjun K.', oppId: 'OPP-2026-00097', scope: 'Retail mobile app revamp with UPI and cards.', dealSize: 62000000 },
  { id: 'SYN-2026-035', leadId: null, name: 'Empanelment 2027', account: 'State Apex Bank', due: '2026-11-28', status: 'Returned', owner: 'Priya S.', scope: 'Vendor empanelment for payment switches.', dealSize: 34000000, returnNote: 'Eligibility criteria section is missing.' }
];

export const seedDecisions = [
  { id: 'D1', oppId: 'OPP-2026-00084', val: '₹4.10 Cr', init: '₹4.20 Cr', prop: 'Technical v3 · Commercial v2', rec: 'Yes', recBy: 'Priya S. · 02 Nov 2026, 19:24',
    syn: 'Existing UPI client; PoC passed 3,100 TPS. Commercial v2 is ₹4.10 Cr first year after a ₹20 L licence discount.', concern: 'Payment milestone 40% on PO is above policy; ask for 30/50/20.', done: null },
  { id: 'D2', oppId: 'OPP-2026-00079', val: '₹2.60 Cr', init: '₹2.40 Cr', prop: 'Commercial v3', rec: 'No', recBy: 'Pushkar B. · 01 Nov 2026, 11:02',
    syn: 'Bank wants 3 custom rules at no extra cost and a 7-year AMC lock.', concern: 'Reason for No: margin falls below 22% with the free customization.', done: null },
  { id: 'D3', oppId: 'OPP-2026-00061', val: '₹2.10 Cr', init: '₹2.10 Cr', prop: 'Renewal quote v2', rec: 'Yes', recBy: 'Pushkar B. · 24 Oct 2026',
    syn: 'Renewal at same value; bank asked for SLA credits.', concern: 'None.', done: { v: 'Proceed', by: 'P&L Head · Payments South', at: '25 Oct 2026, 16:40', note: 'Agree; cap SLA credits at 5%.' } },
  { id: 'D4', oppId: 'OPP-2026-00051', val: '₹1.10 Cr', init: '₹1.40 Cr', prop: 'Commercial v4', rec: 'Yes', recBy: 'Arjun K. · 22 Aug 2026',
    syn: 'Bank pushing for L1 match.', concern: 'Price is 21% below initial.', done: { v: 'Reject', by: 'P&L Head · Payments South', at: '23 Aug 2026, 10:05', note: 'Below price floor.' } }
];

// Compliance matrices are bound to existing opportunities (oppId). Only the
// opportunities seeded here have a matrix; the rest show an empty state.
const complianceRows = (prefix, oppId, rows) => rows.map(([name, kind, team, pos, ev, rev], i) => ({ id: `${prefix}${i}`, oppId, name, kind, team, pos, ev, rev }));

export const seedCompliance = [
  ...complianceRows('C', 'OPP-2026-00084', [
    ['NPCI UPI guidelines', 'M', 'Product', 'Full', 'NPCI certificate', 'Approved'],
    ['HSM', 'M', 'Security', 'Partial', '', 'Pending'],
    ['Data localisation', 'M', 'Legal', 'Full', 'Audit report', 'Approved'],
    ['DR site', 'M', 'Architecture', 'Full', 'DR drill report', 'Pending'],
    ['PCI-DSS', 'S', 'Security', 'Full', 'PCI-DSS AOC', 'Approved'],
    ['ISO 27001', 'S', 'Compliance', 'Full', 'ISO certificate', 'Approved'],
    ['VAPT', 'S', 'Security', 'Full', 'VAPT report', 'Pending'],
    ['SIEM monitoring', 'S', 'Security', 'Partial', '', 'Pending'],
    ['Audit logging', 'S', 'Architecture', 'Full', 'Security policy', 'Approved'],
    ['Key management', 'S', 'Security', 'Partial', '', 'Pending'],
    ['CERT-In reporting', 'S', 'Compliance', 'Full', '', 'Pending'],
    ['RBI guidelines', 'S', 'Legal', 'Full', 'RBI audit report', 'Approved']
  ]),
  ...complianceRows('K', 'OPP-2026-00112', [
    ['NPCI BBPS 2.0 certification', 'M', 'Product', 'Full', 'NPCI BBPS certificate', 'Approved'],
    ['Biller onboarding SLA', 'M', 'Product', 'Full', 'SLA annexure', 'Pending'],
    ['Data localisation', 'M', 'Legal', 'Full', 'Audit report', 'Approved'],
    ['DR site', 'M', 'Architecture', 'Partial', '', 'Pending'],
    ['ISO 27001', 'S', 'Compliance', 'Full', 'ISO certificate', 'Approved'],
    ['VAPT', 'S', 'Security', 'Full', 'VAPT report', 'Pending'],
    ['Audit logging', 'S', 'Architecture', 'Full', 'Security policy', 'Pending'],
    ['CERT-In reporting', 'S', 'Compliance', 'Full', '', 'Pending']
  ]),
  ...complianceRows('T', 'OPP-2026-00073', [
    ['RBI digital lending guidelines', 'M', 'Legal', 'Full', 'Compliance note', 'Approved'],
    ['Account Aggregator integration', 'M', 'Product', 'Full', 'AA consent artefact', 'Pending'],
    ['Data localisation', 'M', 'Legal', 'Full', 'Audit report', 'Pending'],
    ['CKYC / eKYC', 'S', 'Compliance', 'Full', 'CKYC certificate', 'Approved'],
    ['ISO 27001', 'S', 'Compliance', 'Full', 'ISO certificate', 'Pending'],
    ['VAPT', 'S', 'Security', 'Full', 'VAPT report', 'Pending'],
    ['Audit logging', 'S', 'Architecture', 'Full', 'Security policy', 'Pending']
  ]),
  ...complianceRows('S', 'OPP-2026-00118', [
    ['NPCI empanelment', 'M', 'Compliance', 'Full', 'NPCI empanelment letter', 'Approved'],
    ['Data localisation', 'M', 'Legal', 'Full', 'Audit report', 'Approved'],
    ['Business continuity plan', 'M', 'Architecture', 'Partial', '', 'Pending'],
    ['ISO 27001', 'S', 'Compliance', 'Full', 'ISO certificate', 'Approved'],
    ['PCI-DSS', 'S', 'Security', 'Full', 'PCI-DSS AOC', 'Pending'],
    ['VAPT', 'S', 'Security', 'Full', 'VAPT report', 'Pending'],
    ['SOC monitoring', 'S', 'Security', 'Partial', '', 'Pending'],
    ['CERT-In reporting', 'S', 'Compliance', 'Full', '', 'Pending']
  ])
];

// Signed-off matrices (completed projects) and last-updated dates per opportunity.
seedCompliance.push(
  ...complianceRows('A', 'OPP-2026-00061', [
    ['Card network certification', 'M', 'Product', 'Full', 'Network certificate', 'Approved'],
    ['PCI-DSS', 'M', 'Security', 'Full', 'PCI-DSS AOC', 'Approved'],
    ['Data localisation', 'M', 'Legal', 'Full', 'Audit report', 'Approved'],
    ['DR site', 'S', 'Architecture', 'Full', 'DR drill report', 'Approved'],
    ['VAPT', 'S', 'Security', 'Full', 'VAPT report', 'Approved']
  ]),
  ...complianceRows('V', 'OPP-2026-00042', [
    ['NPCI TPAP guidelines', 'M', 'Product', 'Full', 'NPCI certificate', 'Approved'],
    ['Data localisation', 'M', 'Legal', 'Full', 'Audit report', 'Approved'],
    ['ISO 27001', 'S', 'Compliance', 'Full', 'ISO certificate', 'Approved'],
    ['VAPT', 'S', 'Security', 'Full', 'VAPT report', 'Approved'],
    ['Audit logging', 'S', 'Architecture', 'Full', 'Security policy', 'Approved']
  ])
);

export const seedComplianceMeta = {
  'OPP-2026-00084': { updated: '2026-11-12' },
  'OPP-2026-00112': { updated: '2026-11-11' },
  'OPP-2026-00073': { updated: '2026-11-02' },
  'OPP-2026-00118': { updated: '2026-11-09' },
  'OPP-2026-00061': { updated: '2026-10-21', signedOff: '21 Oct 2026', signedBy: 'Vikram N.' },
  'OPP-2026-00042': { updated: '2026-09-18', signedOff: '18 Sep 2026', signedBy: 'Vikram N.' }
};

// Standard lines added when Pre-Sales starts a new matrix.
export const STANDARD_COMPLIANCE = [
  ['Data localisation', 'M', 'Legal', 'Full', '', 'Pending'],
  ['ISO 27001', 'S', 'Compliance', 'Full', 'ISO certificate', 'Pending'],
  ['VAPT', 'S', 'Security', 'Full', 'VAPT report', 'Pending'],
  ['Audit logging', 'S', 'Architecture', 'Full', 'Security policy', 'Pending'],
  ['CERT-In reporting', 'S', 'Compliance', 'Full', '', 'Pending']
];

export const seedEvaluations = [
  { id: 'EVAL-2026-014', name: 'UPI Switch PoC', oppId: 'OPP-2026-00084', type: 'PoC', sales: 'Priya S.', tech: 'Sneha G.', approval: 'Approved', start: '2026-09-20', target: '2026-10-25', status: 'Under Bank Evaluation', next: 'DR demo on 08 Nov', effort: 46, cost: 690000, expectedPo: '15 Jan 2027', solution: 'Vikram N.', submitted: '2026-10-24',
    scope: 'Sustain 3,000 TPS on the bank’s UAT for 2 hours, integrate with bank-supplied HSM, demonstrate DR switchover.' },
  { id: 'EVAL-2026-016', name: 'Mobile app pilot', oppId: 'OPP-2026-00097', type: 'Pilot', sales: 'Arjun K.', tech: 'Vikram N.', approval: 'Approved', start: '2026-10-10', target: '2026-11-20', status: 'In Progress', next: 'Branch 2 live on 12 Nov', effort: 38, cost: 540000, expectedPo: 'Mar 2027' },
  { id: 'EVAL-2026-017', name: 'Biller onboarding demo', oppId: 'OPP-2026-00112', type: 'Demo', sales: 'Meera D.', tech: 'Sneha G.', approval: 'Approved', start: '2026-11-05', target: '2026-11-05', status: 'Not Started', next: 'Confirm demo slot', effort: 0, cost: 0, expectedPo: 'Feb 2027' },
  { id: 'EVAL-2026-011', name: 'Fraud rules for P2M', oppId: 'OPP-2026-00079', type: 'Customization', sales: 'Pushkar B.', tech: 'Vikram N.', approval: 'Approved', start: '2026-09-01', target: '2026-10-15', status: 'Changes Requested', next: 'Revise scope: 3 new rules', effort: 25, cost: 380000, expectedPo: 'Dec 2026' },
  { id: 'EVAL-2026-018', name: 'IMPS migration dry run', oppId: 'OPP-2026-00131', type: 'PoC', sales: 'Arjun K.', tech: '—', approval: 'Pending', start: '', target: '2026-11-30', status: 'Not Started', next: 'Approval by Pre-Sales Mgr', effort: 0, cost: 0, expectedPo: '—' },
  { id: 'EVAL-2026-009', name: 'TPAP integration sandbox', oppId: 'OPP-2026-00042', type: 'PoC', sales: 'Meera D.', tech: 'Vikram N.', approval: 'Approved', start: '2026-08-01', target: '2026-08-30', status: 'Accepted', next: 'PO received 14 Oct', effort: 22, cost: 310000, expectedPo: 'Received' }
];

export const seedReviews = [
  { id: 'R1', opp: 'Fraud risk engine · Sahyog Payments Bank', type: 'Finance', doc: 'Commercial_Proposal_v3', ver: 'v3', due: '02 Nov', status: 'In review' },
  { id: 'R2', opp: 'AePS tender · Northfield Bank', type: 'Finance', doc: 'Commercial_Bid_v1', ver: 'v1', due: '04 Nov', status: 'Assigned' },
  { id: 'R3', opp: 'Card switch AMC · Meridian Bank', type: 'Finance', doc: 'Renewal_Quote_v2', ver: 'v2', due: '30 Oct', status: 'Overdue' },
  { id: 'R4', opp: 'Mobile Banking · Tarang SFB', type: 'Legal / Compliance', doc: 'MSA_Draft_v2', ver: 'v2', due: '08 Nov', status: 'Clarification asked' },
  { id: 'R5', opp: 'UPI TPAP · Vardhan Urban Bank', type: 'Finance', doc: 'Commercial_v1', ver: 'v1', due: '10 Oct', status: 'Approved' }
];

export const seedPostPo = {
  acts: [
    { t: 'Submit PBG (3%)', type: 'PBG', po: 'Vardhan Urban Bank', o: 'Vikram N.', due: '04 Nov', m: 'Yes', s: 'In progress', late: false },
    { t: 'Request experience letter', type: 'Experience letter', po: 'Kaveri Co-op Bank', o: 'Sneha G.', due: '28 Oct', m: 'Yes', s: 'Awaiting client', late: true },
    { t: 'Signed contract copy', type: 'Contract documents', po: 'Vardhan Urban Bank', o: 'Vikram N.', due: '31 Oct', m: 'Yes', s: 'Pending', late: true },
    { t: 'EMD refund follow-up', type: 'EMD', po: 'Coastal Gramin Bank (lost)', o: 'Sneha G.', due: '08 Nov', m: 'Yes', s: 'Refund requested', late: false },
    { t: 'Execution handover meeting', type: 'Execution handover', po: 'Vardhan Urban Bank', o: 'PMO', due: '05 Nov', m: 'Yes', s: 'Scheduled', late: false },
    { t: 'Performance certificate', type: 'Certificate', po: 'Meridian Bank', o: 'Vikram N.', due: '—', m: 'No', s: 'Not applicable', late: false },
    { t: 'Go-live client confirmation', type: 'Client confirmation', po: 'Kaveri Co-op Bank', o: 'Priya S.', due: '15 Oct', m: 'Yes', s: 'Completed', late: false }
  ],
  emd: [
    { bid: 'AePS tender · Northfield Bank', amt: '6,80,000', ins: 'Online transfer', sub: '—', valid: '—', out: 'Bid due 06 Nov', s: 'Pending submission', days: '—' },
    { bid: 'UPI Switch · Meridian Bank', amt: '8,40,000', ins: 'Bank guarantee', sub: '17 Oct', valid: '25 Nov', out: 'Under evaluation', s: 'Acknowledged', days: '15', late: true },
    { bid: 'Core connector · Coastal Gramin Bank', amt: '2,20,000', ins: 'DD', sub: '02 Jul', valid: '31 Dec', out: 'Lost', s: 'Refund requested', days: '61' },
    { bid: 'Switch consolidation · State Apex Bank', amt: '—', ins: '—', sub: '—', valid: '—', out: 'No Bid', s: 'Not applicable', days: '—' },
    { bid: 'UPI TPAP · Vardhan Urban Bank', amt: '3,00,000', ins: 'Bank guarantee', sub: '20 Jun', valid: '20 Dec', out: 'Won', s: 'Refund pending', days: '18' }
  ],
  letters: [
    { c: 'Kaveri Co-op Bank', p: 'BBPS go-live proof', r: '21 Sep', e: '31 Oct', o: 'Sneha G.', s: 'Awaiting client', u: '—' },
    { c: 'Vardhan Urban Bank', p: 'UPI TPAP deployment', r: '—', e: '15 Dec', o: 'Vikram N.', s: 'Request pending', u: '—' },
    { c: 'Meridian Bank', p: 'Card switch, 3 years AMC', r: '02 Aug', e: '30 Aug', o: 'Vikram N.', s: 'Completed', u: '3' },
    { c: 'Tarang SFB', p: 'Mobile banking phase 1', r: '10 Sep', e: '10 Oct', o: 'Sneha G.', s: 'Correction required', u: '—' }
  ],
  pos: [['UPI TPAP integration · Vardhan Urban Bank', 'PO VUB/IT/2026/31', 2, 5], ['Card switch AMC · Meridian Bank', 'PO MB/IT/2026/88', 3, 4], ['BBPS phase 1 · Kaveri Co-op Bank', 'PO KCB/2026/12', 4, 4], ['Mobile Banking CR · Tarang SFB', 'PO TSFB/CR/2026/07', 1, 3]]
};

export const TEAM = ['Pushkar B.', 'Priya S.', 'Arjun K.', 'Meera D.'];
export const PRESALES = ['—', 'Vikram N.', 'Sneha G.'];
