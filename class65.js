const pessoa = {
  nome: 'Bruno',
  canal: 'CFB Cursos',
  curso: 'javaScript',
  aula : {
    aula1:'Introducao',
    aula2:'Variaveis',
    aula3:'Condional'
  }
}

const string_pessoa = {
  nome: "Bruno",
  canal: "CFB Cursos",
  curso: "javaScript",
  aula: { aula1: "Introducao", aula2: "Variaveis", aula3: "Condional" },
};

const s_json_pessoa = JSON.stringify(pessoa)
const o_json_pessoa = JSON.parse(string_pessoa)



console.log(pessoa)
console.log(s_json_pessoa)