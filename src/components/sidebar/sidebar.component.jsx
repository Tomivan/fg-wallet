import React from 'react';
import Dashboard from '../../assets/images/dashboard.svg'
import Send from '../../assets/images/send.svg';
import Wallet from '../../assets/images/wallet.svg';
import Beneficiary from '../../assets/images/beneficiary.svg';
import Transaction from '../../assets/images/transaction.svg';
import Help from '../../assets/images/help.svg';
import Setting from '../../assets/images/setting.svg';
import { Link } from 'react-router-dom';
import './sidebar.component.css';

const Sidebar = () => {
    return(
        <div className='sidebar'>
            <Link to='/dashboard' className='sidebar-link'>
                <img src={Dashboard} alt='' />Dashboard
            </Link>
            <Link to='/send-local' className='sidebar-link'>
                <img src={Send} alt='' />Send
            </Link>
            <Link to='#' className='sidebar-link'>
                <img src={Wallet} alt='' />Wallet
            </Link>
            <Link to='#' className='sidebar-link'>
                <img src={Beneficiary} alt='' />Beneficiary
            </Link>
            <Link to='/transaction' className='sidebar-link'>
                <img src={Transaction} alt='' />Transaction
            </Link>
            <div className="bottom">
                <Link to='#' className='sidebar-link'>
                    <img src={Help} alt='' />Get Help
                </Link>
                <Link to='#' className='sidebar-link'>
                    <img src={Setting} alt='' />Settings
                </Link>
            </div>
        </div>
    )
}

export default Sidebar;