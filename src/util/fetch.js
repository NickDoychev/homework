export const handleFetch = (url, i) => {
	const id = i ? `i=${i}` : "";
	const movieName = url ? `t=${url}` : "";
	return fetch(`https://www.omdbapi.com/?${id}${movieName}&apikey=2312e447`, {method: "GET"})
		.then(res => res.status === 200 && res.json())
};
