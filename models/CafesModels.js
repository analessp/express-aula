const supabase = require("../config/connection");

class CafesModels {
    // static list = [
    //     {
    //         id: 1,
    //         tipo: 'Expresso',
    //         preco: 8
    //     },
    //     {
    //         id: 2,
    //         tipo: 'Descafeinado',
    //         preco: 7
    //     },
    //     {
    //         id: 3,
    //         tipo: 'Cappuccino',
    //         preco: 12
    //     },
    //     {
    //         id: 4,
    //         tipo: 'ChocolateQuente',
    //         preco: 10
    //     }
    // ]
    // static read() {
    //     return CafesModels.list;
    // }
    // static getById(id) {
    //     const register = CafesModels.list.filter(item => item.id === Number(id));
    //     return register;
    // }
    // static create(data) {
    //     CafeModel.list.push(data);
    // }
    // static update(id, data) {
    //     const index = CafesModels.list.findIndex(item => item.id === Number(id));
    //     CafeModel.list[index] = data;
    // }
    // static delete(id) {
    //     const index = CafesModels.list.findIndex(item => item.id === Number(id));
    //     CafeModel.list.splice(index,1);
    // }
    
static async read() {
    const { data, error } = await supabase
    .from('cafe')
    .select(`
        id,
        tipo,
        tamanho,
        preco,
        usuario: usuario_id(login);
        `);

        if(error) throw error;

        return data.map(cafe => ( {
            id: cafe.id,
            tipo: cafe.tipo,
            tamanho: cafe.tamanho,
            preco: cafe.preco,
            usuario: cafe.usuario.login
        }));
};

static async getById() {
    const { data, error } = await supabase
    .from(cafe)
    .select(`
        id,
        tipo,
        tamanho,
        preco,
        usuario: usuario_id(login)
        `)
        .eq('id', id)
        .single();

        if (error) throw error;

        return {
        id: data.id,
        tipo: data.tipo,
        tamanho: data.tamanho,
        preco: data.preco,
        usuario: data.usuario.login
        };
};

static async create({ cafe, usuario_id }) {
    const { data, error } = await supabase
    .from(cafe)
    .insert([{ cafe, usuario_id }])
    .select(`
        id,
        tipo,
        tamanho,
        preco,
        usuario: usuario_id(login)
        `)
        .single();

        if (error) throw error;

        return {
        id: data.id,
        tipo: data.tipo,
        tamanho: data.tamanho,
        preco: data.preco,
        usuario: data.usuario.login
        };

};

static async update (id, { cafe }) {
    const { data, error } = await supabase
    .from('cafe')
    .update({ cafe })
    .eq('id', id)
    .select(`
        id,
        tipo,
        tamanho,
        preco,
        usuario: usuario_id(login)
        `)
        .single();

        if (error) throw error;

        return {
        id: data.id,
        tipo: data.tipo,
        tamanho: data.tamanho,
        preco: data.preco,
        usuario: data.usuario.login
        };
};

static async delete(id) {
    const { error } = await supabase
    .from('cafe')
    .delete()
    .eq('id', id);

    if (error) throw error;

    return { sucess: true };
};

}

module.exports = CafesModels;