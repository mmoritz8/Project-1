var i = 0;
var newsApi = "c6d47e8264e749ff85f4e6cc2155d4e6";
var main = "Lamar Jackson";
var subArticles = ["LSU", "Lebron James", "New England Patriots", "Houston Astros"];
var queryURL = "https://newsapi.org/v2/everything?q=" + main +"&apiKey=" + newsApi;
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {
    console.log(response)
    $('.titleA').text(response.articles[2].title);
    $('.subA').text(response.articles[2].description);
    $('.picA').attr('src', response.articles[2].urlToImage);

})

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {
    console.log(response)
    $('.titleA').text(response.articles[2].title);
    $('.subA').text(response.articles[2].description);
    $('.picA').attr('src', response.articles[2].urlToImage);

})

var i = 0;
function adverts () {
    interval = setInterval(function(){
    var images = ['images/target.jpeg', 'images/dickssportinggoods.jpeg', 'images/whataburger.jpeg'];
    // var i = 0;
    $('.ad-image').attr('src', images[i]);
    i++
    if(i > images.length) {
    i = 0
    }
    },3000);
}

$('.hangman').click(function() {
    window.location.href="hangman.html";
    return false;
})

adverts();