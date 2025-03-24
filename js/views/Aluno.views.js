class AlunoView {
    constructor(table) {
        this.tablelist = table
        this.tableheader = table.querySelector('thead')
        this.tablebody = table.querySelector('tbody')
        this.materias = ["backend_1", "frontend_2", "bancodados", "ferramentas"]  
    }

    renderHeader() {
        const htmlHeader = document.createElement('tr')
        htmlHeader.innerHTML = '<td>Nome</td>'
        const htmlHeaderMaterias = this.materias.map(materia => {
            return`<td>${materia}
            </td>`}).join('')
        htmlHeader.innerHTML += htmlHeaderMaterias
        this.tableheader.appendChild(htmlHeader)
    }

    render(alunos) {
        this.tablebody.innerHTML = ''
        alunos.forEach(aluno => {
            let htmlRow = document.createElement('tr')
            htmlRow.innerHTML = `<td>${aluno.nome}</td>`
            let encontrado = false 

            this.materias.forEach(materia => {
                if (materia in aluno.media) {
                    encontrado = true
                }
            })

            if (encontrado) {
                this.materias.forEach(materia => {
                    htmlRow.innerHTML += `<td>
                    ${aluno.media && aluno.media[materia] !== undefined ? aluno.media[materia] : 
                        `<a href="edit.html?id=${aluno._id}">Incluir Notas</a>`}
                    </td>`
                })
            } else {
                htmlRow.innerHTML += `<td colspan="${this.materias.length}"><a href="edit.html?id=${aluno._id}">Incluir Notas</a></td>`
            }

            this.tablebody.appendChild(htmlRow)
        })
    }
}
