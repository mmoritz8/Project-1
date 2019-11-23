$.ajax({
url: 'https://newsapi.org/v2/everything?sortBy=relevancy&q=austin+texas+local+news&pageSize=2&apiKey=d9da22da0a2347a58fea3976369ee1f1',
method: "GET",

}).then(function (response) {
console.log(this);
console.log(response.data);
var results = response.data;
var targetOne = document.getElementById("target2");
$('#target2').empty();
$("#target2").text(response.articles[0].description + response.articles[0].title);
}).then(function (response) {
                    console.log(this);
                    console.log(response.data);
                    var results = response.data;
                    var targetOne = document.getElementById("target");
                    $('#target').empty();
                    $('#target1').empty();

                    $("#target").text(JSON.stringify(response));

                    var len = response.length;
                    var spot = "";
                    for (var i = 0; i < len; i++) {

                         var title = response.article[0].title;
                         var article = response.article[0].article;
                         var description = response.article[0].description;
                         var source = response.article[0].source;
                         var author = response.author;
                         var publish = response.article[0].publishedAt;
                         var urltoImage = response.article[0].urlToImage;

                         spot.text = title + article + description + source + author + publish + urltoImage;
                         spot.toString();
                         $('#target1').heml(spot);
                    }
               })


});