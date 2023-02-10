import React from 'react';
import { Router } from "@reach/router";
import Dashboard from './dashboard';
import Login from './login';
import SendLocal from './send-local';
import Signup from './signup';
import TransactionPage from './transaction';
import PinPage from './pin';

const Pages = () => {
    return(
    <Router className='pages'>
        <Login exact path="/"/>
        <Signup path="/signup"/>
        <PinPage path ="/pin" />
        <Dashboard path="/dashboard" />
        <SendLocal path="/send-local" />
        <TransactionPage path="/transaction" />
    </Router>
    )
}

export default Pages;
