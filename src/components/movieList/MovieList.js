import React, {Component} from "react";
import MovieItemContent from "../common/MovieItemContent";

import "./style.scss";
import {connect} from "react-redux";

class MovieList extends Component {

	render() {
		const {moviesState, moviesTitle, moviesMaxLength} = this.props;

		return (
			<div className={"movie-list"}>
				<header className="header">
					<h1>{moviesTitle ? moviesTitle : "List of movies"}</h1>
				</header>
				<div className={"wrapper"}>
					<div className={"movie-block"}>
						{
							moviesState.moviesArray && Array.from(moviesState.moviesArray.values()).map((item, index) =>
								(moviesMaxLength ? index < moviesMaxLength : index < moviesState.moviesArray.size) &&
								<div className={`movie-block--item`} key={item.imdbID}>
									<MovieItemContent
										title={item.Title}
										description={item.Plot}
										country={item.Country}
										genre={item.Genre}
										img={item.Poster}
										movieId={item.imdbID}
									/>
								</div>
							)
						}
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	moviesState: state.moviesReducer
});
const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);