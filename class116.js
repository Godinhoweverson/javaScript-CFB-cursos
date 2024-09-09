const long = document.getElementById('long')
const lati = document.getElementById("lati");

if(navigator.geolocation){
  navigator.geolocation.getCurrentPosition(mostrarLocalizacao,erroLocalizacao);
}else{
  console.log('Geolocalizacao nao suportada')
}

function mostrarLocalizacao(pos){
  long.innerHTML= pos.coords.longitude
  lati.innerHTML = pos.coords.latitude;

}

function erroLocalizacao(){
  console.log('Erro ao obter a localizacao')
}