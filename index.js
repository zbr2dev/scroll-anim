$(document).ready(() => {
  jQuery.easing.def = "easeOutBounce";
  const screenOneLeft = $("#screen-one-left");
  const screenOneRight = $("#screen-one-right");

  const screenTwoLeft = $("#screen-two-left");
  const screenTwoRight = $("#screen-two-right");

  const screenThreeLeft = $("#screen-three-left");
  const screenThreeRight = $("#screen-three-right");

  const screenFourLeft = $("#screen-four-left");
  const screenFourRight = $("#screen-four-right");

  const screenFiveLeft = $("#screen-five-left");
  const screenFiveRight = $("#screen-five-right");

  const screenSixLeft = $("#screen-six-left");
  const screenSixRight = $("#screen-six-right");

  const screenSevenLeft = $("#screen-seven-left");
  const screenSevenRight = $("#screen-seven-right");

  const screenEightLeft = $("#screen-eight-left");
  const screenEightRight = $("#screen-eight-right");

  const transitionDuration = 750;
  const transitionEasing = "easeInOutCubic";

  const mobileScreen = window.innerWidth < 624;

  let backToTopMarker = 0;
  const screens = {
    1: {
      in: () => {
        screenOneLeft.animate(
          {
            left: 0,
          },
          transitionDuration,
          transitionEasing
        );
        screenOneRight.animate(
          {
            right: 0,
          },
          transitionDuration,
          transitionEasing
        );
      },
      out: () => {
        screenOneLeft.animate(
          {
            left: "-50%",
          },
          transitionDuration,
          transitionEasing
        );
        screenOneRight.animate(
          {
            right: "-50%",
          },
          transitionDuration,
          transitionEasing
        );
      },
    },
    2: {
      in: () => {
        screenTwoLeft.animate(
          {
            top: 0,
          },
          transitionDuration,
          transitionEasing
        );
        screenTwoRight.animate(
          {
            bottom: 0,
          },
          transitionDuration,
          transitionEasing
        );
      },
      out: () => {
        screenTwoLeft.animate(
          {
            top: "-100%",
          },
          transitionDuration,
          transitionEasing
        );
        screenTwoRight.animate(
          {
            bottom: "-100%",
          },
          transitionDuration,
          transitionEasing
        );
      },
    },
    3: {
      in: () => {
        screenThreeLeft.animate(
          {
            left: 0,
          },
          transitionDuration,
          transitionEasing
        );
        screenThreeRight.animate(
          {
            right: 0,
          },
          transitionDuration,
          transitionEasing
        );
      },
      out: () => {
        screenThreeLeft.animate(
          {
            left: "-50%",
          },
          transitionDuration,
          transitionEasing
        );
        screenThreeRight.animate(
          {
            right: "-50%",
          },
          transitionDuration,
          transitionEasing
        );
      },
    },
    4: {
      in: () => {
        screenFourLeft.animate(
          {
            bottom: 0,
          },
          transitionDuration,
          transitionEasing
        );
        screenFourRight.animate(
          {
            bottom: 0,
          },
          transitionDuration,
          transitionEasing
        );
      },
      out: () => {
        screenFourLeft.animate(
          {
            bottom: "-100%",
          },
          transitionDuration,
          transitionEasing
        );
        screenFourRight.animate(
          {
            bottom: "-100%",
          },
          transitionDuration,
          transitionEasing
        );
      },
    },
    5: {
      in: () => {
        screenFiveLeft.css({ left: "50%" });
        screenFiveLeft.animate(
          {
            left: 0,
          },
          transitionDuration,
          transitionEasing
        );
        screenFiveRight.animate(
          {
            right: 0,
          },
          transitionDuration,
          transitionEasing
        );
      },
      out: () => {
        screenFiveLeft.animate(
          {
            left: backToTopMarker ? "-50%" : "50%",
          },
          transitionDuration,
          transitionEasing
        );
        screenFiveRight.animate(
          {
            right: "-50%",
          },
          transitionDuration,
          transitionEasing
        );
        if (!backToTopMarker) {
          setTimeout(() => {
            screenFiveLeft.css({ left: "-50%" });
          }, transitionDuration + 50);
        }
      },
    },
    6: {
      in: () => {
        screenSixLeft.animate(
          {
            top: 0,
          },
          transitionDuration,
          transitionEasing
        );
        screenSixRight.animate(
          {
            bottom: 0,
          },
          transitionDuration,
          transitionEasing
        );
      },
      out: () => {
        screenSixLeft.animate(
          {
            top: "-100%",
          },
          transitionDuration,
          transitionEasing
        );
        screenSixRight.animate(
          {
            bottom: "-100%",
          },
          transitionDuration,
          transitionEasing
        );
      },
    },
    7: {
      in: () => {
        screenSevenLeft.animate(
          {
            left: 0,
          },
          transitionDuration,
          transitionEasing
        );
        screenSevenRight.animate(
          {
            right: 0,
          },
          transitionDuration,
          transitionEasing
        );
      },
      out: () => {
        screenSevenLeft.animate(
          {
            left: "-50%",
          },
          transitionDuration,
          transitionEasing
        );
        screenSevenRight.animate(
          {
            right: "-50%",
          },
          transitionDuration,
          transitionEasing
        );
      },
    },
    8: {
      in: () => {
        screenEightLeft.animate(
          {
            top: 0,
          },
          transitionDuration,
          transitionEasing
        );
        screenEightRight.animate(
          {
            bottom: 0,
          },
          transitionDuration,
          transitionEasing
        );
      },
      out: () => {
        screenEightLeft.animate(
          {
            top: "-100%",
          },
          transitionDuration,
          transitionEasing
        );
        screenEightRight.animate(
          {
            bottom: "-100%",
          },
          transitionDuration,
          transitionEasing
        );
      },
    },
  };

  const mobileScreens = {
    1: {
      in: () => {
        screenOneLeft.animate(
          {
            left: 0,
          },
          transitionDuration,
          transitionEasing
        );
        screenOneRight.animate(
          {
            right: 0,
          },
          transitionDuration,
          transitionEasing
        );
      },
      out: () => {
        screenOneLeft.animate(
          {
            left: "-100%",
          },
          transitionDuration,
          transitionEasing
        );
        screenOneRight.animate(
          {
            right: "-100%",
          },
          transitionDuration,
          transitionEasing
        );
      },
    },
    2: {
      in: () => {
        screenTwoLeft.animate(
          {
            top: 0,
          },
          transitionDuration,
          transitionEasing
        );
        screenTwoRight.animate(
          {
            bottom: 0,
          },
          transitionDuration,
          transitionEasing
        );
      },
      out: () => {
        screenTwoLeft.animate(
          {
            top: "-50%",
          },
          transitionDuration,
          transitionEasing
        );
        screenTwoRight.animate(
          {
            bottom: "-50%",
          },
          transitionDuration,
          transitionEasing
        );
      },
    },
    3: {
      in: () => {
        screenThreeLeft.animate(
          {
            left: 0,
          },
          transitionDuration,
          transitionEasing
        );
        screenThreeRight.animate(
          {
            right: 0,
          },
          transitionDuration,
          transitionEasing
        );
      },
      out: () => {
        screenThreeLeft.animate(
          {
            left: "-100%",
          },
          transitionDuration,
          transitionEasing
        );
        screenThreeRight.animate(
          {
            right: "-100%",
          },
          transitionDuration,
          transitionEasing
        );
      },
    },
    4: {
      in: () => {
        screenFourLeft.animate(
          {
            top: 0,
          },
          transitionDuration,
          transitionEasing
        );
        screenFourRight.animate(
          {
            bottom: 0,
          },
          transitionDuration,
          transitionEasing
        );
      },
      out: () => {
        screenFourLeft.animate(
          {
            top: "-50%",
          },
          transitionDuration,
          transitionEasing
        );
        screenFourRight.animate(
          {
            bottom: "-50%",
          },
          transitionDuration,
          transitionEasing
        );
      },
    },
    5: {
      in: () => {
        // screenFiveLeft.css({ right: "50%" });
        screenFiveLeft.animate(
          {
            right: 0,
          },
          transitionDuration,
          transitionEasing
        );
        screenFiveRight.animate(
          {
            right: 0,
          },
          transitionDuration,
          transitionEasing
        );
      },
      out: () => {
        screenFiveLeft.animate(
          {
            right: "-100%",
          },
          transitionDuration,
          transitionEasing
        );
        screenFiveRight.animate(
          {
            right: "-100%",
          },
          transitionDuration,
          transitionEasing
        );
        // if (!backToTopMarker) {
        //   setTimeout(() => {
        //     screenFiveLeft.css({ left: "-100%" });
        //   }, transitionDuration + 50);
        // }
      },
    },
    6: {
      in: () => {
        screenSixLeft.animate(
          {
            top: 0,
          },
          transitionDuration,
          transitionEasing
        );
        screenSixRight.animate(
          {
            bottom: 0,
          },
          transitionDuration,
          transitionEasing
        );
      },
      out: () => {
        screenSixLeft.animate(
          {
            top: "-50%",
          },
          transitionDuration,
          transitionEasing
        );
        screenSixRight.animate(
          {
            bottom: "-50%",
          },
          transitionDuration,
          transitionEasing
        );
      },
    },
    7: {
      in: () => {
        screenSevenLeft.animate(
          {
            left: 0,
          },
          transitionDuration,
          transitionEasing
        );
        screenSevenRight.animate(
          {
            right: 0,
          },
          transitionDuration,
          transitionEasing
        );
      },
      out: () => {
        screenSevenLeft.animate(
          {
            left: "-100%",
          },
          transitionDuration,
          transitionEasing
        );
        screenSevenRight.animate(
          {
            right: "-100%",
          },
          transitionDuration,
          transitionEasing
        );
      },
    },
    8: {
      in: () => {
        screenEightLeft.animate(
          {
            top: 0,
          },
          transitionDuration,
          transitionEasing
        );
        screenEightRight.animate(
          {
            bottom: 0,
          },
          transitionDuration,
          transitionEasing
        );
      },
      out: () => {
        screenEightLeft.animate(
          {
            top: "-50%",
          },
          transitionDuration,
          transitionEasing
        );
        screenEightRight.animate(
          {
            bottom: "-50%",
          },
          transitionDuration,
          transitionEasing
        );
      },
    },
  };


  let lastScrollTop = 0;
  let canScroll = 1;
  let scrollableElement = document.body;
  let screen = 0;
  let animationInProgress = 0;
  let counter1 = 0;
  let counter2 = false;

  function AnimateRotate(angle) {
    var $elem = $("#MyDiv2");
    $({ deg: 0 }).animate(
      { deg: angle },
      {
        duration: 2000,
        step: function (now) {
          $elem.css({
            transform: "rotate(" + now + "deg)",
          });
        },
      }
    );
  }

  scrollableElement.addEventListener("wheel", checkScrollDirection);

  function nextSlide() {
    if (screen < 8) {
      console.log("down");
      screen++;
      if (mobileScreen) {
        if (mobileScreens.hasOwnProperty(String(screen))) {
          mobileScreens[screen].in();
        }
      } else if (screens.hasOwnProperty(String(screen))) {
        screens[screen].in();
      }
      if (screen === 8) {
        $(".arrow").addClass("arrow-rotated");
        $(".arrow").off("click");
        $(".arrow").on("click", backToTop);
      }
    }
  }
  function prevSlide() {
    if (screen > 0) {
      console.log("up");
      if (mobileScreen) {
        if (mobileScreens.hasOwnProperty(String(screen))) {
          mobileScreens[screen].out();
        }
      } else if (screens.hasOwnProperty(String(screen))) {
        screens[screen].out();
      }

      screen--;
    }
  }
  function toggleMenu(e) {
    e.preventDefault();
    const hasClass = $(this).hasClass('hamburger-active');
    if (hasClass) {
      $(this).removeClass('hamburger-active');
      $('body').removeClass('disable-body-scroll');
      $(".arrow").removeClass("arrow-rotated");
      
      if (mobileScreen) {
        mobileScreens[8].out();
        return;
      }
      screens[8].out()
    } else {
      $(this).addClass('hamburger-active');
      $('body').addClass('disable-body-scroll');
      $(".arrow").addClass("arrow-rotated");
      if (mobileScreen) {
        mobileScreens[8].in();
      } else {
        screens[8].in();
      }
    }


  }
  function openMenu(e) {
    e.preventDefault();
    if (mobileScreen) {
      mobileScreens[8].in();
    } else {
      screens[8].in();
    }
    console.log('open');
    $(".arrow").addClass("arrow-rotated");
    $(".arrow").off("click");
    $(".arrow").on("click", hideMenu);
  }
  function hideMenu(e) {
    e.preventDefault();
    if (mobileScreen) {
      mobileScreens[8].out();
    } else {
      screens[8].out();
    }

    console.log('hide');
    $(".hamburger").removeClass('hamburger-active', openMenu);
    $(".arrow").removeClass("arrow-rotated");
    $(".arrow").off("click");
    $(".arrow").on("click", nextSlide);
  }
  function backToTop() {
    backToTopMarker = 1;
    while (screen > 0) {
      prevSlide();
    }
    backToTopMarker = 0;
    $(".arrow").removeClass("arrow-rotated");
    $(".arrow").off("click");
    $(".arrow").on("click", nextSlide);
  }
  $(".arrow").on("click", nextSlide);
  $(".hamburger").on("click", openMenu);
  $(".hamburger").on("click", toggleMenu);

  function checkScrollDirection(event) {
    counter1 += 1;

    if (canScroll) {
      wheelStart();
      if (checkScrollDirectionIsUp(event)) {
        if (screen > 0) {
          console.log("up");
          if (mobileScreen) {
            if (mobileScreens.hasOwnProperty(String(screen))) {
              mobileScreens[screen].out();
            }
          } else {
            if (screens.hasOwnProperty(String(screen))) {
              screens[screen].out();
            }
          }
          screen--;
        }
      } else {
        if (screen < 8) {
          console.log("down");
          screen++;
          if (mobileScreen) {
            if (mobileScreens.hasOwnProperty(String(screen))) {
              mobileScreens[screen].in();
            }
          } else {
            if (screens.hasOwnProperty(String(screen))) {
              screens[screen].in();
            }
          }
          if (screen === 8) {
            $(".arrow").off("click");
            $(".arrow").on("click", backToTop);
          }
        }
      }
    }
  }

  function checkScrollDirectionIsUp(event) {
    if (event.wheelDelta) {
      return event.wheelDelta > 0;
    }
    return event.deltaY < 0;
  }

  function wheelStart() {
    canScroll = 0;
    wheelAct();
  }
  function wheelAct() {
    counter2 = counter1;
    setTimeout(function () {
      if (counter2 == counter1) {
        wheelEnd();
      } else {
        wheelAct();
      }
    }, 50);
  }
  function wheelEnd() {
    canScroll = true;
    counter1 = 0;
    counter2 = false;
  }
});