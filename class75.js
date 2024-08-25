 const numero = document.getElementById("numero")
 const btn_promessa = document.getElementById('btn_promessa')

 btn_promessa.addEventListener('click',(evt)=>{
  promessa()
 })

 const promessa = () =>{
   numero.innerHTML = "Processando...";
   let p = new Promise((res_ok, rej_nao_ok) => {
     let resultado = true;

     let tempo = 3000;
     setTimeout(() => {
       if (resultado) {
         res_ok("Deu tudo certo");
          numero.innerHTML = "Deu tudo certo";
          numero.classList.remove("erro");
          numero.classList.add("ok");
       } else {
         rej_nao_ok("Deu tudo errado");
          numero.innerHTML = 'Deu tudo errado';
          numero.classList.add("erro");
          numero.classList.remove("ok");
       }
     }, tempo);
   });
   return p
 }
 numero.innerHTML = "Esperando...";