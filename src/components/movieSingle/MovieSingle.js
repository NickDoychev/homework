import React, {Component} from "react";
import {connect} from "react-redux"
import {Link} from "react-router-dom";

import "./style.scss";

import MovieList from "../movieList/MovieList";
import MenuItemContent from "../common/MovieItemContent";
import Preloader from "../common/Preloader";

class MovieSingle extends Component {
	render() {
		const {showPreloader, moviesState} = this.props;
		const {id} = this.props.match.params;

		let singleItem = moviesState.moviesArray && moviesState.moviesArray.get(id);

		return (
			<div className={"movie-block--single"}>
				<Preloader open={showPreloader}/>
				<div className={"header"}>
					<h1>{singleItem && singleItem.Title}</h1>
				</div>
				<div className="wrapper">
					{
						singleItem &&
						<MenuItemContent
							className={"movie-block--content-single"}
							movieId={singleItem.imdbID}
							description={singleItem.Plot}
							country={singleItem.Country}
							genre={singleItem.Genre}
							img={singleItem.Poster}
							ratings={singleItem.Ratings}
							actors={singleItem.Actors}
							language={singleItem.Language}
							edit
						/>
					}
					<MovieList
						moviesTitle={"See also"}
						moviesMaxLength={3}
					/>
					<div className="link-to-dashboard-block">
						<Link to={"/dashboard"} className={"btn"}>See all movies</Link>
					</div>
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
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieSingle);