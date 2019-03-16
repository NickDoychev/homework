import React, {Component} from "react";
import editIcon from "../../images/icons/edit-not-black.png";

export default class MovieItemForm extends Component {
	state = {
		title: this.props.title,
		description: this.props.description,
		img: this.props.img,
	};

	changeTitle = (e) => {
		this.setState({title: e.target.value})
	};

	changeDescription = (e) => {
		this.setState({description: e.target.value})
	};

	changeImage = (event) => {
		let file = URL.createObjectURL(event.target.files[0]);
		this.setState({img: file});
	};

	cancelForm = () => {
		this.setState({title: this.props.title, description: this.props.description});
		this.props.showFrom();
	};
	saveFrom = () => {
		this.props.changeTitle(this.state.title);
		this.props.changeDescription(this.state.description);
		this.props.changeImage(this.state.img);
		this.props.showFrom()
	};

	render() {
		return (
			<div className="movie-block--form">
				<form noValidate>
					<div className="default-input-title">Image of post</div>
					<div className="movie-block--img movie-block--form-img" style={{backgroundImage: `url(${this.state.img})`}}>
						<div className="movie-block--form-input-block">
							<div className="movie-block--form-icon">
								<img src={editIcon} alt="edit icon"/>
							</div>
							<input type="file" onChange={this.changeImage}/>
						</div>
					</div>
					<div className="default-input-title">Title of post</div>
					<input type="text" value={this.state.title} onChange={this.changeTitle} name={"title"}
					       className={"default-input"}/>
					<div className="default-input-title">Description of post</div>
					<textarea value={this.state.description} onChange={this.changeDescription} name={"description"}
					          className={"default-input textarea"} cols="0" rows="0"/>
				</form>
				<div className="btns-block">
					<div className="btn" onClick={this.cancelForm}>cancel</div>
					<div className="btn" onClick={this.saveFrom}>save</div>
				</div>
			</div>
		);
	}
}