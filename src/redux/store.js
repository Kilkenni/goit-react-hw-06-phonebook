import { configureStore } from "@reduxjs/toolkit";

import { contactReducer } from "./contacts/contacts-items";

const DUMMY_CONTACTS = [
  {id: 'KindLady', name: 'Athene Margoulis', number: '459-12-56'},
  {id: 'Nucl3arSnake', name: 'Francis Pritchard', number: '443-89-12'},
  {id: 'FlyGirl', name: 'Faridah Malik', number: '645-17-79'},
  {id: 'TyphoonMaster', name: 'Vasili Shevchenko', number: '227-91-26'},
];

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
  },
  preloadedState: {
    contacts: {
      items: DUMMY_CONTACTS,
      filter: "",
    }
  },
})