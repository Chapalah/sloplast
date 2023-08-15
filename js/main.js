$(".burger-button").click(function () {
  $(".burger-menu").addClass("active");
  $(".overflow").addClass("active");
});

$(".burger-close").click(function () {
  $(".burger-menu").removeClass("active");
  $(".overflow").removeClass("active");
});

$(".overflow").click(function () {
  $(".burger-menu").removeClass("active");
  $(this).removeClass("active");
});

$(document).ready(function () {
  var titles = $(".block-titles");
  var links = $(".block-titles a");

  $("#fullpage").fullpage({
    anchors: [
      "firstPage",
      "secondPage",
      "thirdPage",
      "fourthPage",
      "fifthPage",
      "sixthPage",
    ],
    menu: "#myMenu",
    scrollingSpeed: 1000,
    fitToSectionDelay: 2000,
    scrollBar: false,
    keyboardScrolling: false,
    touchSensitivity: 15,
    onLeave: function (index, nextIndex, direction) {
      if (nextIndex === 1) {
        $(titles).css("transform", "translateY(66dvh)");
      } else if (nextIndex === 2) {
        $(titles).css("transform", "translateY(33dvh)");
      } else if (nextIndex === 6){
        $(titles).css("transform", "translateY(-160dvh)");
      } else {
        $(titles).css("transform", `translateY(-${(nextIndex - 3) * 33}dvh)`);
      }

      if (links[nextIndex - 1]) {
        $(links).each(function() {
          $(this).removeClass('active')
        })
        $(links[nextIndex - 1]).addClass('active')
      }

      if (direction == "up") {
        $(".section").removeClass("down");
        $(".section").removeClass("next");
        $(".section").removeClass("prev");
        $("#fullpage .section:nth-child(" + nextIndex + ")").addClass("up");
        $("#fullpage .section:nth-child(" + nextIndex + ")")
          .next()
          .addClass("next up");
        $("#fullpage .section:nth-child(" + nextIndex + ")")
          .prev()
          .addClass("prev up");
      } else {
        $(".section").removeClass("up");
        $(".section").removeClass("next");
        $(".section").removeClass("prev");
        $("#fullpage .section:nth-child(" + nextIndex + ")").addClass("down");
        $("#fullpage .section:nth-child(" + nextIndex + ")")
          .next()
          .addClass("next down");
        $("#fullpage .section:nth-child(" + nextIndex + ")")
          .prev()
          .addClass("prev down");
      }
    },
  });
});
