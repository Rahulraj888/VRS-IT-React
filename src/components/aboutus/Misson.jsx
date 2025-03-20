import React from "react";
import "../../styles/aboutus.css";
import MissionCard from "./MissionCard";

export default function Mission() {
  return (
    <div className="missback">
      <h2>Company Mission</h2>
      <p>
        Fragmenting your Business and Academic needs, to Greater Heights, and at
        the same time, Leveraging those needs at a Customized Platform. In turn,
        we are keen to imbibe that so called, Digital Space, which is not only
        Accessible readily, but also, Flexible, Instantly.
      </p>
      <div className="row row-aboutus">
        <MissionCard
          title="Broader Array"
          description="Every Service works with profuse variations within the Quality and
              Quantity to be served."
        />
        <MissionCard
          title="Tailor Made"
          description="Serves every Client at the Spur of the Moment, needlessly of the
          Time, Manpower and Expense Factor."
        />
        <MissionCard
          title="Stupendous Quality"
          description=" Offering Stellar Quality at a Price, which is Feasible and the
          most Redefined Version of Technology."
        />
      </div>
    </div>
  );
}
