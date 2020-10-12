import Pessoa from './entities/Pessoa'
import pessoasMock from './mocks/PessoasMock'


function main() {
    console.log(new Pessoa(pessoasMock[0]))
}

main()
