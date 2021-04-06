
//Replace the Map with database.
const {save, getAll, getById, removeById, update} = require('../dal/post_dao');

const uuid = require('uuid'); //Generate a random key.

//Create a single post when call this method.
let createPost = async (obj) => {

    /**
     * Here we don't have to pass anything from the URL
     * Everything get created inside this method.
     */
    let post  = {
        id: uuid.v4(),
        name: obj.name,
        description: obj.description,
        date: new Date()
    };
    //Adding the post to the posts Map
    return await save(post);
}

//Method to get all the posts
let getPosts = async () => {
    return await getAll() ;
};

/**
 * ... in about return is iterator.
 */
//Method to update a post
let updatePost = async (id, {name, description, date}) => {
    return await update(id, {id, name, description, date});
}

//Method to delete a post
let deletePost = async id => {
    return await removeById(id);
}


//Method to get a specific post.
let getPost = async (id) =>{
    return await getById();
};

module.exports = {
    createPost,
    getPost,
    getPosts,
    deletePost,
    updatePost
};
