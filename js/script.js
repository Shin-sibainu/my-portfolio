$(document).ready(function () {
  $("#slides").superslides({
    animation: "fade",
    play: 4000,
    pagination: false,
  });

  var typed = new Typed(".typed", {
    strings: ["System Engineer.", "Web Developer.", "Game Developer."],
    typeSpeed: 100,
    loop: true,
  });

  $(".owl-carousel").owlCarousel({
    loop: true,
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 2,
      },
      768: {
        items: 3,
      },
      938: {
        items: 4,
      },
    },
  });

  var skillsTopOffset = $(".skillsSection").offset().top;
  console.log(skillsTopOffset); //1701

  $(window).scroll(function () {
    /* もし、スクロールしているY座標が上で指定したY座標を超えたら */
    if (window.pageYOffset > skillsTopOffset - $(window).height() + 200) {
      $(".chart").easyPieChart({
        easing: "easInOut",
        barColor: "#fff",
        trackColor: false,
        scaleColor: false,
        lineWidth: 4,
        size: 152,
        onStep: function (from, to, percent) {
          $(this.el).find(".percent").text(Math.round(percent));
        },
      });
    }
  });

  $(".counter").each(function () {});
});
