import React from "react";
import OverviewItem from "./overviewItem";
import data from "../data/data.json";

function Overview() {
  return (
    <div className="overview-item">
      <OverviewItem foods={data} />
    </div>
  );
}

export default Overview;
