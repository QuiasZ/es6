const alunos = [
    { nome: 'Alice', nota: 8 },
    { nome: 'Bob', nota: 5 },
    { nome: 'Charlie', nota: 6 },
    { nome: 'David', nota: 4 },
    { nome: 'Eva', nota: 7 }
];

function filtrarAlunosAprovados(alunos) {
    return alunos.filter(aluno => aluno.nota >= 6);
}

const alunosAprovados = filtrarAlunosAprovados(alunos);
console.log(alunosAprovados);