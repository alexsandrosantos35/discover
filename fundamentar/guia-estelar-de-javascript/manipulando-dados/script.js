//Manipulando arrays

let techs = ['html', 'css', 'js']


//Adicionar um item no fim
techs.push('nodejs')
//Adicionar um item no começo
techs.unshift('sql')
//Remover do fim
//.pop()
//Remover do começo
//techs.shift()
//Pegar somente alguns elementos do array
//console.log(techs.slice(1,3))
//Remover um item ou mais itens de qualquer posição do array
//techs.splice(1, 1)
//Encontrar a posição de um elemento no array
let index = techs.indexOf('css')
techs.splice(index, 1)

console.log(techs)