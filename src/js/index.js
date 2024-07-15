import Swiper from 'swiper';
import 'swiper/css';
import '../css/index.css';

document.addEventListener('DOMContentLoaded', function () {

    let caseSlider = new Swiper('.cases-swiper', {
        centeredSlides: true,
        slidesPerView: 1.5,
        spaceBetween: 40,
        grabCursor: true,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        breakpoints: {
            1024: {
                slidesPerView: 1.5,

            },
          },
    });

    // Set greeting in pageheader
    function getGreeting() {
        const currentHour = new Date().getHours();

        let greeting;
        if (currentHour >= 6 && currentHour < 12) {
            greeting = 'Goedemorgen!';
        } else if (currentHour >= 12 && currentHour < 18) {
            greeting = 'Goedemiddag!';
        } else if (currentHour >= 18 && currentHour < 24) {
            greeting = 'Goedenavond!';
        } else {
            greeting = 'Goedenacht!';
        }

        document.querySelector('.greeting').innerHTML = greeting;
    }

    // Hamburger menu
    function toggleHamburgerMenu() {
        const hamMenu = document.querySelector('.ham-menu');
        const offScreenMenu = document.querySelector('.nav-content');
        const menuLinks = document.querySelectorAll('.nav-content ul li a');
        const body = document.body

        hamMenu.addEventListener('click', ()=> {
            hamMenu.classList.toggle('active');
            offScreenMenu.classList.toggle('active');

            if(hamMenu.classList.contains('active')) {
                body.style.overflow = 'hidden';
            } else {
                body.style.overflow = '';
            }
        });

        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamMenu.classList.remove('active');
                hamMenu.classList.add('closed');
                offScreenMenu.classList.remove('active');
                offScreenMenu.classList.add('closed');
                body.style.overflow = '';
            });
        });
    }

    // CV card rotation
    function rotateCardOnHover() {
        const cardBtn = document.querySelector('.card-btn');
        const cvCard = document.querySelector('.cv-card');

        cardBtn.addEventListener('mouseenter', function() {
            cvCard.style.transform = 'rotate(0deg)';
        });

        cardBtn.addEventListener('mouseleave', function() {
            cvCard.style.transform = 'rotate(-4deg)';
        });
    }

    // Get footer year
    function getCurrentYear() {
        const currentYear = document.querySelector("#currentYear");
        const newYearDate = new Date().getFullYear();

        currentYear.innerHTML = newYearDate;
    }

    // Set navbar color
    function setNavbarColor() {
        const navbar = document.querySelector('header');
        
        if (window.scrollY > 0) {
            navbar.style.backgroundColor = 'rgba(0, 6, 8, 0.9)';
        } else {
            navbar.style.backgroundColor = 'transparent';
        }
    }

    function changeNavActive() {
        const navLinks = document.querySelectorAll(".nav-content ul li a");
        let fromTop = window.scrollY;

        navLinks.forEach(link => {
            let section = document.querySelector(link.hash);

            if (section) {
                if (
                    section.offsetTop <= fromTop && 
                    section.offsetTop + section.offsetHeight > fromTop
                ) {
                    link.classList.add("nav-active");
                } else {
                    link.classList.remove("nav-active");
                }
            }
        });
    }

    const skills = document.querySelectorAll('.skill');

    function applyGlowAnimation() {
        skills.forEach((skill, index) => {
            setTimeout(() => {
                skill.style.animation = 'glow 1.5s alternate';

                skill.addEventListener('animationend', () => {
                    skill.style.animation = 'none';
                });
            }, index * 150); 
        });
    }

    applyGlowAnimation();

    // Herhaal applyGlowAnimation elke 10 seconden
    setInterval(() => {
        applyGlowAnimation();
    }, 10000);

    toggleHamburgerMenu();
    getGreeting();
    rotateCardOnHover();
    getCurrentYear();
    window.addEventListener('scroll', setNavbarColor);
    window.addEventListener("scroll", changeNavActive);
});