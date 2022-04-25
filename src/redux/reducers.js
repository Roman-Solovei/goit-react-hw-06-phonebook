import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { addContact, delContact, contactFilter } from './actions'


const persistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};


const filterReducer = createReducer('', {
    [contactFilter]: (state, action) => action.payload,
});


const contactReducer = createReducer([], {
    [addContact]: (state, action) => [...state, action.payload],
    [delContact]: (state, action) => state.filter(contact => contact.id !== action.payload),
});



const storageReducer = combineReducers({ items: contactReducer, filter: filterReducer });


export const persReducer = persistReducer(persistConfig, storageReducer);