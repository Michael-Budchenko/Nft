$(function () {
  $(
    '<div class="quantity-nav"><div class="quantity-button quantity-up"><img class="slider__item-price-arrow-up"src="/img/svg/slider__arrow__up.svg"alt="#"/></div><div class="quantity-button quantity-down"> <img class="slider__item-price-arrow-down"src="/img/svg/slider__arrow__down.svg"alt="#"/></div></div>'
  ).insertAfter(".quantity input");
  $(".quantity").each(function () {
    var spinner = $(this),
      input = spinner.find('input[type="number"]'),
      btnUp = spinner.find(".quantity-up"),
      btnDown = spinner.find(".quantity-down"),
      min = input.attr("min"),
      max = input.attr("max");

    btnUp.click(function () {
      var oldValue = parseFloat(input.val());
      if (oldValue >= max) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue + 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

    btnDown.click(function () {
      var oldValue = parseFloat(input.val());
      if (oldValue <= min) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue - 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });
  });

  $(".main__slider-items").slick({
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    speed: 1000,
    whaitForAnimate: false,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  });

  $(".main__slider-dots").slick({
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    swipeToSlide: false,
    asNavFor: ".main__slider-items",
    focusOnSelect: true,
    draggable: false,
  });
});

new WOW().init();

$(function () {
  $(".burger").on("click", function () {
    $(".header__navigation").toggleClass("active");
  });
});
$(function () {
  $(".burger").on("click", function () {
    $("#header__btn").toggleClass("active__btn");
  });
});

const header = document.querySelector("#header__inner-fixed");
const headerInner = document.querySelector(".header__inner");
const headerInnerHeight = headerInner.offsetHeight;

window.addEventListener("scroll", () => {
  let scrollDistance = window.scrollY;

  if (scrollDistance >= headerInnerHeight - 40) {
    header.classList.add("header__active");
  } else {
    header.classList.remove("header__active");
    headerInner.style.marginTop = null;
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const timer = new Date("Jan 1 2023 00:00:00");
  const hoursVal = document.querySelector(
    ".header__inner-aside-data-subtitle-hours"
  );
  const minutesVal = document.querySelector(
    ".header__inner-aside-data-subtitle-minute"
  );
  const secondsVal = document.querySelector(
    ".header__inner-aside-data-subtitle-seconds"
  );

  const hoursText = document.querySelector(".data__hours");
  const minutesText = document.querySelector(".data__minutes");
  const secondsText = document.querySelector(".data__seconds");

  function declOfNum(number, titles) {
    let cases = [2, 0, 1, 1, 1, 2];
    return titles[
      number % 100 > 4 && number % 100 < 20
        ? 2
        : cases[number % 10 < 5 ? number % 10 : 5]
    ];
  }

  const timeCount = () => {
    let now = new Date();
    let leftUntil = timer - now;
    let hours = Math.floor(leftUntil / 1000 / 60 / 60) % 24;
    let minutes = Math.floor(leftUntil / 1000 / 60) % 60;
    let seconds = Math.floor(leftUntil / 1000) % 60;

    hoursVal.textContent = hours;
    minutesVal.textContent = minutes;
    secondsVal.textContent = seconds;

    hoursText.textContent = declOfNum(hours, ["hours", "hours", "hours"]);
    minutesText.textContent = declOfNum(minutes, [
      "minutes",
      "minutes",
      "minutes",
    ]);
    secondsText.textContent = declOfNum(seconds, [
      "seconds",
      "seconds",
      "seconds",
    ]);
  };

  timeCount();
  setInterval(timeCount, 1000);
});

const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerHTML = "0";
  const updateCouter = () => {
    const target = +counter.getAttribute("data-target");
    const c = +counter.innerText;
    if (c < target) {
      counter.innerText = c + 1;
      setTimeout(updateCouter, 1);
    } else {
      counter.innerText = target;
    }
  };
  updateCouter();
});

let coll = document.getElementsByClassName("collapsible");
for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active__menu-slider");
    let content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}








