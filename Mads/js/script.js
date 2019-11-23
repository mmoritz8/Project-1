var a1 = $.ajax({}),
	a2 = $.ajax({}),
	a3 = $.ajax({}),
	a4 = $.ajax({}),
	a5 = $.ajax({}),
	a6 = $.ajax({}),
	a7 = $.ajax({}),
	a8 = $.ajax({}),
	a9 = $.ajax({}),
	a10 = $.ajax({}),
	a11 = $.ajax({}),
	a12 = $.ajax({});

var settings = {
	"async": true,
	"crossDomain": true,
	"url": "queryURL",
	"method": "POST",
	"headers": {
		"x-rapidapi-host": "sameer-kumar-aztro-v1.p.rapidapi.com",
		"x-rapidapi-key": "3200c9fad7mshfe59a992947dfa3p1a1ce7jsnea5b41ff8c0d",
		"content-type": "application/x-www-form-urlencoded"
	},
	"data": {}
}

$.ajax(settings).done(function (response) {
	console.log(response);
});





var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=cancer&day=today",
	"method": "POST",
	"headers": {
		"x-rapidapi-host": "sameer-kumar-aztro-v1.p.rapidapi.com",
		"x-rapidapi-key": "3200c9fad7mshfe59a992947dfa3p1a1ce7jsnea5b41ff8c0d",
		"content-type": "application/x-www-form-urlencoded"
	},
	"data": {}
}

$.ajax(settings).done(function (response) {
	console.log(response);
});


var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=cancer&day=today",
	"method": "POST",
	"headers": {
		"x-rapidapi-host": "sameer-kumar-aztro-v1.p.rapidapi.com",
		"x-rapidapi-key": "3200c9fad7mshfe59a992947dfa3p1a1ce7jsnea5b41ff8c0d",
		"content-type": "application/x-www-form-urlencoded"
	},
	"data": {}
}

$.ajax(settings).done(function (response) {
	console.log(response);
	var results = response.data;
});
