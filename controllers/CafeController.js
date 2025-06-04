const CafeModel = require('../models/CafeModel');

class CafeController {

    read(req, res) {
        const data = CafeModel.read();
        return res.json(data);
    }
    getById(req, res) {
        const id = req.params.id;
        const data = CafeModel.getById(id);
        return res.json(data);
    }
    create(req, res) {
        const body = req.body;
        CafeModel.create(body);
        return res.status(201).json({
        message: "Cafe cadastrado com sucesso."
        })
   }
    update(req, res) {
    const id = req.params.id;
    const body = req.body;
    CafeModel.update(id, body);
    return res.json({
      message: "Cafe atualizado com sucesso."
      })
    }
delete(req, res) {
    const id = req.params.id;
    CafeModel.delete(id);
    return res.json({
      message: "Cafe removido com sucesso."
      })
    }
}

module.exports = CafeController;