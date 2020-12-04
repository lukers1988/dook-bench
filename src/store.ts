import allReducers from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore } from "redux";

const store = createStore(allReducers, composeWithDevTools());

export default store;
