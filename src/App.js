import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import NavBar from './Components/NavBar';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <div style={{ paddingTop: '90px' }}> {/* Prevents content from hiding under navbar */}
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}


export default App;
