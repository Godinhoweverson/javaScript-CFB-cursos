
const caixa1 = document.querySelector("#caixa1");
const btnC1 = document.querySelector("#c1");
const cursos = [...document.querySelectorAll('.curso')]

caixa1.addEventListener('click', () =>{
  console.log('clicou')
})

cursos.map( (evt) => {
  evt.addEventListener('click', (evt) => {
    evt.stopPropagation()
  })
})