import React from "react";
import MovieItem from "./parts/movieItem";

import "./style.scss";

export default function MovieList(props) {
	return (
		<div className={"wrapper"}>
			<div className={"movie-block"}>
				{
					props.movieList.map((item) =>
						<MovieItem
							key={item.id}
							title={item.title}
							description={item.description}
							img={item.img}
						/>
					)
				}
			</div>
		</div>
	);
}