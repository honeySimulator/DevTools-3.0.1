// Scrolling page

var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 500,
    speedAsDuration: true
});

//Sticky Menu
window.addEventListener("scroll", function () {
    if (window.pageYOffset > 50) {
        document.getElementById("main-nav").className = "scrolling";
    } else {
        document.getElementById("main-nav").className = "";
    }
})