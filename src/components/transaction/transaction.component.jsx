import React from 'react';
import { Link } from 'react-router-dom';
import './transaction.component.css';

const Transaction = () => {
    return(
        <div className='transaction'>
            <div className='left'>
                <div className='top'>
                    <h2>Transaction</h2>
                    <button className='view-all'><Link to='/transaction' className='transaction-link'>View all</Link></button>
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
                            <td>TRUD9393BJEKFN</td>
                            <td>19 July  4:30 PM</td>
                            <td>NGN 3,041,730</td>
                            <td><button className='success'>Success</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='right'>
                <h2>Quick Transaction</h2>
                <div className='action'>
                    <button className='money'>Add money</button>
                    <button className='withdraw'>Withdraw</button>
                </div>
                <div className='amount'>
                    <label>Amount</label>
                    <select>
                        <option>Main</option>
                    </select>
                </div>
                <div className='amount'>
                    <label>Amount</label>
                    <input type='text' placeholder='Enter Amount' />
                    <button className='add'>Add</button>
                </div>
            </div>
        </div>
    )
}

export default Transaction;