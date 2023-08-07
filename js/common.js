/* *******************************************************
 * 파일이름 : common.js
 * 설명 : 전체JS
 * 업데이트 : 2023-08-03
 ******************************************************** */
window.addEventListener("load", function () {
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

  let flag = "false";
  $(".top-banner .pause-btn").on("click", function () {
    if (flag == "false") {
      $("#slider-div").slick("slickPlay");
      $(".pause-btn i").attr("class", "fa-solid fa-pause");
      flag = "true";
    } else {
      $("#slider-div").slick("slickPause");
      $(".pause-btn i").attr("class", "fa-solid fa-play");
      flag = "false";
    }
  });

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
        breakpoint: 481,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});
