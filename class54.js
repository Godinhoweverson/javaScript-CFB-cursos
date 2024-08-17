const caixa = document.querySelector('#caixa')

let mapa = new Map()
  mapa.set('curso', 'Javascipt')
  mapa.set(10, 'CFB Cursos')
  mapa.set(1, 100)
  mapa.set('canal', 100)


  console.log(mapa)

let pes = 10
if(mapa.has(pes)){
  caixa.innerHTML= "A chave existe na coleca o valor" + mapa.get(pes)
}else{
  caixa.innerHTML = "A chave nao existe na colecao"
}
  // caixa.innerHTML = mapa.get('curso')