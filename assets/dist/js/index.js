// Setting the current date
document.addEventListener('DOMContentLoaded', function() {
    var dateElement = document.getElementById('current-date');
    var currentDate = new Date();
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    dateElement.textContent = currentDate.toLocaleDateString('id-ID', options);
});

// Navigation menu toggle
const navToggle = document.querySelector(".nav-menu-amp-toggle"),
      navMenu = document.querySelector(".nav-menu-amp"),
      navClose = document.querySelector(".nav-menu-amp-close");

if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu-amp");
    });
}

if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu-amp");
    });
}

// Slider configuration
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

// Back to top button functionality
const backTopBtn = document.querySelector(".back-top-btn");

const showElementOnScroll = function () {
    if (window.scrollY > 150) {
        backTopBtn.classList.add("active");
    } else {
        backTopBtn.classList.remove("active");
    }
}

window.addEventListener("scroll", showElementOnScroll);

// Carousel
document.addEventListener("DOMContentLoaded", function() {
    let carousel = document.getElementById('carouselExample');
    let items = carousel.querySelectorAll('.carousel-item');
    let indicators = carousel.querySelectorAll('.carousel-indicators li');
    let interval = 4500;
    let currentIndex = 0;

    function showItem(index) {
        items.forEach((item, i) => {
            item.classList.toggle('active', i === index);
            indicators[i].classList.toggle('active', i === index);
        });
    }

    function nextItem() {
        currentIndex = (currentIndex + 1) % items.length;
        showItem(currentIndex);
    }

    function prevItem() {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        showItem(currentIndex);
    }

    carousel.querySelector('.carousel-control-next').addEventListener('click', function() {
        nextItem();
    });

    carousel.querySelector('.carousel-control-prev').addEventListener('click', function() {
        prevItem();
    });

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', function() {
            currentIndex = index;
            showItem(currentIndex);
        });
    });

    setInterval(nextItem, interval);
});
