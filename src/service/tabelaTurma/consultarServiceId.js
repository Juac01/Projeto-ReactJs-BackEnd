import { consultarTurmasPorId } from "../../repository/tabelaTurma.js";
import { validarTurmaUnica } from "../../validation/tabelaTurma/inserirValidation.js";


export default async function consultarServicePorIdService(id) {
    let registros = await consultarTurmasPorId(id);
    validarTurmaUnica(registros);
    let turmas = registros[0];

    return turmas;
} 