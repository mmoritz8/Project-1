var quarterBack = ["d","o","n","s","h","u","l","a"];
var incorrectAnswer = ["h","a","n","g","m","a","n"]; 
var userArray = [];
var hangman = "";
var answer = [];
var i = 0;
var name;
var email;
var queryURL;

  $('.submit').click(function(event) {
      event.preventDefault();
    var response = $('#answer').val();
    response = response.toLowerCase();
    if(quarterBack.includes(response)) {
        $("." + response).text(response);
        answer.push(response);
        if(answer.length == quarterBack.length) {
        $('.congrats').css('display', 'inline');
        $('.sweepstakes').css('display', 'inline');
        $('h3').css('display', 'none');
        }
     }else {
        hangman += (incorrectAnswer[i]);
        $('h3').append(incorrectAnswer[i]);
        i++
    }
    if(hangman == "hangman") {
        $('.over').css('display', 'inline');
        $('.sweepstakes').css('display', 'inline');
    }
    console.log(hangman)
    $('#answer').val("");
})
$('.button').click(function(event) {
    event.preventDefault();
name = $('.name').val();
email = $('.email').val();
console.log(name)
console.log(email)
newUser = {
    person: name,
    email: email
  }
  userArray.push(newUser);
  userArray = userArray.concat(JSON.parse(localStorage.getItem('users') || '[]'));
  window.localStorage.setItem('users', JSON.stringify(userArray));
})

// function myMap() {
// var contactAPI = "AIzaSyAoS0EuGwX4-XLp3J2JcSWgS7uk4dh1DRw";
// var queryURL = "https://maps.googleapis.com/maps/api/js?key=" + contactAPI + "&callback=initMap"

// }

// var map;
// var contactAPI;
// function initMap() {
//      contactAPI = "AIzaSyAoS0EuGwX4-XLp3J2JcSWgS7uk4dh1DRw";
//  queryURL = "https://maps.googleapis.com/maps/api/js?key=" + contactAPI + "&callback=initMap"
//   map = new google.maps.Map(document.getElementById('map'), {
//     center: {lat: -34.397, lng: 150.644},
//     zoom: 8
//   });
// }