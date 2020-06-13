// First Slider

$(".slider-one").not(".slick-initialized").slick({
  autoplay: true,
  autoplaySpeed: 3000,
  dots: true,
  prevArrow: ".site-slider .slider-btn .prev",
  nextArrow: ".site-slider .slider-btn .next",
});

// Second Slider

$(".slider-two").not(".slick-initialized").slick({
  prevArrow: ".site-slider-two .slider-btn .prev",
  nextArrow: ".site-slider-two .slider-btn .next",
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplaySpeed: 300,
});

// Third Slider

$(".slider-three").not(".slick-initialized").slick({
  prevArrow: ".site-slider-three .slider-btn .prev",
  nextArrow: ".site-slider-three .slider-btn .next",
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplaySpeed: 300,
});
// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("day").innerHTML = days + " days";
  document.getElementById("hours").innerHTML = hours + " hours";
  document.getElementById("minutes").innerHTML = minutes + " minutes";
  document.getElementById("seconds").innerHTML = seconds + " seconds";

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

// Fourth Slider

$(".slider-four").not(".slick-initialized").slick({
  prevArrow: ".site-slider-four .slider-btn .prev",
  nextArrow: ".site-slider-four .slider-btn .next",
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplaySpeed: 300,
});
