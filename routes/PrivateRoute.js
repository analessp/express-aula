const express = require('express');

const PrivateRoutes = express.Router();

PrivateRoutes.use((req, res, next) => {
    if(req.headers.token !== 'banana') {
        return res.status(403).send('Nao autorizado')
    }
    next()
})