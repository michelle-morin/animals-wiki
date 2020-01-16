$(document).ready(function() {
  $("img#insectimg").click(function() {
    $("#insect").toggle();
  });

  $("img#snakeimg").click(function() {
    $("#snake").toggle();
  });

  $("img#turtleimg").click(function() {
    $("#turtle").toggle();
  });
});