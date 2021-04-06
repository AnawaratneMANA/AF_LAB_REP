const {client} = require('./');
const save = async ({id, name, description, date}) => {
    const posts = client.db('posts').collection('posts') //Change the parameters.
    const result = await posts.insertOne({id, name, description, date});
    console.log(result);
};

module.exports = {save}
