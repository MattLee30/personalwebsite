import React from 'react';
import tattoo from '../Images/tattoo.png';

function HomePage() {
    return <div> 
            <h1>
            Welcome to the Home Page! 
            <img src={tattoo} alt="tattoo" />
            </h1> 
            <p>yippee</p>
        </div>;
}

export default HomePage;