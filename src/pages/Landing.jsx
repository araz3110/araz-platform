import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const nav = useNavigate();

  const navItems = useMemo(
    () => [
      { label: "Home", to: "#top" },
      { label: "Rooms", to: "#rooms" },
      { label: "RFQs", to: "#rfqs" },
      { label: "Suppliers", to: "#suppliers" },
      { label: "Experts", to: "#experts" },
    ],
    []
  );

  const scrollTo = (hash) => {
    const el = document.querySelector(hash);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="shell" id="top">
      {/* garanti: bu katmanlar tıklama yakalamaz */}
      <div className="bg" aria-hidden="true" />
      <div className="noise" aria-hidden="true" />

      {/* TOPBAR */}
      <header className="topbar">
        <div className="brand" role="banner">
          <div className="brandMark">
            <img className="brandLogo" src="/azem-miran-logo.png" alt="AZEM MIRAN" />
          </div>

          <div className="brandText">
            <div className="brandName">AZEM MIRAN</div>
            <div className="brandTag">B2B Rooms • RFQs • Verified Network</div>
          </div>
        </div>

        {/* NAV: mobilde en stabil yöntem = anchor + preventDefault + scrollIntoView */}
        <nav className="topnav" aria-label="Primary navigation">
          {navItems.map((i) => (
            <a
              key={i.label}
              className="navBtn"
              href={i.to}
              onClick={(e) => {
                e.preventDefault();
                scrollTo(i.to);
              }}
            >
              {i.label}
            </a>
          ))}
        </nav>

        <div className="topRight">
          <button className="ghostBtn" type="button" onClick={() => nav("/join/supplier")}>
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
            <button className="primary" type="button" onClick={() => nav("/join/supplier")}>
              JOIN AS SUPPLIER
            </button>

            <button className="secondary" type="button" onClick={() => nav("/join/expert")}>
              JOIN AS EXPERT
            </button>
          </div>

          {/* Mini cards (anchors) */}
          <div className="miniRow">
            <div className="miniCard sectionAnchor" id="rooms">
              <div className="miniTitle">ROOMS</div>
              <div className="miniText">Curated categories. No noise.</div>
            </div>

            <div className="miniCard sectionAnchor" id="rfqs">
              <div className="miniTitle">RFQs</div>
              <div className="miniText">Request quotes. Compare offers.</div>
            </div>

            <div className="miniCard">
              <div className="miniTitle">VERIFIED</div>
              <div className="miniText">Trust-first access control.</div>
            </div>
          </div>
        </section>

        {/* RIGHT */}
        <section className="heroRight sectionAnchor" id="suppliers">
          <div className="phone" role="region" aria-label="Onboarding preview">
            <div className="phoneTop" aria-hidden="true">
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

          {/* Experts anchor */}
          <div id="experts" className="anchor sectionAnchor" />
        </section>
      </main>
    </div>
  );
}