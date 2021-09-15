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

  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });
});
