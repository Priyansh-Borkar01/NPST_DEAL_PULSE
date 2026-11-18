import { useState } from 'react';
import { useAuth } from '../store/Auth.jsx';
import { VERTICALS, DEMO_PASSWORD } from '../data/verticals.js';

export default function Login() {
  const { login } = useAuth();
  const [v, setV] = useState('sales');
  const [email, setEmail] = useState(VERTICALS.sales.user.email);
  const [pw, setPw] = useState(DEMO_PASSWORD);
  const [err, setErr] = useState('');
  const [forgot, setForgot] = useState(false);
  const [sent, setSent] = useState(false);

  const pick = (k) => { setV(k); setEmail(VERTICALS[k].user.email); setPw(DEMO_PASSWORD); setErr(''); };
  const submit = (e) => { e.preventDefault(); setErr(login(v, email, pw) || ''); };

  return (
    <div className="login">
      <section className="login-l" aria-hidden="true">
        <div className="row gap10"><div className="logo" style={{ width: 36, height: 36 }}>D</div><div className="w600" style={{ fontSize: 18 }}>DealPlus</div></div>
        <div style={{ maxWidth: 460 }}>
          <div style={{ fontSize: 34, fontWeight: 600, lineHeight: 1.2 }}>From first enquiry to the last experience letter.</div>
          <p style={{ margin: '16px 0 0', fontSize: 15, lineHeight: 1.6, color: '#C9D1DC' }}>One record per deal, shared by Sales, the P&amp;L Head and Solution, with reviews, PO and post-PO work tracked to closure.</p>
        </div>
        <div className="row wrap gap8">
          {['Lead', 'Opportunity', 'RFP handover', 'Reviews', 'PO', 'Post-PO'].map((s) => (
            <span key={s} style={{ fontSize: 12, color: '#C9D1DC', border: '1px solid #2B3747', borderRadius: 12, padding: '4px 10px' }}>{s}</span>
          ))}
        </div>
      </section>

      <main className="login-r">
        {!forgot ? (
          <form onSubmit={submit} className="col gap16" style={{ width: '100%', maxWidth: 440 }}>
            <div>
              <h1 className="h1">Sign in</h1>
              <p className="sub">Choose your vertical, then use your company account.</p>
            </div>
            <fieldset style={{ border: 0, padding: 0, margin: 0 }} className="col gap8">
              <legend className="s13 w500" style={{ marginBottom: 8 }}>Vertical *</legend>
              <div className="vgrid" role="radiogroup">
                {Object.values(VERTICALS).map((x) => (
                  <button type="button" key={x.key} role="radio" aria-checked={v === x.key} className={v === x.key ? 'vopt on' : 'vopt'} onClick={() => pick(x.key)}>
                    <span className="w600 s14">{x.label}</span>
                    <span className="s12 muted">{x.blurb}</span>
                  </button>
                ))}
              </div>
            </fieldset>
            <label className="fl">Work email<input className="in" type="email" autoComplete="username" value={email} onChange={(e) => setEmail(e.target.value)} /></label>
            <label className="fl">Password<input className="in" type="password" autoComplete="current-password" value={pw} onChange={(e) => setPw(e.target.value)} /></label>
            {err && <p className="err" role="alert">{err}</p>}
            <div className="row between s14">
              <label className="row gap8"><input type="checkbox" defaultChecked style={{ width: 18, height: 18, accentColor: '#0B6E66' }} /> Keep me signed in</label>
              <button type="button" className="btn" style={{ border: 0, color: '#0B6E66' }} onClick={() => setForgot(true)}>Forgot password?</button>
            </div>
            <button type="submit" className="btn-p" style={{ minHeight: 44 }}>Sign in as {VERTICALS[v].label}</button>
            <p className="defaults">Demo accounts are pre-filled. Every vertical uses password <b className="mono">{DEMO_PASSWORD}</b> — {VERTICALS[v].user.email} signs in as {VERTICALS[v].user.name}, {VERTICALS[v].user.title}.</p>
          </form>
        ) : (
          <div className="col gap16" style={{ width: '100%', maxWidth: 400 }}>
            <div><h1 className="h1">Reset password</h1><p className="sub">We'll email a link that works for 30 minutes.</p></div>
            <label className="fl">Work email<input className="in" type="email" placeholder="name@company.com" /></label>
            <button className="btn-p" onClick={() => setSent(true)}>Send reset link</button>
            {sent && <p className="ok" role="status">If that email has an account, a reset link is on its way.</p>}
            <button className="btn" style={{ alignSelf: 'flex-start' }} onClick={() => { setForgot(false); setSent(false); }}>← Back to sign in</button>
          </div>
        )}
      </main>
    </div>
  );
}
