import React, {Component} from "react";
import {Route, Switch} from 'react-router-dom';
import {connect} from "react-redux";

import ErrorPage from "./components/errorPage/ErrorPage";
import MovieList from "./components/movieList/MovieList";
import MovieSingle from "./components/movieSingle/MovieSingle";
import MovieSingleEdit from "./components/movieSingleEdit/MovieSingleEdit";

import {getMovies} from "./ducks/MoviesReducer";

class RouterItems extends Component {
	componentDidMount() {
		this.props.getMovies();
	}
    render() {
        return(
	        <Switch>
		        <Route exact path="/dashboard" component={MovieList}/>
		        <Route exact path="/movies/:id" component={MovieSingle}/>
		        <Route path="/movies/:id/edit" component={MovieSingleEdit}/>
		        <Route path="*" component={ErrorPage}/>
	        </Switch>
        );
    }
}

const mapDispatchToProps = {
	getMovies
};

export default connect(null, mapDispatchToProps)(RouterItems);