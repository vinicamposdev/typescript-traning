import Pessoa from "./Pessoa";
import { IAlunoCreate } from "../dtos/ICreation";

export default class Aluno extends Pessoa {
  constructor(data: IAlunoCreate) {
    super(data);
  }
}
