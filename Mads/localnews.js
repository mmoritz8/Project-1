$.ajax({
     url: 'https://newsapi.org/v2/everything?q=+local+news+austin+texas&from=2019-11-20&to=2019-11-25&sortBy=popularity&pageSize=1&apiKey=d9da22da0a2347a58fea3976369ee1f1',
     method: "GET",
}).then(function (response) {
     console.log(this);
     var results = response.data;
     var title = document.getElementById("news-title-0");
     $("#news-title-0").text(response.articles[0].title);

     var summary = document.getElementById("news-sum-0");
     $("#news-sum-0").text(response.articles[0].description);

     var image = document.getElementById(".mov-img-p");

    $(".news-img-0").img('url', response.articles[0].urltoimage); 

          var summary = document.getElementById("news-url-0");
     $("#news-url-0").text(response.articles[0].url);

     

     
})