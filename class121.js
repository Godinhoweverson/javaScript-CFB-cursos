const f_texto = document.querySelector('#f_texto')
const p_texto = document.querySelector("#p_texto");
const btn_texto = document.querySelector("#btn_texto");

btn_texto.addEventListener("click", (evt) =>{

})

let num = 10
const curso = 'JavaScript'



localStorage.setItem("curso", curso);
localStorage.setItem("nome", 'bruno');
localStorage.setItem("numero",num)
localStorage.setItem("numero", 33);
// alert(localStorage.getItem("numero"));

// localStorage.clear()

// alert(localStorage.getItem(localStorage.value(0)))

alert(localStorage.length)

