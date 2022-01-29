document.addEventListener("DOMContentLoaded", function(event) {
    document.querySelector("#visit-card__switch-theme").addEventListener('click', switchTheme);
});

function switchTheme() {
    let bodyCardClassList = document.querySelector("body").classList;
    bodyCardClassList.toggle("dark-theme");
    bodyCardClassList.toggle("light-theme");
}
