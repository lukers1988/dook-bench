import { combineReducers } from "redux";
import { userReducer } from "./modules/users/reducers";
import { postsReducer } from "./modules/posts/reducers";


const allReducers = combineReducers({ userReducer, postsReducer });

export default allReducers;
