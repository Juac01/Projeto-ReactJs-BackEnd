 import { deletarTurma } from "../../repository/tabelaTurma.js"
 
 export default async function deletarTurmaService(id){
    let linhasAfetadas = await deletarTurma(id);
    if(linhasAfetadas == 0)
        throw new Error('Nenhuma Turma foi removida');
 }