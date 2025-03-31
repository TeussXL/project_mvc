const materiaService = new MateriaService()
let materias = materiaService.getAll()
if (materias.length === 0) {
  materiaService.add(new MateriaModel({nome: 'back-end 1'}))
  materiaService.add(new MateriaModel({nome: 'front-end 2'}))
  materiaService.add(new MateriaModel({nome: 'bancodados'}))
  materiaService.add(new MateriaModel({nome: 'ferramentas'}))
}
 
 
 
 
 const alunoService = new AlunoService()

  const alunoView = new AlunoView(document.querySelector('[data-table-alunos]'), materiaService.getAll())
  const alunoController = new AlunoController(alunoService, alunoView)
  
  document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault()
    const nome = document.querySelector('#first_name').value
    alunoController.add({nome})
  })