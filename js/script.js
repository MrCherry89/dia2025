$(document).ready(function () {
  $(".our-team-slider").slick({
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $(".our-team-slider-wrap .slider-navigation .slick-prev"),
    nextArrow: $(".our-team-slider-wrap .slider-navigation .slick-next"),
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".radios .radio-wrap.right").on("click", function () {
    $(this).closest(".radios").addClass("active");
  });

  $(".radios .radio-wrap.left").on("click", function () {
    $(this).closest(".radios").removeClass("active");
  });

  $(".banner-slider").slick({
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 800, // Скорость анимации
    fade: true, // Анимация затухания
    cssEase: "linear", // Функция анимации
  });

  $(".gallery-slider").slick({
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    prevArrow: $(".gallery-slider-wrap .slider-navigation .slick-prev"),
    nextArrow: $(".gallery-slider-wrap .slider-navigation .slick-next"),
  });

  $(".project-slider").slick({
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    prevArrow: $(".project-slider-wrap .slider-navigation .slick-prev"),
    nextArrow: $(".project-slider-wrap .slider-navigation .slick-next"),
    responsive: [
      {
        breakpoint: 501,
        settings: {
          slidesToShow: 1,
          variableWidth: false,
        },
      },
    ],
  });

  $(".top-scroll").smoothScroll({
    speed: 1000,
  });

  $(window).scroll(function () {
    var sticky = $(".top-scroll"),
      scroll = $(window).scrollTop();

    if (scroll >= 200) sticky.addClass("show");
    else sticky.removeClass("show");
  });

  $(".top-scroll").smoothScroll({
    speed: 1000,
  });

  $(".tab-menu li button").on("click", function (e) {
    e.preventDefault();
    $(this).closest(".tab-menu").find("li").removeClass("active");
    $(this).closest("li").addClass("active");
    var index = $(this).closest("li").index();
    $(".tab-content-item").removeClass("active");
    $(".tab-content-item").eq(index).addClass("active");
  });

  $(".drop-menu").click(function (e) {
    e.stopPropagation();
    $(this).toggleClass("is-active");
    $(".menu-wrap").toggleClass("open");
    $("body, html").toggleClass("overflow");
  });

  $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
  });

  $(".why-slider").slick({
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 500,
        settings: {
          dots: true,
          slidesToShow: 1,
          variableWidth: false,
        },
      },
    ],
  });

  $("#contact-form").validate({
    errorPlacement: function (error, element) {},
  });

  $(".select-wrap select").select2({
    minimumResultsForSearch: -1,
  });

  $(".phone-number-input").inputmask({
    mask: "+7 (999) 999 - 99 - 99",
  });

  $(".trending-slider").slick({
    dots: false,
    arrows: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    prevArrow: $(".trending-slider-wrap .slider-navigation .slick-prev"),
    nextArrow: $(".trending-slider-wrap .slider-navigation .slick-next"),
    responsive: [
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          variableWidth: false,
        },
      },
    ],
  });

  function unslickOnMobile() {
    if ($(window).width() > 768) {
      $(".trending-slider").slick("unslick");
    }
  }

  unslickOnMobile();

  $(window).on("resize", function () {
    unslickOnMobile();
  });

  $(".logos-slider").slick({
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          dots: true,
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          dots: true,
          slidesToShow: 3,
        },
      },
    ],
  });

  $(".popup").magnificPopup({
    type: "inline",
    mainClass: "mfp-fade",
  });

  // Функция для отключения прокрутки страницы
  function disableScroll() {
    document.body.classList.add("disable-scroll");
  }

  // Функция для включения прокрутки страницы
  function enableScroll() {
    document.body.classList.remove("disable-scroll");
  }

  // Вызов функции отключения прокрутки при открытии Magnific Popup
  $(".popup").magnificPopup({
    type: "inline",
    midClick: true, // Разрешить открытие при клике по средней кнопке мыши
    callbacks: {
      open: function () {
        disableScroll(); // Отключить прокрутку при открытии
      },
      close: function () {
        enableScroll(); // Включить прокрутку при закрытии
      },
    },
  });

  const windowWidth = window.innerWidth;

  if (windowWidth <= 768) {
    gsap.to(".airplane-img", {
      y: "560px",
      scrollTrigger: {
        y: "-560px",
        trigger: ".steps-block",
        start: "-20%",
        end: "bottom 20%",
        scrub: 4,
      },
    });
  } else {
    gsap.to(".airplane-img", {
      y: "1100px",
      scrollTrigger: {
        y: "-1100px",
        trigger: ".steps-block",
        start: "-20%",
        end: "bottom 20%",
        scrub: 4,
      },
    });
  }
});
