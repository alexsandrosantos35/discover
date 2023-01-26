# Layout e evolução

Layout tem a ver com a maneira como os elementos estão distribuidos na tela

## Normal flow

Ou flow layout é como os elementos `block` e `inline` ficam na tela

```html 
<p>Texto block com<strong> inline </strong>dentro</P>
``` 

## Table

É a maneira de tabelas onde a tag `table` recebe um display `table` fazendo com que  os elementos internos como `td`e `tr` possam ser usados como uma tabela

```html
        <table>
            <tr>
                <td>Hora</td>
                <td>20:00</td>
            </tr>
            <tr>
                <tr>
                    <td>Hora</td>
                    <td>20:27</td>
            </tr>
        </table>
```

## Tableless

Uso de propriedades `float` e `clear` para que os elementos possam mudar de posição na tela

```html
<div style="float: left">
Esquerda</div>

<div style="float: right">
Direita</div>

<div style="clear: both">
Normal</div>
```

## Flexbox

A caixa se torna `flex` fazendo com que possa receber melhor

- Alinhamento
- Ordenação
- Tamanhos flexíveis
        