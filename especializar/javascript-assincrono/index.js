/* promise

A promessa de que algo vai acontecer
Poderá dar certo ou errado
mas irá acontecer */

let aceitar = false

console.log('Pedir uber')
const  promessa = new Promise( (resolve, reject) => {
    
    if(aceitar) {
       return resolve('pedido aceito')
    }

    return reject('pedido negado')
})

console.log("Aguardando")

promessa.then(result => console.log(result))
.catch(erro => console.log(erro))
.finally(() => console.log('finalizada'))

