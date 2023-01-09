//Sistema de notas escolares

function checkNote(note) {
    if(note >= 90 && note <= 100) {
        console.log("A")
      }
      else if(note >= 80 && note <= 89) {
        console.log("B")
      }
      else if(note >= 70 && note <= 79) {
        console.log("C")
      }
      else if(note >= 60 && note <= 69) {
        console.log("D")
      }
      else if( note < 60 && note >= 0) {
        console.log("F")
      }
      else{
        console.log("nota inválida")
      }
}

checkNote(45)
  