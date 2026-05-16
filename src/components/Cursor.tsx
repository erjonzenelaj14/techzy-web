import { useEffect, useRef } from 'react';

export default function Cursor() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let hovering = false;
    const onMove = (e: MouseEvent) => {
      if (!ref.current) return;
      ref.current.style.left = e.clientX + "px";
      ref.current.style.top = e.clientY + "px";
    };
    const onOver = (e: MouseEvent) => {
      const t = (e.target as HTMLElement).closest("a, button");
      const has = !!t;
      if (has !== hovering) {
        hovering = has;
        ref.current?.classList.toggle("hover", has);
      }
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, []);

  return <div className="cursor-ring" ref={ref}></div>;
}
