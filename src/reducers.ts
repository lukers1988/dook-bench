import { combineReducers } from "redux";
import { postsReducer } from "./modules/posts/reducers";


const allReducers = combineReducers({ postsReducer });

export default allReducers;
