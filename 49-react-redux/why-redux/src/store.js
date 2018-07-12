import { createStore } from "redux";
import reducer from "./reducer";

const store = createStore(reducer); // alternate: initial state as second arg

export default store;
