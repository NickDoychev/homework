import React, {Component} from "react";
import MovieItemForm from "./movieItemForm";
import MenuItemContent from "./movieItemContent";

export default class MovieItem extends Component {
	state = {
		showForm: false,
	};

	showFrom = () => {
		this.setState(prevState => ({showForm: !prevState.showForm}));
	};

	render() {
		const {title, description, img, country, genre, changeMovieInformation, movieId} = this.props;
		return (
			<div className={`movie-block--item ${this.state.showForm ? "show-block" : ""}`}>
				<MenuItemContent
					title={title}
					description={description}
					country={country}
					genre={genre}
					img={img}
					showFrom={this.showFrom}
				/>
				<MovieItemForm
					title={title}
					description={description}
					country={country}
					genre={genre}
					img={img}
					movieId={movieId}
					changeMovieInformation={changeMovieInformation}
					showFrom={this.showFrom}
				/>
			</div>
		);
	}
}

