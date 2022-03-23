import React from 'react';
import './Nav.css';
import { NavLink } from "react-router-dom";

const setActive = ({isActive}) => isActive ? 'active-link' : '';

let Navbar = () => {
    return (
        <nav className='nav'>
            <div className="item">
                <NavLink to="/Content" style={({isActive}) => ({color: isActive ? '#c70000' : '#fff'})}>Profile</NavLink>
            </div>
            <div className="item" activeClassName="activelink">
                <NavLink to="/Dialog" style={({isActive}) => ({color: isActive ? '#c70000' : '#fff'})}>Message</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;
