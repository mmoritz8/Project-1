var random;
var i = 0;
function buildMain() {
    var newsApi = "c6d47e8264e749ff85f4e6cc2155d4e6";
    var main = "Dallas Cowboys";
    var queryURL = "https://newsapi.org/v2/everything?q=" + main +"&apiKey=" + newsApi;
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response)
        var headline = $('<h3>');
        headline.text(response.articles[1].title);
        $('.main-headline').append(headline);
        var content = $('<p>');
        content.text(response.articles[1].description);
        $('.main-headline').append(content);
    
    })
    }

function articleBuild() {
var apiKey = "sbOhoFFooslLyEHgbGQ3CgutDhuvnreq";
var backupAPI = "X2mieQnPkFDxYiNpyMEpsgd7h1yblTCS";
var topic = ["Myles Garret", "Lebron James", "LSU", "Patriots", "Lamar Jackson"];
for(i = 0; i < topic.length; i++) {

var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + topic[i] + "&api-key=" + backupAPI;

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(x) {
      console.log(x)
    var article = $('<div>');
    article.css('width', '200px');
    article.addClass('art');
    var headline = $('<h4>');
    // headline.text(x.response.docs[0].headline.main)
    headline.append('<a href=' + x.response.docs[0].web_url + ">" + x.response.docs[0].headline.main + "</a>")
    // headline.attr( 'href', x.response.docs[0].web_url)
    var content = $('<p>');
    content.text(x.response.docs[0].abstract);
    $(article).append(headline, content);
    $('.sub-articles').append(article);
  })
}
}

function videoSection () {
    var newsApi = "c6d47e8264e749ff85f4e6cc2155d4e6";
    var main = "Lamar Jackson";
    var queryURL = "https://newsapi.org/v2/everything?q=" + main +"&apiKey=" + newsApi;
    // var random = Math.floor((Math.random * 4) + 1);
    // console.log(random);
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        // console.log(response)
        var headline = $('<h3>');
        headline.text(response.articles[1].title);
        console.log(response.articles[1].title);
        $('.video-section').append(headline);
        var content = $('<p>');
        content.text(response.articles[1].description);
        $('.video-section').append(content);
    
    })

}


function adverts () {

    interval = setInterval(function(){

        var images = ['images/target.jpeg', 'images/sportinggoods.jpeg', 'images/whataburger.jpeg'];
        // var i = 0;
        $('.ad-image').attr('src', images[i]);
        i++
        if(i > images.length) {
            i = 0
        }
       
      },3000);



}




buildMain();
// articleBuild();
videoSection();
adverts();