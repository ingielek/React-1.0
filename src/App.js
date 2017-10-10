import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Switch
} from 'react-router-dom';

import Events from './events/Events';
import NotFound from './not-found/NotFound'
import Login from './login/Login';
import Settings from './settings/Settings';

const App = () => {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <NavLink exact to="/" activeStyle={{fontWeight: 'bold'}}>Main Page</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" activeStyle={{fontWeight: 'bold'}}>About Me</NavLink>
                    </li>
                    <li>
                        <NavLink to="/settings" activeStyle={{fontWeight: 'bold'}}>Ustawienia</NavLink>
                    </li>
                </ul>
                <Switch>
                    <Route path="/login" component={Login}/>
                    <Route path="/settings" component={Settings} />
                    <Route path ="/about" render={() => <h1>About me</h1>}/>
                    <Route path ="/" component={Events} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        </Router>
    )
};

export default App;
