
const { EventEmitter } = require('events')

const ev = new EventEmitter()

//console.log(ev)


    ev.on('saySomething',(message) =>  {
     console.log("eu ouço voçê:", message)   
    })


ev.emit('saySomething', 'Mayk')
ev.emit('saySomething', 'João')
ev.emit('saySomething', 'Camila')
