//Creating the variables for use
//=============================================================================
var apiKey = "ff3ac51d3f4e4d1b86729596069ecc0d";
var catFinance = "q=finance";
var catInvest = "q=investing";
var country = "country=us";
var sortBy = "sortBy=popularity";
var to = "to=" + moment().format("YYYY-MM-DD");
var from = "from=" + moment().startOf('week').format("YYYY-MM-DD");
var investDomains = "domains=wsj.com,fool.com";
var finDomains = "domains=cnbc.com,wsj.com,reuters.com";
var newsTitles = ["titleA", "titleB", "titleC", "titleD", "titleE", "titleF", "titleG", "titleH", "titleI"];
var investTitles = ["titleJ", "titleK", "titleL", "titleM", "titleN", "titleO", "titleP", "titleQ"];
var newsSubs = ["subA", "subB", "subC", "subD", "subE", "subF", "subG", "subH", "subI"];
var investSubs = ["subJ", "subK", "subL", "subM", "subN", "subO", "subP", "subQ"];
var newsPics = ["picA", "picB", "picC", "picD", "picE", "picF", "picG", "picH", "picI"];
var investPics = ["picJ", "picK", "picL", "picM", "picN", "picO", "picP", "picQ"];

//Creating the URLs for business and finance sections
var busURL = "https://newsapi.org/v2/everything?apiKey=" + apiKey + "&" + catFinance + "&" + from + "&" + to + "&" + finDomains + "&" + sortBy;
var investURL = "https://newsapi.org/v2/everything?apiKey=" + apiKey + "&" + catInvest + "&" + from + "&" + to + "&" + investDomains + "&" + sortBy;



//Functions
//=============================================================================
console.log(busURL);
//This function is for querying the finance API and grabing the information needed to populate the HTML
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

var i = 0;
function adverts() {
    interval = setInterval(function () {
        var imagesA = ['../assets/Images/tdAmeritrade.jpg', '../assets/Images/invesco.jpg', '../assets/Images/fidelity.png'];
        var imagesB = ['../assets/Images/ally.jpg', '../assets/Images/marketWatch.png', '../assets/Images/wells-fargo.jpg'];
        // var i = 0;
        $('.adv-pic-a').attr('src', imagesA[i]);
        $('.adv-pic-b').attr('src', imagesB[i]);
        i++;
        if (i > imagesA.length) {
            i = 0
        }
    }, 4000);
}
adverts();