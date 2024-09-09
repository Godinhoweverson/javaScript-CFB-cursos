const endpoint = "https://6c529a8d-9ac5-4c4e-a30d-684e358c78c2-00-2mlneml0p9h2q.spock.replit.dev/"
let res = fetch(endpoint)
.then(res=>res.json())
.then(dados=>{
  console.log(dados)
})