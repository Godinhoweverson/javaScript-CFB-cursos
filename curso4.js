class Cursos {
  static cursos = ["javaSvript", "HTML", "CSS", "Arduino", "Raspberry", "C++"];
  constructor() {}
  static getTodosCursos = () => {
    return this.cursos;
  }

  static getCurso = (i_curso) => {
    return this.cursos[i_curso];
  }

  static addCurso = (novoCurso) => {
    this.cursos.push(novoCurso);
  }

  static addCurson = (novoCurso) => {
    this.cursos = []
  }
}

export default Cursos
 