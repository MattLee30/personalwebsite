import React from 'react';
import { Link } from 'react-router-dom';
import '../NavBar.css'; // Assuming NavBar.css is in the same directory as NavBar.js

const NavBar = () => {
    return (
        <div className="nav-container" style={{ textAlign: 'center' }}>
            <div className="links-container">
                <h1>
                    <Link to="/" className="nav-link">Home</Link> | 
                    <Link to="/second-page" className="nav-link">Resume</Link> | 
                    <Link to="/contacts" className="nav-link">Contact Me</Link>
                </h1>
            </div>
        </div>
    );
}

export default NavBar;
