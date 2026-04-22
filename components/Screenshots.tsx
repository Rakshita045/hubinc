"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const SCREENSHOT_SLIDES = [
  { src: "/appss/Chat.jpeg", alt: "Chat screenshot" },
  { src: "/appss/Dashboard.jpeg", alt: "Dashboard screenshot" },
  { src: "/appss/Timetable.jpeg", alt: "Timetable screenshot" },
];

const AUTO_ROTATE_MS = 2200;
const MANUAL_PAUSE_MS = 5000;

export function Screenshots() {
  const slides = SCREENSHOT_SLIDES;
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAutoplayPaused, setIsAutoplayPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const resumeTimerRef = useRef<number | null>(null);

  useEffect(() => {
    if (isAutoplayPaused) return;

    const timer = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, AUTO_ROTATE_MS);

    return () => window.clearInterval(timer);
  }, [isAutoplayPaused, slides.length]);

  useEffect(() => {
    return () => {
      if (resumeTimerRef.current !== null) {
        window.clearTimeout(resumeTimerRef.current);
      }
    };
  }, []);

  const pauseAutoplayAfterManualAction = () => {
    setIsAutoplayPaused(true);
    if (resumeTimerRef.current !== null) {
      window.clearTimeout(resumeTimerRef.current);
    }
    resumeTimerRef.current = window.setTimeout(() => {
      setIsAutoplayPaused(false);
      resumeTimerRef.current = null;
    }, MANUAL_PAUSE_MS);
  };

  const goPrev = (manual = false) => {
    if (manual) pauseAutoplayAfterManualAction();
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goNext = (manual = false) => {
    if (manual) pauseAutoplayAfterManualAction();
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const goToSlide = (index: number) => {
    pauseAutoplayAfterManualAction();
    setActiveSlide(index);
  };

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0]?.clientX ?? null;
  };

  const onTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    const endX = e.changedTouches[0]?.clientX;
    const startX = touchStartX.current;
    touchStartX.current = null;
    if (startX == null || endX == null) return;

    const deltaX = endX - startX;
    if (Math.abs(deltaX) < 40) return;
    if (deltaX > 0) goPrev(true);
    else goNext(true);
  };

  return (
    <section className="screens" id="screenshots">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">Screenshots</p>
          <h2>See it in action.</h2>
          <p>Clean, consistent, and crafted to feel at home on your phone.</p>
        </div>
      </div>
      <div className="screen-phones">
        <div className="sphone sphone-side" style={{ alignSelf: "center" }}>
          <div className="spscreen">
            <Image
              src="/appss/Chat.jpeg"
              alt="Chat screenshot"
              fill
              sizes="200px"
              className="sp-shot"
              style={{ objectFit: "cover", objectPosition: "center top" }}
            />
          </div>
        </div>

        <div className="sphone sphone-main">
          <div className="spscreen">
            <Image
              src="/appss/Dashboard.jpeg"
              alt="Dashboard screenshot"
              fill
              sizes="220px"
              priority
              className="sp-shot"
              style={{ objectFit: "cover", objectPosition: "center top" }}
            />
          </div>
        </div>

        <div className="sphone sphone-side" style={{ alignSelf: "center" }}>
          <div className="spscreen">
            <Image
              src="/appss/Timetable.jpeg"
              alt="Timetable screenshot"
              fill
              sizes="200px"
              className="sp-shot"
              style={{ objectFit: "cover", objectPosition: "center top" }}
            />
          </div>
        </div>
      </div>

      <div className="screens-carousel" aria-label="App screenshots carousel">
        <button
          type="button"
          className="sc-nav"
          aria-label="Previous screenshot"
          onClick={() => goPrev(true)}
        >
          {"<"}
        </button>

        <div className="sc-viewport" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
          <div
            className="sc-track"
            style={{ transform: `translateX(-${activeSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div className="sc-slide" key={slide.src} aria-hidden={index !== activeSlide}>
                <div className="sphone sphone-main sc-phone">
                  <div className="spscreen">
                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      fill
                      sizes="(max-width: 680px) 62vw, 220px"
                      loading={index === activeSlide ? "eager" : "lazy"}
                      fetchPriority={index === activeSlide ? "high" : "auto"}
                      className="sp-shot"
                      style={{ objectFit: "cover", objectPosition: "center top" }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          className="sc-nav"
          aria-label="Next screenshot"
          onClick={() => goNext(true)}
        >
          {">"}
        </button>
      </div>

      <div className="sc-dots" role="tablist" aria-label="Choose screenshot">
        {slides.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            className={`sc-dot${index === activeSlide ? " is-active" : ""}`}
            onClick={() => goToSlide(index)}
            role="tab"
            aria-selected={index === activeSlide}
            aria-label={`Show screenshot ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
