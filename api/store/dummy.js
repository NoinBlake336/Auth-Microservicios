const db = {
    'user':[{
        id:'1',
        name:'Carlos',
    }]
};


const list = async(table)=>{
    return db[table];
};

const get = async(table,id)=>{
    let col = await list(table);
    return col.filter(item=>item.id = id)[0] || null;
};

const upsert = async(table,data)=>{
    db[colletion].push(data);
};

const remove = async(table,id)=>{
    return true;
};



module.exports = {
    list,
    get,
    upsert,
    remove
}