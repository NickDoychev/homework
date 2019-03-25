import {combineReducers, createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import { createLogger } from 'redux-logger'

import {reducer as moviesReducer} from "./MoviesReducer";

const logger = createLogger({
	// ...options
});

const reducer = combineReducers({
	moviesReducer,
});

export const store = createStore(reducer, applyMiddleware(logger, thunk));
