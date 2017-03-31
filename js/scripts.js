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
      if((index % 3) === 0){
        $("#output").append("<li>" + "ping" + "</li>");
      }
      else $("#output").append("<li>" + index + "</li>");
    }

  });
});
