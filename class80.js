const olhos = [...document.getElementsByClassName('olho')]

console.log(olhos)

let psx_mouse = 0
let posy_mose = 0


window.addEventListener('mousemove', (evt) =>{
  psx_mouse = evt.clientX
  posy_mose = evt.clientY

  const rot = Math.atan2(posy_mose, psx_mouse) * 360 / Math.PI

  olhos.forEach((o) => {
    o.style.transform = "rotate("+rot+"deg)"
  })
})
