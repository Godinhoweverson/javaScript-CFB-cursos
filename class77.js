const div_data = document.getElementById('div_data')
const div_relogio = document.getElementById("div_relogio");
const btn_ativar = document.getElementById("btn_ativar");
const btn_parar = document.getElementById("btn_parar");
const tmp_alarme = document.getElementById("tmp_alarme");
const hora_alarme = document.getElementById("hora_alarme");
const timer = document.getElementById("timer");


const som_alarme = new Audio('alarm.mp3')
som_alarme.loop=-1

let ts_atual = null 
let ts_alarm = null 
let alarme_ativado = false 
let alarme_tocando = false

btn_ativar.addEventListener('click', () =>{
  ts_atual= Date.now()
  ts_alarm = ts_atual + (tmp_alarme.value * 1000);
  alarme_ativado= true
  const dt_alarme = new Date(ts_alarm)
  hora_alarme.innerHTML = 'Hora do Alarme:'+dt_alarme.getHours()+':'+dt_alarme.getMinutes()+':'+dt_alarme.getSeconds()
})

btn_parar.addEventListener("click", () => {
  alarme_ativado = false
  alarme_tocando = false
  hora_alarme.innerHTML = 'Hora do Alarme'
  tmp_alarme.value = 0
  timer.classList.remove('alarme')
  som_alarme.pause();
  som_alarme.currentTime = 0;
});

const data = new Date()

//console.log(Date.now()) //TimeStamp
let dia = data.getDate()<10?'0'+data.getDate(): data.getDate()

let mes = data.getMonth()
mes=mes<10?'0'+mes:mes

const data_r = dia+'/'+mes+'/'+data.getFullYear()

div_data.innerHTML = data_r


const relogio = ()=>{
  const data = new Date();
  let hora = data.getHours()
  hora=hora < 10 ? '0'+hora : hora

  let minuto = data.getMinutes()
  minuto=minuto < 10 ? '0'+minuto : minuto

  let segundo =  data.getSeconds()
  segundo=segundo < 10 ? `0${segundo}`: segundo

  const hora_formatada = `${hora}:${minuto}:${segundo}`;
  div_relogio.innerHTML = hora_formatada

  if(alarme_ativado && !alarme_tocando){
    if(data.getTime() >= ts_alarm){
      alarme_tocando = true
      som_alarme.play()
      timer.classList.add('alarme')
    }
  }

}
const intervalo = setInterval(relogio, 1000)
