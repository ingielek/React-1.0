import React from 'react';
import authHelper from '../helpers/AuthHelper';
import { Redirect } from 'react-router-dom';
class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {redirect: false};
    }
    onLoginClick(event){

        authHelper.authenticate(() => {
            this.setState({ redirect: true });
        })

    }
    render() {
        if (this.state.redirect) {
            return <Redirect to="/settings"/>
        }
        return <button onClick={this.onLoginClick.bind(this)}>Zaloguj</button>
    }
}

export default Login;