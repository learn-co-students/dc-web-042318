import { getReducedColor, getRandomColor } from "./randomColorGenerator.js";

const generateColors = id => {
  // if id is "1", need to add 2 more colors
  // if id is "2.1.2", need to add no more colors
  const count = 3 - id.split(".").length;
  const base = getRandomColor();
  let color = base;
  const colors = { [id]: base };
  for (let idx = 0; idx < count; idx++) {
    color = getReducedColor(color);
    const toAdd = `${id}.${new Array(idx).fill(1).join(".")}`;
    colors[toAdd] = color;
  }
  console.log(colors);
  return colors;
};

// sure looks recursive don't it

const reducer = (oldState = {}, action) => {
  if (action.type === "GENERATE_COLORS") {
    let newState = {
      ...oldState,
      ...generateColors(action.id)
    };
    console.log(newState);
    return newState;
  }
  return oldState;
};

export default reducer;
