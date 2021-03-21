let posts = new Map(); //Global Map Obeject.
const uuid = require('uuid'); //Generate a random key.

//Create a single post when call this method.
let createPost = (obj) => {

    /**
     * Here we don't have to pass anything from the URL
     * Everything get created inside this method.
     */
    let post  = {
        id: uuid.v4(),
        date: new Date(),
        name: obj.name,
        description: obj.description
    };
    //Adding the post to the posts Map
    posts.set(post.id, post);
    return post;
}

//Method to get all the posts
let getPosts = () => {
    return [...posts.values()];
};

/**
 * ... in about return is iterator.
 */



//Method to get a specific post.
let getPost = (id) =>{
    return posts.get(id);
};

module.exports = {
    createPost,
    getPost,
    getPosts
};
