import React from 'react';
import Posts from "./components/posts";
const posts = [
    {
        id: 1,
        name: 'React',
        description: 'Best UI library'

    },
    {
        id: 2,
        name: 'Node',
        description: 'Server side JS'
    }
];
export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return <div>
            <h1> Hello to React </h1>
            <Posts posts={posts}/>
            </div>;
    }
}
