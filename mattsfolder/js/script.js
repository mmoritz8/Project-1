var i = 0;
var newsApi = "c6d47e8264e749ff85f4e6cc2155d4e6";
var main = "Lamar Jackson";
var subArticles = ["LSU", "Lebron James", "New England Patriots", "Houston Astros"];
var images = ["picB", "picC", "picD", "picE"];
var queryURL = "https://newsapi.org/v2/everything?q=" + main +"&apiKey=" + newsApi;
queryURL = "https://newsapi.org/v2/everything?q=" + "Lamar Jackson" + "&apiKey=c6d47e8264e749ff85f4e6cc2155d4e6";
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {
    console.log(queryURL)
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

// i = 0;
function adverts () {
    i = 1;
    interval = setInterval(function(){
    var images = ['images/target.jpeg', 'images/dickssportinggoods.jpeg', 'images/whataburger.jpeg'];
    // var i = 0;
    $('.ad-image').attr('src', images[i]);
    i++
    if(i > images.length) {
    i = 0
    }
    },1000);
}


function articleBuild1() {
    
    var queryURL = "https://newsapi.org/v2/everything?q=" + subArticles[0] + "&apiKey=" + newsApi;
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response)
        $('.picB').attr('src', response.articles[2].urlToImage);
        $('.titleB').text(response.articles[2].title);
        })
    }    

function articleBuild2() {
    
    var queryURL = "https://newsapi.org/v2/everything?q=" + subArticles[1] + "&apiKey=" + newsApi;
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response)
        $('.picC').attr('src', response.articles[1].urlToImage);
        $('.titleC').text(response.articles[1].title);
        })
    }    
function articleBuild3() {

    var queryURL = "https://newsapi.org/v2/everything?q=" + subArticles[2] + "&apiKey=" + newsApi;
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response)
        $('.picD').attr('src', response.articles[1].urlToImage);
        $('.titleD').text(response.articles[1].title);
        })
    }  
function articleBuild4() {

    var queryURL = "https://newsapi.org/v2/everything?q=" + subArticles[3] + "&apiKey=" + newsApi;
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response)
        $('.picE').attr('src', response.articles[2].urlToImage);
        $('.titleE').text(response.articles[2].title);
        })
    }


articleBuild1();
articleBuild2();
articleBuild3();
articleBuild4();


$('.hangman').click(function() {
    window.location.href="hangman.html";
    return false;
})

adverts();