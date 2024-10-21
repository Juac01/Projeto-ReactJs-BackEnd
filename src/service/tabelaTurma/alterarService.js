import { alterarTurma } from "../../repository/tabelaTurma.js";

export default async  function alterarService(turmaObj, id){
 let linhasAfetadas = await alterarTurma(turmaObj, id);
 if(linhasAfetadas == 0)
    throw new Error('Nenhuma turma alterada.');
}