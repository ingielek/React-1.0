import React from 'react';
import {
    Route,
    BrowserRouter as Router
} from 'react-router-dom';

import Events from './events/Events';
const App = () => {
    return (
        <Router>
            <div>
                <Route path="/" component={Events} />
            </div>
        </Router>
    );

};

export default App