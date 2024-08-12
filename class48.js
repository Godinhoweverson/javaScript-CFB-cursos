const p_array = document.querySelector("#array");
const btnVerificar = document.querySelector("#btnVerificar");
const resultado = document.querySelector("#resultado");

const elementos_array = [21, 25, 17, 22, 19, 25, 20];
p_array.innerHTML = "[" + elementos_array + "]";

btnVerificar.addEventListener("click", (evt)=> {
  const ret = elementos_array.every((e,i) => {
    console.log(i)
    if(e<18) {
      resultado.innerHTML= "Array nao conforme na posicao" + i
    }
    return e >= 18
  })

  if (ret) {
    resultado.innerHTML = 'Ok'
  }
})