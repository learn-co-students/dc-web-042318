import React from "react";
import PaintingCard from "./painting_card";

// open question - where does the paintings data come from?
// const paintings = [{ number: 1 }, { number: 2 }, { number: 3 }, { number: 4 }];

// maybe map
// what does forEach return?

// React.createElement("ul", {}, [
//   React.createElement(PaintingCard),
//   React.createElement(PaintingCard),
//   React.createElement(PaintingCard),
//   React.createElement(PaintingCard)
// ]);

const PaintingsList = props => {
  return (
    <ul>
      {props.paintings.map(painting => (
        <PaintingCard key={painting.id} painting={painting} />
      ))}
    </ul>
  );
};

export default PaintingsList;
