/**
 * Aplica a cor #BECCC3 no background do body da página
 */
function background() {

    /**
     * Tarefa/Issue  1
     *
     * Desenvolva uma função capaz de trocar a cor do fundo da página, ou seja,
     * alterar o background do body para a cor #BECCC3.
     */
    document.getElementsByTagName('body')[0].style.backgroundColor = '#BECCC3';
}

/**
 * Recupera os valores dos campos de texto cujo o id='fname' e id='lname'
 * e apresente o nome e o sobrenome de uma pessoa (separado por um espaço)
 * na div id='result'
 */
function show() {

    /**
     * Issue  2
     *
     * Recupera os valores dos campos de texto cujo o id='fname' e id='lname' e apresente o nome
     * e o sobrenome de uma pessoa (separado por um espaço) na div id='result'
     */
    let name = document.getElementById('fname').value;
    let lastName = document.getElementById('lname').value;
    document.getElementById('result').innerHTML =`<p>${name} ${lastName}</p>`;
}

/**
 * Filtra o array de objetos (data) de acordo com os caracteres
 * digitados no campo de texto id='name'
 */
function search() {

    var data = [{ name: "Rodrigo" }, { name: "Ricardo" }, { name: "Fabio" }, { name: "Alex" }, { name: "Sílvia" }];

    /**
     * Issue 3
     *
     * Utilizando o array (data) de objetos JSON acima, desenvolva um código que permita com que os
     * usuários procurem pelo nome de pessoas. Assim, quando o usuário digitar a letra 'r' no campo
     * de texto (id='name'), todas as pessoas que iniciarem com essa letra devem ser apresentados.
     * Consequentemente, quando for digitado 'ro' o sistema deve filtrar e apresentar na div com o
     * id='search' as pessoas cujo o nome inicia com 'ro'.
     *
     * Segue algumas funções que podem auxiliar na resolução da questão:
     *      substr - https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/substr
     *      length - https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/length
     *      toUpperCase - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
     *
     * Além disso, a função removeAllChildren abaixo também pode ser útil para o desenvolvimento da solução
     */
    let searchName = document.getElementById('name').value;
    let searchDiv = document.getElementById('search');
    let t = '';
    data.forEach(person => {
         if(person.name.toLowerCase().substr(0, searchName.length).indexOf(`${searchName.toLowerCase()}`) > -1){
            t += `<div>${person.name}</div>`;
        }
    });
    searchDiv.innerHTML = t;
}

/**
 * Remove todos os filhos de um nó
 *
 * @param {*} node Um objeto HTML Node
 */
function removeAllChildren(node) {
    while (node.hasChildNodes()) {
        node.removeChild(node.firstChild);
    }
}
