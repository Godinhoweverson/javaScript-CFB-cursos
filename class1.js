// function* cores(){
//   yield 'Vermelho'
//   yield 'Verde'
//   yield 'Azul'
// }

// const itc = cores()
// console.log(itc.next().value)


// const  cursos =  ['HTML', 'CSS', 'JavaScrript', 'PHP', 'React'];

// cursos.map((el, i) => {
//   console.log(`Curso ${el} Position of curso ${i}`);
// })

let el = document.getElementsByTagName('div')
el = [...el]
el.map((e , i ) => {
  e.innerHTML = ' Godinho'
})

const convertInt = (e)=>parseInt(e)
let num  = ['1','2','3'].map(convertInt)
console.log(num)