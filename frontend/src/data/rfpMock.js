// MOCK RFP extraction for the demo.
// Later, replace extractFromRfp() with a call to your backend (PDF → text → OpenAI with a JSON schema).
// Keep the same return shape and the screens won't need to change.
//
// Return shape:
//   lead:     { values: {field: value}, tags: {field: {page} | 'missing'} }
//   synopsis: { values: {field: value}, tags: {field: {page} | 'missing'} }
import { plusDays } from './defaults.js';

export const EXTRACT_STEPS = ['Reading document', 'Finding bank and contacts', 'Reading dates, EMD and eligibility', 'Filling fields'];

const MOCK = () => ({
  lead: {
    values: {
      salutation: 'Mr.', firstName: 'Srinivas', lastName: 'Reddy',
      company: 'Godavari Grameena Bank', designation: 'AGM, IT & Digital Payments',
      email: 'it.procurement@godavarigb.example', phone: '+91 40 4012 3456',
      state: 'Telangana', leadSource: 'Tender Portal',
      productTsp: 'BBPS', module: 'Operating Unit', productTsp2: 'UPI',
      // not in the RFP → left blank for the salesperson
      mobile: '', website: ''
    },
    tags: {
      salutation: { page: 2 }, firstName: { page: 2 }, lastName: { page: 2 }, company: { page: 1 }, designation: { page: 2 },
      email: { page: 2 }, phone: { page: 2 }, state: { page: 1 }, leadSource: { page: 1 },
      productTsp: { page: 5 }, module: { page: 6 }, productTsp2: { page: 7 },
      mobile: 'missing', website: 'missing'
    }
  },
  synopsis: {
    values: {
      name: 'BBPS biller platform RFP',
      rfpRef: 'GGB/IT/RFP/2026/042 · GeM GEM/2026/B/5601877',
      products: 'BBPS, UPI',
      preBid: plusDays(4), submission: plusDays(18), due: plusDays(18), bidOpening: plusDays(20),
      emd: 'Yes', emdAmount: '5,00,000', pbg: 'Yes · 3%',
      eligibility: '2 BBPS biller-platform deployments at scheduled banks in the last 3 years; annual turnover ≥ ₹20 Cr for 3 years; CERT-In empanelled auditor report; ISO 27001.',
      scope: 'Bank wants a BBPS biller-operating-unit platform with UPI collections for 600+ billers, NPCI BBPS 2.0 compliance, on-premise hosting at the bank DC with DR, and a 5-year AMC.',
      // not in the RFP → left blank for the salesperson
      dealSize: '', context: '', risks: ''
    },
    tags: {
      name: { page: 1 }, rfpRef: { page: 1 }, products: { page: 5 }, preBid: { page: 3 }, submission: { page: 3 }, bidOpening: { page: 3 },
      emd: { page: 9 }, emdAmount: { page: 9 }, pbg: { page: 10 }, eligibility: { page: 11 }, scope: { page: 5 },
      dealSize: 'missing', context: 'missing', risks: 'missing'
    }
  }
});

/** Pretend to read the RFP. Calls onStep(i) as each step starts, then resolves with mock fields. */
export function extractFromRfp(file, onStep) {
  return new Promise((resolve) => {
    let i = 0;
    const tick = () => {
      if (i < EXTRACT_STEPS.length) { onStep && onStep(i); i++; setTimeout(tick, 900); }
      else resolve({ fileName: file?.name || 'RFP.pdf', ...MOCK() });
    };
    tick();
  });
}

export const countTags = (tags) => {
  const v = Object.values(tags || {});
  return { filled: v.filter((t) => t && t !== 'missing').length, missing: v.filter((t) => t === 'missing').length };
};
