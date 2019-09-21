$(document).ready(function() {
  // INDEX SCRIPT----------------------------------------------------------------
  $("#about").wrap('<a href="about_materialize.html"></a>');
  $("#portfolio").wrap("<a href='portfolio_materialize.html' </a>");
  $("#contact").wrap("<a href='contact_materialize.html' </a>");

  // ABOUT SCRIPT -----------------------------------------------------------
  const age = moment()
    .year(1992)
    .fromNow(true);
  $("#age").html("<h6 class='flow-text'>Age: " + age + " old<h6>");

  // PORTFOLIO SCRIPT -----------------------------------------------------------
  $(".Hangman").wrap(
    "<a href='https://brittgalloway.github.io/WordGuessGame/' </a>"
  );

  $(".rpg").wrap("<a href='https://brittgalloway.github.io/unit-4-game/' </a>");

  $(".trivia").wrap(
    "<a href='https://brittgalloway.github.io/TriviaGame/' </a>"
  );

  $(".rutgers").wrap(
    "<a href='https://brittgalloway.github.io/GifTastic' </a>"
  );

  $(".rock").wrap(
    "<a href='https://brittgalloway.github.io/TrainScheduler/' </a>"
  );
});
