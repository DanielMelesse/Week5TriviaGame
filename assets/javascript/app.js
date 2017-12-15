// golabl varabile to hold win or loss count. 
var correctAnswerCount = 0;
var wrongAnswerCount   = 0;
var varTimer = 0; 
// loop the array assign html element
// var queryURL = 'http://jservice.io/api/clues';
var categoryId = 42;
var numQuestion = 100;

// queryUrl     url jservice api url 
// categoryId   category jservice api categoryId 42 = Sport category
// numQuestion  value defualt return 100 question it seen passing value 100 return 50 question. 
var queryURL = " http://jservice.io/api/clues?category=" + categoryId + "&value=" +numQuestion; 
console.log(queryURL);

// on click Event handler

$(document).on('click', '#start-button', function(){
    console.log(queryURL);
    // Ajax request to jservice.io service
    $.ajax({
        url: queryURL,
        method: "GET"
      }).done(function(response) {
          console.log(response);
          for(var i = 0; i < 3; i++){
              // do u wanna display all the question 
              var questionNum = Math.floor(Math.random()*50) + 1;
              var userQuestion = response[questionNum].question;
            console.log(response[questionNum].question);
          console.log(response[questionNum].answer);
          displayQuestion(userQuestion + " ?");
          }
      });
})

function displayQuestion(question){
    $("#start-button").hide();
    var questionHtm =$('<div></div>').css({
        "padding": 10,
        "color": "red",
        "font-size": 21
    })

    var input = $('<input type="text" name="answer">');
    
    // var questionTag = $("<div></div>");
    questionHtm.addClass("question");
    questionHtm.attr("data-name", "working");
    questionHtm.text(question);
    input.append(questionHtm);
    $("#clues-game").append(questionHtm);
    console.log(questionHtm);


}

function getQuestionHtml(){

}




