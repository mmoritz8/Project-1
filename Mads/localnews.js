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


});