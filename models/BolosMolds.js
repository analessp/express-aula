const supabase = require("../config/connection");
// class BolosModels {
//     static list = [
//         {
//             id: 1,
//             sabor: 'Laranja',
//             preco: 12
//         },
//         {
//             id: 2,
//             sabor: 'Limao',
//             preco: 20
//         }
//     ]
//     static read() {
//         return BolosModels.list;
//     }
//     static getById(id) {
//         const register = BolosModels.list.filter(item => item.id === Number(id));
//         return register;
//     }
//     static create(data) {
//         BolosModels.list.push(data);
//     }
//     static update(id, data) {
//         const index = BolosModels.list.findIndex(item => item.id === Number(id));
//         BolosModels.list[index] = data;
//     }
//     static delete (id) {
//         const index = BolosModels.list.findIndex(item => item.id === Number(id));
//         BolosModels.list.splice(index, 1);
//     }
// }

// module.exports = BolosModels;

class BolosModels {

static async read() {
    const { data, error } = await supabase
    .from('bolo')
    .select(`
        id,
        sabor,
        num_fatias,
        preco,
        usuario: usuario_id(login)
        `);

        if (error) throw error;

        return data.map(bolo => (  {
            id: bolo.id,
            sabor: bolo.sabor,
            fatias: bolo.num_fatias,
            preco: bolo.preco,
            usuario: bolo.usuario.login
        }));
};

static async getById(id) {
    const { data, error } = await supabase
    .from('bolo')
    .select(`
        id,
        sabor,
        num_fatias,
        preco,
        usuario: usuario_id(login)
        `)
        .eq('id', id)
        .single();

        if (error) throw error;

        return {
            id: data.id,
            sabor: data.sabor,
            fatias: data.num_fatias,
            preco: data.preco,
            usuario: data.usuario.login
        };
};

static async create({ bolo, usuario_id }) {
    const { data, error } = await supabase
    .from('bolo')
    .insert([{ bolo, usuario_id }])
    .select(`
        id,
        sabor,
        num_fatias,
        preco,
        usuario: usuario_id(login)
        `)
        .single();

        if (error) throw error;
        
        return {
            id: data.id,
            sabor: data.sabor,
            fatias: data.num_fatias,
            preco: data.preco,
            usuario: data.usuario.login
        };
};

static async update (id, { bolo }) {
    const { data, error } = await supabase
    .from('bolo')
    .update({ bolo })
    .eq('id', id)
    .select(`
        id,
        sabor,
        num_fatias,
        preco,
        usuario: usuario_id(login)
        `)
        .single();

        if (error) throw error;

        return {
            id: data.id,
            sabor: data.sabor,
            fatias: data.num_fatias,
            preco: data.preco,
            usuario: data.usuario.login
        };
};

static async delete(id) {
    const { error } = await supabase
    .from('bolo')
    .delete()
    .eq('id', id);

    if (error) throw error;

    return { sucess: true };
};
}

module.exports = BolosModels;