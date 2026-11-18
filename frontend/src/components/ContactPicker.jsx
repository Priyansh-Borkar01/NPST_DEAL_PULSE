import { useEffect, useState } from 'react';

// MOCK phone contacts for the demo.
// On mobile this would come from the device's contact list (e.g. the Contact Picker API or a native app).
export const MOCK_CONTACTS = [
  { salutation: 'Mr.', firstName: 'Rohit', lastName: 'Kulkarni', designation: 'CIO', company: 'Deccan Urban Co-op Bank', mobile: '+91 98220 12345', phone: '+91 20 4100 2233', email: 'rohit.k@deccanucb.example', website: 'deccanucb.example', state: 'Maharashtra' },
  { salutation: 'Dr.', firstName: 'Lakshmi', lastName: 'Iyer', designation: 'Head, Digital Payments', company: 'Cauvery Small Finance Bank', mobile: '+91 98400 22334', phone: '+91 44 4200 3344', email: 'l.iyer@cauverysfb.example', website: 'cauverysfb.example', state: 'Tamil Nadu' },
  { salutation: 'Ms.', firstName: 'Fathima', lastName: 'Rasheed', designation: 'DGM, IT', company: 'Malabar Co-op Bank', mobile: '+91 94470 44556', phone: '+91 495 440 5566', email: 'fathima.r@malabarcb.example', website: 'malabarcb.example', state: 'Kerala' },
  { salutation: 'Mr.', firstName: 'Sameer', lastName: 'Shah', designation: 'GM, Operations', company: 'Sabarmati Nagrik Bank', mobile: '+91 98250 33445', phone: '+91 79 4300 4455', email: 'sameer.shah@snbank.example', website: 'snbank.example', state: 'Gujarat' },
  { salutation: 'Mr.', firstName: 'Venkat', lastName: 'Rao', designation: 'CTO', company: 'Krishna District Co-op Bank', mobile: '+91 99490 55667', phone: '+91 866 245 6677', email: 'venkat.rao@kdccb.example', website: 'kdccb.example', state: 'Andhra Pradesh' },
  { salutation: 'Ms.', firstName: 'Neha', lastName: 'Agarwal', designation: 'VP, Payments', company: 'Yamuna Payments Bank', mobile: '+91 98110 66778', phone: '+91 11 4500 7788', email: 'neha.a@yamunapb.example', website: 'yamunapb.example', state: 'Delhi' },
  { salutation: 'Mr.', firstName: 'Arvind', lastName: 'Hegde', designation: 'AGM, IT', company: 'Netravati Souharda Bank', mobile: '+91 94480 77889', phone: '+91 824 240 8899', email: 'arvind.h@netravati.example', website: 'netravati.example', state: 'Karnataka' },
  { salutation: 'Mr.', firstName: 'Karthik', lastName: 'Subramanian', designation: 'Head, Transaction Banking', company: 'Vaigai Gramin Bank', mobile: '+91 98410 88990', phone: '+91 452 430 9900', email: 'karthik.s@vaigaigb.example', website: 'vaigaigb.example', state: 'Tamil Nadu' },
  { salutation: 'Ms.', firstName: 'Swati', lastName: 'Deshpande', designation: 'Chief Digital Officer', company: 'Indrayani Urban Bank', mobile: '+91 98900 99001', phone: '+91 20 4600 1100', email: 'swati.d@indrayani.example', website: 'indrayani.example', state: 'Maharashtra' },
  { salutation: 'Mr.', firstName: 'Harish', lastName: 'Nambiar', designation: 'DGM, Operations', company: 'Periyar Co-op Bank', mobile: '+91 94460 11223', phone: '+91 484 470 2233', email: 'harish.n@periyarcb.example', website: 'periyarcb.example', state: 'Kerala' }
];

/** Small contact icon button. Opens the mock phone contact list; onPick(contact) fills the form. */
export default function ContactPicker({ onPick }) {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState('');

  useEffect(() => {
    if (!open) return;
    // close only the picker on Escape, not the whole New lead drawer
    const h = (e) => { if (e.key === 'Escape') { e.stopImmediatePropagation(); setOpen(false); } };
    window.addEventListener('keydown', h, true);
    return () => window.removeEventListener('keydown', h, true);
  }, [open]);

  const list = MOCK_CONTACTS.filter((c) => `${c.firstName} ${c.lastName} ${c.company} ${c.mobile}`.toLowerCase().includes(q.toLowerCase()))
    .sort((a, b) => a.firstName.localeCompare(b.firstName));

  return (
    <>
      <button type="button" className="cp-btn" aria-label="Pick from phone contacts" title="Pick from phone contacts" onClick={() => { setQ(''); setOpen(true); }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="3" /><circle cx="12" cy="10" r="3" /><path d="M7 18c.8-2.3 2.7-3.5 5-3.5s4.2 1.2 5 3.5" />
        </svg>
        <span>Contacts</span>
      </button>

      {open && (
        <div className="cp-overlay" onMouseDown={(e) => e.target === e.currentTarget && setOpen(false)}>
          <section className="cp-sheet" role="dialog" aria-modal="true" aria-label="Phone contacts">
            <header className="cp-head">
              <div>
                <div className="w600" style={{ fontSize: 16 }}>Phone contacts</div>
                <div className="s12 muted">{MOCK_CONTACTS.length} contacts · tap one to fill the lead</div>
              </div>
              <button type="button" className="btn" aria-label="Close" onClick={() => setOpen(false)}>✕</button>
            </header>
            <input className="in" type="search" autoFocus placeholder="Search name, bank or number" aria-label="Search contacts" value={q} onChange={(e) => setQ(e.target.value)} />
            <ul className="cp-list">
              {list.map((c) => (
                <li key={c.mobile}>
                  <button type="button" className="cp-item" onClick={() => { onPick(c); setOpen(false); }}>
                    <span className="cp-av">{c.firstName[0]}{c.lastName[0]}</span>
                    <span style={{ minWidth: 0 }}>
                      <span className="s14 w600" style={{ display: 'block' }}>{c.firstName} {c.lastName}</span>
                      <span className="s12 muted" style={{ display: 'block' }}>{c.designation} · {c.company}</span>
                      <span className="s12 mono muted" style={{ display: 'block' }}>{c.mobile}</span>
                    </span>
                  </button>
                </li>
              ))}
              {list.length === 0 && <li className="muted s13" style={{ padding: 16, textAlign: 'center' }}>No contacts match.</li>}
            </ul>
          </section>
        </div>
      )}
    </>
  );
}
