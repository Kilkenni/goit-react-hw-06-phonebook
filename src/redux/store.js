import { combineReducers, configureStore } from "@reduxjs/toolkit";

import itemsReducer from "./contacts/items";
import filterReducer from "./contacts/filter";

const DUMMY_CONTACTS = [
  {id: 'KindLady', name: 'Athene Margoulis', number: '459-12-56'},
  {id: 'Nucl3arSnake', name: 'Francis Pritchard', number: '443-89-12'},
  {id: 'FlyGirl', name: 'Faridah Malik', number: '645-17-79'},
  {id: 'TyphoonMaster', name: 'Vasili Shevchenko', number: '227-91-26'},
];

// const contactsReducer = combineReducers({
//   items: itemsReducer,
//   filter: filterReducer,
// });

export const store = configureStore({
  reducer: {
    contacts: combineReducers({
      items: itemsReducer,
      filter: filterReducer,
    }),
  },
  preloadedState: {
    contacts: {
      items: DUMMY_CONTACTS,
      filter: "",
    }
  },
})