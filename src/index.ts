import createTurma from "./functions/createTurma";
import professoresMock from "./mocks/ProfessoresMock";
import alunosMock from "./mocks/AlunoMock";
import disciplinaMock from "./mocks/Disciplina";
import Professor from "./entities/Professor";
import Disciplina from "./entities/Disciplina";
import createMultiplesAlunos from "./functions/createMultiplesAlunos";

function main() {
  const response = createTurma({
    professor: new Professor(professoresMock[0]),
    disciplina: new Disciplina(disciplinaMock[0].nome),
    aluno: createMultiplesAlunos(alunosMock),
  });
  console.log(response);
}

main();
