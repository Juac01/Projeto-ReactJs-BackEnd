import { consultarTurmasPorAno } from "../../repository/tabelaTurma.js";

export default async function consultarServicePorAno(ano) {
    let turmas = await consultarTurmasPorAno(ano);
    return turmas;
}
