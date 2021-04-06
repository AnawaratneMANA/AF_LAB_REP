const {client} = require('./');
const save = async ({id, name , description, postedData}) => {
    const posts = client.db('posts').collection('posts') //Change the parameters.
    const result = await posts.insertOne({id, name, description, postedData});
    console.log(result);
};

module.exports = {save}
