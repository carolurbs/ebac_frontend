const alunos =['Alana', 'Amanda', 'Maya'];
alunos.push({
    nome: 'Alana',
    nota: 8
})
alunos.push({
    nome: 'Amanda', 
    nota:5
})

alunos.push
(
    {
        nome: 'Maya',
        nota: 6
    }
)

const notasDosAlunos=alunos.filter(function(item){
return item.nota >=6

})
console.log(notasDosAlunos);
