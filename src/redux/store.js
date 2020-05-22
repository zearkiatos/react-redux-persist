import React from "react";
import {createStore, applyMiddleware, combineReducers} from "redux";
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import reduxThunk from "redux-thunk";
import movieReducers from "./reducers/movieReducers";

const reducers = combineReducers({
    movieReducers
});
const persistConfig = {
    key: 'movies',
    storage
  };

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(persistedReducer, applyMiddleware(reduxThunk));

const persistor = persistStore(store);

export {persistor, store};