interface IPessoaInstance {
    nome: string
    dataNasc: Date
    genero: string
}

export default class Pessoa {
    nome: string
    dataNasc: Date
    genero: string

    constructor (data: IPessoaInstance) {
        this.nome = data.nome
        this.dataNasc = data.dataNasc
        this.genero = data.genero
    }
}

