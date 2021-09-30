import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css'

const Nav = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "red"
    }
    return (
        <div className="link-container">
            <NavLink to="/home" activeStyle={activeStyle}>Home</NavLink>
            <NavLink to="/meals" activeStyle={activeStyle}>Meals</NavLink>
            <NavLink to="/about" activeStyle={activeStyle}>About</NavLink>
            <NavLink to="/contact" activeStyle={activeStyle}>contact</NavLink>
        </div>
    );
};

export default Nav;