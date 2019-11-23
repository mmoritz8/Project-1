$.ajax({
     url: 'https://newsapi.org/v2/everything?sortBy=relevancy&q=+austin+texas+local+news&pageSize=1&apiKey=d9da22da0a2347a58fea3976369ee1f1',
     method: "GET",

}).then(function (response) {
     console.log(this);
     console.log(response.data);
     var results = response.data;
     var targetOne = document.getElementById("target");
     $('#firstImg').empty();
     $('.first-title').empty();
     $('.firstUrl').empty();
     $('.first-author').empty();
     $('.first-title').empty();
      $('.first-desc').empty();

        $('.first-title').text(newsData.articles[0].title);
     $('.first-desc').text(newsData.articles[0].description);
            $('.firstUrl').attr('src', newsData.articles[0].urlToImage);
            $('.subheader').wrap(`<a class="titleLink" href="${newsData.articles[0].url}"></a>`);

});