import { useNavigate } from "react-router-dom";

export default function JoinExpert() {
  const nav = useNavigate();

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
            <div className="brandTag">Expert onboarding • Verified Network</div>
          </div>
        </div>

        <div className="topRight">
          <button className="ghostBtn" type="button" onClick={() => nav("/")}>
            Back
          </button>
        </div>
      </header>

      {/* CONTENT */}
      <main className="joinPage">
        <section className="joinCard" aria-label="Expert onboarding">
          <div className="joinTitle">Join as Expert</div>
          <div className="joinSub">
            Verified profile • Share your expertise
          </div>

          <div className="joinGrid">
            <label className="field">
              <span>Full Name</span>
              <input placeholder="Jane Doe" autoComplete="name" />
            </label>

            <label className="field">
              <span>Email</span>
              <input placeholder="name@company.com" autoComplete="email" />
            </label>

            <label className="field">
              <span>Phone</span>
              <input placeholder="+90 ..." autoComplete="tel" />
            </label>

            <label className="field">
              <span>Expertise</span>
              <input placeholder="Packaging, sourcing, compliance..." />
            </label>
          </div>

          <button className="primary joinBtn" type="button">
            Continue
          </button>

          <div className="phoneHint">
            Next: proof, verification, visibility settings.
          </div>
        </section>
      </main>
    </div>
  );
}