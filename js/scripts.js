//Business Logic

  var divisibility = function (input) {
      var array = []
    for (var index = 1; index <= input; index += 1) {
      if (index % 15 === 0) {
        array.push("Ping-Pong");
      }else if (index % 5 === 0) {
        array.push("Pong");
      }else if (index % 3 === 0) {
        array.push("Ping");
      }else
        array.push(index);
      };
    return array;
  };



//User Logic
$(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    $("#output").text(""); //Clears output form on next input click
    var input = $("input#userInput").val();//Creates variable set to user input
    var displayHits = divisibility(input);
    displayHits.forEach(function(output){
      $("#output").append("<li>" + output + "</li>");
    });

  });
});
