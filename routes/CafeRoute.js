const express = require('express');
const CafeController = require('../controllers/CafeController');

const CafeRouter = express.Router();

const cafeController = new CafeController();

CafeRouter.get('/cafe', cafeController.read);

CafeRouter.get('/cafe/:id', cafeController.getById);

CafeRouter.post('/cafe', cafeController.create);

CafeRouter.put('/cafe/:id', cafeController.update);

CafeRouter.delete('/cafe/:id', cafeController.delete);

module.exports = CafeRouter;