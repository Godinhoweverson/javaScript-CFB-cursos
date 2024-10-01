import { Cxmsg } from "./cxmsg.js";

const config = {
  cor:'#48f',
  tipo: 'ok',
  textos:['SIM','NAO'],
  comando_sn:() =>{

  }
}

const fsim = () =>{
  console.log('Botao SIM pressionado')
}

const btn_mostarcxmsg = document.querySelector('#btn_mostarcxmsg')
const btn_mostarcxmsg2 = document.querySelector("#btn_mostarcxmsg2");
const btn_mostarcxmsg3 = document.querySelector("#btn_mostarcxmsg3");

btn_mostarcxmsg.addEventListener('click', ()=>{
  config.tipo = 'ok'
  Cxmsg.mostrar(config, 'CFB Cursos', "Curso de JavaScript")
})

btn_mostarcxmsg2.addEventListener("click", () => {
  config.tipo = "sn";
  config.comando_sn= () =>{fsim()}
  Cxmsg.mostrar(config,"Youtube", "Canal com cursos de programacao");
});

btn_mostarcxmsg3.addEventListener("click", () => {
    config.tipo = "sn";
    config.textos = ['OK', 'CANCELA']
  Cxmsg.mostrar(config,"Javascript", "Aula 138");
});