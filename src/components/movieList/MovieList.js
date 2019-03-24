import React, {Component} from "react";
import MovieItem from "./parts/movieItem";
import {getMovies, changeMovieInformation} from "../../ducks/MoviesReducer";

import "./style.scss";
import {connect} from "react-redux";

class MovieList extends Component {
	componentDidMount() {
		this.props.getMovies();
	};

	render() {
		const {moviesState, changeMovieInformation} = this.props;

		return (
			<div className={"wrapper"}>
				<div className={"movie-block"}>
					{
						moviesState.moviesArray.size > 0 && Array.from(moviesState.moviesArray.values()).map((item) =>
							<MovieItem
								key={item.imdbID}
								movieId={item.imdbID}
								title={item.Title}
								description={item.Plot}
								country={item.Country}
								genre={item.Genre}
								img={item.Poster}
								changeMovieInformation={changeMovieInformation}
							/>
						)
					}
				</div>
			</div>
		);
	}

}

const mapStateToProps = state => ({
	moviesState: state.moviesReducer
});
const mapDispatchToProps = {
	getMovies,
	changeMovieInformation
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);