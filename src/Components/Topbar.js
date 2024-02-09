import React from 'react';
import arrow from '../Assets/arrow.png';
import profile from '../Assets/Lalit_img.jpg';
import notifications from '../Assets/notifications.png';
import dots from '../Assets/dots.png';
import search from '../Assets/search.png';
import burgermenu from '../Assets/burgermenu.png';
import './topbar.css';

const Topbar = () => {
    return (
        <div className='nav'>
            <div className="left">
                <img src={burgermenu} alt="burgermenu" className='burger' />
                <input type="text"  placeholder="Search" />
                <img src={search} alt="search" className='search-icon'/>
            </div>
            <div className="right">
                <img src={notifications} alt="" className='notification' />
                <img src={dots} alt="" className='dots' />
                <img src={profile} alt="" className='profile' />
                <p className='name'>Admirra John</p>
                <img src={arrow} alt="" className='arrow' />
            </div>

        </div>
    );
};

export default Topbar;
