# Cores

Usamos css para alterar cores no nosso documento

## Tipos

* background-color para caixassy
* border-color (para caixas)
* outros...

## Valores
Podemos definir valores por

* Palavra-chave(blue, transparent)
* hexadecimal (#1a1a1a)
* funções: rgb, rgba, hsl, hsla

```css
    elements {
        /* keyword values */
    color: currentcolor;

        /* <named-color> values */
        color: red;
        color: orange;
        color: tan;
        color: rebeccapurple;

        /* <hex-color> values 0-F */
        color: #090;
        color: #009900;
        color: #090a;
        colos: #009900aa;

        /* <rgb()> values */
        color: rgb(34, 12, 64, 0.6); /* 0-255 */
        color: rgba(34, 12, 64, 0.6)
        color: rgb(34 12 64 /0.6)
        color: rgba(34 12 64 /0.3)
        color: rgb(34.0 12 64 /60%)
        color: rgba(34.0 12 64 /30%)

        /* <hsl()> values */
        color: hsl(30 100% 50% 0.6)
        color: hsla(30 100% 50% 0.6)
        color: hsl(30 100% 50% 0.6)
        color: hsla(30 100% 50% 0.6)
        color: hsl(30.0 100% 50% 60%)
        color: hsla(30.2 100% 50% 60%)

        /* global values */
        color: inherit;
        color: initial;
        color: unset;
        color: currentcolor;

    }
```

## Referências

    https://developer.mozilla.com/en-US/docs/web/CSS/color_value

