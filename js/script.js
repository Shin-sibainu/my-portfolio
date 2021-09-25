$(window).on("load", function () {
  console.log("load"); //一度だけ呼ばれる
  $(".loader .inner").fadeOut(500, function () {
    $(".loader").fadeOut(750);
  });
});

$(document).ready(function () {
  $("#slides").superslides({
    animation: "fade",
    play: 4000,
    pagination: false,
  });

  /* isotope */
  $(".items").isotope({
    filter: "*",
    animationOption: {
      duration: 1500,
      easing: "linear",
      queue: false,
    },
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
  var statsTopOffset = $(".statsSection").offset().top;
  var countUpFinished = false;

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

    if (
      !countUpFinished &&
      window.pageYOffset > statsTopOffset - $(window).height() + 200
    ) {
      $(".counter").each(function () {
        var endValue = parseInt($(this).text());
        $(this).countup(endValue);
      });

      countUpFinished = true; //カウントアップが終わったよ！という合図。
    }
  });

  /* filtering */
  $("#filters a").click(function () {
    $("#filters .current").removeClass("current");
    $(this).addClass(".current");

    var selector = $(this).attr("data-filter");

    $(".items").isotope({
      filter: selector,
      animationOption: {
        duration: 1500,
        easing: "linear",
        queue: false,
      },
    });
    return false;
  });

  /* fixedNav */
  const nav = $("#navigation");
  // console.log(nav);
  const navTop = nav.offset().top;
  console.log(navTop); //880

  $(window).on("scroll", stickyNavigation);

  function stickyNavigation() {
    var body = $("body");
    if ($(window).scrollTop() >= navTop) {
      body.css("padding-top", nav.outerHeight() + "px");
      body.addClass("fixedNav");
    } else {
      body.css("padding-top", 0);
      body.removeClass("fixedNav");
    }
  }
});
