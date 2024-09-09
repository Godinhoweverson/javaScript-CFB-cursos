const f_nome =document.querySelector('#f_nome')
const f_nota = document.querySelector("#f_nota");
const f_msg = document.querySelector("#f_msg");

document.querySelector('#btn_validar').addEventListener('click', (evt) =>{

  let estadoValidacao = f_nota.validity

  if (estadoValidacao.valueMissing) {
    f_nota.setCustomValidity("Poxa, Este campo e obrigatorio");
  } else if (estadoValidacao.rangeOverflow) {
    f_nota.setCustomValidity("Nossa, que nota alta voce digitou");
  } else if (estadoValidacao.rangeUnderflow) {
    f_nota.setCustomValidity("credo, que nota baixa voce digitou");
  }
  f_nota.reportValidity()
  // f_msg.innerHTML = f_nota.validationMessage
  evt.preventDefault()
})