import React, { useEffect } from 'react';
import Empty from '../../assets/images/no-transaction.svg'
import './transactions.component.css';

const Transactions = () => {
    useEffect(() => {
        fetch('http://ec2-34-238-76-176.compute-1.amazonaws.com/api/users/wallets/transactions/summaries', {
            method: "get",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
        .then(resp => resp.json())
            .then(
                response => {
                    console.log(response.data);
                    // setState(response.data)
                },
                err => { 
                    console.log(err)
                }
            )
    })
    return(
        <div className='transactions'>
            {/* <div className='empty'>
                <img src={Empty} alt='' className='empty-image' />
                <p className='blue'>No transactions yet</p>
                <p>After your first transaction you will be able to view it here</p>
            </div> */}
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