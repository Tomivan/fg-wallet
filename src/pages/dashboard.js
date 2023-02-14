import React from 'react';
import Topbar from '../components/topbar/topbar.component';
import Sidebar from '../components/sidebar/sidebar.component';
import Statistics from '../components/statistics/statistics.component';
import Transaction from '../components/transaction/transaction.component';
import DashboardTop from '../components/dashboard-top/dashboard-top.component';
import './dashboard.css';

const Dashboard = () => {
    return(
        <div className='dashboard'>
            <Topbar />
            <Sidebar />
            <div className='dashboard-right'>
                <DashboardTop />
                <Statistics />
                <Transaction />
            </div>
        </div>
    )
}

export default Dashboard;