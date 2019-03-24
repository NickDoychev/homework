import React from "react";
import editIcon from "../../images/icons/edit.png";

export default function MenuItemContent({title, description, img, showFrom, country, genre}) {

	return (
		<div className="movie-block--content">
			<div className="movie-block--img" style={{backgroundImage: `url(${img})`}}/>
			<div className="movie-block--edit-icon" onClick={showFrom}>
				<img src={editIcon} alt="edit icon"/>
			</div>
			<div className="movie-block--title-description">
				{
					title && title.length > 0 &&
					<h3 className="movie-block--title">{title}</h3>
				}
				{
					description && description.length > 0 &&
					<p className="movie-block--description">{description}</p>
				}
				{
					country && country.length > 0 &&
					<p className="movie-block--country"><strong>Country:</strong> {country}</p>
				}
				{
					genre && genre.length > 0 &&
					<p className="movie-block--genre"><strong>Genre:</strong> {genre}</p>
				}
			</div>
		</div>
	);
}