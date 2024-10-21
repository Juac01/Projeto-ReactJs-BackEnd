
import turma from './controller/tabelaTurma.js'
import login from './controller/loginController.js'



export default function adicionarRotas(servidor) {
    servidor.use(turma);
    servidor.use(login);
}