
$.ajax({
     url: 'https://newsapi.org/v2/everything?q=+local+news+austin+texas&from=2019-11-25&to=2019-11-25&sortBy=popularity&pageSize=2&apiKey=d9da22da0a2347a58fea3976369ee1f1',
     method: "GET",
}).then(function (response) {
     console.log(this);
     var results = response.data;
     var title = document.getElementById("news-title-2");
     $("#news-title-2").text(response.articles[0].title);


     var summary = document.getElementById("news-sum-2");
     $("#news-sum-2").text(response.articles[0].description);


          var urls = document.getElementById("news-url-2");
     $("#news-url-2").text(response.articles[0].url);

     
})

var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://api.weatherbit.io/v2.0/current?city=austin,tx&key=a5fda4c82emsh1f5d00eeb5ef450p1dba09jsndd9e8455fd50",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "weatherbit-v1-mashape.p.rapidapi.com",
		"x-rapidapi-key": "a5fda4c82emsh1f5d00eeb5ef450p1dba09jsndd9e8455fd50"
	}
}

$.ajax(settings).done(function (response) {
     console.log(response);
     var cityname = document.getElementById("com-title-3");
     $("#com-title-3").text(response.city_name + response.state_code);
     var weather = document.getElementById("com-sum-3");
     $("#com-sum-3").text(response.data[9].temp + 'F');
     
});

var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://moon-phase.p.rapidapi.com/moon_phase/",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "moon-phase.p.rapidapi.com",
		"x-rapidapi-key": "a5fda4c82emsh1f5d00eeb5ef450p1dba09jsndd9e8455fd50"
	}
}

$.ajax(settings).done(function (response) {
     console.log(response);
     var phase = document.getElementById("moon-phase");
     var moon = document.getElementById("moonInfo");
     $(moon).text(response.titleText);
});

var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://150000-quotes.p.rapidapi.com/keyword/Life",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "150000-quotes.p.rapidapi.com",
		"x-rapidapi-key": "a5fda4c82emsh1f5d00eeb5ef450p1dba09jsndd9e8455fd50"
	}
}

$.ajax(settings).done(function (response) {
     console.log(response);
     var message = document.getElementById("com-title-5");
     $(message).empty();
     $(message).text(response.message);
     var author = document.getElementById("com-sum-5");
     $(author).empty();
     $(author).text(response.author);
});