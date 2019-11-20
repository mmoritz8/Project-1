function articleBuild() {
var apiKey = "sbOhoFFooslLyEHgbGQ3CgutDhuvnreq";
var backupAPI = "X2mieQnPkFDxYiNpyMEpsgd7h1yblTCS";
var topic = ["Myles Garret", "Lebron James", "LSU", "Patriots", "Lamar Jackson"];
for(i = 0; i < topic.length; i++) {

var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + topic[i] + "&api-key=" + apiKey;

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(x) {
      console.log(x)
    var article = $('<div>');
    article.css('width', '200px');
    article.addClass('art');
    var headline = $('<h5>');
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