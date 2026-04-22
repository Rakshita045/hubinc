"use client";

import { useEffect, useRef } from "react";

export function StarfieldCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let stars: { x: number; y: number; r: number; o: number; s: number }[] = [];
    let frame = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      stars = Array.from({ length: 220 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.2 + 0.15,
        o: Math.random(),
        s: 0.001 + Math.random() * 0.003,
      }));
    };

    const draw = (t: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((star) => {
        const opacity = 0.04 + 0.12 * (0.5 + 0.5 * Math.sin(t * star.s + star.o * 90));
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200,220,255,${opacity})`;
        ctx.fill();
      });
      frame = window.requestAnimationFrame(draw);
    };

    resize();
    draw(0);
    window.addEventListener("resize", resize);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas id="cvs" ref={canvasRef} />;
}
