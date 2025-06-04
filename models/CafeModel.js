class CafeModel {
    static list = [
        {
            id: 1,
            tipo: 'Expresso',
            preco: 8
        },
        {
            id: 2,
            tipo: 'Descafeinado',
            preco: 7
        },
        {
            id: 3,
            tipo: 'Cappuccino',
            preco: 12
        },
        {
            id: 4,
            tipo: 'ChocolateQuente',
            preco: 10
        }
    ]
    static read() {
        return CafeModel.list;
    }
    static getById(id) {
        const register = CafeModel.list.filter(item => item.id === Number(id));
        return register;
    }
    static create(data) {
        CafeModel.list.push(data);
    }
    static update(id, data) {
        const index = CafeModel.list.findIndex(item => item.id === Number(id));
        CafeModel.list[index] = data;
    }
    static delete(id) {
        const index = CafeModel.list.findIndex(item => item.id === Number(id));
        CafeModel.list.splice(index,1);
    }
}

module.exports = CafeModel;