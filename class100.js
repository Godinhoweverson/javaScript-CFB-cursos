const nome = Symbol('nome')
const numero = Symbol("nome");
const corUnirform = Symbol("nome");

const Jogador ={
  nome:'j1',
  numero:10,
  corUnirforme : 'amarelo'
}

for(let p in Jogador){
  console.log(p)
}

console.log(Jogador.nome)