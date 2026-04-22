"use client";

import { useEffect } from "react";
import { Cta } from "./Cta";
import { Features } from "./Features";
import { Footer } from "./Footer";
import { Hero } from "./Hero";
import { NavBar } from "./NavBar";
import { Screenshots } from "./Screenshots";
import { Stats } from "./Stats";

export function LandingPage() {
  useEffect(() => {
    /* ── Hamburger ── */
    const ham = document.getElementById("hamburger");
    const mob = document.getElementById("mobileNav");
    if (ham && mob) {
      const hamEl = ham as HTMLButtonElement;
      const mobEl = mob as HTMLDivElement;

      const closeMob = () => {
        mobEl.classList.remove("open");
        hamEl.classList.remove("open");
        hamEl.setAttribute("aria-expanded", "false");
      };

      const onHamClick = (e: MouseEvent) => {
        e.stopPropagation();
        const isOpen = mobEl.classList.toggle("open");
        hamEl.classList.toggle("open", isOpen);
        hamEl.setAttribute("aria-expanded", String(isOpen));
      };

      const onDocClick = (e: MouseEvent) => {
        const target = e.target as Node | null;
        if (!target) return;
        if (!mobEl.contains(target) && !hamEl.contains(target)) closeMob();
      };

      const onEsc = (e: KeyboardEvent) => {
        if (e.key === "Escape") closeMob();
      };

      const onLinksClick = (e: MouseEvent) => {
        const target = e.target as HTMLElement | null;
        if (!target) return;
        const link = target.closest("a");
        if (link && mobEl.contains(link)) closeMob();
      };

      hamEl.addEventListener("click", onHamClick);
      document.addEventListener("click", onDocClick);
      document.addEventListener("keydown", onEsc);
      document.addEventListener("click", onLinksClick);
      window.addEventListener("scroll", closeMob, { passive: true });

      /* ── Starfield ── */
      const cvs = document.getElementById("cvs") as HTMLCanvasElement | null;
      const cx = cvs?.getContext("2d");
      let st: { x: number; y: number; r: number; o: number; s: number }[] = [];
      let raf = 0;

      function rsz() {
        if (!cvs) return;
        cvs.width = window.innerWidth;
        cvs.height = window.innerHeight;
      }

      function mkSt() {
        if (!cvs) return;
        st = Array.from({ length: 220 }, () => ({
          x: Math.random() * cvs.width,
          y: Math.random() * cvs.height,
          r: Math.random() * 1.2 + 0.15,
          o: Math.random(),
          s: 0.001 + Math.random() * 0.003,
        }));
      }

      function drw(t: number) {
        if (!cvs || !cx) return;
        cx.clearRect(0, 0, cvs.width, cvs.height);
        st.forEach((s) => {
          const op =
            0.04 +
            0.12 *
              (0.5 + 0.5 * Math.sin(t * s.s * 1000 + s.o * 90));
          cx.beginPath();
          cx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
          cx.fillStyle = `rgba(200,220,255,${op})`;
          cx.fill();
        });
        raf = window.requestAnimationFrame(drw);
      }

      if (cvs && cx) {
        rsz();
        mkSt();
        drw(0);
        const onResize = () => {
          rsz();
          mkSt();
        };
        window.addEventListener("resize", onResize);

        /* ── Scroll Reveal ── */
        const io = new IntersectionObserver(
          (entries) => {
            entries.forEach((e) => {
              if (e.isIntersecting) {
                const target = e.target as HTMLElement;
                target.style.opacity = "1";
                target.style.transform = "translateY(0)";
              }
            });
          },
          { threshold: 0.08 },
        );

        const nodes = document.querySelectorAll<HTMLElement>(
          ".bcard,.stat-cell,.sphone,.trust-item",
        );
        nodes.forEach((el, i) => {
          el.style.cssText += `opacity:0;transform:translateY(24px);transition:opacity .6s ease ${i * 0.06}s,transform .6s ease ${
            i * 0.06
          }s`;
          io.observe(el);
        });

        return () => {
          hamEl.removeEventListener("click", onHamClick);
          document.removeEventListener("click", onDocClick);
          document.removeEventListener("keydown", onEsc);
          document.removeEventListener("click", onLinksClick);
          window.removeEventListener("scroll", closeMob);
          window.removeEventListener("resize", onResize);
          window.cancelAnimationFrame(raf);
          io.disconnect();
        };
      }

      return () => {
        hamEl.removeEventListener("click", onHamClick);
        document.removeEventListener("click", onDocClick);
        document.removeEventListener("keydown", onEsc);
        document.removeEventListener("click", onLinksClick);
        window.removeEventListener("scroll", closeMob);
      };
    }

    return;
  }, []);

  return (
    <>
      <canvas id="cvs"></canvas>
      <div className="atm"></div>
      <div className="page">
        <NavBar />
        <Hero />
        <div className="divider"></div>
        <div className="trust">
          <div className="trust-inner">
            <div className="trust-item">
              <span>🎓</span> Built for students
            </div>
            <div className="trust-item">
              <span>🔒</span> Private &amp; secure
            </div>
            <div className="trust-item">
              <span>⚡</span> Fast Updates
            </div>
            <div className="trust-item">
              <span>🚫</span> Zero ads
            </div>
            <div className="trust-item">
              <span>🌙</span> Dark mode native
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <Features />
        <Stats />
        <Screenshots />
        <Cta />
        <Footer />
      </div>
    </>
  );
}
