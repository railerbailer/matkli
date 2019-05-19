import React from "react";
import data from "../data/new.json";

function ItemDescription(props) {
  const param = props.match.params.foodName;
  const { content, category, season, generell, livsmedelsdata } = data[param];
  const { bild, referenser, beskrivning } = content;
  const title = param;
  const footprint =
    generell &&
    Object.entries(generell).map(data => {
      const { footprint, description = "Ingen beskrivning tillgänglig", räknebas } = data[1];

      return (
        <div className="description-footprint">
          <div className="description-footprint-country">{data[0]}</div>
          <div className="description-footprint-value">
            {footprint} {räknebas}
          </div>
          <div className="description-footprint-description">Annan info: {description}</div>
        </div>
      );
    });
  const seasons =
    season &&
    season.map(theSeason => {
      const seasonValues = Object.entries(theSeason);
      const monthAndStrength = seasonValues[0];
      const seasonColor = { weak: "red", strong: "green", medium: "yellow" };
      return (
        <div key={monthAndStrength[0]} className="description-season">
          <div
            style={{ color: seasonColor[monthAndStrength[1]] }}
            className="description-season-monthAndStrength"
          >
            {monthAndStrength[0]}
          </div>
        </div>
      );
    });
  livsmedelsdata && console.log(livsmedelsdata.Namn);
  const nutrition =
    livsmedelsdata &&
    livsmedelsdata.Naringsvarden.Naringsvarde.map(item => {
      const { Namn, Varde, Enhet } = item;

      return (
        <div key={Namn} className="description-nutrition">
          <div>{Namn}: </div>
          <div>
            {Varde}
            {Enhet}
          </div>
        </div>
      );
    });
  return (
    <article className="description">
      <button onClick={() => props.history.goBack()}>Back</button>
      {nutrition}
      <h1 className="description-title">{title}</h1>
      <h2 className="description-category">{category}</h2>
      {footprint}
      <div className="description-image" dangerouslySetInnerHTML={{ __html: bild }} />
      <p className="description-description">{beskrivning}</p>
      {seasons}
      <div className="description-references" dangerouslySetInnerHTML={{ __html: referenser }} />
    </article>
  );
}

export default ItemDescription;
