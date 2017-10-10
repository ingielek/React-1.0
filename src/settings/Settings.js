import React from 'react';
import { Redirect } from 'react-router-dom';
import authHelper from '../helpers/AuthHelper';

const Settings = () => {
    if (authHelper.isAuthenticated === false) {
        return <Redirect to="/login" />
    }
    return <p>Settings!</p>
};

export default Settings;