export const handleFetch = (url) => {
	return fetch(`https://www.omdbapi.com/?t=${url}&apikey=BanMePlz`, {method: "GET"})
		.then(res => res.status === 200 && res.json())
};
