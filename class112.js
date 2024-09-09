const q1 = document.getElementById('q1');
const q2 = document.getElementById("q2");
const posx = document.getElementById("posx");
const posy = document.getElementById("posy");
const largura = document.getElementById("largura");
const altura = document.getElementById("altura");

q1.accessKey='b'
q2.accessKey = "n";

console.log(q1.accessKey)

let domReact_q1 = q1.getBoundingClientRect();
let domReact_q2 = q2.getBoundingClientRect();

q1.addEventListener('click', () =>{
  posx.innerHTML = `posx:${domReact_q1.x}`;
  posy.innerHTML = `posy:${domReact_q1.y}`;
  largura.innerHTML = `largura:${domReact_q1.width}`;
  altura.innerHTML = `Altura:${domReact_q1.height}`;
})

q2.addEventListener("click", () => {
  posx.innerHTML = `posx:${domReact_q2.x}`;
  posy.innerHTML = `posy:${domReact_q2.y}`;
  largura.innerHTML = `largura:${domReact_q2.width}`;
  altura.innerHTML = `Altura:${domReact_q2.height}`;
});

