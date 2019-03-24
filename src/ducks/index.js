import {combineReducers, createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";

import {reducer as moviesReducer} from "./MoviesReducer";


const reducer = combineReducers({
	moviesReducer,
});

export const store = createStore(reducer, applyMiddleware(thunk));
