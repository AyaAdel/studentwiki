const breadcrumbMenu = document.getElementById('breadcrumbMenu');

const hideMenu = () => {
  breadcrumbMenu.classList.remove('show');
};
const displayMenu = () => breadcrumbMenu.classList.add('show');

$(document).ready(function () {
  $('.js-example-basic-single').select2();

  $('.slideshow').slick({
    arrows: true,
    prevArrow: '<i class="fa fa-angle-up"></i>',
    nextArrow: '<i class="fa fa-angle-down"></i>',
    dots: true,
    dotsClass: 'slick-dots',
    vertical: true,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
  });

  $('.teams-slider').slick({
    centerMode: true,
    centerPadding: '100px',
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    dotsClass: 'slick-dots',
    responsive: [
      {
        breakpoint: 575,
        settings: {
          centerMode: true,
          centerPadding: '40px',
        },
      },
    ],
  });
});
