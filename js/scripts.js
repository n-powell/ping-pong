//Business Logic



//User Logic
$(function() {

  $("form").submit(function(event){
    event.preventDefault();
    console.log("test spot");
    var userInput = $("#userInput").val();
    console.log(userInput);

    $("#output").text(userInput)
  });
});
