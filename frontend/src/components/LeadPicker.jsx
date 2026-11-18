import { useEffect, useMemo, useRef, useState } from 'react';
import { Badge } from './ui.jsx';

/**
 * Searchable lead combobox. `value` is the tagged lead id.
 * onSelect(lead) when a lead is chosen, onClear() when the tag is removed.
 */
export default function LeadPicker({ leads, value, onSelect, onClear, error, disabled, placeholder = 'Search leads by name, company or email' }) {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState('');
  const wrapRef = useRef(null);
  const sel = leads.find((l) => l.id === value) || null;

  useEffect(() => {
    if (!open) return;
    const h = (e) => { if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false); };
    window.addEventListener('mousedown', h);
    return () => window.removeEventListener('mousedown', h);
  }, [open]);

  const list = useMemo(() => {
    const s = q.trim().toLowerCase();
    const base = s
      ? leads.filter((l) => `${l.salutation} ${l.firstName} ${l.lastName} ${l.company} ${l.email}`.toLowerCase().includes(s))
      : leads;
    return base.slice(0, 40);
  }, [leads, q]);

  const label = sel ? `${sel.salutation || ''} ${sel.firstName} ${sel.lastName} · ${sel.company}`.trim() : '';
  const pick = (l) => { onSelect(l); setOpen(false); setQ(''); };

  return (
    <div className="combo" ref={wrapRef}>
      <div className={'combo-input' + (error ? ' err' : '')}>
        <input
          className="in"
          value={open ? q : label}
          placeholder={placeholder}
          disabled={disabled}
          aria-invalid={error ? 'true' : undefined}
          aria-expanded={open}
          onFocus={() => { setOpen(true); setQ(''); }}
          onChange={(e) => { setQ(e.target.value); setOpen(true); }}
          onKeyDown={(e) => {
            if (e.key === 'Escape') setOpen(false);
            if (e.key === 'Enter' && list[0]) { e.preventDefault(); pick(list[0]); }
          }}
        />
        {sel && !disabled && <button type="button" className="combo-clear" aria-label="Clear tagged lead" title="Clear tagged lead" onClick={() => { onClear(); setQ(''); setOpen(false); }}>✕</button>}
      </div>
      {open && !disabled && (
        <ul className="combo-list" role="listbox">
          {list.map((l) => (
            <li key={l.id}>
              <button type="button" role="option" aria-selected={l.id === value} className={'combo-item' + (l.id === value ? ' on' : '')} onClick={() => pick(l)}>
                <span style={{ minWidth: 0 }}>
                  <span className="s14 w600" style={{ display: 'block' }}>{l.salutation} {l.firstName} {l.lastName}</span>
                  <span className="s12 muted" style={{ display: 'block' }}>{l.company}{l.designation ? ' · ' + l.designation : ''}</span>
                </span>
                <span className="row gap8" style={{ marginLeft: 'auto' }}>
                  {l.oppId && <span className="s12 muted">converted</span>}
                  <Badge>{l.status}</Badge>
                </span>
              </button>
            </li>
          ))}
          {list.length === 0 && <li className="muted s13" style={{ padding: 14, textAlign: 'center' }}>No leads match.</li>}
        </ul>
      )}
    </div>
  );
}
