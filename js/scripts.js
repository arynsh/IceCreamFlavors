$(document).ready(function () {

  var flavors = ["Vanilla", "Cherry", "Chocolate"];

  flavors.forEach(function(flavor) {
    // var userInput = $("input#" + flavor).val();
    // $("." + flavor).text(userInput);
    alert("I love " + flavor + "!");
  });
  event.preventDefault();
});
