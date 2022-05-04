import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { persistStore, persistReducer } from 'redux-persist';
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import contactsReducer from "./contacts";
import itemsReducer from "./contacts/items";
import filterReducer from "./contacts/filter";

const DUMMY_CONTACTS = [
  {id: 'KindLady', name: 'Athene Margoulis', number: '459-12-56'},
  {id: 'Nucl3arSnake', name: 'Francis Pritchard', number: '443-89-12'},
  {id: 'FlyGirl', name: 'Faridah Malik', number: '645-17-79'},
  {id: 'TyphoonMaster', name: 'Vasili Shevchenko', number: '227-91-26'},
];

const persistConfig = {
  key: 'root',
  storage,
}

const persistedContactsReducer = persistReducer(persistConfig, contactsReducer);

export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  preloadedState: {
    contacts: {
      //items: DUMMY_CONTACTS,
      filter: "",
    }
  },
});

export const persistor = persistStore(store);