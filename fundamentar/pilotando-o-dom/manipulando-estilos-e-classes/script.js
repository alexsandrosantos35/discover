//Alterando estilos
//style

/* const element = document.querySelector("body")

element.style.backgroundColor = "#F9F302"

console.log(element.style.backgroundColor) */

//Alterando estilos e classes
//classList

const element = document.querySelector("body")
element.classList.add("active", "green")
console.log(element.classList)
element.classList.remove('active')
element.classList.toggle('active')
