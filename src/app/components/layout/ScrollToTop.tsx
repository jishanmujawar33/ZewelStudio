import { useEffect, useRef } from 'react';
import { useLocation, useNavigationType } from 'react-router';

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const navType = useNavigationType();
  const prevPath = useRef(pathname);

  useEffect(() => {
    // Only scroll to top on PUSH navigations (clicking links),
    // not on POP (browser back/forward) so the browser can restore scroll.
    if (navType === 'PUSH' && pathname !== prevPath.current) {
      window.scrollTo(0, 0);
    }
    prevPath.current = pathname;
  }, [pathname, navType]);

  return null;
}
