import React from "react";

const PaintingCard = ({ painting }) => {
  return (
    <div className="ui card">
      <div style={{ margin: "auto" }}>
        <img src={painting.image} />
      </div>
      <div>
        {painting.title} by {painting.artist.name}
      </div>
      <div>{painting.date}</div>
      <div>
        {painting.dimensions.width} in. x {painting.dimensions.height} in.
      </div>
    </div>
  );
};

export default PaintingCard;
