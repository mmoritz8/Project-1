//Creating the variables for use
//=============================================================================
var apiKey = "ff3ac51d3f4e4d1b86729596069ecc0d";
var catFinance = "q=finance";
var sortBy = "sortBy=popularity";
var to = "to=" + moment().format("YYYY-MM-DD");
var from = "from=" + moment().startOf('week').format("YYYY-MM-DD");
var finDomains = "domains=cnbc.com,wsj.com";
var localTitle = document.getElementsByClassName("titleA");
var businessTitle= document.getElementsByClassName("titleB");
var lifestyleTitle = document.getElementsByClassName("titleC");
var sportsTitle = document.getElementsByClassName("titleD");
var localSub = document.getElementsByClassName("subA");
var businessSub = document.getElementsByClassName("subB");
var lifestyleSub = document.getElementsByClassName("subC");
var sportsSub = document.getElementsByClassName("subD");
var localPic = document.getElementsByClassName("picA");
var businessPic = document.getElementsByClassName("picB");
var lifestylePic = document.getElementsByClassName("picC");
var sportsPic = document.getElementsByClassName("picD");

//Creating the URLs for business and finance sections
var localURL = "https://newsapi.org/v2/everything?q=local+news&from=2019-11-20&to=2019-11-20&sortBy=popularity&pageSize=1&apiKey=d9da22da0a2347a58fea3976369ee1f1";
var businessURL = "https://newsapi.org/v2/everything?apiKey=" + apiKey + "&" + catFinance + "&" + from + "&" + to + "&" + finDomains + "&" + sortBy;
var lifestyleURL = "https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=ce38e2eb001e4bcda09aab86ee29f490";
var sportsURL = "https://newsapi.org/v2/everything?q=" + "Lamar Jackson" + "&apiKey=c6d47e8264e749ff85f4e6cc2155d4e6";


//Functions
//=============================================================================

//This function is for querying the finance API and grabing the information needed to populate the HTML
function localQuery(queryURL) {
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (newsData) {
            $(localTitle).text(newsData.articles[0].title);
            $(localSub).text(newsData.articles[0].description);
            $(localPic).attr('src', newsData.articles[0].urlToImage);
            $(localPic).wrap(`<a class="picLink" href="${newsData.articles[0].url}"></a>`);
            $(localTitle).wrap(`<a class="titleLink" href="${newsData.articles[0].url}"></a>`);
    })
}
localQuery(localURL);

function businessQuery(queryURL) {
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (newsData) {
            $(businessTitle).text(newsData.articles[0].title);
            $(businessSub).text(newsData.articles[0].description);
            $(businessPic).attr('src', newsData.articles[0].urlToImage);
            $(businessPic).wrap(`<a class="picLink" href="${newsData.articles[0].url}"></a>`);
            $(businessTitle).wrap(`<a class="titleLink" href="${newsData.articles[0].url}"></a>`);
    })
}
businessQuery(businessURL);

function lifestyleQuery(queryURL) {
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (newsData) {
            $(lifestyleTitle).text(newsData.articles[1].title);
            $(lifestyleSub).text(newsData.articles[1].description);
            $(lifestylePic).attr('src', newsData.articles[1].urlToImage);
            $(lifestylePic).wrap(`<a class="picLink" href="${newsData.articles[1].url}"></a>`);
            $(lifestyleTitle).wrap(`<a class="titleLink" href="${newsData.articles[1].url}"></a>`);
    })
}
lifestyleQuery(lifestyleURL);

function sportsQuery(queryURL) {
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (newsData) {
            $(sportsTitle).text(newsData.articles[0].title);
            $(sportsSub).text(newsData.articles[0].description);
            $(sportsPic).attr('src', newsData.articles[0].urlToImage);
            $(sportsPic).wrap(`<a class="picLink" href="${newsData.articles[0].url}"></a>`);
            $(sportsTitle).wrap(`<a class="titleLink" href="${newsData.articles[0].url}"></a>`);
    })
}
sportsQuery(sportsURL);
