import createTurma from "./createTurma";
import professoresMock from "../mocks/ProfessoresMock";
import alunosMock from "../mocks/AlunoMock";
import disciplinaMock from "../mocks/Disciplina";
import Professor from "../entities/Professor";
import Disciplina from "../entities/Disciplina";
import createMultiplesAlunos from "./createMultiplesAlunos";

describe("Unit? Test: createTurma()", () => {
  it("should be able to create a turma with a professor with a category", () => {
    const response = createTurma({
      professor: new Professor(professoresMock[0]),
      disciplina: new Disciplina(disciplinaMock[0].nome),
      aluno: createMultiplesAlunos(alunosMock),
    });

    // Expecting if the created turma has categoria property
    expect(response.getTurmaInfo().professor).toHaveProperty(
      "categoria",
      professoresMock[0].categoria
    );
  });
});
