class UserModel {
    static list = [
        {
            login: 'admin',
            senha: 'admin123'
        },
        {
            login: 'admin2',
            senha: 'admin321'
        }
    ];

    static authenticate (login,senha) {
        const index = UserModel.list.findIndex(item => item.login === login && item.senha === senha);
        return UserModel.list[index];
    }

    static read() {
        return UserModel.list;
    }
    static getById(id) {
        const data = UserModel.list.filter(item => item.id === Number(id));
        return data;
    }
    static create(data) {
        UserModel.list.push(data);
    }
    static update(id, data) {
        const index = UserModel.list.findIndex(item => item.id === Number(id));
        UserModel.list[index] = data;
    }
    static delete(id) {
        const data = UserModel.list.findIndex(item => item.id === Number(id));
        UserModel.list = data;
    }
}

module.exports = UserModel;