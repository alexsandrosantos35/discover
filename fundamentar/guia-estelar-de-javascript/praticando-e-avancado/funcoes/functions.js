//function expression
//function anonymous
/* 
let total = 0

//Parâmetros (parameters)
const sum = function(number1, number2) {
    let total = number1 + number2
    return total 
}


let number1 = 34
let number2 = 25
sum(number1, number2) // arguments-argumentos
 
console.log(`O número 1 é ${number1}`)
console.log(`O número 2 é ${number2}`) 
console.log(`A soma é ${sum(number1, number2)}`)
console.log(total)
 */

//Função é um liquidificador

/* function fazerSuco(fruta1, fruta2) {
    return fruta1 + fruta2
}

const copo = fazerSuco('banana', 'maçã')

console.log(copo) */

//Function scope

/* let subject

function createThink() {
    subject = "study"
    
}
console.log(subject)
console.log(createThink())
console.log(subject) */

//Function hoisting

/* sayMyName()

const sayMyName = function (){
    console.log("Alexsandro")
} */

//arrow function
/* const sayMyName = (name) => {
    console.log(name)
}

sayMyName("Alexsandro") */

//callback functions

/* function sayMyName(name) {
    console.log("Antes de executar a função callback")
    name()
    console.log("Depois de executar a callback")
}

sayMyName(
    () => {
        console.log('Estou em uma callback')
    }
) */

//Function() construtor

//Expressão new
//Criar um novo objeto
//this keyword

function Person(name, age) {
    this.name = name
    this.age = age
    this.walk = function() {
        console.log('Andando')
    }
}

const mayk = new Person('Mayk', 12)
const joao = new Person("João", 18 )
console.log(mayk.walk())
console.log(joao.walk())
console.log(joao.name, joao.age)