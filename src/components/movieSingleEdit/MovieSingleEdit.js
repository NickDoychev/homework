import React, {Component} from "react";
import {connect} from "react-redux"
import {getSingleMovie, changeMovieInformation} from "../../ducks/MoviesReducer";

import MovieItemFormEdit from "../common/MovieItemFormEdit";
import Preloader from "../common/Preloader";

class MovieSingleEdit extends Component {
	render() {
		const {showPreloader, changeMovieInformation, moviesState} = this.props;
		const {id} = this.props.match.params;

		let singleItem = moviesState.moviesArray && moviesState.moviesArray.get(id);

		return (
			<div className={"movie-block--single"}>
				<Preloader open={showPreloader}/>
				<div className={"header"}>
					<h1>Edit {singleItem && singleItem.Title}</h1>
				</div>
				<div className="wrapper">
					{singleItem && <MovieItemFormEdit
						title={singleItem.Title}
						description={singleItem.Plot}
						country={singleItem.Country}
						genre={singleItem.Genre}
						img={singleItem.Poster}
						movieId={singleItem.imdbID}
						changeMovieInformation={changeMovieInformation}
					/>
					}
				</div>
			</div>
		);
	}
}


const mapStateToProps = state => ({
	moviesState: state.moviesReducer,
	singleItem: state.moviesReducer.singleItem,
	showPreloader: state.moviesReducer.showPreloader
});

const mapDispatchToProps = {
	getSingleMovie,
	changeMovieInformation,
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieSingleEdit);