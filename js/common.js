/* *******************************************************
 * 파일이름 : common.js
 * 설명 : 전체JS
 * 업데이트 : 2023-08-16
 ******************************************************** */
window.addEventListener("load", function () {
  /* **********************************
   * 설명 : 프로그램 슬라이더
   ************************************ */
  function programSlider() {
    $("#programList").slick({
      autoplay: true,
      autoplaySpeed: 1800,
      speed: 600,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      pauseOnHover: true,
      dots: false,
      pauseOnDotsHover: false,
      cssEase: "linear",
      // fade:true,
      draggable: true,
      prevArrow:
        '<a class="slick-prev" href="#"><i class="fa-solid fa-chevron-left"></i></a>',
      nextArrow:
        '<a class="slick-next" href="#"><i class="fa-solid fa-chevron-right"></i></a>',
      responsive: [
        // 반응형 웹 구현 옵션
        {
          breakpoint: 1441, //화면 사이즈 960px
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 830,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 481,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
    var progSlider = $("#programList");
    var slickOptions = {
      autoplay: true,
      autoplaySpeed: 1800,
      speed: 600,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      pauseOnHover: true,
      dots: false,
      pauseOnDotsHover: false,
      cssEase: "linear",
      // fade:true,
      draggable: true,
      prevArrow:
        '<a class="slick-prev" href="#"><i class="fa-solid fa-chevron-left"></i></a>',
      nextArrow:
        '<a class="slick-next" href="#"><i class="fa-solid fa-chevron-right"></i></a>',
      responsive: [
        // 반응형 웹 구현 옵션
        {
          breakpoint: 1441, //화면 사이즈 960px
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 830,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 481,
          settings: {
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 767,
          settings: "unslick",
        },
      ],
    };
    if ($(window).width() < 767) {
      progSlider.slick("unslick");
    } else {
      progSlider.not(".slick-initialized").slick(slickOptions);
    }
    $(window).on("resize", function () {
      if ($(window).width() < 767) {
        progSlider.slick("unslick");
      } else {
        progSlider.not(".slick-initialized").slick(slickOptions);
      }
    });
  }
  programSlider();

  /* **********************************
   * 설명 : 반응형 vh
   ************************************ */
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  setScreenSize();
  window.addEventListener("resize", setScreenSize);

  /* **********************************
   * 설명 : 메인배너 슬라이더
   ************************************ */
  $("#slider-div").slick({
    autoplay: false,
    autoplaySpeed: 1800,
    speed: 600,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    dots: true,
    pauseOnDotsHover: true,
    cssEase: "linear",
    // fade:true,
    draggable: false,
    prevArrow:
      '<a class="slick-prev" href="#"><i class="fa-solid fa-chevron-left"></i></a>',
    nextArrow:
      '<a class="slick-next" href="#"><i class="fa-solid fa-chevron-right"></i></a>',
  });

  $(window).scroll(function () {
    var scrollTop = $(window).scrollTop();

    if (scrollTop > 50) {
      $("html").addClass("header-fixed");
    } else {
      $("html").removeClass("header-fixed");
    }
  });
});
