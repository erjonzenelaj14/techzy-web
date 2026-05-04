import { useEffect, useRef } from "react";

type Node = { x: number; y: number; vx: number; vy: number };

interface NodeNetworkProps {
  density?: number; // nodes per 100k px²
  maxDistance?: number;
  className?: string;
}

/**
 * Minimal animated node-network background.
 * Renders into a canvas and respects prefers-reduced-motion.
 */
const NodeNetwork = ({
  density = 0.00012,
  maxDistance = 140,
  className,
}: NodeNetworkProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let nodes: Node[] = [];
    let raf = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    const mouse = { x: -9999, y: -9999 };

    // Read primary color from CSS variable (HSL components)
    const root = getComputedStyle(document.documentElement);
    const primaryHsl = root.getPropertyValue("--primary").trim() || "243 75% 59%";
    const fgHsl = root.getPropertyValue("--foreground").trim() || "220 30% 96%";

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(rect.width * dpr);
      canvas.height = Math.floor(rect.height * dpr);
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      const count = Math.max(
        24,
        Math.min(110, Math.floor(rect.width * rect.height * density))
      );
      nodes = new Array(count).fill(0).map(() => ({
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
      }));
    };

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    const draw = () => {
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      ctx.clearRect(0, 0, w, h);

      // Update + draw nodes
      for (const n of nodes) {
        if (!reduced) {
          n.x += n.vx;
          n.y += n.vy;
          if (n.x < 0 || n.x > w) n.vx *= -1;
          if (n.y < 0 || n.y > h) n.vy *= -1;
        }
        ctx.beginPath();
        ctx.arc(n.x, n.y, 1.4, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${fgHsl} / 0.55)`;
        ctx.fill();
      }

      // Connections
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < maxDistance * maxDistance) {
            const alpha = 1 - Math.sqrt(d2) / maxDistance;
            ctx.strokeStyle = `hsla(${primaryHsl} / ${alpha * 0.35})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }

        // Mouse interaction
        const mdx = a.x - mouse.x;
        const mdy = a.y - mouse.y;
        const md2 = mdx * mdx + mdy * mdy;
        const mr = 180;
        if (md2 < mr * mr) {
          const alpha = 1 - Math.sqrt(md2) / mr;
          ctx.strokeStyle = `hsla(${primaryHsl} / ${alpha * 0.7})`;
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      }

      raf = requestAnimationFrame(draw);
    };

    resize();
    draw();

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, [density, maxDistance]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      aria-hidden
    />
  );
};

export default NodeNetwork;