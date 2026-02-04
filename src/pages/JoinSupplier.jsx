import { useNavigate } from "react-router-dom";

export default function JoinSupplier() {
  const nav = useNavigate();

  return (
    <div className="shell">
      <div className="bg" />
      <div className="noise" />

      {/* TOPBAR */}
      <header className="topbar">
        <div className="brand">
          <div className="brandMark">
            {/* public/ içindeki dosya: başına / koyuyoruz */}
            <img src="/azem-miran-logo.png" alt="AZEM MIRAN" />
          </div>

          <div className="brandText">
            <div className="brandName">AZEM MIRAN</div>
            <div className="brandTag">Supplier onboarding • Verified Network</div>
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
        <section className="joinCard" aria-label="Supplier onboarding">
          <div className="joinTitle">Join as Supplier</div>
          <div className="joinSub">
            Verified access • Start with basic details
          </div>

          <div className="joinGrid">
            <label className="field">
              <span>Full Name</span>
              <input placeholder="John Smith" autoComplete="name" />
            </label>

            <label className="field">
              <span>Company</span>
              <input placeholder="Company Ltd." autoComplete="organization" />
            </label>

            <label className="field">
              <span>Email</span>
              <input placeholder="name@company.com" autoComplete="email" />
            </label>

            <label className="field">
              <span>Phone</span>
              <input placeholder="+90 ..." autoComplete="tel" />
            </label>
          </div>

          <button className="primary joinBtn" type="button">
            Continue
          </button>

          <div className="phoneHint">
            Next: categories, proof, verification.
          </div>
        </section>
      </main>
    </div>
  );
}