import Pessoa from "../entities/Pessoa";
import { IPessoaCreate } from "../dtos/IPessoaCreation";

export default function createMultiplesPessoas(
  pessoas: IPessoaCreate[]
): Pessoa[] {
  const ps: Pessoa[] = [];
  pessoas.forEach((p) => {
    ps.push(new Pessoa(p));
  });
  return ps;
}
