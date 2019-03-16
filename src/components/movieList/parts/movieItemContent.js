import React from "react";
import editIcon from "../../images/icons/edit.png";

export default function MenuItemContent({title, description, img, showFrom}) {

	return (
		<div className="movie-block--content">
			<div className="movie-block--img" style={{backgroundImage: `url(${img})`}}/>
			<div className="movie-block--edit-icon" onClick={showFrom}>
				<img src={editIcon} alt="edit icon"/>
			</div>
			<div className="movie-block--title-description">
				<h3 className="movie-block--title">{title}</h3>
				<div className="movie-block--description">{description}</div>
			</div>
		</div>
	);
}