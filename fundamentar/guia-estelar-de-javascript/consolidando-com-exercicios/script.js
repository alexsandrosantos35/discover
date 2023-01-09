/* 
    * Buscando e contando dados en arrays

Baseado no array de livros por categaria abaixo, faça os seguintes desafios

* Contar o número de categorias e o número de livros em cada categoria
* Contar o número de autores
* Mostrar livros do autor Augusto Cury
* Transformar a função acima numa função que ira receber o nome do autor e devolver os livros do mesmo
*/

const booksByCategory = [
    {
        category: "riqueza",
        books:[
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker"
            },
            {
                title: "O homem mais rico da babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. kiyosaki e Sharon L. Lechter"
            }

        ],
    },
    {
        category: "inteligência emocional",
        books: [
            {
                title: "Voçê é insubstituível",
                author: "Augusto Cury"
            },
            {
                title: "Ansiedade- Como enfrentar o mal do século",
                author: "Augusto Cury"
            },
            {
                title: "7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. covey"
            }

        ]
    }
]
console.log(booksByCategory.length)
for(category of booksByCategory) {
    console.log("Total de livros da categoria: ", category.category)
console.log(category.books.length)
}
function countAuthors () {
    let authors = []
    for(let category of booksByCategory) {
        for(let book of category.books) {
            if(authors.indexOf(book.author)  == -1){
                authors.push(book.author)
            }
        }
    }
    console.log(authors.length)
}

countAuthors()

function booksOfAugustoCury () {
    let books = []
    for(let category of booksByCategory) {
        for(let book of category.books) {
           if(book.author === 'Augusto Cury')
           books.push(book.title) 
        }
    }
    console.log("Livros do autor:", books)
}

booksOfAugustoCury()

function booksOfAuthor(author) {
    let books = [];
    for(let category of booksByCategory) {
        for(let book of category.books) {
           if(book.author === author)
           books.push(book.title) 
        }
    }
    console.log(`Livros do ${author}: ${books.join(", ")}`)
}

booksOfAuthor('Augusto Cury')



