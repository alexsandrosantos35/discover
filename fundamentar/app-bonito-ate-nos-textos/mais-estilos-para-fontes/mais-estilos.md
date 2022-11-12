# font-variant

* variações no estilo da fonte

```css
p {
    font-variant: small-caps;
}
```


https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant


-----------------------------------------

# font-stretch

* Alargamento ou encolhimento da fonte
* Aceita palavra-chave como: expanded, condensed, normal
* Aceita percentagem de 50% a 200%

```css
p {
    font-stretch: expanded;
}
```

https://developer.mozilla.org/en-US/docs/Web/CSS/font-stretch



---------------------------------------------------

## letter-spacing

* espaço entre caracteres

```css
p {
    letter-spacing: 4px;
}
```

----------------------------------------------------

 ## Word-spacing

Define o espaçamento entre palavras

```css
p {
	word-spacing: 1em;
}
```


https://developer.mozilla.org/en-US/docs/Web/CSS/word-spacing


------------------------------------------------

## line-height

* espaço entre linhas
* pode ser com unidades ou sem unidades de medida
* comuns: 1.5 ou 2

```css
p {
    line-height: 1.6;
}
```


https://developer.mozilla.org/en-US/docs/Web/CSS/line-height


-------------------------------------------------

## text-transform

* Transformação do texto
* Valores podem ser: none | capitalize | uppercase | lowercase | full-width | full-size-kana
```css 
p {
	text-transform: uppercase;
}
```


https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform


-------------------------------------------------------

## text-decoration

* Aparência decorativa do texto
* Line: underline | overline | line-through
* style: wavy | dotted | double | dashed | solid
* color: `<color>` values 

```css
p {
    text-decoration: undeline; /* shorthand */
}
```

----------------------------------------------------

## text-align

* Alinhamento de um texto

```css
p {
    text-align: center; /* left|right|center|justify */
}
```

https://developer.mozilla.org/en-US/docs/Web/CSS/text-align


----------------------------------------------------


## text-shadow

* Sombra aplicada a um texto
* Permite multiplos valores

```css
p {
    text-shadow: 1px 1px 1px red,/* offset-x| offset-y| blur-radius| color*/
               2px 2px 2px green;
}
```


https://developer.mozilla.org/en-US/docs/Web/CSS/text-shadow


---------------------------------------------------

## shorthand

* font-style, font-variant, font-weight, font-stretch, font-size, line-height, font-family

```css
p {
/* -style, -variant, -weight, -stretch, -size,  line-height e family*/ 
font: italic normal bold normal 3em/1.5 Helvetica, Arial, sans-serif;
}

