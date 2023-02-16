import React from 'react';
import Notification from '../../assets/images/notification.svg';
import Profile from '../../assets/images/profile.svg';
import './topbar.component.css';

const Topbar = () => {
    return(
        <div className='topbar'>
            <div className='hamburger'>
                <hr />
                <hr />
                <hr />
            </div>
            <button className='add-money'>Add Money</button>
            <div className='topbar-right'>
                <img src={Notification} alt='' className='topbar-icon'/>
                <img src={Profile} alt='' className='topbar-icon profile' />
            </div>
        </div>
    )
}

export default Topbar;