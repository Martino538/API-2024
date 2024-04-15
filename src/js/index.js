import '../css/index.css';

import Swiper from 'swiper';
import 'swiper/css';


// Initialiseer slideshows

if ('.top5movies'.length) {
  let top5movies = new Swiper('.top5movies', {
    grabCursor: true,
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
    autoplay: {
      delay: 10000,
      disableOnInteraction: false,
    },
  });
}

if ('.top5movies'.length) {
  let movieSlider = new Swiper('.movies', {
    grabCursor: true,
    slidesPerView: 6.5,
    spaceBetween: 50,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}

// let trendingMovies = new Swiper(".trendingMovies", {
//   grabCursor: true,
//   slidesPerView: 6.5,
//   spaceBetween: 50,
//   loop: true,
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });

const trendingMovieSlider = document.querySelector('.trendingMovies');
if (trendingMovieSlider) {
  initSlider(trendingMovieSlider, {
    slidesPerView: 6.5,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}

const initSlider = (sliderElement, sliderOptions) => {
  new Swiper(sliderElement, {
    grabCursor: true,
    spaceBetween: 50,
    loop: true,
    ...sliderOptions,
  });
};

window.addEventListener('scroll', function () {
  var scrollPosition = window.scrollY;
  var header = document.querySelector('header');

  if (scrollPosition > 0) {
    header.style.backgroundColor = '#0E1122';
  } else {
    header.style.backgroundColor = 'transparent';
  }
});
