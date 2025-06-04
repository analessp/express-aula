const express = require('express');
const userController = require('../controllers/UserController');


const UserRoute = express.Router();

const UserController = new UserController();

UserRoute.get('/users', userController.read);

UserRoute.get('/users/:id', userController.getById);

UserRoute.post('/users', userController.create);

UserRoute.put('/users/:id', userController.update);

UserRoute.delete('/users/:id', userController.delete);

module.exports = UserRoute;