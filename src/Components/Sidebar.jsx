import React from 'react';
import './Login.css';
// import Dashboard from './Dashboard';
import './Sidebar.css';


const Sidebar = () => {
  return (
    <>

    <div className="sidebar">

        <div className='logo'>
            TL LOGO
        </div>
        <div className='dashboard'>
            {/* <Dashboard /> */}
            Dashboard
        </div>

        <div className='inventory'>
            Inventory
        </div>

        <div className = 'stocks'>
            Stocks
        </div>

        <div className = 'projects'>
            Projects
        </div>

    </div>


    </>
  );
}

export default Sidebar;