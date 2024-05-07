const form = document.getElementById('form-contato');
let linhas = '';
const arrayNomeContato = [];
const arrayTelContato = [];

form.addEventListener('submit', function (e) {
    e.preventDefault();
    adicionaContato();
    atualizaTabela();
})

function adicionaContato() {
    const nomeContato = document.getElementById('nome-contato');
    const telContato = document.getElementById('tel-contato');

    if (arrayNomeContato.includes(nomeContato.value) && arrayTelContato.includes(telContato.value)) {
        alert('Já existe um contato com estas informações!')
    } else {
        //cria uma nova linha na tabela
        let linha = '<tr>';
        linha += `<td>${nomeContato.value}</td>`;
        linha += `<td>${telContato.value}</td>`;
        linha += '</tr>';

        //adiciona as linhas criadas dentro da variável
        linhas += linha;

        arrayNomeContato.push(nomeContato.value);
        arrayTelContato.push(telContato.value);
    }

    //remove as informações dos campos após cadastrado
    nomeContato.value = '';
    telContato.value = '';
}

function atualizaTabela() {
    // reconhece o corpo da tabela
    const dadosTabela = document.querySelector('tbody');

    //adiciona as linhas criadas na tabela
    dadosTabela.innerHTML = linhas;
}