import { useEffect, useRef, type CSSProperties, type ReactNode } from 'react';

/** Fades content up as it scrolls into view. Reduced-motion users see it instantly. */
export function Reveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { node.classList.add('revealed'); return; }
    const io = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) { node.classList.add('revealed'); io.disconnect(); }
      }
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    io.observe(node);
    return () => io.disconnect();
  }, []);
  const style: CSSProperties | undefined = delay ? { transitionDelay: `${delay}ms` } : undefined;
  return <div ref={ref} className={`reveal${className ? ` ${className}` : ''}`} style={style}>{children}</div>;
}
