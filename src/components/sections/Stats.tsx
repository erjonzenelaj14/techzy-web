import { useEffect, useRef, useState } from "react";

type Stat = { value: number; suffix: string; label: string };

const stats: Stat[] = [
  { value: 7, suffix: "+", label: "Years shipping" },
  { value: 120, suffix: "+", label: "Projects delivered" },
  { value: 35, suffix: "+", label: "Technologies mastered" },
  { value: 98, suffix: "%", label: "Client retention" },
];

const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1400;
          const start = performance.now();
          const tick = (t: number) => {
            const p = Math.min(1, (t - start) / duration);
            setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value]);

  return (
    <span ref={ref} className="font-mono text-4xl md:text-5xl font-semibold text-foreground">
      {n}
      {suffix}
    </span>
  );
};

const Stats = () => {
  return (
    <section className="border-y border-border bg-card/40">
      <div className="container py-16 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col gap-2">
            <Counter value={s.value} suffix={s.suffix} />
            <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;