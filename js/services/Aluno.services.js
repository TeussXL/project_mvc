class AlunoService {
    constructor() {
        this.alunos = []
    }
    add(aluno) {
        if(!aluno instanceof AlunoModel) {
            throw new Error('Aluno precisa ser uma instância da classe AlunoModel')
        }
        this.alunos.push(aluno)
    }

    update(aluno) {
        return aluno
    }

    searchById(id) {
        return this.alunos.find(aluno => aluno._id === id)
    }
}