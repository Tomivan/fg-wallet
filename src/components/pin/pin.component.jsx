import React from 'react';
import "./pin.component.css"

const Pin = () => {
    return(
        <div className='pin'>
            <h1>Create PIN</h1>
            <p>Transaction PIN is a 4-digit, which will be used to authorize<br /> your transactions</p>
            <form>
                <input type="number" />
                <input type="number" />
                <input type="number" />
                <input type="number" />
            </form>
            <p>Provide your secret transaction pin</p>
            <button className='done'>Done</button>
        </div>
    )
}

export default Pin; 