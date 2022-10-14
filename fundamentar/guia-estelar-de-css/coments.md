# comentários

* Não irá afetar o seu código
* Ajuda a lembrar blocos de código
* Deixa dicas para leitura
* Ajuda outros a entenderem
* Nunca esqueça de fechar um comentário aberto

Comentários começam com `/*`e terminam com `*/`.

/* Básico*/ 
/*-------------------------------------------------------*/

body {
    font : 1em/150% helvetica, arial, sans serif;
    padding : 1em;
    margin: 0 auto;
    max-width : 33em;
}

@media (mim-width : 70em) {
    /*Let's especial case the global font size on large screen or window,
    we increase the font size for better readability*/
    font-size : 130%;
}
    /* Elementos específicos */
    /*----------------------------------------------------*/
    div p, #id:first-line {
        background=color : red;
        border-radius : 3px;
    }

    
