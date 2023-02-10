import React from 'react';
import "./pin.component.css"

const Pin = () => {
    return(
        <div className='pin'>
            <div className='pin-top'>
                <h1>Create PIN</h1>
                <p>Transaction PIN is a 4-digit, which will be used to authorize<br /> your transactions</p>
            </div>
            <form className='pin-form'>
                <input type="number" />
                <input type="number" />
                <input type="number" />
                <input type="number" />
                <p>Provide your secret transaction pin</p>
                <button className='done'>Done</button>
            </form>
        </div>
    )
}

export default Pin; 