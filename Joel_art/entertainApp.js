var famousPerson = ["d","a","v","i","d","b","o","w","i","e"];
var incorrectAnswer = ["h","a","n","g","m","a","n"]; 
var userArray = [];
var hangman = "";
var answer = [];
var i = 0;
var name;
var email;

  $('.submit').click(function(event) {
      event.preventDefault();
    var response = $('#answer').val();
    response = response.toLowerCase();
    if(famousPerson.includes(response)) {
        $("." + response).text(response);
        answer.push(response);
        if(answer.length === 8) {
        $('.congrats').append(`<h1 id="congrats-h1">Congratulations! You Win!</h1>`);
        $('.sweepstakes').attr('style', 'display: inline;');
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
    console.log(answer.length);
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

