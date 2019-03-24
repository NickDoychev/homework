import React, {Component, Fragment} from 'react';
import './App.scss';

import MovieList from "./movieList/MovieList";

class App extends Component {
	render() {
		return (
			<Fragment>
				<header className="header">
					<h1>List of movies</h1>
				</header>
				<MovieList/>
			</Fragment>
		);
	}
}

export default App;
