import { useParams, Link } from "react-router-dom";

export default function RoomDetail() {
  const { id } = useParams();

  return (
    <main className="pageShell">
      <div className="pageHeader">
        <div className="breadcrumb">
          <Link to="/rooms" className="crumbLink">Rooms</Link>
          <span className="crumbSep">/</span>
          <span className="crumbCurrent">{id}</span>
        </div>

        <h1 className="pageTitle">Room: {id}</h1>
        <p className="pageSubtitle">
          This is the room detail placeholder. Next step: request access + verified gate.
        </p>
      </div>

      <section className="detailCard">
        <div className="detailRow">
          <div className="detailLabel">Access</div>
          <div className="detailValue">Request access only (verified-first)</div>
        </div>

        <div className="detailRow">
          <div className="detailLabel">What you can do</div>
          <div className="detailValue">
            Post RFQs, compare offers, connect with verified suppliers & experts.
          </div>
        </div>

        <button className="primaryBtn" type="button">
          Request access
        </button>
        <div className="hintText">We’ll add approval + verification in the next step.</div>
      </section>
    </main>
  );
}