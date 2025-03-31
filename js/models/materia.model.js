class MateriaModel {
    constructor({nome, _id, notas} = { notas: {}}){
        this.nome = nome
        this._id = _id = _id !== undefined ? _id : this.generateId()
        }

        generateId() {
            MateriaModel.maxId += 1
            return MateriaModel.maxId
        }
    }

    MateriaModel.maxId = 0
