import { getReducedColor, getRandomColor } from "./randomColorGenerator.js";

const DEPTH = 3;

// Generating colors recursively for the children, based on the id
// "1" => ["1", "1.1", "1.2", "1.1.1", "1.1.2", "1.2.1", "1.2.2"]
// "1.2" => ["1.2", "1.2.1", "1.2.2"]
// "2.1.2" => ["2.1.2"]
const generateColors = (id, color = getRandomColor()) => {
  let remaining = DEPTH - id.split(".").length;
  let colors = { [id]: color };
  if (remaining > 0) {
    let next1 = id + ".1";
    let next2 = id + ".2";
    const reduced = getReducedColor(color);
    colors = {
      ...colors,
      ...generateColors(next1, reduced),
      ...generateColors(next2, reduced)
    };
  }
  return colors;
};

// sure looks recursive don't it

const reducer = (oldState = {}, action) => {
  if (action.type === "GENERATE_COLORS") {
    let newState = {
      ...oldState,
      ...generateColors(action.id)
    };
    return newState;
  }
  return oldState;
};

export default reducer;
