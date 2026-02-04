import { useEffect } from "react";

export default function JoinModal({ open, mode, onClose, onSwitch }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  const isSupplier = mode === "supplier";

  return (
    <div
      className="modalOverlay"
      onMouseDown={(e) => {
        // outside click closes
        if (e.target === e.currentTarget) onClose?.();
      }}
      role="dialog"
      aria-modal="true"
    >
      <div className="modalCard">
        <button className="modalClose" onClick={onClose} aria-label="Close">
          ✕
        </button>

        <div className="modalHead">
          <div className="modalTitle">
            {isSupplier ? "Join as a Supplier" : "Join as an Expert"}
          </div>
          <div className="modalSub">
            {isSupplier
              ? "Get verified. Receive RFQs. Close deals faster."
              : "Get verified. Get matched to RFQs and rooms."}
          </div>
        </div>

        <div className="modalGrid">
          {isSupplier ? (
            <>
              <Field label="Company Name" placeholder="Company LLC" />
              <Field label="Business Email" placeholder="sales@company.com" />
              <Field label="Phone" placeholder="+90 ..." />
              <Field label="Country" placeholder="Turkey" />
              <Field
                label="Category"
                placeholder="Packaging / Food / Logistics"
              />
            </>
          ) : (
            <>
              <Field label="Full Name" placeholder="John Smith" />
              <Field label="Email" placeholder="name@email.com" />
              <Field label="Phone" placeholder="+90 ..." />
              <Field label="Primary Skill" placeholder="Web / Dev / Design" />
              <Field label="Portfolio / Website" placeholder="https://..." />
            </>
          )}
        </div>

        <button className="modalPrimary">REQUEST ACCESS</button>

        <div className="modalLinks">
          {isSupplier ? (
            <button
              className="linkBtn"
              onClick={() => onSwitch?.("expert")}
              type="button"
            >
              Joining as an expert?
            </button>
          ) : (
            <button
              className="linkBtn"
              onClick={() => onSwitch?.("supplier")}
              type="button"
            >
              Joining as a supplier?
            </button>
          )}
          <span className="sep">•</span>
          <button className="linkBtn" type="button">
            Already have an account? Sign in
          </button>
        </div>

        <div className="modalFoot">
          Access is moderated. Verified profiles get priority.
        </div>
      </div>
    </div>
  );
}

function Field({ label, placeholder }) {
  return (
    <label className="mField">
      <span>{label}</span>
      <input placeholder={placeholder} />
    </label>
  );
}