import { listar } from "../../repository/tabelaTurma.js";

export default async function consultarService() {
    let registros = await listar();
    return registros;
}

