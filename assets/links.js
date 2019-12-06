$(document).ready(function() {
  // INDEX SCRIPT----------------------------------------------------------------
  $("#about").wrap('<a href="about_materialize.html"></a>');
  $("#portfolio").wrap("<a href='portfolio_materialize.html' </a>");
  $("#contact").wrap("<a href='contact_materialize.html' </a>");

  // ABOUT SCRIPT -----------------------------------------------------------
  // const age = moment()
  //   .year(1992)
  //   .fromNow(true);
  // $("#age").html(
  //   "<li class='flow-text teal-text text-darken-3'>Age: " + age + " old<li>"
  // );
  // FOR SIDE NAV----------------------------------------------------------------
  $(".sidenav").sidenav();
  // PORTFOLIO SCRIPT -----------------------------------------------------------
  $("#space").wrap("<a href='spaceChasers.html' </a>");
  
  $("#swiftly").wrap("<a href='swiftly.html' </a>");

  $("#collector").wrap("<a href='crystalCollect.html' </a>");

  $("#trivia").wrap("<a href='triviaGame.html' </a>");

  // $("#gifs").wrap("<a href='gifTastic.html' </a>");
  // $("#liriApp").wrap(
  //   "<a href='https://github.com/brittgalloway/liri-node-app' </a>"
  // );
  $("#bamazonApp").wrap(
    "<a href='bamazon.html' </a>"
  );
  // $("#friendFinder").wrap(
  //   "<a href='friend.html' </a>"
  // );
  $("#tennis").wrap(
    "<a href='tennis.html' </a>"
  );
});
