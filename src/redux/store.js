import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { persReducer } from './reducers'

export const store = configureStore({
    reducer: {
        contacts: persReducer,
    },
    middleware(getDefaultMiddleware) {
        return getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        });
    },
});

export const persistor = persistStore(store);

// export default { store, persistor }

// const contactSlice = createSlice({
//     name: 'contacts',
//     initialState: [
//         { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//         { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//         { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//         { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     reducers: {
//         items([], {
//   [actions.addContact]: (state, { payload }) => [...state, payload],
//   [actions.deleteContact]: (state, { payload }) =>
//     state.filter(contact => contact.id !== payload),
// });
//     }
// })
