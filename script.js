// menu
const menu_icon_open = document.querySelector(".menu_icon_open");
const menu_icon_close = document.querySelector(".menu_icon_close");
const nav_container = document.querySelector(".nav_container");
const to_overlay = document.querySelectorAll(".to_overlay");

menu_icon_open.addEventListener("click", function () {
    this.classList.add("close");
    menu_icon_close.classList.toggle("close");
    menu_icon_close.classList.toggle("open");
    nav_container.classList.toggle("close");
    nav_container.classList.toggle("open");

    to_overlay.forEach(element => {
        element.classList.toggle("open");
    });
});

menu_icon_close.addEventListener("click", function () {
    this.classList.toggle("open");
    this.classList.toggle("close");
    menu_icon_open.classList.toggle("close");
    nav_container.classList.toggle("close");
    nav_container.classList.toggle("open");

    to_overlay.forEach(element => {
        element.classList.toggle("open");
    });
});

// menu
