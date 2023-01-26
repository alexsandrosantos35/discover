//Eventos

/* function myPrint() {
    console.log("Olá")
} */

/* const input = document.querySelector('input')

input.onkeypress = function() {
    console.log("rodei")
} */

/* const h1 = document.querySelector('h1')

h1.addEventListener('click', myPrint)

function myPrint() {
    console.log("Olá")
} */

const input = document.querySelector('input')

input.onkeypress = function(event) {
    console.log(event)
}