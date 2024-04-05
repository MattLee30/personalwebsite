import React from 'react';
import Profile from '../Images/LinkedIn.jpeg';
import '../App.css';

function HomePage() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
            <div style={{ borderRadius: '50%', overflow: 'hidden', border: '4px solid black', width: '300px', height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src={Profile} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
        </div>
    )
}

export default HomePage;
