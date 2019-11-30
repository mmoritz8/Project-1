var ima = $("<img>");
ima.empty();

$.ajax({
     url: 'https://newsapi.org/v2/everything?q=+local+news+austin+texas&from=2019-11-25&to=2019-11-25&sortBy=popularity&pageSize=1&apiKey=d9da22da0a2347a58fea3976369ee1f1',
     method: "GET",
}).then(function (response) {
     console.log(this);
     var results = response.data;
     var title = document.getElementById("news-title-2");
     $("#news-title-2").text(response.articles[0].title);

     var summary = document.getElementById("news-sum-2");
     $("#news-sum-2").text(response.articles[0].description);

     var image = document.getElementById("#news-img-2");
     image.onload = function (e) {
          $("#news-img-2").attr('src', e.target.result.articles[0].urlToImage)
     }

          var summary = document.getElementById("news-url-2");
     $("#news-url-2").text(response.articles[0].url);

     

     
})