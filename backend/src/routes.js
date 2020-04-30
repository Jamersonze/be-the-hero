const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

//Sessão
//Login
routes.post('/sessions', SessionController.create);

//Ongs
//Listagem
routes.get('/ongs', OngController.index);
//Cadastro
routes.post('/ongs', OngController.create);


//Casos
//Listagem filtrada por Ong
routes.get('/profile', ProfileController.index);
//Listagem de todos
routes.get('/incidents', IncidentController.index);
//Criação
routes.post('/incidents', IncidentController.create);
//Deleção
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;