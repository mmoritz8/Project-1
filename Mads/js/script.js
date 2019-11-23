

var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=leo&?sign=cancer&?sign=sagittarius&?sign=libra&day=today",
	"method": "POST",
	"headers": {
		"x-rapidapi-host": "sameer-kumar-aztro-v1.p.rapidapi.com",
		"x-rapidapi-key": "a5fda4c82emsh1f5d00eeb5ef450p1dba09jsndd9e8455fd50",
		"content-type": "application/x-www-form-urlencoded"
	},
	"data": {}
}

= $.ajax(settings).done(function (response) {
	console.log(response);
});

