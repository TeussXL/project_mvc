const alunos = [
    {
      _id: 0,
      nome: "chico melato",
      notas: {
        backend_1: [7, 9, 7, 6],
        frontend_2: [8, 5, 9, 9],
        bancodados: [7, 8, 10, 7],
        ferramentas: [9, 9, 8, 8],
      },
    },
    {
      _id: 1,
      nome: "talita lima",
      notas: {
        backend_1: [4, 4, 4, 4],
        frontend_2: [4, 4, 5, 5],
        bancodados: [5, 5, 6, 6],
        ferramentas: [7, 7, 8, 9],
      },
    },
    {
      _id: 2,
      nome: "Jude Bellingham",
      notas: {
        backend_1: [3, 5, 9, 9],
        frontend_2: [5, 4, 7, 9],
        bancodados: [5, 9, 8,8],
        ferramentas: [10, 7, 8, 9],
      },
    },
  ];

  const alunoService = new AlunoService()

alunos.forEach((aluno) => {
    aluno.media = {}; 
    alunoService.addAluno(new AlunoModel(aluno))
    }
)

//inserir no thread da tabela a lita de materias
const htmlHeader = document.createElement('tr')
htmlHeader.innerHTML = '<td>Nome</td>'

const htmlHeaderMaterias = Object.keys(alunos[0].notas).map(materia => {
    return `<td>${materia}</td>`
}).join('')

console.log(htmlHeaderMaterias)
htmlHeader.innerHTML += htmlHeaderMaterias
console.log(htmlHeader)

document.querySelector('[data-table-alunos] thead').appendChild(htmlHeader)

//inserir no thread da tabela a lita de alunos e suas medias

function render() {
    document.querySelector('[data-table-alunos] tbody').innerHTML = ''
alunos.forEach(aluno => {
    let htmlRow = document.createElement('tr')
    htmlRow.innerHTML = `<td>${aluno.nome}</td>`
    let htmlRowMaterias = Object.keys(aluno.notas).map(materia => {
        return `<td>${aluno.media[materia]}</td>`
    }) .join('')
    htmlRow.innerHTML += htmlRowMaterias
    document.querySelector('[data-table-alunos] tbody').appendChild(htmlRow)
})
}
render()

//inserir aluno
document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault()
    const nome = document.getElementById('first_name').value
    console.log(nome)
    const newAluno = {
        _id: 0,
        nome,
        notas: {
            backend_1: [7, 9, 7, 6],
            frontend_2: [8, 5, 9, 9],
            bancodados: [7, 8, 10, 7],
            ferramentas: [9, 9, 8, 8],
        },
    }
    newAluno.media = {}
    for (let materia in newAluno.notas) {
        newAluno.media[materia] = average(...newAluno.notas[materia])
    }
    alunos.push(newAluno)
    render()
})
