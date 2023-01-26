//Criando adcionando elementos
//createElement 

const div = document.createElement("div");
div.innerText = "Olá devs"

//append prepend
/* const body = document.querySelector("body") */
/* 
body.prepend(div) */

//insertBefore

const body = document.querySelector('body')
const header = document.querySelector('header')
body.insertBefore(div, header.nextSibling)
