import Pessoa from "./Pessoa";
import { IProfessorCreate } from "../dtos/ICreation";

export default class Professor extends Pessoa {
  private categoria: string;

  constructor(data: IProfessorCreate) {
    super(data);
    this.categoria = data.categoria;
  }

  getCategoria() {
    return this.categoria;
  }
}
