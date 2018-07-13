import { combineReducers } from "redux";
// STATE:
// CurrentUser *
//   Profile photo
//   Profile info
// Posts *
// SearchTerm

// initial?
// still have to fetch this info from somewhere

const mockUser = {
  name: "Rob",
  imageSrc:
    "https://assets3.thrillist.com/v1/image/2754967/size/tmg-article_tall;jpeg_quality=20.jpg"
};

const initialState = {
  currentUser: null, // null
  posts: [], // mapping through this
  searchTerm: ""
};

const currentUserReducer = (oldCurrentUser = null, action) => {
  switch (action.type) {
    case "FETCHED_PROFILES":
      return action.profiles[0];
    case "FETCHING_PROFILE": {
      return null;
    }
  }
  return oldCurrentUser;
};

const postsReducer = () => {
  return null;
};

const searchTermReducer = () => {
  return "";
};

const rootReducer = combineReducers({
  posts: postsReducer,
  searchTerm: searchTermReducer,
  currentUser: currentUserReducer
});

export default rootReducer;
