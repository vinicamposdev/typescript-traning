import Professor from "../entities/Professor";
import Disciplina from "../entities/Disciplina";
import Aluno from "../entities/Aluno";

export default interface ITurmaCreation {
  professor: Professor;
  disciplina: Disciplina;
  aluno: Aluno[];
}
