import React from "react";
import "../../styles/aboutus.css";
import VisionCard from "./VisionCard";

export default function Vision() {
  return (
    <div className="back">
      <h2>Company Vision</h2>
      <p>
        Expanding our Rental Services beyond the Boundaries to an extent that we
        retain a Symbiotic Relation with Clients.
      </p>
      <div className="row">
        <VisionCard
          src="/images/about-us/clientwithsuit.png"
          title="Integrity"
        />
        <VisionCard
          src="/images/about-us/clientwithsuit.png"
          title="Professionalism"
        />
        <VisionCard
          src="/images/about-us/clientwithsuit.png"
          title="Client Focused"
        />
      </div>
    </div>
  );
}
