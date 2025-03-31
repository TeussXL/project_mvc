class AlunoService {
    constructor() {
        this.alunos = []
        this.updateListAlunosFromLocalStorage()
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

    updateLocalStorage() {
        let alunos = JSON.stringify(this.alunos)
        localStorage.setItem('alunos', alunos)
    }

    updateListAlunosFromLocalStorage() {
        let local = localStorage.getItem('alunos')
        let alunos = []
        if(local) {
            alunos = JSON.parse(local)
        }
        alunos.forEach(aluno => {
            this.add(new AlunoModel(aluno))
        })
    }
}