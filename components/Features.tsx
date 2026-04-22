export function Features() {
  return (
    <section className="features" id="features">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">Features</p>
          <h2>Everything you need.<br />Nothing you don&apos;t.</h2>
          <p>Five focused tools, one seamless experience — designed to fit how students actually work.</p>
        </div>
        <div className="bento">
          {/* Timetable (wide card) */}
          <div className="bcard bcard-wide bcard-accent reveal">
            <div className="bcard-icon ic-orange">🗓️</div>
            <h3>Scheduled &amp; Regular Timetable</h3>
            <p>
              Your schedule is organized into scheduled and regular timetables. Labs, lectures, and
              practicals stay clearly structured so you always know the right slot.
            </p>
            <div className="bcard-preview">
              <div className="preview-header">
                <div className="batch-tab active">Scheduled</div>
                <div className="batch-tab">Regular</div>
                <div className="batch-tab">Theory</div>
              </div>
              <div className="preview-row">
                <span>
                  DIP LAB{" "}
                  <span style={{ color: "var(--text3)", fontSize: 11 }}>
                    Ms. Anjuli Dubey · 2209E
                  </span>
                </span>
                <span className="preview-badge pb-orange">8:00 – 10:00</span>
              </div>
              <div className="preview-row">
                <span>
                  ML{" "}
                  <span style={{ color: "var(--text3)", fontSize: 11 }}>
                    Ms. Reena Sharma
                  </span>
                </span>
                <span className="preview-badge pb-blue">10:00 – 11:00</span>
              </div>
              <div className="preview-row">
                <span>
                  NSP{" "}
                  <span style={{ color: "var(--text3)", fontSize: 11 }}>
                    Mr. Rahul Raj
                  </span>
                </span>
                <span className="preview-badge pb-teal">11:00 – 12:00</span>
              </div>
            </div>
          </div>

          {/* Chat */}
          <div className="bcard bcard-teal reveal">
            <div className="bcard-icon ic-teal">💬</div>
            <h3>Student Chat</h3>
            <p>
              Message your classmates directly inside the app. Group chats and DMs that keep your
              conversations where your schedule and notes already live.
            </p>
            <div className="chat-preview">
              <div className="cmsg">
                <div className="cmsg-av">👤</div>
                <div>
                  <div className="cmsg-name">Priya</div>
                  <div className="cmsg-bubble">Hey, did you get the ML lab notes?</div>
                </div>
                <div className="cmsg-time">2m</div>
              </div>
              <div className="cmsg own">
                <div className="cmsg-av">😊</div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
                  <div className="cmsg-bubble">Yes! Check the Notes section 📄</div>
                  <div className="cmsg-time">1m</div>
                </div>
              </div>
            </div>
          </div>

          {/* Notes */}
          <div className="bcard reveal">
            <div className="bcard-icon ic-blue">📄</div>
            <h3>Subject Notes</h3>
            <p>
              Access your shared notes library. Browse by subject and download what you need —
              always organised, always available.
            </p>
            <div className="notes-preview">
              <div className="note-row">
                <span className="note-ic">📘</span>
                <div>
                  <div className="note-name">ML — Unit 3 Notes</div>
                  <div className="note-meta">PDF · 2.4 MB</div>
                </div>
                <div className="note-dl">↓ PDF</div>
              </div>
              <div className="note-row">
                <span className="note-ic">📙</span>
                <div>
                  <div className="note-name">DIP — Lab Manual</div>
                  <div className="note-meta">PDF · 1.1 MB</div>
                </div>
                <div className="note-dl">↓ PDF</div>
              </div>
              <div className="note-row">
                <span className="note-ic">📗</span>
                <div>
                  <div className="note-name">NSP — Chapter 5</div>
                  <div className="note-meta">PDF · 860 KB</div>
                </div>
                <div className="note-dl">↓ PDF</div>
              </div>
            </div>
          </div>

          {/* Announcements */}
          <div className="bcard reveal">
            <div className="bcard-icon ic-purple">📢</div>
            <h3>Announcements</h3>
            <p>
              Important notices are shared directly with students. Exams, holidays, schedule
              changes — never miss a thing.
            </p>
          </div>

          {/* Quick Notes */}
          <div className="bcard reveal">
            <div className="bcard-icon ic-green">📝</div>
            <h3>Quick Notes</h3>
            <p>
              A personal scratchpad always a tap away. Jot down reminders, ideas, and key points
              without switching apps.
            </p>
          </div>

          {/* My Materials */}
          <div className="bcard reveal">
            <div className="bcard-icon ic-orange">📁</div>
            <h3>My Materials</h3>
            <p>
              All your downloaded files stored privately inside the app. Offline access, zero
              clutter, organised the way you study.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
