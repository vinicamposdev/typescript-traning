import Professor from "../entities/Professor";
import { IProfessorCreate } from "../dtos/ICreation";

export default function createMultiplesProfessores(
  professores: IProfessorCreate[]
): Professor[] {
  const ps: Professor[] = [];
  professores.forEach((p) => {
    ps.push(new Professor(p));
  });
  return ps;
}
