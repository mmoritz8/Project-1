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