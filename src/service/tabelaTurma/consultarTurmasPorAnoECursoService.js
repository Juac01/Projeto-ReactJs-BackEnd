import { consultarTurmasPorAnoECurso } from "../../repository/tabelaTurma.js";

export default async function consultarServicePorAnoECurso(ano, curso) {
    let turmas = await consultarTurmasPorAnoECurso(ano, curso);
    return turmas;
}
