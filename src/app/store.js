import { combineReducers, configureStore } from '@reduxjs/toolkit';
import heartsReducer from '../features/hearts/heartsSlice';
import levelReducer from '../features/level/levelSlice';
import countryGuessListReducer from '../features/countryGuesses/countryGuessListSlice';
import lastPlayedReducer from '../features/lastPlayed/lastPlayedSlice';
import countryVictoryReducer from '../features/level/countryVictorySlice';

import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
  hearts: heartsReducer,
  level: levelReducer,
  countryGuessList: countryGuessListReducer,
  lastPlayed: lastPlayedReducer,
  countryVictory: countryVictoryReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export const persistor = persistStore(store);
