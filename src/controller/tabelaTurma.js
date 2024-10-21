import inserirService from "../service/tabelaTurma/inserirServices.js";
import consultarService from "../service/tabelaTurma/consultarService.js";
import consultarServicePorIdService from "../service/tabelaTurma/consultarServiceId.js";
import deletarTurmaService from "../service/tabelaTurma/deletarService.js";
import alterarService from "../service/tabelaTurma/alterarService.js";
import consultarServicePorAno from "../service/tabelaTurma/consultarTurmasPorAnoService.js";
import consultarServicePorAnoECurso from "../service/tabelaTurma/consultarTurmasPorAnoECursoService.js";


import { autenticar } from "../utils/jwt.js";
import { Router } from "express";
const endpoints = Router();




// Endpoint para buscar turmas por ano
endpoints.get('/turma/busca/ano', async (req, resp) => {
    try {
        let ano = req.query.ano;
        let turmas = await consultarServicePorAno(ano);

        if (turmas.length === 0) {
            return resp.status(404).send({ mensagem: "Nenhuma turma encontrada para o ano especificado." });
        }

        resp.status(200).send(turmas);
    } catch (err) {
        resp.status(400).send({ erro: err.message });
    }
});

endpoints.get('/turma/:ano/curso', async (req, resp) => {
    try {
        let ano = req.params.ano;
        let curso = req.query.curso;

        console.log(`Recebido - Ano: ${ano}, Curso: ${curso}`); // Log para depuração

        let turmas = await consultarServicePorAnoECurso(ano, curso);

        if (turmas.length === 0) {
            return resp.status(404).send({ mensagem: "Nenhuma turma encontrada para o ano e curso especificados." });
        }

        resp.status(200).send(turmas);
    } catch (err) {
        resp.status(400).send({ erro: err.message });
    }
});


endpoints.post('/tabelaTurma', autenticar, async (req, resp) => {
    try {
        let turma = req.body;

        let id = await inserirService(turma);

        resp.send({
            novoId: id
        })
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


endpoints.get('/tabelaTurma',autenticar, async (req, resp) => {
    try {
        let registros = await consultarService();
        resp.send(registros);
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.get('/tabelaTurma/:id', async (req, resp) => {
    try {
        let id = req.params.id;

        let turma = await consultarServicePorIdService(id);

        resp.send(turma);
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


endpoints.put('/tabelaTurma/:id', async (req, resp) => {
    try {
        //ler entradas
        let turmaObj = req.body;
        let id = req.params.id;

        await alterarService(turmaObj, id);

        resp.status(204).send();
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }

})

endpoints.delete('/tabelaTurma/:id', async (req, resp) => {
    try {

        let id = req.params.id;

        await deletarTurmaService(id);

        resp.status(204).send();
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }

})

endpoints.get('/tabelaTurma/busca/ano', async (req, resp) => {
    try {

        let ano = req.query.anoLetivo;

        const resultado = await consultarService(ano);

        if (resultado.length === 0) {
            return resp.status(404).send({ mensagem: "Nenhum registro encontrado." });
        }

        resp.status(200).send(resultado);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
});





export default endpoints;
