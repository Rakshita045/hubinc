import Link from "next/link";
import Image from "next/image";
import { APK_URL } from "./DownloadButtons";

export function Footer() {
  return (
    <section className="footer" id="footer">
      <footer>
        <div className="footer-inner">
          <div className="footer-logo">
            <Image src="/logo.png" className="logo-mark" alt="HubInc" width={34} height={34} />
            <span style={{ color: "white" }}>
              Hub<span className="brand-accent">Inc</span>
            </span>
          </div>
          <div className="footer-links">
            <a href="#features">Features</a>
            <a href="#screenshots">Screenshots</a>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms</Link>
            <a href={APK_URL}>Download</a>
          </div>
          <p>© 2026 HubInc · Built with love ❤️ for students · Made by HubInc</p>
        </div>
      </footer>
    </section>
  );
}
