//Manipulando conteúdo
//textContent
/* 
const element = document.querySelector('h1')

element.textContent += " Olá devs"

console.log(element.textContent) */

//Manipulando conteúdo
//innerText

/* const element = document.querySelector("h1")

element.innerText = "Olá  mundo" */

//Manipulando conteúdo
//innerHTML

/* const element = document.querySelector("h1")

element.innerHTML = "Olá devs! <small>!!!</small>" */

//Manipulando conteúdo
//value
/* 
const element = document.querySelector('input')

console.log(element.value)
element.value = "Outro valor" */

//Manipulando atributos

const header = document.querySelector("header")

header.setAttribute("id", "header")

const headerId = document.querySelector("#header")

console.log(headerId.getAttribute("class"))

header.removeAttribute('id')

header.setAttribute("class", 'bg header')