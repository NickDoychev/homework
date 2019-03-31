import React, {Component} from "react";
import "./preloader.scss";

export default class Preloader extends Component {
    render() {
        return(
            <div className={`preloader ${this.props.open ? "show" : ""}`}>
	            <div className="loader" />
            </div>
        );
    }
}