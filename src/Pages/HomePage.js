import React from 'react';
import tattoo from '../Images/tattoo.png';

function HomePage() {
    return (
        <div>
            <div style={{ backgroundColor: '#9dc183', height: '100px', width: '100%', position: 'absolute', top: '0', left: '0' }}></div>
            <div style={{ textAlign: 'center', paddingTop: '25px' }}>
                <h1>
                    Welcome to the Home Page!
                </h1>
                <div style={{ borderRadius: '10px', overflow: 'hidden', display: 'inline-block', border: '2px solid black' }}>
                    <div style={{ borderRadius: '8px', overflow: 'hidden', border: '2px solid black' }}>
                        <img src={tattoo} alt="tattoo" style={{ width: '200px' }} />
                    </div>
                </div>
                <p>yippee</p>
            </div>
        </div>
    )
}

export default HomePage;
