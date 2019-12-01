var queryURL = 'https://newsapi.org/v2/everything?q=+news+austin+texas+neighborhoods&from=2019-11-20&to=2019-11-25&sortBy=relevancy&pageSize=2&apiKey=d9da22da0a2347a58fea3976369ee1f1'
$.ajax({
     url: queryURL,
     method: "GET",
}).then(function (response) {
     console.log(this);
     var results = response.data;
     var title = document.getElementById("news-title-1");
     var head = document.getElementById("news-tit");

     $("#news-title-1").text(response.articles[0].title);
     $("#news-tit").text(response.articles[1].title);


     var summary = document.getElementById("news-sum-1");
     $("#news-sum-1").text(response.articles[0].description);
          $("#news-summary").text(response.articles[1].description);


     var summary = document.getElementById("news-url-1");
     $("#news-url-1").text(response.articles[0].url);

     
     

     
})

   // This is our API key

            // Here we are building the URL we need to query the database
            var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=Austin&units=imperial&appid=166a433c57516f51dfab1f7edaed8413";

            // Here we run our AJAX call to the OpenWeatherMap API
            $.ajax({
                 url: queryURL,
                method: "GET"
            })
                // We store all of the retrieved data inside of an object called "response"
                .then(function (response) {

                    // Log the queryURL
                    console.log(queryURL);

                    // Log the resulting object
                    console.log(response);

                    // Transfer content to HTML
                    $(".city").html("<h3>" + response.name + " Weather Details</h3>");
                    $(".wind").text("Wind Speed: " + response.wind.speed);
                    $(".humidity").text("Humidity: " + response.main.humidity);
                    $(".temp").text("Temperature (F) " + response.main.temp);


                    // Converts the temp to Kelvin with the below formula
                    var tempF = (response.main.temp - 273.15) * 1.80 + 32;
                    $(".tempF").text("Temperature (Kelvin) " + tempF);

                    // Log the data in the console as well
                    console.log("Wind Speed: " + response.wind.speed);
                    console.log("Humidity: " + response.main.humidity);
                    console.log("Temperature (F): " + response.main.temp);
                });
