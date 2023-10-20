"use strict";

/* *******************************************************
 * 파일이름 : common.js
 * 설명 : 전체JS
 * 업데이트 : 2023-10-20
 ******************************************************** */
window.addEventListener("load", function () {
  /* **********************************
   * 설명 : header
   ************************************ */
  function header() {
    const header = document.querySelector(".menu-bar");
    const header_li = document.querySelectorAll(".desk-nav > ul > li");
    for (let i = 0; i < header_li.length; i++) {
      header_li[i].addEventListener("mouseenter", function () {
        header.classList.add("open");
      });
      header_li[i].addEventListener("mouseleave", function () {
        header.classList.remove("open");
      });
    }
  }
  header();

  /* **********************************
   * 설명 : scroll-header
   ************************************ */
  $(window).scroll(function () {
    var scrollTop = $(window).scrollTop();

    if (scrollTop > 50) {
      $("html").addClass("header-fixed");
    } else {
      $("html").removeClass("header-fixed");
    }
  });

  /* **********************************
   * 설명 : mobile-header
   ************************************ */
  $(".toggle-side-bar-btn").click(function () {
    var $clicked = $(this);
    var nowAnimating = $clicked.attr("data-ico-now-animating");
    if (nowAnimating == "Y") {
      return;
    }
    if ($clicked.hasClass("active")) {
      hideLeftSideBar();
    } else {
      showLeftSideBar();
    }
    $clicked.attr("data-ico-now-animating", "Y");
    $clicked.toggleClass("active");
    setTimeout(function () {
      $clicked.attr("data-ico-now-animating", "N");
    }, 400);
  });

  function showLeftSideBar() {
    $(".left-side-bar > .mobile-nav ul > li.active").removeClass("active");
    $(".left-side-bar-box").addClass("active");
  }
  function hideLeftSideBar() {
    $(".left-side-bar-box").removeClass("active");
  }

  $(".left-side-bar > .mobile-nav ul > li").click(function (e) {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
    } else {
      $(this).siblings(".active").removeClass("active");
      $(this).find(".active").removeClass("active");
      $(this).addClass("active");
    }
    e.stopPropagation();
  });
  $(".left-side-bar-box").click(function () {
    $(".toggle-side-bar-btn").click();
  });
  $(".left-side-bar").click(function (e) {
    e.stopPropagation();
  });

  /* **********************************
   * 설명 : 프로그램 슬라이더
   ************************************ */
  function programSlider() {
    $("#programList").slick({
      autoplay: true,
      autoplaySpeed: 1000,
      speed: 1000,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      pauseOnHover: false,
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
            slidesToShow: 3,
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
  }
  programSlider();

  function sliderStopBtn() {
    let flag = false;

    $(".main_row_0 .play-btn").click(function () {
      if (flag == false) {
        $("#programList").slick("slickPause");
        $(".play-btn .fa-solid").removeClass("fa-pause");
        $(".play-btn .fa-solid").addClass("fa-play");
        flag = true;
      } else {
        $("#programList").slick("slickPlay");
        $(".play-btn .fa-solid").removeClass("fa-play");
        $(".play-btn .fa-solid").addClass("fa-pause");
        flag = false;
      }
    });
  }
  sliderStopBtn();

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

    if (scrollTop > 30) {
      $("html").addClass("header-fixed");
    } else {
      $("html").removeClass("header-fixed");
    }
  });
  /* **********************************
   * 설명 : 메인 탭메뉴
   ************************************ */
  // $(".head > span").click(function () {
  //   var $this = $(this);
  //   var $part5 = $this.closest(".science-box");
  //   var $current = $part5.find(">.head span.active");

  //   $(this).siblings().removeClass("active");

  //   $current.removeClass("active");
  //   $this.addClass("active");

  //   var index = $this.index();
  //   $part5.find(">.content>div.active").removeClass("active");
  //   $part5.find(">.content>div").eq(index).addClass("active");
  // });

  function gallerySlider() {
    $("#gallery").slick({
      autoplay: true,
      autoplaySpeed: 1000,
      speed: 1000,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      pauseOnHover: false,
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
            slidesToShow: 3,
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
  }
  gallerySlider();
});
