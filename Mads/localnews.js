$(document).ready(function () {

     var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://realtymole-rental-estimate-v1.p.rapidapi.com/rentalPrice?address=2405%20Robert%20Dedman%20Dr%252C%20Austin%252C%20TX&bedrooms=1&bathrooms=2&propertyType=Single%20Family&squareFootage=1600&compCount=5",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "realtymole-rental-estimate-v1.p.rapidapi.com",
		"x-rapidapi-key": "a5fda4c82emsh1f5d00eeb5ef450p1dba09jsndd9e8455fd50"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);
});
     function newsQuery(url) {
          $.ajax({
               url: 'https://newsapi.org/v2/everything?sortBy=relevancy&q=+austin+texas+local+news&pageSize=1&apiKey=d9da22da0a2347a58fea3976369ee1f1',
               method: "GET",
          }).then(function (newsData) {
               for (var i = 0; i < newsTitles.length; i++) {

                    console.log(this);
                    console.log(response.data);
                    var results = response.data;
                    var targetOne = document.getElementById("target");
                    $('#firstImg').empty();
                    $('.first-title').empty();
                    $('.firstUrl').empty();
                    $('.first-author').empty();
                    $('.first-title').empty();
                    $('.first-desc').empty();

                    $('.first-title').text(newsData.articles[0].title);
                    $('.first-desc').text(newsData.articles[0].description);
                    $('.firstUrl').attr('src', newsData.articles[0].urlToImage);

               }
          })
     }
});