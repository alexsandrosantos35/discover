## border ( outline )

As bordas da caixa

-Value `<border-style>`| `<border-width>`| `<border-color>`
style: solid|dotted|dashed|double|groove|ridge|inset|outset
width: `<length>`
color: `<color>`

```css
div {
    /* shorthand */
    border: solid 2px;
    /* style */
    border: solid;
    /* width: <length>| style */
    border: 2px dotted;
    /* style | color */
    border: outset #f33;
    /* width | style | color */
    border: medium dashed green; 
}
```
### Outline

Diferente em 4 sentidos

- Não modifica o tamanho da caixa pois não faz parte do box model
- Poderá ser diferente de retangular
- Não permite ajustes individuais
- Mas pode ser   utilizado pelo user agent para acessiibilidade