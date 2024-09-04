const objetos = document.getElementById("objetos");

const computador = {
  cpu:'i9',
  ram:'64gb',
  hd: '2tb',
  info: function(){
    console.log(this.cpu)
  }
}

computador.monitor = '22'

const c1 = Object.assign({},computador)

c1.info()

delete(computador.hd)

const o1 = {obj:'1'}
const o2 = { obj2: "2" };
const o3 = { obj3: "4" };
const o4 = Object.assign(o1,o2,o3)
console.log(o4)

const computadores = [
  {
    cpu: "i8",
    ram: "64gb",
    hd: "2tb",
  },
  {
    cpu: "i5",
    ram: "64gb",
    hd: "2tb",
  },
  {
    cpu: "i7",
    ram: "64gb",
    hd: "2tb",
  },
];

// computador.info();
console.log(computador);
// objetos.innerHTML = JSON.stringify(computadores);

computadores.forEach((c)=>{
  
  const div = document.createElement('div')
  div.innerHTML = c.cpu+'<br/>'+c.ram+'<br/>'+c.hd
  div.setAttribute('class', 'computador')
  objetos.appendChild(div)
})