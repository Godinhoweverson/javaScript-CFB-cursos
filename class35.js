'use strict'

const btn = document.getElementsByClassName('btn')[0]
const container1 = document.querySelector(".container1");
const container2 = document.querySelector(".container2");
const allCourses = [...document.querySelectorAll('.curso')]


allCourses.map((el) =>{
  el.addEventListener('click', (evt) => {
   
    const curso = evt.target
    curso.classList.toggle("selected");
  })
})


btn.addEventListener("click", () => {
  const cursoSelecionados = [...document.querySelectorAll('.selected')]
  const cursoNotSelecionados = [...document.querySelectorAll(".curso:not(.selected)")];
  cursoSelecionados.map((el) =>{
    container2.appendChild(el)
  })
  cursoNotSelecionados.map((el) => {
    container1.appendChild(el);
  });
});

