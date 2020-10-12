export class Pessoa {
    nome: string
    dataNasc: Date
    sexo: string
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