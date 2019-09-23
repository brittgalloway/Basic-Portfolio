$(document).ready(function() {
  // INDEX SCRIPT----------------------------------------------------------------
  $("#about").wrap('<a href="about_materialize.html"></a>');
  $("#portfolio").wrap("<a href='portfolio_materialize.html' </a>");
  $("#contact").wrap("<a href='contact_materialize.html' </a>");

  // ABOUT SCRIPT -----------------------------------------------------------
  const age = moment()
    .year(1992)
    .fromNow(true);
  $("#age").html(
    "<h6 class='flow-text teal-text text-darken-3'>Age: " + age + " old<h6>"
  );

  // PORTFOLIO SCRIPT -----------------------------------------------------------
  $("#space").wrap("<a href='spaceChasers.html' </a>");

  $("#collector").wrap(
    "<a href='https://brittgalloway.github.io/unit-4-game/' </a>"
  );

  $("#trivia").wrap(
    "<a href='https://brittgalloway.github.io/TriviaGame/' </a>"
  );

  $("#gifs").wrap("<a href='https://brittgalloway.github.io/GifTastic' </a>");
});
