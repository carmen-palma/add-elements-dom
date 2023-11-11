 // Aquí tu código
document.addEventListener("DOMContentLoaded", function() {
    const agregarBtn = 
document.getElementById("agregar");
    const lista =
document.getElementById("lista");

agregarBtn.addEventListener("click", function() {
    const nuevoElement =
prompt("Ingrese un nuevo elemento:")

    if (nuevoElement !== null && nuevoElemento.trim() !== "") {
        const nuevoLi = 
document.createElement("li");
        nuevoLi.textContent = nuevoElemento;
lista.appendChild(nuevoLi);
        }
    });
});