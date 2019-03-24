import React, {Component} from "react";
import editIcon from "../../images/icons/edit-not-black.png";
import DefaultInputAndTextarea from "../../../globalComponents/DefaultInputAndTextarea";

export default class MovieItemForm extends Component {
	state = {
		title: this.props.title,
		description: this.props.description,
		img: this.props.img,
		country: this.props.country,
		genre: this.props.genre,
	};

	changeImage = (event) => {
		let file = URL.createObjectURL(event.target.files[0]);
		this.setState({img: file});
	};

	cancelForm = () => {
		this.setState({
			title: this.props.title,
			description: this.props.description,
			img: this.props.img,
			country: this.props.country,
			genre: this.props.genre,
		});
		this.props.showFrom();
	};

	changeTextInput = (e) => {
		this.setState({[e.target.name]: e.target.value});
	};

	saveFrom = () => {
		const {movieId, changeMovieInformation} = this.props;
		changeMovieInformation(movieId, this.state.title, "Title");
		changeMovieInformation(movieId, this.state.description, "Plot");
		changeMovieInformation(movieId, this.state.country, "Country");
		changeMovieInformation(movieId, this.state.genre, "Genre");
		changeMovieInformation(movieId, this.state.img, "Poster");
		this.props.showFrom()
	};

	render() {
		return (
			<div className="movie-block--form">
				<form noValidate>
					<div className="default-input-title">Image of post</div>
					<div className="movie-block--img movie-block--form-img"
					     style={{backgroundImage: `url(${this.state.img})`}}>
						<div className="movie-block--form-input-block">
							<div className="movie-block--form-icon">
								<img src={editIcon} alt="edit icon"/>
							</div>
							<input type="file" onChange={this.changeImage}/>
						</div>
					</div>
					<DefaultInputAndTextarea
						inputValue={this.state.title}
						inputName={"title"}
						inputChange={this.changeTextInput}
						inputTitle={"Title of post"}
					/>
					<div className="movie-block--two-input">
						<DefaultInputAndTextarea
							inputValue={this.state.country}
							inputName={"country"}
							inputChange={this.changeTextInput}
							inputTitle={"Country"}
						/>
						<DefaultInputAndTextarea
							inputValue={this.state.genre}
							inputName={"genre"}
							inputChange={this.changeTextInput}
							inputTitle={"Genre"}
						/>
					</div>
					<DefaultInputAndTextarea
						inputValue={this.state.description}
						inputName={"description"}
						inputChange={this.changeTextInput}
						inputTitle={"Description of post"}
						textarea
					/>
				</form>
				<div className="btns-block">
					<div className="btn" onClick={this.cancelForm}>cancel</div>
					<div className="btn" onClick={this.saveFrom}>save</div>
				</div>
			</div>
		);
	}
}