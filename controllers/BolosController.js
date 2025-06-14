const BolosModels = require('../models/BolosMolds');

// class BolosController {
//     read(req, res) {
//         const data = BolosModels.read();
//         return res.json(data);
//     }
//     getById(req, res) {
//         const id = req.params.id; // http://bolosGT.com/{1} => params
//         const data = BolosModels.getById(id);
//         return res.json(data);
//     }
//     create(req, res) {
//         const body = req.body;
//         BolosModels.create(body);
//         return res.status(201).json({
//             nessage: "Bolo cadastrado com sucesso."
//         })
//     }
//     update(req, res) {
//         const id = req.params.id;
//         const body = req.body;
//         BolosModels.update(id, body);
//         return res.json({
//             message: "Bolo autalizado com sucesso"
//         })
//     }
//     delete(req, res) {
//         const id = req.params.id;
//         BolosModels.delete(id);
//         return res.json({
//             message: "Bolo removido com sucesso."
//         })
//     }
// }

// module.exports = BolosController;

class BolosController {
    
    async read(req, res) {
        try {
            const data = await BolosModels.read();
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

            const data = await BolosModels.getById(id);
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

        await BolosModels.create(body);
        return res.status(201).json({
            message: 'Bolo cadastrado com sucesso.'
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

        await BolosModels.update(id, body);
        return res.json({
            message: 'Bolo atualizado com sucesso.'
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

        await BolosModels.delete(id);
        return res.json({
            message: 'Bolo removido com sucesso.'
        });
    } catch (error) {
        return res.status(500).json({
            error: 'Erro na requisição: ' + error.message
        });
    }
}
}

module.exports = BolosController;