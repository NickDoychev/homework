import React, {Component} from "react";
import MovieItemForm from "./movieItemForm";
import MenuItemContent from "./movieItemContent";

export default class MovieItem extends Component {
	state = {
		title: this.props.title,
		description: this.props.description,
		img: this.props.img,
		showForm: false,
	};

	showFrom = () => {
		this.setState(prevState => ({showForm: !prevState.showForm}));
	};

	changeTitle = (e) => {
		this.setState({title: e});
	};

	changeDescription = (e) => {
		this.setState({description: e});
	};

	changeImage = (e) => {
		this.setState({img: e});
	};

	render() {
		return (
			<div className={`movie-block--item ${this.state.showForm ? "show-block" : ""}`}>

				<MenuItemContent
					title={this.state.title}
					description={this.state.description}
					img={this.state.img}
					showFrom={this.showFrom}
				/>
				<MovieItemForm
					title={this.state.title}
					description={this.state.description}
					img={this.state.img}
					changeTitle={this.changeTitle}
					changeDescription={this.changeDescription}
					changeImage={this.changeImage}
					showFrom={this.showFrom}
				/>
			</div>
		);
	}
}