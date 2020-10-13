import createMultiplesPessoas from "./createMultiplesPessoas";
import pessoasMock from "../mocks/PessoasMock";
import Pessoa from "../entities/Pessoa";

describe("Unit Test: createMultiplesPessoas()", () => {
  it("should be able to create a person with a name", () => {
    const response = createMultiplesPessoas(pessoasMock);

    const pessoasMockExpect: Pessoa[] = [];

    // Creating an array of Mock Persons
    pessoasMock.forEach((p) => {
      pessoasMockExpect.push(expect.objectContaining({ nome: p.nome }));
    });

    // Expecting if the created mock array was the same with the createMultiplesPessoas function
    expect(response).toEqual(expect.arrayContaining(pessoasMockExpect));
  });
});
