import React from 'react';
import Home from './views/Home.jsx';
import Login from './views/Login.jsx';
import Perfil from './views/Perfil.jsx';
import CadastroPaciente from './views/CadastroPaciente.jsx'
import Opcoes from './views/Opcoes.jsx'
import Anamnese from './views/Anamnese.jsx'
import Naoencontrado from './views/Naoencontrado.jsx'
import { BrowserRouter,Switch, Route } from 'react-router-dom'

function routes(){
return(
    <BrowserRouter>
         <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/Opcoes" component={Opcoes} />
            <Route path="/perfil" component={Perfil} />
            <Route path="/anamnese" component={Anamnese} />
            <Route path="/cadastropaciente" component={CadastroPaciente} />
            <Route path="/naoencontrado" component={Naoencontrado} />
        </Switch>
    </BrowserRouter>
)
}
export default routes;