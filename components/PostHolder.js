import React from 'react';
import Posts from './Posts';
const posts = [
    {
        id: 1,
        name: 'React',
        description: 'Best UI library'
    }, {
        id: 2,
        name: 'Node',
        description: 'Server side JS'
    }
];
export default class PostsHolder extends React.Component {
    constructor(props) {
        super(props);
    }
    //New Method.
    addNewPost({name, description}) {
        posts.push({id: posts.length + 1, name, description});
    }

    render() {
        return <Posts posts={posts}/>;
    }
}
