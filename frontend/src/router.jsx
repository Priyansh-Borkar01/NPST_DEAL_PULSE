// Minimal hash router (no extra dependency). URLs look like  /#/leads/LEAD-2026-00352?new=1
import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const RouterCtx = createContext(null);
const ParamsCtx = createContext({});

const read = () => {
  const h = window.location.hash.replace(/^#/, '') || '/';
  const [pathname, search = ''] = h.split('?');
  return { pathname: pathname || '/', search };
};

export function HashRouter({ children }) {
  const [loc, setLoc] = useState(read);
  useEffect(() => {
    const on = () => { setLoc(read()); window.scrollTo(0, 0); };
    window.addEventListener('hashchange', on);
    return () => window.removeEventListener('hashchange', on);
  }, []);
  const navigate = (to, opts = {}) => {
    const url = '#' + to;
    if (opts.replace) { window.history.replaceState(null, '', url); setLoc(read()); }
    else window.location.hash = to;
  };
  return <RouterCtx.Provider value={{ loc, navigate }}>{children}</RouterCtx.Provider>;
}

export const useLocation = () => useContext(RouterCtx).loc;
export const useNavigate = () => useContext(RouterCtx).navigate;
export const useParams = () => useContext(ParamsCtx);
export const ParamsProvider = ({ params, children }) => <ParamsCtx.Provider value={params}>{children}</ParamsCtx.Provider>;

export function useSearchParams() {
  const { loc, navigate } = useContext(RouterCtx);
  const params = useMemo(() => new URLSearchParams(loc.search), [loc.search]);
  const set = (obj) => {
    const s = new URLSearchParams(obj).toString();
    navigate(loc.pathname + (s ? '?' + s : ''), { replace: true });
  };
  return [params, set];
}

/** Match "/leads/:id" against a pathname. Returns params or null. */
export function match(pattern, pathname) {
  const a = pattern.split('/').filter(Boolean);
  const b = pathname.split('/').filter(Boolean);
  if (a.length !== b.length) return null;
  const params = {};
  for (let i = 0; i < a.length; i++) {
    if (a[i].startsWith(':')) params[a[i].slice(1)] = decodeURIComponent(b[i]);
    else if (a[i] !== b[i]) return null;
  }
  return params;
}

export function Link({ to, children, className, style, onClick, ...rest }) {
  return <a href={'#' + to} className={className} style={style} onClick={onClick} {...rest}>{children}</a>;
}

export function NavLink({ to, end, className, children }) {
  const { pathname } = useLocation();
  const active = end ? pathname === to : pathname === to || pathname.startsWith(to + '/');
  return <a href={'#' + to} className={typeof className === 'function' ? className({ isActive: active }) : className} aria-current={active ? 'page' : undefined}>{children}</a>;
}
