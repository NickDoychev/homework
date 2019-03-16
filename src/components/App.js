import React, {Component, Fragment} from 'react';
import './App.scss';

import MovieList from "./movieList";
import {listWithMovies} from "./AreaWithMovies";

class App extends Component {
	render() {
		return (
			<Fragment>
				<header className="header">
					<h1>List of films</h1>
				</header>
				<MovieList movieList={listWithMovies}/>
			</Fragment>
		);
	}
}

export default App;
