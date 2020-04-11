import { combineReducers } from "redux";

import articleReducer from "./articleReducer";
import tagsReducer from "./tagsReducer";
import userReducer from "./userReducer";

export let rootReducer = combineReducers({
  userReducer: userReducer,
  articleReducer: articleReducer,
  tagsReducer: tagsReducer,
});
