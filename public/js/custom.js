// $('.courses').slick({
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 2000,
//   dots: true,
//   speed: 800
//   });
$('.courses').slick({
  dots: true,
  speed: 800,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplayspeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
$('.full').slick({
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
  autoplay: true,
  prevArrow: '<i class="fa-solid fa-chevron-left left-arrow"></i>',
  nextArrow: '<i class="fa-solid fa-chevron-right right-arrow"></i>'
});
// $(document).ready(function () {
//   $('.response').click(function () {
//     $('#responsive-navigation').toggleClass('show')
//   })
// })
const response = document.querySelector('.response')
const responseMenu = document.querySelector('#responsive-navigation')
response.addEventListener('click', () => {
  response.classList.toggle('active')
  responseMenu.classList.toggle('active')
})

const searchBar = document.querySelector('.search-bar')
const magnifier = document.querySelector('.magnifier')
magnifier.addEventListener('click',function () {
  searchBar.classList.toggle('active')
})