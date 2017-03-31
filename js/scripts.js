//Business Logic
var everyThird = "ping"
var everyFifth = "pong"
var everyFifteenth = "ping-pong"


//User Logic
$(function() {

  $("form").submit(function(event){
    event.preventDefault();
    $("#output").text("");
    var userInput = $("#userInput").val();
    for (var index = 1; index <= userInput; index += 1) {
      $("#output").append("<li>" + index + "</li>");
    }

  });
});
