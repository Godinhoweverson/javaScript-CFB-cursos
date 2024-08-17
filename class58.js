class Pessoa {
  canal = 'CFB Cursons'
  constructor(pnome, ptipo) {
    this.nome = pnome;
    if (ptipo === 1) {
      this.tipo = "Esportivo";
      this.velmax = 300;
    } else if (ptipo === 2) {
      this.tipo = "Utilitario";
      this.velmax = 100;
    } else if (ptipo === 3) {
      this.tipo = "Passeio";
      this.velmax = 160;
    }
    if (ptipo === 4) {
      this.tipo = "Militar";
      this.velmax = 180;
    }
  }

  getNome() {
    return this.nome;
  }
  getTipo() {
    return this.tipo;
  }
  getVelmax() {
    return this.velmax;
  }

  getinfo() {
    return [this.nome, this.tipo, this.velmax];
  }

  setNome(nome) {
    this.nome = nome;
  }
  setTipo(tipo) {
    this.tipo = tipo;
  }
  setVelmax(velmax) {
    this.velmax = velmax;
  }
  info() {
    console.log(`Nome.: ${this.nome}`);
    console.log(`Tipo.: ${this.tipo}`);
    console.log(`Nome.: ${this.velmax}`);
    console.log("----------------------");
  }
}


let c1 = new Pessoa("Rapidao", 1);
let c2 = new Pessoa("Super Luxo", 2);
let c3 = new Pessoa("bombadao", 4);
let c4 = new Pessoa("Carrego tudo", 3);


c1.setNome('Super Veloz')
c1.setVelmax(500)
c1.info()
c2.info()

console.log(c1.getinfo())