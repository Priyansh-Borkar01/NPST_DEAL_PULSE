import { createContext, useContext, useState } from 'react';
import { VERTICALS, DEMO_PASSWORD } from '../data/verticals.js';

const KEY = 'dealplus-session';
const Ctx = createContext(null);

export function AuthProvider({ children }) {
  const [vertical, setVertical] = useState(() => {
    try { const v = sessionStorage.getItem(KEY); return v && VERTICALS[v] ? v : null; } catch (e) { return null; }
  });

  const login = (verticalKey, email, password) => {
    const v = VERTICALS[verticalKey];
    if (!v) return 'Choose your vertical.';
    if (!email || !password) return 'Enter your work email and password.';
    if (email.trim().toLowerCase() !== v.user.email || password !== DEMO_PASSWORD) {
      return `Wrong email or password for ${v.label}. Use ${v.user.email} / ${DEMO_PASSWORD}.`;
    }
    try { sessionStorage.setItem(KEY, verticalKey); } catch (e) { /* ignore */ }
    setVertical(verticalKey);
    return null;
  };

  const logout = () => { try { sessionStorage.removeItem(KEY); } catch (e) { /* ignore */ } setVertical(null); };
  const switchTo = (k) => { try { sessionStorage.setItem(KEY, k); } catch (e) { /* ignore */ } setVertical(k); };

  const v = vertical ? VERTICALS[vertical] : null;
  return (
    <Ctx.Provider value={{ vertical: v, user: v?.user, can: v?.can || {}, readOnly: !!v?.readOnly, login, logout, switchTo }}>
      {children}
    </Ctx.Provider>
  );
}

export const useAuth = () => useContext(Ctx);
