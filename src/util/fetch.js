export const handleFetch = (url, method) => {
	return fetch(`http://www.omdbapi.com/?t=${url}&apikey=BanMePlz`, {method: "GET"})
		.then(res => res.status === 200 && res.json())
};
