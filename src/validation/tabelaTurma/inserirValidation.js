

export default function validarInsercao(turma) {
    if (!turma.turma) throw new Error('Turma é obrigatório');
    if (!turma.curso) throw new Error('Curso é obrigatório');
    if (!turma.anoLetivo) throw new Error('Ano Letivo é obrigatório');
    if (!turma.qtdCapacidade) throw new Error('Qtd.Capacidade é obrigatório');
    if (turma.ativo == undefined) throw new Error('Ativo é obrigatório');
    if (!turma.inclusao) throw new Error('Inclusão é obrigatório');


}

export function validarTurmaUnica(registros){
if(registros.length == 0)
    throw new Error('Turma não encontrada');

}


export function validarTurmaIgual(registros){
    if(registros.length > 0)
        throw new Error('Já existe turma cadastrada com esse nome');
}