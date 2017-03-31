//Business Logic
var everyThird = "ping"
var everyFifth = "pong"
var everyFifteenth = "ping-pong"


//User Logic
$(function() {

  $("form").submit(function(event){
    event.preventDefault();
    $("#output").text("");//Clears output form on next input click
    var userInput = $("#userInput").val();
    for (var index = 1; index <= userInput; index += 1) {
      if(index % 15 === 0){
        $("#output").append("<li>" + "ping-pong" + "</li>");
      }
      else if(index % 3 === 0) {
        $("#output").append("<li>" + "pong" + "</li>");
      }
      else if(index % 3 === 0) {
        $("#output").append("<li>" + "ping" + "</li>");
      }

      else
        $("#output").append("<li>" + index + "</li>");

    }

  });
});
