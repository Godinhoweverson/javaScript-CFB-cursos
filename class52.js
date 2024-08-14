const caixa = document.querySelector('#caixa')

let cores= ['azul', 'verde', 'vermelho']
let cursos = ['HTML', 'CSS', 'JAVASCRIPT', cores]

cursos.push('c++')
cursos.push('Python')

cursos.pop()

cursos.unshift("typeScript");
cursos.shift()

cursos.map((el) => {
  let p =document.createElement('p')
  p.innerHTML = el
  caixa.appendChild(p)
})