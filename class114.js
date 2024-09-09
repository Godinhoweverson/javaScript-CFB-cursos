let numeros = [10, 20, 30, 40,50,60,70,80,80];
let [a,b,c,...d] = numeros

let obj ={
  nome:'weverson',
  idade: 12,
  cidade:'maua'
}

let{nome, idade} = obj

console.log(nome)
console.log(idade)

console.log(a,b,c,d)

const cores = ()=>{
  return ['verde', 'amarelo','azul', 'branco']
}

let[c1, c2, ,c3] = cores()

console.log(c1)
console.log(c2)
console.log(c3)

let texto = 'Curso de JavaScript'

let [t1,t2,t3] = texto.split(' ')

console.log(t1,t2,t3)