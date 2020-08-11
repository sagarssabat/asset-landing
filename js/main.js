// window.onload = function () {
//   Particles.init({
//     selector: '.particles-js-canvas-el',
//     color: '#06285E',
//     // color: ['#0E64C8', '#E9922C', '#05C953'],
//     connectParticles: true,
//     sizeVariations: 5,
//     maxParticles: 80,
//     opacity: 0.5
//   });
// };

$(window).on('scroll', function () {
  var scroll = $(window).scrollTop();

  if (scroll >= 50) {
    $(".sitenav").addClass("sticky");
  } else {
    $(".sitenav").removeClass("sticky");
  }
});

$('.sitenav__linkitem a').on('click', function (event) {
  var $anchor = $(this);
  $('html, body').stop().animate({
    scrollTop: $($anchor.attr('href')).offset().top - 50
  }, 1500, 'easeInOutExpo');
  event.preventDefault();
});

$(document).on('click', '.navbar-collapse.show', function (e) {
  if ($(e.target).is('a')) {
    $(this).collapse('hide');
  }
});

$("#navbarCollapse").scrollspy({
  offset: 70
});

// $('.img-zoom').magnificPopup({
//   type: 'image',
//   closeOnContentClick: true,
//   mainClass: 'mfp-fade',
//   gallery: {
//     enabled: true,
//     navigateByImgClick: true,
//     preload: [0, 1]
//   }
// });


$("#owl-demo").owlCarousel({
  autoPlay: 10000,
  items: 3,
  itemsDesktop: [1199, 3],
  itemsDesktopSmall: [979, 3]
});

// $(window).on('scroll', function () {
//   if ($(this).scrollTop() > 100) {
//     $('.back_top').fadeIn();
//   } else {
//     $('.back_top').fadeOut();
//   }
// });

$('.back_top').on('click', function () {
  $("html, body").animate({
    scrollTop: 0
  }, 1000);
  return false;
});

particlesJS.load('particles-js', '../assets/particles.json', function () {
  console.log('callback - particles.js config loaded');
});