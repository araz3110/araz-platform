import { Link } from "react-router-dom";

const ROOMS = [
  {
    id: "packaging",
    title: "Packaging",
    subtitle: "Bags, films, labels, cartons",
    verified: 1280,
  },
  {
    id: "food-beverage",
    title: "Food & Beverage",
    subtitle: "Pulses, rice, bulgur, spices",
    verified: 940,
  },
  {
    id: "logistics",
    title: "Logistics",
    subtitle: "Freight, customs, warehousing",
    verified: 520,
  },
  {
    id: "manufacturing",
    title: "Manufacturing",
    subtitle: "OEM, factories, sourcing",
    verified: 760,
  },
  {
    id: "tech-it",
    title: "Tech & IT",
    subtitle: "Web, software, automation",
    verified: 610,
  },
  {
    id: "legal-finance",
    title: "Legal & Finance",
    subtitle: "Contracts, compliance, trade",
    verified: 410,
  },
];

export default function Rooms() {
  return (
    <main className="pageShell">
      <div className="pageHeader">
        <h1 className="pageTitle">Rooms</h1>
        <p className="pageSubtitle">
          Curated categories. Verified-first access. No noise.
        </p>
      </div>

      <section className="roomsGrid">
        {ROOMS.map((r) => (
          <Link key={r.id} to={`/rooms/${r.id}`} className="roomCard">
            <div className="roomCardTop">
              <div className="roomIcon" aria-hidden="true" />
              <div className="roomMeta">
                <div className="roomTitle">{r.title}</div>
                <div className="roomVerified">
                  {r.verified.toLocaleString()}+ verified members
                </div>
              </div>
            </div>

            <div className="roomSubtitle">{r.subtitle}</div>

            <div className="roomCTA">
              Explore room <span className="arrow">→</span>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}