"use client";

import { useEffect, useRef } from "react";

export default function MatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;

    const DPR = Math.min(2, window.devicePixelRatio || 1);

    const resize = () => {
      const { innerWidth: w, innerHeight: h } = window;
      canvas.width = Math.floor(w * DPR);
      canvas.height = Math.floor(h * DPR);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    // Matrix rain parameters
    const fontSize = 14;
    const colWidth = fontSize * 1.15;
    const chars =
      "01アイウエオカキクケコサシスセソタチツテトナニヌネノABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let columns = Math.ceil(window.innerWidth / colWidth);
    let drops = new Array(columns).fill(0).map(() => Math.random() * 100);

    const tick = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;

      // Subtle fade (not full clear) to create trails
      ctx.fillStyle = "rgba(0,0,0,0.14)";
      ctx.fillRect(0, 0, w, h);

      ctx.font = `${fontSize}px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`;

      for (let i = 0; i < columns; i++) {
        const x = i * colWidth;
        const y = drops[i] * fontSize;

        const ch = chars[Math.floor(Math.random() * chars.length)];
        // brightness varies slightly per character
        const alpha = 0.35 + Math.random() * 0.35;
        ctx.fillStyle = `rgba(64, 255, 180, ${alpha})`;
        ctx.fillText(ch, x, y);

        // occasionally create "bright head"
        if (Math.random() < 0.015) {
          ctx.fillStyle = "rgba(190, 255, 235, 0.8)";
          ctx.fillText(ch, x, y);
        }

        // reset drop to top randomly after passing screen
        if (y > h && Math.random() > 0.975) drops[i] = 0;
        drops[i] += 0.55 + Math.random() * 0.35;
      }

      raf = requestAnimationFrame(tick);
    };

    // recompute columns on resize
    const recompute = () => {
      columns = Math.ceil(window.innerWidth / colWidth);
      drops = new Array(columns).fill(0).map(() => Math.random() * 100);
    };

    const onResize = () => {
      resize();
      recompute();
    };

    window.removeEventListener("resize", resize);
    window.addEventListener("resize", onResize);

    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div className="matrix-bg" aria-hidden="true">
      <canvas ref={canvasRef} className="matrix-canvas" />
      <div className="matrix-vignette" />
      <div className="matrix-glow glow-a" />
      <div className="matrix-glow glow-b" />
      <div className="matrix-grain" />
    </div>
  );
}
