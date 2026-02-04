import { useNavigate } from "react-router-dom";
import { useMemo, useState } from "react";

export default function Landing() {
  const nav = useNavigate();

  // üst menü (desktop)
  const navItems = useMemo(
    () => [
      { label: "Rooms", to: "#rooms" },
      { label: "RFQs", to: "#rfqs" },
      { label: "Suppliers", to: "#suppliers" },
      { label: "Experts", to: "#experts" },
    ],
    []
  );

  // (şimdilik sign in button çalışmıyor, sonra yapacağız)
  const [_, setDummy] = useState(false);

  return (
    <div className="shell">
      <div className="bg" />
      <div className="noise" />

      {/* TOPBAR */}
      <header className="topbar">
        <div className="brand">
          <div className="brandMark">
            <img src="/azem-miran-logo.png" alt="AZEM MIRAN" />
          </div>

          <div className="brandText">
            <div className="brandName">AZEM MIRAN</div>
            <div className="brandTag">B2B Rooms • RFQs • Verified Network</div>
          </div>
        </div>

        <nav className="topnav" aria-label="Primary">
          {navItems.map((i) => (
            <button
              key={i.label}
              className="navBtn"
              onClick={() => {
                const el = document.querySelector(i.to);
                if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              {i.label}
            </button>
          ))}
        </nav>

        <div className="topRight">
          <button className="ghostBtn" onClick={() => setDummy((v) => !v)}>
            Sign in
          </button>
        </div>
      </header>

      {/* HERO */}
      <main className="hero">
        {/* LEFT */}
        <section className="heroLeft">
          <div className="pill">READY TO OPEN YOUR FIRST ROOM?</div>

          <h1 className="h1">
            <span className="hGlow hStrong">VERIFY YOUR B2B ECOSYSTEM</span>
            <br />
            <span className="hGlow">WITH </span>
            <span className="hStrong">AZEM MIRAN</span>
          </h1>

          <p className="sub">
            Rooms. RFQs. Suppliers & Experts.
            <br />
            Build trust. Close deals faster.
          </p>

          <div className="ctaRow">
            <button
              className="primary"
              onClick={() => nav("/join/supplier")}
              type="button"
            >
              JOIN AS SUPPLIER
            </button>

            <button
              className="secondary"
              onClick={() => nav("/join/expert")}
              type="button"
            >
              JOIN AS EXPERT
            </button>
          </div>

          {/* Mini cards */}
          <div className="miniRow">
            <div className="miniCard" id="rooms">
              <div className="miniTitle">ROOMS</div>
              <div className="miniText">Curated categories. No noise.</div>
            </div>

            <div className="miniCard" id="rfqs">
              <div className="miniTitle">RFQs</div>
              <div className="miniText">Request quotes. Compare offers.</div>
            </div>

            <div className="miniCard" id="verified">
              <div className="miniTitle">VERIFIED</div>
              <div className="miniText">Trust-first access control.</div>
            </div>
          </div>
        </section>

        {/* RIGHT (Phone mock) */}
        <section className="heroRight" id="suppliers">
          <div className="phone" role="region" aria-label="Onboarding preview">
            <div className="phoneTop">
              <span className="dot" />
              <span className="dot" />
              <span className="dot" />
            </div>

            <div className="phoneBody">
              <div className="phoneTitle">AZEM MIRAN SYSTEM</div>

              <label className="field">
                <span>Full Name</span>
                <input placeholder="John Smith" />
              </label>

              <label className="field">
                <span>Email</span>
                <input placeholder="name@company.com" />
              </label>

              <label className="field">
                <span>Phone</span>
                <input placeholder="+90 ..." />
              </label>

              <button className="phoneBtn" type="button">
                START NOW
              </button>

              <div className="phoneHint">Verified profiles • Request access only</div>
            </div>
          </div>

          {/* anchor for experts */}
          <div id="experts" style={{ height: 1 }} />
        </section>
      </main>
    </div>
  );
}