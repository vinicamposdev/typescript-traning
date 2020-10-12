interface IPessoaInstance {
    nome: string
    dataNasc: Date
    sexo: string
}

export class Pessoa {
    nome: string
    dataNasc: Date
    sexo: string

    constructor (data: IPessoaInstance) {
        this.nome = data.nome
        this.dataNasc = data.dataNasc
        this.sexo = data.sexo
    }
}

class Aluno extends Pessoa {
    pessoa: Pessoa
    turma: Turma
}

class Turma {
    professor: Professor
    disciplina: Disciplina
    aluno: Aluno
}

class Professor extends Pessoa {
    turma: Turma
}

class Disciplina {
    nome: string
}