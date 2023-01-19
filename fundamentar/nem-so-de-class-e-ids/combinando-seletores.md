# Conbinators

Combinadores pois eles trabalham para buscar e combinar seletores afim de aplicar uma estilização

## Descendant combinator

* Identificado por um espaço entre os elementos
* Busca um elemento dentro de outro

```css
body aticle h2
```

## Child combinator

* Identificado pelo sinal ` > ` entre os seletores
* Seleciona o elemento que é filho direto do pai
* Elementos depois do filho direto sarão desconsiderados

## Adjacent sibling combinator

* Identificado pelo sinal de ` + ` entre os seletores
* Seleciona o elemento do lado direito que é irmão direto na hierarquia.

```css
h1 + p
```
## general sibling combinator

* Identificado pelo sinal ` ~ ` entre dois seletores
* Seleciona todos os elementos irmãos

```css
h1 ~ p
```

##  utilizando combinadores

```css
ul > li[class="red"]
```

## Dica

* Seletores muito específicos tendem a causar dificuldades de reuso das regras de estilização dos elementos
* Muitas vezes uma simples class torna o trabalho muito mais eficiente.