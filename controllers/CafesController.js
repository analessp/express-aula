const CafeModel = require('../models/CafesModels');

class CafeController {

//     read(req, res) {
//         const data = CafesModels.read();
//         return res.json(data);
//     }
//     getById(req, res) {
//         const id = req.params.id;
//         const data = CafesModels.getById(id);
//         return res.json(data);
//     }
//     create(req, res) {
//         const body = req.body;
//         CafesModels.create(body);
//         return res.status(201).json({
//         message: "Cafe cadastrado com sucesso."
//         })
//    }
//     update(req, res) {
//     const id = req.params.id;
//     const body = req.body;
//     CafesModels.update(id, body);
//     return res.json({
//       message: "Cafe atualizado com sucesso."
//       })
//     }
// delete(req, res) {
//     const id = req.params.id;
//     CafesModels.delete(id);
//     return res.json({
//       message: "Cafe removido com sucesso."
//       })
//     }

    async read(req, res) {
        try {
            const data = await CafesModels.read();
            return res.json(data);
        } catch (error) {
            return res.status(500).json({
                error: 'Erro na requisição:' + error.message
            });
        };
    };

    async getById(req, res) {
        try {
            const id = req.params.id;

            const data = await CafesModels.getById(id);
            return res.json(data);
        } catch{error} {
            return res.status(500).json({
                error: 'Erro na requisição: ' + error.message
            });
        };
    };

async create(req, res) {
    try {
        const body = req.body;

        await CafesModels.create(body);
        return res.status(201).json({
            message: 'Café cadastrado com sucesso.'
        });
    } catch (error) {
        return res.statys(500).json({
            error: 'Erro na requisição: ' + error.message
        });
    }
}

async update(req, res) {
    try {
        const id = req.params.id;
        const body = req.body;

        await CafesModels.update(id, body);
        return res.json({
            message: 'Café atualizado com sucesso.'
        });
    } catch (error) {
        return res.status(500).json({
            error: 'Erro na requisição: ' + error.message
        });
    }
}

async delete (req, res) {
    try {
        const id = req.params.id;

        await CafesModels.delete(id);
        return res.json({
            message: 'Café removido com sucesso.'
        });
    } catch (error) {
        return res.status(500).json({
            error: 'Erro na requisição: ' + error.message
        });
    }
}
}


module.exports = CafesController;