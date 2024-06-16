//2.1 Función Normal
function pintar() {
    ele.style.backgroundColor = "yellow"
}
const ele = document.querySelector("#ele1")
ele.addEventListener("click", pintar)

//2.2 Función Anónima
const eleAnonima = document.querySelector("#ele2")
eleAnonima.addEventListener("click", function() {
    eleAnonima.style.backgroundColor = "yellow"
})

//2.3 Pasar color como argumento
function agregarFondo(color = "green") {
    const eleArg = document.querySelector("#ele3")
    eleArg.style.backgroundColor = color
}

const eleArg = document.querySelector("#ele3")
eleArg.addEventListener("click", function() {
    agregarFondo("yellow")
    //agregarFondo()
})

//2.3 Con funcion arrow
function agregarFondoArrow(color = "green") {
    const eleArgArrow = document.querySelector("#ele4")
    eleArgArrow.style.backgroundColor = color
}
const eleArgArrow = document.querySelector("#ele4")
eleArgArrow.addEventListener("click", ()=> agregarFondoArrow("yellow"))
