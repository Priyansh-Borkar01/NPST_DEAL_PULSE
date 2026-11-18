// Real-time field validators shared by the lead and opportunity forms.
// Each validate*() returns a map of { field: message }. Empty map = valid.

const REQ = 'This field is required';

// RFC-ish: local-part @ domain . TLD (2+ letters)
const EMAIL_RE = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*\.[A-Za-z]{2,}$/;
// optional http(s)://, dotted domain, 2+ letter TLD, optional path
const WEBSITE_RE = /^(https?:\/\/)?([A-Za-z0-9-]+\.)+[A-Za-z]{2,}(\/\S*)?$/;

export const isEmail = (v) => EMAIL_RE.test(String(v || '').trim());

export const isWebsite = (v) => WEBSITE_RE.test(String(v || '').trim());

/**
 * Phone rule: optional single leading + or -, separators (space, hyphen,
 * parentheses) allowed, then exactly 12 digits (2 country + 10 number).
 * e.g. "+91 20 4100 2233" -> "+912041002233" (valid).
 */
export const isPhone = (v) => {
  const raw = String(v || '').trim();
  if (!raw) return false;
  const sign = /^[+-]/.test(raw) ? raw[0] : '';
  const body = sign ? raw.slice(1) : raw;
  if (/[^0-9\s()\-]/.test(body)) return false; // only digits + separators
  const digits = body.replace(/[^0-9]/g, '');
  return digits.length === 12;
};

const emailError = 'Please enter a valid email address, e.g., name@domain.com';
const phoneError = 'Enter a valid phone number, e.g., +91 20 4100 2233';
const websiteError = 'Enter a valid website, e.g., deccanucb.example or https://www.domain.com';

const required = (errors, v, key) => {
  if (v[key] === undefined || v[key] === null || String(v[key]).trim() === '' || v[key] === '—') {
    errors[key] = REQ;
    return true;
  }
  return false;
};

export function validateLead(v = {}) {
  const e = {};
  required(e, v, 'recordType');
  required(e, v, 'lastName');
  required(e, v, 'company');
  required(e, v, 'leadSource');
  required(e, v, 'rating');
  required(e, v, 'phone');
  required(e, v, 'email');
  required(e, v, 'website');
  if (!e.email && !isEmail(v.email)) e.email = emailError;
  if (!e.phone && !isPhone(v.phone)) e.phone = phoneError;
  if (!e.website && !isWebsite(v.website)) e.website = websiteError;
  if (v.mobile && String(v.mobile).trim() !== '' && !isPhone(v.mobile)) e.mobile = phoneError;
  required(e, v, 'productTsp');
  if (v.spocEmail && String(v.spocEmail).trim() !== '' && !isEmail(v.spocEmail)) e.spocEmail = emailError;
  if (v.spocPhone && String(v.spocPhone).trim() !== '' && !isPhone(v.spocPhone)) e.spocPhone = phoneError;
  return e;
}

export const todayISO = () => new Date().toISOString().slice(0, 10);
export const isFutureDate = (iso) => {
  const d = new Date(String(iso || '') + 'T00:00:00');
  if (isNaN(d)) return false;
  const t = new Date(); t.setHours(0, 0, 0, 0);
  return d.getTime() > t.getTime();
};

export function validateOpportunity(v = {}, { requireLead = false } = {}) {
  const e = {};
  if (requireLead) required(e, v, 'leadId');
  required(e, v, 'name');
  required(e, v, 'account');
  required(e, v, 'stage');
  required(e, v, 'currency');
  required(e, v, 'productTsp');
  required(e, v, 'closeDate');
  if (!e.closeDate && !isFutureDate(v.closeDate)) e.closeDate = 'Enter a valid future date';
  const arr = Number(v.arr);
  if (!(arr > 0)) e.arr = 'Enter the deal size ARR (greater than 0)';
  const oneTime = Number(v.oneTime);
  if (v.oneTime !== undefined && v.oneTime !== '' && Number.isNaN(oneTime)) e.oneTime = 'Enter a valid amount';
  return e;
}

export const errorCount = (errors) => Object.keys(errors || {}).length;
