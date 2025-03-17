class AlunoService {
    constructor(alunos) {
        this.alunos = alunos
    }
    addAluno(aluno) {
        if(!note instanceof AlunoModel) {
            throw new Error('Aluno precisa ser uma instância da classe AlunoModel')
        }
        this.alunos.Push(aluno)
    }

    updateAluno(aluno) {
        return aluno
    }
}