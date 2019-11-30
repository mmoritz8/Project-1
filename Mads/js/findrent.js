var queryURL = 'https://newsapi.org/v2/everything?q=+local+news+austin+texas+politics+voting&from=2019-11-20&to=2019-11-25&sortBy=popularity&pageSize=1&apiKey=d9da22da0a2347a58fea3976369ee1f1'
$.ajax({
     url: queryURL,
     method: "GET",
}).then(function (response) {
     console.log(this);
     var results = response.data;
     var title = document.getElementById("news-title-1");
     $("#news-title-1").text(response.articles[0].title);

     var summary = document.getElementById("news-sum-1");
     $("#news-sum-1").text(response.articles[0].description);

     var summary = document.getElementById("news-url-1");
     $("#news-url-1").text(response.articles[0].url);

     
     

     
})