const navToggle = document.querySelector(".nav-menu-toggle"),
      navMenu = document.querySelector(".nav-menu"),
      navClose = document.querySelector(".nav-menu-close");

if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu")
    })
}

if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu")
    })
}

// SLIDER

var swiper = new Swiper(".breaking-container", {
    centeredSlides: true,
    cssMode: true,
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
    },
    loop: true,
    slidesPerView: 1,
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 0,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 0,
        }
    }
});


// BACK TOP BTN

const backTopBtn = document.querySelector(".back-top-btn");

const showElementOnScroll = function () {
    if (window.scrollY > 150) {
        backTopBtn.classList.add("active");
    } else {
        backTopBtn.classList.remove("active");
    }
}

window.addEventListener("scroll", showElementOnScroll);