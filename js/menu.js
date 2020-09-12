$(document).ready(() => {
  jQuery.easing.def = "easeOutBounce";
  const screenLeft = $("#screen-left");
  const screenRight = $("#screen-right");

  const transitionDuration = 750;
  const transitionEasing = "easeInOutCubic";
  const mobileScreen = window.innerWidth < 624;

  const menuScreen = {
    1: {
      in: () => {
        screenLeft.animate(
          {
            top: 0,
          },
          transitionDuration,
          transitionEasing
        );
        screenRight.animate(
          {
            bottom: 0,
          },
          transitionDuration,
          transitionEasing
        );
      },
      out: () => {
        screenLeft.animate(
          {
            top: "-100%",
          },
          transitionDuration,
          transitionEasing
        );
        screenRight.animate(
          {
            bottom: "-100%",
          },
          transitionDuration,
          transitionEasing
        );
      }
    }
  };

  const menuMobileScreen = {
    1: {
      in: () => {
        screenLeft.animate(
          {
            top: 0,
          },
          transitionDuration,
          transitionEasing
        );
        screenRight.animate(
          {
            bottom: 0,
          },
          transitionDuration,
          transitionEasing
        );
      },
      out: () => {
        screenLeft.animate(
          {
            top: "-50%",
          },
          transitionDuration,
          transitionEasing
        );
        screenRight.animate(
          {
            bottom: "-50%",
          },
          transitionDuration,
          transitionEasing
        );
      }
    }
  };


  function toggleMenu(e) {
    e.preventDefault();
    const hasClass = $(this).hasClass('hamburger-active');

    if (hasClass) {
      $('body').removeClass('disable-body-scroll');
      $(this).removeClass('hamburger-active');
      if (mobileScreen) {
        menuMobileScreen[1].out();
        return;
      }
      menuScreen[1].out();
    } else {
          $('body').addClass('disable-body-scroll');
          $(this).addClass('hamburger-active');
          if (mobileScreen) {
            menuMobileScreen[1].in();
      } else {
        menuScreen[1].in();
      }
    }
    console.log("on");
  }

  $(".hamburger").on("click", toggleMenu);
});

