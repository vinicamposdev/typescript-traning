import pessoasMock from "./mocks/PessoasMock";
import createMultiplesPessoas from "./functions/createMultiplesPessoas";

function main() {
  var p = createMultiplesPessoas(pessoasMock);
  console.log(p);
}

main();
