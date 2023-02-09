import React from 'react';
import './transaction.component.css';

const Transaction = () => {
    return(
        <div className='transaction'>
            <div className='left'>
                <div className='top'>
                    <h2>Transaction</h2>
                    <button className='view-all'>View all</button>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Date</th>
                            <th>Amount</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='right'>
                <h2>Quick Transaction</h2>
                <div className='action'>
                    <button className='add-money'>Add money</button>
                    <button className='withdraw'>Withdraw</button>
                </div>
                <label>Amount</label>
                <select>
                    <options>Main</options>
                </select>
                <label>Amount</label>
                <input type='text' placeholder='Enter Amount' />
                <button className='add'>Add</button>
            </div>
        </div>
    )
}

export default Transaction;