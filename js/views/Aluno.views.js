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
            return `<td>${materia}</td>`
        }).join('')
        htmlHeader.innerHTML += htmlHeaderMaterias
        this.tableheader.appendChild(htmlHeader)
    }
    //inserir no thread da tabela a lita de materias

    render(alunos) {
        alunos.forEach(aluno => {
          let htmlRow = document.createElement('tr')
          htmlRow.innerHTML = `<td>${aluno.nome}</td>`
          this.materias.forEach(materia => {
            htmlRow.innerHTML += `<td>${aluno.media[materia]}</td>`
        })
        this.tablebody.appendChild(htmlRow)
      })
} }