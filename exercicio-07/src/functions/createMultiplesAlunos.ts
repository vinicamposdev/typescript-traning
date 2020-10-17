import Aluno from "../entities/Aluno";
import { IAlunoCreate } from "../dtos/ICreation";

export default function createMultiplesAlunos(alunos: IAlunoCreate[]): Aluno[] {
  const as: Aluno[] = [];

  alunos.forEach((a) => {
    as.push(new Aluno(a));
  });
  return as;
}
