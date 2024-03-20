import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import '../NavBar.css';

const NavBar = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <h2>
                <Link to="/" className="nav-link">Home</Link> | 
                <Link to="/second-page" className="nav-link">Resume</Link> | 
                <Link to="/contacts" className="nav-link">Contact Me</Link>
            </h2>
        </div>
    );
}

export default NavBar;