window.addEventListener('load', function() {
    let btns = document.getElementsByClassName("nav-item");
    for (let i = 1; i < btns.length; i++) {
        if (btns[i].childNodes[1].href === window.location.href) {
            btns[i].childNodes[1].classList.add("active");
        }
    }
});