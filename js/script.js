$(document).ready(function () {
  $("#slides").superslides({
    animation: "fade",
    play: 4000,
    pagination: false,
  });

  var typed = new Typed(".typed", {
    strings: ["System Engineer.", "Web Developer.", "Game Dveloper."],
    typeSpeed: 100,
    loop: true,
  });
});
