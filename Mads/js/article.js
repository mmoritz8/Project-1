
$.ajax({
     url: 'https://newsapi.org/v2/everything?q=+local+news+austin+texas&from=2019-11-25&to=2019-11-25&sortBy=popularity&pageSize=2&apiKey=d9da22da0a2347a58fea3976369ee1f1',
     method: "GET",
}).then(function (response) {
     console.log(this);
     var results = response.data;
     var title = document.getElementById("news-title-2");
     $("#news-title-2").text(response.articles[0].title);
     var title = document.getElementById("news-title-5");
     $("#news-title-2").text(response.articles[1].title);


     var summary = document.getElementById("news-sum-2");
     $("#news-sum-2").text(response.articles[0].description);

     var summary = document.getElementById("news-sum-5");
     $("#news-sum-5").text(response.articles[1].description);

          var summary = document.getElementById("news-url-2");
     $("#news-url-2").text(response.articles[0].url);

          var summary = document.getElementById("news-url-5");
     $("#news-url-5").text(response.articles[1].url);
     

     
})