import { combineReducers } from "@reduxjs/toolkit";

import filterReducer from "./filter";
import itemsReducer from "./items";

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
})