class BolosModels {
    static list = [
        {
            id: 1,
            sabor: 'Laranja',
            preco: 12
        },
        {
            id: 2,
            sabor: 'Limao',
            preco: 20
        }
    ]
    static read() {
        return BolosModels.list;
    }
    static getById(id) {
        const register = BolosModels.list.filter(item => item.id === Number(id));
        return register;
    }
    static create(data) {
        BolosModels.list.push(data);
    }
    static update(id, data) {
        const index = BolosModels.list.findIndex(item => item.id === Number(id));
        BolosModels.list[index] = data;
    }
    static delete (id) {
        const index = BolosModels.list.findIndex(item => item.id === Number(id));
        BolosModels.list.splice(index, 1);
    }
}

module.exports = BolosModels;