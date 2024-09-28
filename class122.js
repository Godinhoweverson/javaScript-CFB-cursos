const p_temp = document.getElementById('p_temp')
const p_nivel = document.getElementById("p_nivel");
const p_press = document.getElementById("p_press");

const btn_texto = document.getElementById('btn_texto')

const obterDados = () =>{
const endpoint = "https://6c529a8d-9ac5-4c4e-a30d-684e358c78c2-00-2mlneml0p9h2q.spock.replit.dev/"

let res = fetch(endpoint)
.then(res=>res.json())
.then(dados=>{
  console.log(dados)
  p_temp.innerHTML = "Temperatura" + " " + dados.temperatura
  p_nivel.innerHTML = "Nivel" + " " + dados.nivel;
  p_press.innerHTML = "pressao" + " " + dados.pressao;
})
}

let dados = {
  nome:' Weverson',
  canal:'beProgrammer',
  curso: 'JavaScript'
}

let cabecalho = {
  method: 'POST',
  body: JSON.stringify(dados)
}

const gravarDados = ()=>{
  const endpoint =
    "https://6c529a8d-9ac5-4c4e-a30d-684e358c78c2-00-2mlneml0p9h2q.spock.replit.dev/";
  fetch(endpoint, cabecalho)
  .then(res=>res.json())
  .then(ret=>{
    console.log(ret  )
  })
}

btn_texto.addEventListener('click', (evt) =>{
  gravarDados()
})