import con from "./connection.js";


export async function inserir(turma) {
    const comando = `
        insert into tb_turma (nm_turma, ds_curso, nr_ano_letivo, qtd_capacidade, bt_ativo, dt_inclusao) 
					        values (?, ?, ?, ?, ?, ?)
    `

    let [info] = await con.query(comando, [turma.turma, turma.curso, turma.anoLetivo, turma.qtdCapacidade, turma.ativo, turma.inclusao]);
    return info.insertId;
}




export async function listar() {
    const comando = `
        select id_turma               id,
               nm_turma               turma,
               ds_curso               curso,
               nr_ano_letivo          anoLetivo,
               qtd_capacidade         qtdCapacidade,
               bt_ativo               ativo,
               dt_inclusao            inclusao
          from tb_turma
    `

    let [registros] = await con.query(comando);
    return registros;
}


export async function consultarTurmasPorId(id) {
    const comando = `
        select id_turma               id,
               nm_turma               turma,
               ds_curso               curso,
               nr_ano_letivo          anoLetivo,
               qtd_capacidade         qtdCapacidade,
               bt_ativo               ativo,
               dt_inclusao            inclusao
          from tb_turma
          where id_turma = ?
    `
    let resposta = await con.query(comando, [id]);
    let registros = resposta[0];
    return registros;
}

export async function consultarTurmaPorNome(turma) {
    const comando = `
    select id_turma               id,
           nm_turma               turma,
           ds_curso               curso,
           nr_ano_letivo          anoLetivo,
           qtd_capacidade         qtdCapacidade, 
           bt_ativo               ativo,
           dt_inclusao            inclusao
      from tb_turma
      where nm_turma = ?
`
    let resposta = await con.query(comando, [turma]);
    let registros = resposta[0];
    return registros;
}
// Consultar turmas por ano
export async function consultarTurmasPorAno(ano) {
    const comando = `
        select id_turma               id,
               nm_turma               turma,
               ds_curso               curso,
               nr_ano_letivo          anoLetivo,
               qtd_capacidade         qtdCapacidade,
               bt_ativo               ativo,
               dt_inclusao            inclusao
          from tb_turma
         where nr_ano_letivo = ?;
    `;

    let [registros] = await con.query(comando, [ano]);
    return registros;
}

// Consultar turmas por ano e curso
export async function consultarTurmasPorAnoECurso(ano, curso) {
    const comando = `
        select id_turma               id,
               nm_turma               turma,
               ds_curso               curso,
               nr_ano_letivo          anoLetivo,
               qtd_capacidade         qtdCapacidade,
               bt_ativo               ativo,
               dt_inclusao            inclusao
          from tb_turma
         where nr_ano_letivo = ? AND ds_curso = ?;
    `;

    let [registros] = await con.query(comando, [ano, curso]);
    return registros;
}








export async function alterarTurma(turma, id) {
    const comando = `
        update tb_turma            
             set  nm_turma             =?,
               ds_curso             =?,
               nr_ano_letivo        =?,
               qtd_capacidade      =?,
               bt_ativo            =?,
               dt_inclusao         = ?
          where id_turma = ?;
    `

    let resposta = await con.query(comando, [
        turma.turma,
        turma.curso,
        turma.anoLetivo,
        turma.qtdCapacidade,
        turma.ativo,
        turma.inclusao,
        id
    ]);

    let info = resposta[0];
    let linhasAfetadas = info.affectedRows;

    return linhasAfetadas;
}


export async function deletarTurma(id) {
    const comando = `
    delete from tb_turma where id_turma = ?;
`
    let resposta = await con.query(comando, [id]);
    let info = resposta[0];
    let linhasAfetadas = info.affectedRows;
    return linhasAfetadas;
}



 