import { IPessoaCreate } from "../dtos/IPessoaCreation";

export default class Pessoa {
  private nome: string;
  private dataNasc: Date;
  private genero: string;

  constructor(data: IPessoaCreate) {
    this.nome = data.nome;
    this.dataNasc = data.dataNasc;
    this.genero = data.genero;
  }

  getNome() {
    return this.nome;
  }
  getDataNasc() {
    return this.dataNasc;
  }
  getGenero() {
    return this.genero;
  }
}
