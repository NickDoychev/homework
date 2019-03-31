import React from "react";
import {Link} from "react-router-dom";
import editIcon from "../images/icons/edit.png";
import movieImg from "../images/img/picture.png";

function CheckTextProps(props) {
	if (props.propsName && props.propsName.length > 0) {
		return props.children;
	}
	return true;
}

export default function MenuItemContent(props) {
	const {
		title,
		description,
		img,
		country,
		genre,
		movieId,
		edit,
		ratings,
		className,
		actors,
		language,
	} = props;
	return (
		<div className={`movie-block--content ${className ? className : ""}`}>
			<Link to={`/movies/${movieId}`} className="movie-block--img"
			      style={{backgroundImage: `url(${img ? img : movieImg})`}}/>
			{edit && <Link to={`/movies/${movieId}/edit`}>
				<div className="movie-block--edit-icon"><img src={editIcon} alt="edit icon"/></div>
			</Link>
			}
			<div className="movie-block--title-description">
				<CheckTextProps propsName={title}>
					<h3 className="movie-block--title"><Link to={`/movies/${movieId}`}>{title}</Link></h3>
				</CheckTextProps>
				<CheckTextProps propsName={description}>
					<p className="movie-block--description">{description}</p>
				</CheckTextProps>
				<CheckTextProps propsName={actors}>
					<p><strong>Actors:</strong> {actors}</p>
				</CheckTextProps>
				<CheckTextProps propsName={language}>
					<p><strong>Language:</strong> {language}</p>
				</CheckTextProps>
				<CheckTextProps propsName={country}>
					<p><strong>Country:</strong> {country}</p>
				</CheckTextProps>
				<CheckTextProps propsName={genre}>
					<p><strong>Genre:</strong> {genre}</p>
				</CheckTextProps>
				{
					ratings && ratings.map(
						item => <div key={item.Source} className={"movie-block--rating-item"}>
							<strong>{item.Source}:</strong> {item.Value}</div>
					)
				}
			</div>
		</div>
	);
}