// Navbar

let prevScrollpos = window.pageYOffset;
let currentScrollPos;
window.onscroll = function () {
    currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").classList.remove("hidden");
    } else {
        document.getElementById("navbar").classList.add("hidden");
    }
    prevScrollpos = currentScrollPos;

    if (currentScrollPos === 0) {
        document.getElementById("navbar").classList.remove("hidden");
    }
}