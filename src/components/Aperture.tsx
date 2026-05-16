import { useEffect, useRef } from 'react';

function animateR(el: HTMLElement, from: number, to: number, duration: number, done?: () => void) {
  const start = performance.now();
  const ease = (t: number) => 1 - Math.pow(1 - t, 3);
  const tick = (now: number) => {
    const t = Math.min(1, (now - start) / duration);
    const v = from + (to - from) * ease(t);
    el.style.setProperty("--r", v + "px");
    if (t < 1) requestAnimationFrame(tick);
    else done?.();
  };
  requestAnimationFrame(tick);
}

export default function Aperture() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: Event) => {
      const { x, y, label, scrollTo } = (e as CustomEvent).detail;
      const el = ref.current;
      if (!el) return;

      el.style.setProperty("--x", x + "px");
      el.style.setProperty("--y", y + "px");

      const big = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
      );

      const xhairLabel = el.querySelector(".xhair-label");
      if (xhairLabel) xhairLabel.textContent = label || "TRANSIT";

      el.style.setProperty("--r", big + "px");
      el.classList.add("on");

      requestAnimationFrame(() => {
        animateR(el, big, 0, 380, () => {
          el.classList.add("hold");
          setTimeout(() => {
            if (scrollTo === "top") {
              window.scrollTo({ top: 0, behavior: "auto" });
            } else {
              const target = document.getElementById(scrollTo);
              if (target) {
                const top = target.getBoundingClientRect().top + window.scrollY - 60;
                window.scrollTo({ top, behavior: "auto" });
              }
            }
            setTimeout(() => {
              el.classList.remove("hold");
              animateR(el, 0, big, 520, () => {
                el.classList.remove("on");
              });
            }, 80);
          }, 180);
        });
      });
    };

    window.addEventListener('aperture-trigger', handler);
    return () => window.removeEventListener('aperture-trigger', handler);
  }, []);

  return (
    <div className="aperture" ref={ref}>
      <div className="xhair">
        <div className="xhair-label">TRANSIT</div>
      </div>
    </div>
  );
}
