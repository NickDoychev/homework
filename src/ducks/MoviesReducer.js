import {handleFetch} from "../util/fetch";

const initialState = {
	singleItem: null,
	showPreloader: false,
	moviesArray: new Map(),
};

const GET_MOVIE = "GET_MOVIE";
const SHOW_PRELOADER = "SHOW_PRELOADER";
const GET_SINGLE_MOVIE = "GET_SINGLE_MOVIE";
const CHANGE_MOVIE = "CHANGE_MOVIE";

export const changeMovieInformation = (id, value, field) => ({
	type: CHANGE_MOVIE,
	id,
	value,
	field,
});

export const getMovies = () => dispatch => {
	handleFetch('marvel')
		.then(res => {
			dispatch({
				type: GET_MOVIE,
				res
			});
		})
		.catch(err => console.log(err));
	handleFetch('Ultron')
		.then(res => {
			dispatch({
				type: GET_MOVIE,
				res
			});
		})
		.catch(err => console.log(err));
	handleFetch('avengers')
		.then(res => {
			dispatch({
				type: GET_MOVIE,
				res
			});
		})
		.catch(err => console.log(err));
	handleFetch('infinity war')
		.then(res => {
			dispatch({
				type: GET_MOVIE,
				res
			});
		})
		.catch(err => console.log(err));
	handleFetch('dead')
		.then(res => {
			dispatch({
				type: GET_MOVIE,
				res
			});
		})
		.catch(err => console.log(err));
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {

		case GET_MOVIE:
			return {
				...state,
				moviesArray: state.moviesArray.set(action.res.imdbID, action.res),
			};

		case CHANGE_MOVIE:
			console.log(state);
			let movieItem = state.moviesArray.get(action.id);
			movieItem[action.field] = action.value;
			return {
				...state,
				moviesArray: state.moviesArray.set(action.id, movieItem)
			};

		case GET_SINGLE_MOVIE:
			return {
				...state,
				singleItem: action.res,
				showPreloader: false
			};

		case SHOW_PRELOADER:
			return {
				...state,
				showPreloader: true
			};

		default:
			return state;
	}
};
