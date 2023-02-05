class Poligono{
    constructor(altura, largura) {
        this.altura = altura
        this.largura = largura
    }
        get area() {
            return this.#calculateArea()
        }

        #calculateArea() {
            return this.altura * this.largura
        }
    
}

const poligono = new Poligono(50, 60)

console.log(poligono.area)