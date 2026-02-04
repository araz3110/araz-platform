import { useNavigate } from "react-router-dom";

export default function JoinExpert() {
  const nav = useNavigate();

  return (
    <div className="shell">
      <div className="bg" />
      <div className="noise" />

      <header className="topbar">
        <div className="brand">
          <div className="brandMark">
            <img src="/azem-miran-logo.png" alt="AZEM MIRAN" />
          </div>
          <div className="brandText">
            <div className="brandName">AZEM MIRAN</div>
            <div className="brandTag">Expert onboarding • Verified Network</div>
          </div>
        </div>

        <div className="topRight">
          <button className="ghostBtn" onClick={() => nav("/")}>
            Back
          </button>
        </div>
      </header>

      <main className="hero" style={{ gridTemplateColumns: "1fr" }}>
        <section className="heroLeft">
          <div className="pill">EXPERT ONBOARDING</div>

          <h1 className="h1">
            <span className="hGlow hStrong">Join as an Expert</span>
          </h1>

          <p className="sub">
            Build a verified expert profile.
            <br />
            Get matched with real needs.
          </p>

          <div className="phone" style={{ marginTop: 18 }}>
            <div className="phoneTop">
              <span className="dot" />
              <span className="dot" />
              <span className="dot" />
            </div>

            <div className="phoneBody">
              <div className="phoneTitle">Expert details</div>

              <label className="field">
                <span>Full name</span>
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
                Continue
              </button>

              <div className="phoneHint">Next: expertise, proof, verification.</div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}