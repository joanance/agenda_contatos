const form = document.getElementById('form-contatos');
const numeros = [];
const contato =[];

let Linhas ='';

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    AdicionaLinha ();
    AtualizaTabela ();

});

function AdicionaLinha(){
    const inputNomeContato=document.getElementById('nome-contato');
    const inputNumeroContato=document.getElementById('numero-contato');

    if(numeros.includes(inputNomeContato.value)){
        alert(`Esse numero ${inputNomeContato} já foi inserido`)
    }else {

        numeros.push(inputNumeroContato.value);
        contato.push(inputNomeContato.value);
    

    let linha = '<tr>'
    linha+=`<td> ${inputNomeContato.value}<td>`;
    linha+=`<td> ${inputNumeroContato.value}<td>`;
    linha+='<tr>';

    Linhas+=linha;
    }
    inputNomeContato.value='';
    inputNumeroContato.value='';
}

function AtualizaTabela() {
    const corpotabela = document.querySelector('tbody');
    corpotabela.innerHTML= Linhas;
}



