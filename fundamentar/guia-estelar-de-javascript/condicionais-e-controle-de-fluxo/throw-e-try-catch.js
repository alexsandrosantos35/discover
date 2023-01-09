//throw

function sayMyName(name = "") {
    if(name === "") {
        throw 'Nome é obrigatório'
    }

    console.log('Após o throw')
}



//try... catch

try{
    sayMyName()
}

catch(e){
console.log(e)
}

console.log('após a função de erro')