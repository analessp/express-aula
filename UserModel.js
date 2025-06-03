class UserModel {
    static list = [
        {
            login: 'admin2',
            senha: 'admin321'
        }
    ];

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