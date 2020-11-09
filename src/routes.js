import React from 'react';
import {BrowserRouter, Route, Switch}  from 'react-router-dom';
import Logon from './pages/Logon';
import Register from './pages/Register';
import Books from './pages/Books';
import NewBooks from './pages/NewBooks';
import Comments from './pages/Comments';
import NewComment from './pages/NewComment';

export default function Routes(){
    return(
        
        <BrowserRouter>
            <Switch>
                <Route path="/"  exact component={Logon}/>
                <Route path="/register"  component={Register}/>
                <Route path="/books" component={Books}/>
                <Route path="/comments" component={Comments}/>
                <Route path="/comment/new" component={NewComment}/>
                <Route path="/book/New" component={NewBooks}/>
            </Switch>
        </BrowserRouter>
        
    );
}