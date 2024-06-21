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

// HEADER RIGHT

const rightHeader = document.querySelector(".right-header-toggle"),
      headerRightMenu = document.querySelector(".header-right"),
      rightClose = document.querySelector(".header-right-close");

if (rightHeader) {
    rightHeader.addEventListener("click", () => {
        headerRightMenu.classList.add("show-right-menu")
    })
}

if (rightClose) {
    rightClose.addEventListener("click", () => {
        headerRightMenu.classList.remove("show-right-menu")
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