const cursos = ["javaSvript", "HTML", "CSS", "Arduino", "Raspberry", "C++"];

// const getTodoCursos = () =>{
//   return cursos
// }

export default function getTodoCursos  () {
 return cursos
}

function getCurso(i_curso){
  return cursos[i_curso]
}
export { cursos, getCurso };

