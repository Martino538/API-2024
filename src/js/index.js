import '../css/index.css';

import Swiper from 'swiper';
import 'swiper/css';
import gsap from "gsap";


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
    slidesPerView: 2.5,
    spaceBetween: 25,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      1024: {
        slidesPerView: 6.5,
        spaceBetween: 20,
      }
    },
  });
}

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
  var body = document.querySelector('body');

  if (scrollPosition > 0) {
    header.style.backgroundColor = '#0E1122';
  } else if(header.classList.contains("menu-open")) {
    body.style.overflow = "hidden";
        header.style.backgroundColor = '#0E1122';
  }
});

const hamburgerMenu = document.querySelector('.hamburger-menu');
const header = document.querySelector('header');

hamburgerMenu.addEventListener('click', () => {
  header.classList.toggle('menu-open');
});

gsap.to('.search-card', {
  opacity: 1,
  duration: 1,
  stagger: 0.1 // dit zorgt ervoor dat elke kaart 0.5 seconden na de vorige infade
});