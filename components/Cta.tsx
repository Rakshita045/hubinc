import Image from "next/image";
import { DownloadButtons } from "./DownloadButtons";

export function Cta() {
  return (
    <section className="cta-section">
      <div className="cta-box">
        <Image src="/logo.png" className="logo-mark" alt="Dokka" width={34} height={34} />
        <h2>Get Hub on your phone.</h2>
        <p>
          Keep timetables, notes, chat, and announcements in one app built for everyday student use.
        </p>
        <DownloadButtons centered />
      </div>
    </section>
  );
}
