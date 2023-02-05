const questions = [
    "O que aprendi hoje?",
    "O que me deixou aborrecido? E o que poderia fazer para melhorar?",
    "O que me deixou feliz hoje?",
    "Quantas pessoas ajudei hoje?",
]

const ask = (index = 0) => {
    process.stdout.write("\n\n" + questions[index] + " > ")
}

ask()

const answers = []
process.stdin.on("data", data => {
    answers.push(data.toString().trim())
    if(answers.length < questions.length) {
        ask(answers.length)
    }
    else {
        process.exit()
    }
} )

process.on('exit', () => {
console.log(`
Bacana Alexsandro

    O que voçê aprendeu hoje?
    ${answers[0]}

    O que me deixou aborrecido e o que poderia fazer para melhorar?
    ${answers[1]}

    O que me deixou feliz hoje?
    ${answers[2]}

    Quantas pessoas ajudei hoje?
    ${answers[3]}

`)
}) 
