const caixaCursos = document.querySelector("#caixaCursos");
const btn_c = [...document.querySelectorAll(".curso")];
const c1_2 = document.querySelector("#c1_2");
const cursos = [
  "HTML",
  "CSS",
  "JavaScript",
  "PHP",
  "React",
  "MySql",
  "ReactNative",
];
const btnCursosSelecionado = document.getElementById("btnCursoSelecionado");
const btnRemoveCurso = document.getElementById("btnRemoverCurso");
const btnAdicionarNovoCursoAntes = document.getElementById(
  "btnAdicionarNovoCursoAntes"
);
const btnAdicionarNovoCursoDepois = document.getElementById(
  "btnAdicionarNovoCursoDepois"
);
const nomeCurso = document.getElementById("nomeCurso");

let indice = 0;

const tirarSelecao = ()=> {
  const cursoSelecionados = [...document.querySelectorAll(".selecionado")]
  cursoSelecionados.map((el) => {
    el.classList.remove("selecionado")
  })
}

const criarNovoCurso = (curso) => {
  const novoElemento = document.createElement("div");
  novoElemento.setAttribute("id", "c" + indice);
  novoElemento.setAttribute("class", "curso c1");
  novoElemento.innerHTML = curso;
  novoElemento.addEventListener('click', (evt) => {
    tirarSelecao()
    evt.target.classList.toggle("selecionado")
  })

  const comandos = document.createElement("div");
  comandos.setAttribute("class", "comandos");

  // const rb = document.createElement("input");
  // rb.setAttribute("type", "radio");
  // rb.setAttribute("name", "rb_curso");

  // comandos.appendChild(rb);

  novoElemento.appendChild(comandos);
  return novoElemento;
};

cursos.map((el, chave) => {
  const novoElemento = criarNovoCurso(el);
  caixaCursos.appendChild(novoElemento);
  indice++;
});

const cursoSelecionado = () => {
  const cursoSelecionados = [...document.querySelectorAll(".selecionado")];
  return cursoSelecionados[0];
}

 

btnCursosSelecionado.addEventListener("click", (evt) => {
  try{
    alert("Curso selecionado:" + cursoSelecionado().textContent);
  } catch (ex) {
    alert("Selecione um curso");
  }
});

btnRemoveCurso.addEventListener("click", (evt) => {
  const cs = cursoSelecionado();
  try {
    cs.remove();
  } catch (ex) {
    alert("Selecione um curso");
  }
});

btnAdicionarNovoCursoAntes.addEventListener("click", (evt) => {
  try{
    if (nomeCurso.value !== "") {
      const novoCurso = criarNovoCurso(nomeCurso.value);
      caixaCursos.insertBefore(novoCurso, cursoSelecionado());
    } else {
      alert("Digite o nome do curso");
    }
  } catch(ex) {
    alert("Selecione um curso");
  }
});

btnAdicionarNovoCursoDepois.addEventListener("click", (evt) => {
  try {
    if (nomeCurso.value !== "") {
      const novoCurso = criarNovoCurso(nomeCurso.value);
      caixaCursos.insertBefore(novoCurso, cursoSelecionado().nextSibling);
    } else {
      alert("Digite o nome do curso");
    }
  } catch(ex){
    alert("Selecione um curso");
  }
});
