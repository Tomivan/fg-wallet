import React from 'react';
import Empty from '../../assets/images/transaction.svg'
import './transactions.component.css';

const Transactions = () => {
    return(
        <div className='transactions'>
            <div className='empty'>
                <img src={Empty} alt='' className='empty-image' />
                <p className='blue'>No transactions yet</p>
                <p>After your first transaction you will be able to view it here</p>
            </div>
            <div className='full'>
                <h2>Transaction</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Reference</th>
                            <th>Transaction Information</th>
                            <th>Currency</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Transactions;