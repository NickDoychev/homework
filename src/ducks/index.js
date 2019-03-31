import {combineReducers, createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {createLogger} from 'redux-logger'
import {connectRouter} from 'connected-react-router';
import history from "../history";

import {reducer as moviesReducer} from "./MoviesReducer";

const logger = createLogger({});

const reducer = combineReducers({
	router: connectRouter(history),
	moviesReducer,
});

export const store = createStore(reducer, applyMiddleware(logger, thunk));
