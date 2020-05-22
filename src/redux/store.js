import React from "react";
import {createStore, applyMiddleware, combineReducers} from "redux";
import {persistStore, persistReducer, } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import reduxThunk from "redux-thunk";
import movieReducers from "./reducers/movieReducers";

const reducers = combineReducers({
    movieReducers
});
const persistConfig = {
    key: 'root',
    storage: AsyncStorage
  };

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(persistedReducer, applyMiddleware(reduxThunk));

const persistor = persistStore(store);

export {persistor, store};