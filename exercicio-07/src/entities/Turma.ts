import Professor from "./Professor";
import Disciplina from "./Disciplina";
import Aluno from "./Aluno";
import ITurmaCreation from "../dtos/ITurmaCreation";

export default class Turma {
  private professor: Professor;
  private disciplina: Disciplina;
  private aluno: Aluno[];

  constructor({ professor, disciplina, aluno }: ITurmaCreation) {
    this.professor = professor;
    this.disciplina = disciplina;
    this.aluno = aluno;
  }

  getTurmaInfo() {
    return {
      professor: this.professor,
      disciplina: this.disciplina,
      aluno: this.aluno,
    };
  }
}
