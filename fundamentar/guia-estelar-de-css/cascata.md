# A cascata(Cascading)

* A escolha do browser de qual regra aplicar, caso haja muitas regras para um mesmo elemento
* Seu estilo é lido de cima para baixo

É levado em consideração três fatores

1. Origem do estilo
2. Especificidade
3. Importância

### Origem do estilo

inline > tag style > tag link

### Especificidade

É um cálculo matemático, onde, cada tipo de seletor e origem de estilo, possuem valores a serem considerados

0. 0 Universal selector, conbinators, nagation e pseudo-class (:not())
1. 1 Elemente type selector, pseudo-elementos(::before ::after)
10. 10 Class e atribute selectors([type="radio"])
100. 100 id selector
1000. 1000 inline css

### Regra !important

* Cuidado evite o uso
* Não é considerada uma boa prática
* Quebra o fluxo natural da cascata