import Image from "next/image";
import { APP_VERSION, DownloadButtons } from "./DownloadButtons";

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-left">
        <div className="pill">
          <span className="pill-dot"></span>
          AVAILABLE NOW {"\u00B7"} ANDROID
        </div>
        <h1>
          Your campus,
          <br />
          <em>organized in one app.</em>
          <span className="line2">Timetables, notes, chat, and announcements</span>
        </h1>
        <p className="hero-desc">
          Hub keeps your academic essentials in one place so you can move from schedule to
          notes to chat without switching apps.
        </p>
        <div className="dl-stack" id="download">
          <DownloadButtons />
          <span className="ver-tag">
            v{APP_VERSION} &nbsp; {"\u00B7"} &nbsp; Free to use &nbsp; {"\u00B7"} &nbsp; No ads
          </span>
        </div>
      </div>

      <div className="hero-right">
        <div className="phone-stack">
          <div className="phone-back">
            <div
              className="spscreen"
              style={{ justifyContent: "flex-start", paddingTop: 32 }}
            >
              <div className="spcloud"></div>
              <div
                style={{
                  fontFamily: "'Bricolage Grotesque',sans-serif",
                  fontSize: 16,
                  fontWeight: 800,
                  letterSpacing: 3,
                  opacity: 0.35,
                }}
              >
                HUBINC
              </div>
            </div>
          </div>

          <div className="phone-back2"></div>

          <div className="phone-main">
            <div className="pscreen">
              <Image
                src="/appss/Login.jpeg"
                alt="Login screenshot"
                fill
                priority
                loading="eager"
                sizes="240px"
                className="hero-shot"
                style={{ objectFit: "cover", objectPosition: "center top" }}
              />
            </div>
          </div>

          <div className="chip chip1">
            <span className="chip-ic">{"\uD83D\uDDD3\uFE0F"}</span> Today&apos;s schedule
          </div>
          <div className="chip chip2">
            <span className="chip-ic">{"\uD83D\uDCAC"}</span> Messages at a glance
          </div>
          <div className="chip chip3">
            <span className="chip-ic">{"\uD83D\uDCC4"}</span> Notes ready to open
          </div>
        </div>
      </div>
    </section>
  );
}

