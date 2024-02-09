import React from "react";
import Sidebar from "./Sidebar";
import './Dashboard.css';

const Dashboard = () => {
    return (
        <>
        <Sidebar />

        <div className='dashboard-cont'>
            <div className="overview">
                <div className="overview-list">
                    <div className="inv-cnt">Inventory count</div>
                    <div className="num-proj">Total number of Projects</div>
                    <div className="proj">Ongoing Projects</div>
                </div>
            </div>
        </div>

        </>
    )
}


export default Dashboard ; 