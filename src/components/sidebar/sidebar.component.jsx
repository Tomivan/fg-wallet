import React from 'react';
import './sidebar.component.css';

const Sidebar = () => {
    return(
        <div className='sidebar'>
            <p>Dashboard</p>
            <p>Send</p>
            <p>Wallet</p>
            <p>Beneficiary</p>
            <p>Transaction</p>
            <div className="bottom">
                <p>Get Help</p>
                <p>Settings</p>
            </div>
        </div>
    )
}

export default Sidebar;