import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ResumePage from './Pages/ResumePage';
import ContactsPage from './Pages/ContactsPage';
import NavBar from './Components/NavBar';
import ThreeScene from './Components/ThreeScene'; // Import the ThreeScene component

function App() {
  return (
    <Router>
      <div>
        <div style={{ backgroundColor: '#9dc183', height: '90px', width: '100%', position: 'absolute', top: '0', left: '0' }}></div>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/second-page" element={<ResumePage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/three-scene" element={<ThreeScene />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
