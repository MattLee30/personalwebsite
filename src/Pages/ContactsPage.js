import React from 'react';

const ContactsPage = () => {
    return (
        <div style={{ textAlign: 'center'}}>
            <h3>Contact me about my interests at these links!</h3>
            <p><a href="https://github.com/MattLee30" className="btn-pill" rel="noopener noreferrer">Github Profile</a></p>
            <p><a href="https://www.linkedin.com/in/mlee164/" className="btn-pill" rel="noopener noreferrer">LinkedIn Profile</a></p>
            <p><a href="https://discord.gg/WfxajX2d" className="btn-pill" rel="noopener noreferrer">LMU Game Development Discord</a></p>
            <p><a href="https://www.instagram.com/matcha.matt03/" className="btn-pill" rel="noopener noreferrer">Instagram</a></p>
            <p><a href="https://steamcommunity.com/id/WettHam30/" className="btn-pill" rel="noopener noreferrer">Steam Profile</a></p>
        </div>
    );
}

export default ContactsPage;
