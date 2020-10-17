import Turma from "../entities/Turma";
import ITurmaCreation from "../dtos/ITurmaCreation";

export default function createTurma(data: ITurmaCreation): Turma {
  const t: Turma = new Turma(data);

  return t;
}
