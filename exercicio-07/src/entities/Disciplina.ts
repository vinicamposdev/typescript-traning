export default class Disciplina {
  private nome: string;

  constructor(nome) {
    this.nome = nome;
  }

  getNome() {
    return this.nome;
  }
}
