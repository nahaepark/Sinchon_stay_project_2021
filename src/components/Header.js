import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom';


function Header() {
    return (
        <div className = 'header'>
            <Link to = '/'>
            <img
                className="header_icon"
                src = "/images/logo.png"
                alt=""
                />
            </Link>
            
            <div className='header_right'>
                <p>Room Tour</p>
                <Link to = '/reservation' style={{ textDecoration: 'none' }}>
                <p>Reservation</p>
                </Link>
                <p>My Page</p>
                <p>LogOut</p>
                
            </div>
        </div>
    )
}

export default Header
