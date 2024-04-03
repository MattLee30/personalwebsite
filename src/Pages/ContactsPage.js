import React from 'react';

const ContactsPage = () => {
    return (
        <div style={{ textAlign: 'center', paddingTop: '15px'}}>
            <h2>Contact me about my interests at these links!</h2>
            <p>Email: matthewrlee2021@gmail.com</p>
            <p>Phone Number: (408) 806-0778</p>
            <p><a href="https://github.com/MattLee30" className="btn-pill" rel="noopener noreferrer">Github Profile</a></p>
            <p><a href="https://www.linkedin.com/in/mlee164/" className="btn-pill" rel="noopener noreferrer">LinkedIn Profile</a></p>
            <p><a href="https://discord.gg/WfxajX2d" className="btn-pill" rel="noopener noreferrer">LMU Game Development Discord</a></p>
            <p><a href="https://www.instagram.com/matcha.matt03/" className="btn-pill" rel="noopener noreferrer">Instagram</a></p>
            <p><a href="https://steamcommunity.com/id/WettHam30/" className="btn-pill" rel="noopener noreferrer">Steam Profile</a></p>
        </div>
    );
}

export default ContactsPage;
