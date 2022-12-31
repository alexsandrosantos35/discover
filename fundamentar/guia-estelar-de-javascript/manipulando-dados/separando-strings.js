//Manipulando strings e números

//Separe um texto que contém espaços, em um novo array onde cada texto é uma posição do array. Depois disso tranforme o array em um texto, onde eram espaços coloque _

let phrase = "Eu quero viver o Amor"
let myArray = phrase.split(" ")
console.log(myArray)
let phraseWithUnderscore = myArray.join("_")
console.log(phraseWithUnderscore)