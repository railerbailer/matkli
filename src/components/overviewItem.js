import React from "react";
import { Link } from "react-router-dom";
function OverviewItem({ foods }) {
  return Object.entries(foods).map(item => {
    const title = item[0];
    const data = item[1];
    if (!data.content.bild) {
      console.log(title);
    }
    return (
      <div key={title} className="overview-item">
        <Link to={`/${title}`}>
          <label>{title}</label>
          <div dangerouslySetInnerHTML={{ __html: data.content.bild }} />
        </Link>
      </div>
    );
  });
}

export default OverviewItem;
