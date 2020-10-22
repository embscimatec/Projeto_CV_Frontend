import React from 'react';
import ReactDOM from 'react-dom';
import Home from './../src/views/Home';
import Login from './../src/views/Login';
import { BrowserRouter,Switch, Route } from 'react-router-dom'

function routes(){
return(
    <BrowserRouter>
         <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/login" component={Login} />
        </Switch>
    </BrowserRouter>
)
}
export default routes;