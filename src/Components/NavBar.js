import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaDiscord, FaInstagram, FaSteam, FaFilePdf } from 'react-icons/fa';  // Added FaFilePdf for the resume icon
import '../Components/NavBar.css';

const NavBar = () => {
    const [isShrunk, setIsShrunk] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsShrunk(true);
            } else {
                setIsShrunk(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`nav-container ${isShrunk ? 'shrink' : ''}`}>
            {/* Name on the far left */}
            <div className="nav-left">
                <p><strong>Matthew Lee</strong> - Personal Portfolio</p>
            </div>
    
            {/* Social Links + Resume on the far right */}
            <div className="nav-right">
                <div className="social-links">
                    <a href="https://github.com/MattLee30" className="nav-link" target="_blank" rel="noopener noreferrer">
                        <FaGithub size={30} />
                    </a>
                    <a href="https://www.linkedin.com/in/mlee164/" className="nav-link" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={30} />
                    </a>
                    <a href="https://discord.gg/WfxajX2d" className="nav-link" target="_blank" rel="noopener noreferrer">
                        <FaDiscord size={30} />
                    </a>
                    <a href="https://www.instagram.com/matcha.matt03/" className="nav-link" target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={30} />
                    </a>
                    <a href="https://steamcommunity.com/id/WettHam30/" className="nav-link" target="_blank" rel="noopener noreferrer">
                        <FaSteam size={30} />
                    </a>
                </div>
                <a href={process.env.PUBLIC_URL + '/Resume.pdf'} target="_blank" rel="noopener noreferrer" className="resume-box">
                    <FaFilePdf size={20} /> Resume
                </a>
            </div>
        </div>
    );
}

export default NavBar;
