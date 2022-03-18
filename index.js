fetch("https://currency-exchange.p.rapidapi.com/exchange?from=SGD&to=MYR", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "currency-exchange.p.rapidapi.com",
		"x-rapidapi-key": "f7e6bb3797mshd2ace5b23f0447dp16e2e8jsne644dd13656d"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});