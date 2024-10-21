import { inserir, consultarTurmaPorNome } from '../../repository/tabelaTurma.js';
import validarInsercao from '../../validation/tabelaTurma/inserirValidation.js';
import { validarTurmaIgual } from '../../validation/tabelaTurma/inserirValidation.js';


export default async function inserirService(turma) {
    //Validacao de campos obligatorios
    validarInsercao(turma);

    //Validacao se existe turma com mesmo nome
    //Busca turmas com o mesmo nome
    let registros = await consultarTurmaPorNome(turma.turma);
    validarTurmaIgual(registros);


    //Logica de negocio
    let id = await inserir(turma);
    return id;
}

