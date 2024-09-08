import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CounterPage from './CounterPage';

const LandingPage = () => (
  <div style={{ textAlign: 'center', marginTop: '50px' }}>
    <h1>Welcome to the Landing Page</h1>
    <Link to="/app">
      <button>Try Me</button>
    </Link>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/app" element={<CounterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
