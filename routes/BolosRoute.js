const express = require('express');
const BolosController = require('../controller/BolosController');


const bolosRouter = express.Router();

const BolosController = new BolosController()

BolosRouter.get('/bolos', bolosController.read);

BolosRouter.get('/bolos/:id', bolosController.getById);

BolosRouter.post('/bolos', bolosController.create);

BolosRouter.put('/bolos/:id', bolosController.update);

BolosRouter.delete('/bolos/:id', bolosController.delete);

module.exports = BolosRouter;