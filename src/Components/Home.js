// Import statements for your components
import React from 'react';
import './Home.css';
import Topbar from './Topbar.js';
import Sidebar from './Sidebar.js';
import Content from './main.js';  // Ensure that the file name and component name match

function Final() {
    return (
        <div className='main'>
            <Sidebar />
            <div className="sub">
                <Topbar />
                <div className="helo"><Content /></div>

            </div>
        </div>
    );
}

export default Final;
