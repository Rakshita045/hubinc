"use client";

import Link from "next/link";
import Image from "next/image";
import { APK_URL } from "./DownloadButtons";

export function NavBar() {
  // Menu open/close + aria updates are handled by LandingPage's legacy script.
  return (
    <>
      <nav>
        <div className="nav-wrap">
          <Link href="/" className="logo">
            <Image src="/logo.png" className="logo-mark" alt="Dokka" width={34} height={34} />
            <span style={{ color: "white" }}>
              Hub<span className="brand-accent">Inc</span>
            </span>
          </Link>
          <div className="nav-right">
            <a href="#features" className="nav-link">Features</a>
            <a href="#screenshots" className="nav-link">Screenshots</a>
            <a href="#footer" className="nav-link">Download</a>
            <a href={APK_URL} className="nav-btn">Get the App</a>
            <button
              className="hamburger"
              id="hamburger"
              aria-label="Open menu"
              aria-expanded="false"
            >
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </nav>

      <div className="mobile-nav" id="mobileNav">
        <a href="#features">Features</a>
        <a href="#screenshots">Screenshots</a>
        <a href="#footer">Download</a>
        <a href={APK_URL} className="mobile-cta">⬇ Download APK</a>
      </div>
    </>
  );
}
