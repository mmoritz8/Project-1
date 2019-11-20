var newsApiKey = "ce38e2eb001e4bcda09aab86ee29f490";
var newsApiURL = `https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=${newsApiKey}`;
var moviesURL = `https://newsapi.org/v2/everything?q=+movies&domains=collider.com&apiKey=${newsApiKey}`;
var musicURL = `https://newsapi.org/v2/everything?q=+music&domains=pitchfork.com&apiKey=${newsApiKey}`;
var artURL = `https://newsapi.org/v2/everything?q=+artist&domains=thisiscolossal.com&apiKey=${newsApiKey}`;
var articleArray = [];

var headlineLoad = function(){

$.ajax({
    url: newsApiURL,
    method: "GET"
}).then(function(response) {
    // console.log(response);
    $(".headline-img").empty();
    $(".headline-img").append("<img>").attr("src", response.articles[0].urlToImage); //change index of articles to [i] when this is in the for loop using other url/ajax.
    $(".headline-title").empty();
    $(".headline-title").append(response.articles[0].title);
    $(".headline-sum").empty();
    $(".headline-sum").append(response.articles[0].description);
})
}
headlineLoad();

    // movie ajax call
$.ajax({
    url: moviesURL,
    method: "GET"
}).then(function(response) {
    articleArray = articleSearch(response);
    movieAppender(articleArray);
    });

//     // music ajax call
$.ajax({
    url: musicURL,
    method: "GET"
}).then(function(response) {
    articleArray = articleSearch(response);
    musicAppender(articleArray);
    });

    // art ajax call
$.ajax({
    url: artURL,
    method: "GET"
}).then(function(response) {
    articleArray = articleSearch(response);
    artAppender(articleArray);
    });



    // function to iterate through articles for each url's api call
var articleSearch = function(response){
    var REsponse = response
    var results = [];
    for (i = 0; i < 3; i++) {
        if (i === 0){
            results.push(REsponse.articles[i]); 
        }
        if (i === 1) {
          results.push(REsponse.articles[i]);
        };
        if (i === 2) {
          results.push(REsponse.articles[i]);
        }
    }
    // console.log(results);
    return results;
}             

var movieAppender = function(x) {
    
    for (i = 0; i < x.length; i++) {
        $(`#movie-img-${i}`).empty();
        $(`#movie-img-${i}`).append("<img>").attr("src", x[i].urlToImage);
        $(`#movie-title-${i}`).empty();
        $(`#movie-title-${i}`).append(x[i].title);
        $(`#movie-sum-${i}`).empty();
        $(`#movie-sum-${i}`).append(x[i].description);
        // console.log((x[i].title));
    }
}

var musicAppender = function(x) {
    
    for (i = 0; i < x.length; i++) {
        $(`#music-img-${i}`).empty();
        $(`#music-img-${i}`).append("<img>").attr("src", x[i].urlToImage);
        $(`#music-title-${i}`).empty();
        $(`#music-title-${i}`).append(x[i].title);
        $(`#music-sum-${i}`).empty();
        $(`#music-sum-${i}`).append(x[i].description);
        // console.log((x[i].title));
    }
}

var artAppender = function(x) {
    
    for (i = 0; i < x.length; i++) {
        $(`#art-img-${i}`).empty();
        $(`#art-img-${i}`).append("<img>").attr("src", x[i].urlToImage);
        $(`#art-title-${i}`).empty();
        $(`#art-title-${i}`).append(x[i].title);
        $(`#art-sum-${i}`).empty();
        $(`#art-sum-${i}`).append(x[i].description);
        // console.log((x[i].title));
    }
}






