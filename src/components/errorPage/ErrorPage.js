import React, {Component} from "react";
import {Link} from "react-router-dom";
import "./style.scss";

export default class ErrorPage extends Component {
	render() {
		return (
			<div className={"error-page"}>
				<h1>Error 404</h1>

				<p>Something go wrong.</p>

				<p><Link to={'/dashboard'}>Dashboard</Link></p>
			</div>
		);
	}
}