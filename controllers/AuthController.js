const UserModel = require("../models/UserModel");

class AuthController {
    login(login, senha) {
        const data = UserModel.authenticate(login, senha);
        return data;
    }
}

module.exports = AuthController;