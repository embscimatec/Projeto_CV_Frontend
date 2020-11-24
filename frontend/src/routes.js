import React from 'react';
import Home from './../src/views/Home.jsx';
import Login from './../src/views/Login.jsx';
import CadastroPaciente from '../src/views/CadastroPaciente.jsx'
import { BrowserRouter,Switch, Route } from 'react-router-dom'

function routes(){
return(
    <BrowserRouter>
         <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/cadastropaciente" component={CadastroPaciente} />
        </Switch>
    </BrowserRouter>
)
}
export default routes;