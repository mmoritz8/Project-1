var quarterBack = ["t","o","m","b","r","a","d","y"];

var incorrectAnswer = ["h","a","n","g","m","a","n"]; 
var userArray = [];
var hangman = "";
var answer = "";
var i = 0;
var name;
var email;

  $('.submit').click(function(event) {
      event.preventDefault();
    var response = $('#answer').val();
    response = response.toLowerCase();
    if(quarterBack.includes(response)) {
        $("." + response).text(response);
    }else {
        hangman += (incorrectAnswer[i]);
        i++
    }
     if(hangman == "hangman") {
        alert("Game Over!");
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

// newUser = {
//     person: name,
//     email: email
//   }

//   cityArray.push(newUser);
//   userArray = userArray.concat(JSON.parse(localStorage.getItem('users') || '[]'));
//   window.localStorage.setItem('users', JSON.stringify(userArray));

// function algo(x) {
//     if(x == "t"){
//         $(".t").text("T");
//     }
//     if(x == "o"){
//         $(".o").text("o");
//     }
//     if(x == "m"){
//         $(".m").text("m");
//     }
//     if(x == "b"){
//         $(".b").text("B");
//     }
//     if(x == "r"){
//         $(".r").text("r");
//     }
//     if(x == "a"){
//         $(".a").text("a");
//     }
//     if(x == "d"){
//         $(".d").text("d");
//     }
//     if(x == "y"){
//         $(".y").text("y");
//     }
// }