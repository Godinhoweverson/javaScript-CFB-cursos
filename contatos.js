import { contatos } from "./bancoContatos.js";

let contato = {
  getTodosContatos:function(){
    return contatos
  },
  getContato:function(i_cont){
    return contatos[i_cont]
  },
  addContato:function(novoContato, destinoDom){
    const cont = {
      nome:novoContato.nome,
      telefone:novoContato.telefone,
      email:novoContato.email
    }
    contatos.push(cont)
   destinoDom.innerHTML = ''
    contatos.forEach(el => {
       const div = document.createElement("div");
       div.setAttribute("class", "contato");
       const p_nome = document.createElement("p");
       p_nome.innerHTML = el.nome;
       const p_telefone = document.createElement("p");
       p_telefone.innerHTML = el.telefone;
       const p_email = document.createElement("p");
       p_email.innerHTML = el.email;
       const deleteDiv = document.createElement('p')
       deleteDiv.innerHTML = 'X'
       deleteDiv.setAttribute("class", "delete");
       div.appendChild(p_nome);
       div.appendChild(p_telefone);
       div.appendChild(p_email);
       div.appendChild(deleteDiv)
       destinoDom.appendChild(div);
       const getDelete = document.querySelector('.delete')
       getDelete.addEventListener('click', () =>{
        contatos.filter(contato => contato !== el)
        destinoDom.innerHTML = ''
      });
  })

  }
}

export default contato