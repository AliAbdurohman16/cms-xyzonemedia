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