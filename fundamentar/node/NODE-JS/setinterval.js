//settimeout rodar uma função depois de X milisegundos

const timeOut = 1000

const checking =  () => {console.log('checking')}

let interval = setInterval(checking, timeOut )

setTimeout(() => clearInterval(interval), 4000) 

