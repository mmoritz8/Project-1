//Creating the variables for use
//=============================================================================
var apiKey = "ff3ac51d3f4e4d1b86729596069ecc0d";
var catBusiness = "category=business";
var catInvest = "q=investing";
var country = "country=us";
var sortBy = "sortBy=popularity";
var to = "to=" + moment().format("YYYY-MM-DD");
var from = "from=" + moment().startOf('week').format("YYYY-MM-DD");
var investDomains = "domains=wsj.com,cnbc.com,fool.com";
var busDomains = "domains=reuters.com,bbc.com,cnbc.com,bloomberg.com";


//Creating the base URL for business and finance sections
var busURL = "https://newsapi.org/v2/top-headlines?apiKey=" + apiKey + "&" + from + "&" + to + "&" + country + "&" + busDomains + "&" + catBusiness + "&" + sortBy;
var investURL = "https://newsapi.org/v2/everything?apiKey=" + apiKey + "&" + catInvest + "&" + from + "&" + to + "&" + investDomains + "&" + sortBy;


//Functions
//=============================================================================

console.log(from);
console.log(to);
console.log(busURL);
console.log(investURL);

//This function is for querying the News API and grabing the information needed to populate the HTML
function runQuery(queryURL) {
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (busData) {
        for (var i = 0; i < 6; i++) {
            console.log(busData.articles[i].title);
            console.log(busData.articles[i].url);
            console.log(busData.articles[i].urlToImage);
        }
    })
}

runQuery(busURL);






//Main Process
//=============================================================================