import { useRef, useState } from 'react';
import { extractFromRfp, EXTRACT_STEPS, countTags } from '../data/rfpMock.js';

/**
 * Upload an RFP and click "Extract from RFP" to auto-fill fields.
 * `part` is 'lead' or 'synopsis'. onApply(values, tags, fullResult) receives the extracted fields.
 * `done` = tags already applied (shows the result banner).
 */
export default function RfpExtract({ part, onApply, done, fileName: initialFile }) {
  const ref = useRef(null);
  const [file, setFile] = useState(null);
  const [step, setStep] = useState(-1);
  const busy = step >= 0;
  const name = file?.name || initialFile;

  const run = async () => {
    setStep(0);
    const res = await extractFromRfp(file, setStep);
    setStep(-1);
    onApply(res[part].values, res[part].tags, res);
  };

  const c = countTags(done);
  return (
    <section className="rfpx">
      <div className="row wrap between gap8">
        <div>
          <div className="w600 s14">✨ Auto-fill from RFP</div>
          <div className="s12 muted">Upload the RFP and we’ll fill what we can find. Review everything before saving.</div>
        </div>
        <div className="row gap8 wrap">
          <input ref={ref} type="file" accept=".pdf,.doc,.docx" hidden onChange={(e) => { setFile(e.target.files?.[0] || null); e.target.value = ''; }} />
          <button type="button" className="btn" disabled={busy} onClick={() => ref.current?.click()}>{name ? 'Change file' : 'Upload RFP'}</button>
          <button type="button" className="btn-p" disabled={!file || busy} onClick={run}>{busy ? 'Extracting…' : '✨ Extract from RFP'}</button>
        </div>
      </div>
      {name && <div className="s13">📄 <b>{name}</b></div>}
      {busy && (
        <ol className="rfpx-steps" aria-live="polite">
          {EXTRACT_STEPS.map((s, i) => <li key={s} className={i < step ? 'done' : i === step ? 'cur' : ''}>{i < step ? '✓' : i === step ? '◌' : '·'} {s}</li>)}
        </ol>
      )}
      {!busy && done && <p className="rfpx-res" role="status"><b>{c.filled} fields filled from RFP</b>{c.missing ? <> · <span className="rfpx-miss">{c.missing} need your input</span></> : ''} — fields marked <span className="ai-tag">AI</span> came from the document.</p>}
    </section>
  );
}
