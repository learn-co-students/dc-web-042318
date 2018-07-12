// state: { count: 0 }

// Add a +3 button
// Add a -5 button

// normal pattern for initial reducer state

// { count: 6, name: 'rob' }
// if we returned { count: 7 }, Problem!!

const reducer = (oldState = { count: 0 }, action) => {
  console.log(oldState, action);
  let newState = oldState;
  if (action.type === "increment") {
    newState = {
      count: oldState.count + action.amount
    };
  } else if (action.type === "decrement") {
    newState = {
      count: oldState.count - action.amount
    };
  }
  return newState;
};

export default reducer;
