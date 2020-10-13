import Turma from "../entities/Turma";
import Aluno from "entities/Aluno";
import Professor from "entities/Professor";
import Disciplina from "entities/Disciplina";

export default function createTurma(
  d: Disciplina,
  p: Professor,
  as: Aluno[]
): Turma {
  const t: Turma = new Turma({ professor: p, disciplina: d, aluno: as });

  return t;
}
