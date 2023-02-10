import React from 'react';
import HorizontalLabelPositionBelowStepper from '../components/send/send.component';
import Sidebar from '../components/sidebar/sidebar.component';
import Topbar from '../components/topbar/topbar.component';

const SendLocal = () => {
    return(
        <div>
            <Topbar />
            <Sidebar />
            <HorizontalLabelPositionBelowStepper />
        </div>
    )
}

export default SendLocal;