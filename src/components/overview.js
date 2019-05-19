import React from "react";
import OverviewItem from "./overviewItem";
import data from "../data/new.json";

function Overview() {
  return (
    <div className="overview-item">
      <OverviewItem foods={data} />
    </div>
  );
}

export default Overview;
