function slideAberto(el) {
    var elem = document.getElementById(el);
    elem.style.transition = "right 0.8s ease-in 0s";
    elem.style.right = "0px";
}

function slideFechado(el) {
    var elem = document.getElementById(el);
    elem.style.transition = "right 0.8s ease-in 0s";
    elem.style.right = "-1030px";
}
