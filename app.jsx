import React from 'react';
import PostsHolder from "./components/PostHolder";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import AddPost from "./components/AddPost";

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path = '/'>
                            <PostsHolder/>
                    </Route>
                    <Route path = '/add'>
                            <AddPost/>
                    </Route>
                </Switch>
            </BrowserRouter>
        )
    };
}
