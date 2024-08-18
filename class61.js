

const Pessoa = {
  nome: '',
  idade: '',
  getNome: function () {
    return this.nome;
  },
  getIdade: function () {
    return this.idade;
  },
  setNome:function (nome) {
    this.nome = nome;
  },
  setIdade: function (idade) {
    this.idade = idade;
  },
};


const btnAdd = document.getElementById("btn_add");
let res = document.querySelector(".res");

const addPessoa = function (){
  let div = document.createElement('div')
  div.setAttribute('class', 'pessoa')
  div.innerHTML = `Nome:${Pessoa.getNome()}<br/> Idade: ${Pessoa.getIdade()}`
  res.appendChild(div)

}

btnAdd.addEventListener('click',() =>{
  const nome = document.getElementById("f_nome");
  const idade = document.getElementById("f_idade");
  Pessoa.setNome(nome.value);
  Pessoa.setIdade(idade.value);

  nome.value = "";
  idade.value = "";
  addPessoa();
})
