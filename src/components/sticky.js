var navbar = document.querySelector("nav");
var sticky = navbar.offsetTop;
window.onscroll = function() {stickyNavbar()}

function stickyNavbar() {
    if (window.pageYOffset >= sticky){
        navbar.classList.add("sticky")
} else {
    navbar.classList.remove("sticky");

}
}