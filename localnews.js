document.ready(function () {

    var newsTitles = ["titleA", "titleB", "titleC", "titleD", "titleE", "titleF", "titleG", "titleH", "titleI"];
    var investTitles = ["titleJ", "titleK", "titleL", "titleM", "titleN", "titleO", "titleP", "titleQ"];
    var newsSubs = ["subA", "subB", "subC", "subD", "subE", "subF", "subG", "subH", "subI"];
    var investSubs = ["subJ", "subK", "subL", "subM", "subN", "subO", "subP", "subQ"];
    var newsPics = ["picA", "picB", "picC", "picD", "picE", "picF", "picG", "picH", "picI"];
    var investPics = ["picJ", "picK", "picL", "picM", "picN", "picO", "picP", "picQ"];

    //Creating the URLs for business and finance sections
    var busURL = "https://newsapi.org/v2/everything?apiKey=" + apiKey + "&" + catBusiness + "&" + from + "&" + to + "&" + finDomains + "&" + sortBy;
    var investURL = "https://newsapi.org/v2/everything?apiKey=" + apiKey + "&" + catInvest + "&" + from + "&" + to + "&" + investDomains + "&" + sortBy;



    function newsQuery(queryURL) {
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (newsData) {
            for (var i = 0; i < newsTitles.length; i++) {
                $(`.${newsTitles[i]}`).text(newsData.articles[i].title);
                $(`.${newsSubs[i]}`).text(newsData.articles[i].description);
                $(`.${newsPics[i]}`).attr('src', newsData.articles[i].urlToImage);
                $(`.${newsPics[i]}`).wrap(`<a class="picLink" href="${newsData.articles[i].url}"></a>`);
                $(`.${newsTitles[i]}`).wrap(`<a class="titleLink" href="${newsData.articles[i].url}"></a>`);
            }
        })
    }
    newsQuery(busURL);

    //This function is for querying the investing API and grabing the information needed to populate the HTML
    function investQuery(queryURL) {
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (invData) {
            for (var i = 0; i < investTitles.length; i++) {
                $(`.${investTitles[i]}`).text(invData.articles[i].title);
                $(`.${investSubs[i]}`).text(invData.articles[i].description);
                $(`.${investPics[i]}`).attr('src', invData.articles[i].urlToImage);
                $(`.${investPics[i]}`).wrap(`<a class="picLink" href="${invData.articles[i].url}"></a>`);
                $(`.${investTitles[i]}`).wrap(`<a class="titleLink" href="${invData.articles[i].url}"></a>`);
            }
        })
    }
    investQuery(investURL);

});