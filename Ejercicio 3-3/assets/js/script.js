//Variable global del color
let backgroundColor = "white"

//Div con id "key"
const key = document.querySelector("#key")
key.style.backgroundColor = backgroundColor

//Evento botones y cambio de valor de variable global
document.addEventListener("keydown", function(event) {
    if (event.key === "a" || event.key === "A") {
        updateColor("pink")
    } else if (event.key === "s" || event.key === "S") {
        updateColor("orange")
    } else if (event.key === "d" || event.key === "D") {
        updateColor("cyan")
    } else if (event.key === "q" || event.key === "Q") {
        agregarElemento("purple")
    } else if (event.key === "w" || event.key === "W") {
        agregarElemento("grey")
    } else if (event.key === "e" || event.key === "E") {
        agregarElemento("brown")
    } else if (event.key === "b" || event.key === "B") {
        eliminarElemento()
    }
})
//Funcion para actualizar color tras presionar boton
function updateColor(color) {
    backgroundColor = color
    key.style.backgroundColor = backgroundColor
}
//Funcion para crear div con color como argumento
function agregarElemento(color) {
    const contenedor = document.querySelector("#contenedor")
    const nuevoElemento = document.createElement("div")
    nuevoElemento.textContent = "Nuevo elemento"
    nuevoElemento.classList.add("nuevo-elemento")
    contenedor.appendChild(nuevoElemento)
    nuevoElemento.style.backgroundColor = color
    //nuevoElemento.style.width = "200px"
    //nuevoElemento.style.height = "200px"
}
//Funcion para eliminar ultimo div creado
function eliminarElemento() {
    contenedor = document.querySelector("#contenedor")
    elementos = contenedor.querySelectorAll("div")
    if (elementos.length > 0) {
    contenedor.removeChild(elementos[elementos.length - 1])
}}