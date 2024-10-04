import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/loginPage/LoginPage';
import Footer from './components/footer/Footer';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        {/* Add other routes as needed */}
       
      </Routes>
      <Footer></Footer>
    </Router>
  );
}
