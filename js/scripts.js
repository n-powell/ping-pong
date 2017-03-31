//Business
var everyThird = "ping" //these are unnecessary but I wanted some business logic variables
var everyFifth = "pong" //these are unnecessary but I wanted some business logic variables
var everyFifteenth = "ping-pong" //these are unnecessary but I wanted some business logic variables


//User Logic
$(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    $("#output").text(""); //Clears output form on next input click
    $("#ifVictory").text(""); //Clears output form on next input click
    var userInput = $("#userInput").val();
    for (var index = 1; index <= userInput; index += 1) {
      if (index % 15 === 0) {
        $("#ifVictory").text("The ball got stuck under the couch, try again.")
        $("#output").append("<br><li>" + everyFifteenth + "</li><br>");
      }else if (index % 5 === 0) {
        $("#ifVictory").text("Of course you have just lost to Derek Zoolander at Ping-Pong.")
        $("#output").append("<li>" + everyFifth + "</li>")
      }else if (index % 3 === 0) {
        $("#ifVictory").text("It is truly unbelievable. You Won. You have just ruined Derek Zoolanders entire modeling career.")
        $("#output").append("<li>" + everyThird + "</li>");
      }else
        $("#ifVictory").text("A lot of hard work, but still no winner, play again.")
        $("#output").append("<li>" + index + "</li>");
    }
  });
});
