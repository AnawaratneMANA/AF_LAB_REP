import React from 'react';
import Posts from "./components/posts";
import PostsHolder from "./components/PostHolder";

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return <div>
            <h1> Hello to React </h1>
            <PostsHolder/>
            </div>;
    }
}
