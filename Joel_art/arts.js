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
    $(".headline-img").append("<img>").attr("src", response.articles[1].urlToImage); 
    $(".headline-title").empty();
    $(".headline-title").append(response.articles[1].title);
    $(".headline-sum").empty();
    $(".headline-sum").append(response.articles[1].description);
    $(".headline-div").on("click", function() {
        window.open(response.articles[1].url, '_blank');   
    })
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
    return results;
}             
    //adds each of the 3 movie articles to there id targeted divs containing an img, title (also link to source) and description.
var movieAppender = function(x) {
    
    for (i = 0; i < x.length; i++) {
        var x = x;
        var link = x[i].url;
        $(`#movie-img-${i}`).empty();
        $(`#movie-img-${i}`).append("<img>").attr("src", x[i].urlToImage);
        $(`#movie-title-${i}`).empty();
        $(`#movie-title-${i}`).append(x[i].title);
        $(`#movie-sum-${i}`).empty();
        $(`#movie-sum-${i}`).append(x[i].description);
        $(`#movie-title-${i}`).attr("href", link);
    }
}
    //adds each of the 3 music articles to there id targeted divs containing an img, title (also link to source) and description.
var musicAppender = function(x) {
    
    for (i = 0; i < x.length; i++) {
        var x = x;
        var link = x[i].url;
        $(`#music-img-${i}`).empty();
        $(`#music-img-${i}`).append("<img>").attr("src", x[i].urlToImage);
        $(`#music-title-${i}`).empty();
        $(`#music-title-${i}`).append(x[i].title);
        $(`#music-sum-${i}`).empty();
        $(`#music-sum-${i}`).append(x[i].description);
        $(`#music-title-${i}`).attr("href", link);
    }
}
    //adds each of the 3 art articles to there id targeted divs containing an img, title (also link to source) and description.
var artAppender = function(x) {
    
    for (i = 0; i < x.length; i++) {
        var x = x;
        var link = x[i].url;
        $(`#art-img-${i}`).empty();
        $(`#art-img-${i}`).append("<img>").attr("src", x[i].urlToImage);
        $(`#art-title-${i}`).empty();
        $(`#art-title-${i}`).append(x[i].title);
        $(`#art-sum-${i}`).empty();
        $(`#art-sum-${i}`).append(x[i].description);
        $(`#art-title-${i}`).attr("href", link);
    }
}



function adverts () {
    var i = 0;
    var  interval = setInterval(function(){
    var images = ['images/target.jpeg', 'images/dickssportinggoods.jpeg', 'images/whataburger.jpeg'];
    // var i = 0;
    $('.ad-image').attr('src', images[i]);
    i++
    if(i > images.length) {
    i = 0
    }
    },3000);
}
adverts();



