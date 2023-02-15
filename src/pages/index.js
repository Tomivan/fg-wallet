import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from './dashboard';
import Login from './login';
import SendLocal from './send-local';
import Signup from './signup';
import TransactionPage from './transaction';
import PinPage from './pin';

const Pages = () => {
    return(
    <Router className='pages'>
        <Routes>
        <Route exact path="/" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path ="/pin" element={<PinPage />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/send-local" element={<SendLocal />}/>
        <Route path="/transaction" element={<TransactionPage />}/>
        </Routes>
    </Router>
    )
}

export default Pages;
