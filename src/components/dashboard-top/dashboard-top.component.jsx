import React  from "react";
import Flag from '../../assets/images/flag.svg';
import './dashboard-top.component.css';

const DashboardTop = () => {
    return(
        <div className="dashboard-top">
            <div className="available">
                <div className="available-top">
                    <img src={Flag} alt='' className="flag"/>
                    <p>Available Balance</p>
                </div>
                <p>12,345NGN</p>
                <sub>-N180.00</sub>
            </div>
            <div className="savings">
                <p>Savings</p>
                <p>831,071 NGN</p>
                <sub>-N180.00</sub>
            </div>
        </div>
    )
}

export default DashboardTop;