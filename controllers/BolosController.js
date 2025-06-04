const BolosModels = require('../models/BolosMoldes');

class BolosController {
    read(req, res) {
        const data = BolosModels.read();
        return res.json(data);
    }
    getById(req, res) {
        const id = req.params.id; // http://bolosGT.com/{1} => params
        const data = BolosModels.getById(id);
        return res.json(data);
    }
    create(req, res) {
        const body = req.body;
        BolosModels.create(body);
        return res.status(201).json({
            nessage: "Bolo cadastrado com sucesso."
        })
    }
    update(req, res) {
        const id = req.params.id;
        const body = req.body;
        BolosModels.update(id, body);
        return res.json({
            message: "Bolo autalizado com sucesso"
        })
    }
    delete(req, res) {
        const id = req.params.id;
        BolosModels.delete(id);
        return res.json({
            message: "Bolo removido com sucesso."
        })
    }
}

module.exports = BolosController;