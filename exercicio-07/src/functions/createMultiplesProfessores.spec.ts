import createMultiplesProfessores from "./createMultiplesProfessores";
import professoresMock from "../mocks/ProfessoresMock";
import Pessoa from "../entities/Pessoa";

describe("Unit Test: createMultiplesProfessores()", () => {
  it("should be able to create a person with a name", () => {
    const response = createMultiplesProfessores(professoresMock);

    const professoresMockExpect: Pessoa[] = [];

    // Creating an array of Mock Persons
    professoresMock.forEach((p) => {
      professoresMockExpect.push(
        expect.objectContaining({ categoria: p.categoria })
      );
    });

    // Expecting if the created mock array was the same with the createMultiplesProfessores function
    expect(response).toEqual(expect.arrayContaining(professoresMockExpect));
  });
});
