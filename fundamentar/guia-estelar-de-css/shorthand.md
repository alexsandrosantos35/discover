# Shorthand

* junção de propriedades
* resumido
* legível

```css
{
  /* backgound properties */
background-color: #000;
backgound-image: url(images/bg.gif);
background-repeat: no-repeat;
background-position: left-top;

background: #000 url(images/bg.gif) no-repeat left top;

/* font properties */
font-style: italic;
font-weight: bold;
font-size: 8em;
line-height: 1.2;
font-family: Arial, sans-serif;

font: italic bold 8em/1.2 Arial, sans-serif;

}

```
## Detalhes 

* Não irá considerar propriedades anteriores
* Valores não especificados irão assumir valor padrão
* Geralmente a ordem descrita não importa, mas, se houver muitas propriedades com valores semelhantes podemos encontra  problemas