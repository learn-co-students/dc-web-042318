// only has access to what's passed in
const url = "http://localhost:3000/profiles";

//       mount()
//         |
//     dispatch(() => {})
//         |                     \
// dispatch({ type: "FETCHING" })    dispatch({type: "FETCHED"})

const loadProfile = () => dispatch => {
  dispatch({ type: "FETCHING_PROFILE" });
  fetch(url)
    .then(resp => resp.json())
    .then(profiles => dispatch({ type: "FETCHED_PROFILES", profiles }));
};

export { loadProfile };
