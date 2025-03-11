import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ResumePage from './Pages/ResumePage';
import NavBar from './Components/NavBar';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <div style={{ paddingTop: '90px' }}> {/* Prevents content from hiding under navbar */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/second-page" element={<ResumePage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}


export default App;
