var element = document.getElementById("t-animado");
window.onload = function () {
    var startAnimacion = document.getElementsByClassName("texto-r");
    var contenedor = document.getElementById("loader-container");

    contenedor.style.visibility = "hidden";
    contenedor.style.opacity = "0";
    this.element.classList.toggle("paused-a")
}

function myFunction() {
    this.element.classList.toggle("paused-a")
}