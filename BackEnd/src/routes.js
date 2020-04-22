const express = require('express');
const SessionController = require('./controllers/SessionController');
const OngController = require('./controllers/OngController');
const ProfileController = require('./controllers/ProfileController');
const CasoController = require('./controllers/CasoController');
const routes = express.Router();

routes.post('/Session', SessionController.create);

routes.get('/Ongs', OngController.list);
routes.post('/Ongs', OngController.create);

routes.get('/Profile', ProfileController.index);

routes.get('/Casos', CasoController.list);
routes.post('/Casos', CasoController.create);
routes.delete('/Casos/:id', CasoController.delete);

module.exports = routes;

/** 

// Query params: vem nomeado na URL
routes.get('/Users', (request, response) => {
    //request: guarda os dados da requisição
    //response: responsavel pela resposta da requisição
    const params = request.query;
    console.log(params);

    return response.json({
        Codigo: "2",
        Nome: "Teste"
    });
});

// Route Params
routes.get('/Users/:id', (request, response) => {
    const params = request.params;
    console.log(params);

    return response.json({
        Codigo: "1",
        Nome: "Teste"
    });
});

// Request body: corpo da requisição
routes.post('/Users', (request, response) => {
    const params = request.body;
    console.log(params);
    return response.json(params);
});

*/
