const alunos = [
    {
        nome: "chico melato",
        notas: {
        backend_1: [7, 9, 7, 6],
        frontend_2: [8, 5, 9, 9],
        bancodados: [7, 8, 10, 7],
        ferramentas: [9, 9, 8, 8],
      },
    },
    {
        nome: "talita lima",
        notas: {
        backend_1: [4, 4, 4, 4],
        frontend_2: [4, 4, 5, 5],
        bancodados: [5, 5, 6, 6],
        ferramentas: [7, 7, 8, 9],
      },
    },
    {
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

  alunos.forEach(aluno => {
    alunoService.add(new AlunoModel(aluno))
  })

  const alunoView = new AlunoView(document.querySelector('[data-table-alunos]'))
  const alunoController = new AlunoController(alunoService, alunoView)
