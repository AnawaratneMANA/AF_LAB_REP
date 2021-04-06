const {client} = require('./');
const save = async ({id, name, description, date}) => {
    const posts = client.db('posts').collection('posts') //Change the parameters.
    const result = await posts.insertOne({id, name, description, date});
    return result.ops[0]; //This will return the object that inserted to the Database.
};

const getAll = async () => {
    const posts = client.db('posts').collection('posts')
    const cursor = await posts.find();
    return cursor.toArray();

};

const getById = async id => {
    const posts = client.db('posts').collection('posts')
    return await posts.findOne({id});
}

const removeById = async (id) => {
    const posts = client.db('posts').collection('posts')
    await posts.deleteOne({id});
}

const update = async (id, {name, description, date}) => {
    const posts = client.db('posts').collection('posts')
    const result = await posts.replaceOne({id}, {id, name, description, date})
    return result.ops[0];
}

module.exports = {save, getAll, getById, removeById, update}
