class AlunoModel {
    constructor({nome, _id, notas} = { notas: {}}){
        this.nome = nome
        this._id = _id = _id !== undefined ? _id : this.gerarId()
        this.notas = {...notas }
        this.media = {}
        

    }

    generarId() {
        AlunoModel.maxId++
        return AlunoModel.maxId
    }
}

AlunoModel.maxId = 0
