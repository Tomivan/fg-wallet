import React from 'react';
import Topbar from '../components/topbar/topbar.component';
import Sidebar from '../components/sidebar/sidebar.component';
import Statistics from '../components/statistics/statistics.component';
import Transaction from '../components/transaction/transaction.component';

const Dashboard = () => {
    return(
        <div>
            <Topbar />
            <Sidebar />
            <Statistics />
            <Transaction />
        </div>
    )
}

export default Dashboard;