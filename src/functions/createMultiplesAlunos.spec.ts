import createMultiplesAlunos from "./createMultiplesAlunos";
import alunosMock from "../mocks/AlunoMock";
import Pessoa from "../entities/Pessoa";

describe("Unit Test: createMultiplesAlunos()", () => {
  it("should be able to create a person with a name", () => {
    const response = createMultiplesAlunos(alunosMock);

    const alunosMockExpect: Pessoa[] = [];

    // Creating an array of Mock Persons
    alunosMock.forEach((p) => {
      alunosMockExpect.push(expect.objectContaining({ nome: p.nome }));
    });

    // Expecting if the created mock array was the same with the createMultiplesAlunos function
    expect(response).toEqual(expect.arrayContaining(alunosMockExpect));
  });
});
