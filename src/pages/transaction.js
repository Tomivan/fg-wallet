import React from 'react';
import Sidebar from '../components/sidebar/sidebar.component';
import Topbar from '../components/topbar/topbar.component';
import Transactions from '../components/transactions/transactions.component';
import './transaction.css';

const TransactionPage = () => {
    return(
        <div className='transaction-page'>
            <Topbar />
            <Sidebar />
            <Transactions />
        </div>
    )
}

export default TransactionPage;