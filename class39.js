const caixa1 = document.querySelector('#caixa1')
const btn_c =[...document.querySelectorAll('.curso')]

console.log(caixa1.hasChildNodes())
console.log(btn_c[0].hasChildNodes());
console.log(btn_c[0].hasChildNodes());

if(btn_c.children > 0){
  console.log('Possui filhos')
}else{
   console.log('Nao possui filhos')
}

console.log(caixa1.children[1].innerHTML = 'TESTE')

const c1_2 = document.querySelector('#c1_2')

console.log(c1_2.parentNode.parentNode.parentNode.children[4])
